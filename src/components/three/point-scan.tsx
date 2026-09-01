"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useWebglHealth } from "@/lib/use-webgl-health";

/**
 * Khaled Aboud's signature section.
 *
 * Their unit sits inside an "Auto Hub & Museum", and they shoot their cars the
 * way a museum shoots an exhibit. So the hero treats the car as a specimen: the
 * photograph is rebuilt as a cloud of ~90,000 points, each one lifted out of
 * the picture plane by the luminance of the pixel it samples, so the bright
 * flanks and lit edges of the body stand proud of the dark hall behind them.
 *
 * The cloud turns with the pointer and settles back when it is left alone.
 *
 * Points are drawn in a single instanced draw call from a static buffer — the
 * per-point displacement happens in the vertex shader, so nothing is uploaded
 * per frame.
 */

const vertex = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2  uImg;
  uniform float uAspect;   // canvas aspect
  uniform float uDepth;    // how far luminance pushes a point, in world units
  uniform float uAssemble; // 0 = scattered dust, 1 = fully formed
  uniform float uTime;
  uniform float uSize;

  varying vec3  vColor;
  varying float vLum;
  varying vec2  vGrid;

  // Cheap hash for the pre-assembly scatter.
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    // position.xy arrives in -0.5..0.5; that is also the sampling grid.
    vec2 uv = position.xy + 0.5;

    // Cover-fit the photograph onto the quad so a wide viewport never
    // letterboxes it and a portrait source is never squashed.
    float quadAspect = uAspect;
    float imgAspect = uImg.x / uImg.y;
    vec2 s = quadAspect > imgAspect
      ? vec2(1.0, imgAspect / quadAspect)
      : vec2(quadAspect / imgAspect, 1.0);
    vec2 texUv = (uv - 0.5) * s + 0.5;

    vec3 c = texture2D(uTex, texUv).rgb;
    float lum = dot(c, vec3(0.299, 0.587, 0.114));

    vec3 formed = vec3(position.x * uAspect, position.y, lum * uDepth - uDepth * 0.5);

    // Before assembly the points sit as scattered dust in a slab of space.
    float h1 = hash(uv * 71.3);
    float h2 = hash(uv * 133.7 + 4.2);
    vec3 dust = vec3(
      (h1 - 0.5) * 2.4 * uAspect,
      (h2 - 0.5) * 2.4,
      (hash(uv * 19.1) - 0.5) * 2.0
    );

    vec3 p = mix(dust, formed, uAssemble);

    // A slow breath so the cloud never looks frozen.
    p.z += sin(uTime * 0.6 + uv.x * 9.0 + uv.y * 6.0) * 0.008 * uAssemble;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // Sized to the lattice spacing so the cloud resolves into the photograph;
    // brighter pixels run a little larger so lit body edges read as line work.
    gl_PointSize = uSize * (0.78 + lum * 0.45) * (1.42 / max(0.4, -mv.z));

    vColor = c;
    vLum = lum;
    vGrid = position.xy;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  uniform float uAssemble;
  uniform vec3  uBeam;
  varying vec3  vColor;
  varying float vLum;
  varying vec2  vGrid;

  void main() {
    // Round the square point sprite off.
    vec2 d = gl_PointCoord - 0.5;
    float r = dot(d, d);
    if (r > 0.25) discard;
    float edge = smoothstep(0.25, 0.06, r);

    // While the cloud is still assembling it reads as instrument light; as it
    // forms, the car's own colour takes over. Colour is not attenuated by
    // luminance — doing that erases a dark car against a lit hall.
    vec3 col = mix(uBeam * (0.4 + vLum * 0.6), vColor, uAssemble);
    // Lift, then expand: the hall is dim and the points must survive the scrim.
    col = (col * 1.28 + 0.03);
    col = (col - 0.5) * 1.1 + 0.5;

    // Dark points stay present; only the very darkest thin out, which is what
    // separates the specimen from the floor behind it.
    float a = edge * mix(0.85, 0.72 + vLum * 0.28, uAssemble);

    // The hall is nearly neutral and the car is not, so weighting alpha by
    // saturation lifts the specimen off the room without deleting the room.
    float mx = max(vColor.r, max(vColor.g, vColor.b));
    float mn = min(vColor.r, min(vColor.g, vColor.b));
    float sat = mx > 0.001 ? (mx - mn) / mx : 0.0;
    a *= mix(1.0, mix(0.78, 1.0, smoothstep(0.0, 0.2, sat)), uAssemble);

    // Dissolve the cloud toward its edges: a scan should trail off into the
    // dark, not stop at a torn rectangle.
    float v = length(vGrid * vec2(1.0, 1.18));
    a *= 1.0 - smoothstep(0.44, 0.8, v);

    // Above the roofline the frame is only lit ceiling and the cars behind;
    // under rotation that smears. Let the scan trail off upward into the dark.
    a *= 1.0 - smoothstep(0.27, 0.5, vGrid.y);

    if (a < 0.004) discard;
    gl_FragColor = vec4(col, a);
  }
`;

function Cloud({
  src,
  onReady,
  density,
}: {
  src: string;
  onReady: () => void;
  density: number;
}) {
  const tex = useTexture(src);
  const { size } = useThree();
  const mat = useRef<THREE.ShaderMaterial>(null);
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const started = useRef(0);

  useEffect(() => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    onReady();
  }, [tex, onReady]);

  // A static lattice of sample positions. Built once; the shader does the rest.
  const geometry = useMemo(() => {
    const cols = density;
    const rows = Math.round(density * 0.62);
    const arr = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Jitter the lattice so it never shows a moiré grid against the photo.
        arr[i++] = (x + 0.5) / cols - 0.5 + (Math.random() - 0.5) / cols;
        arr[i++] = (y + 0.5) / rows - 0.5 + (Math.random() - 0.5) / rows;
        arr[i++] = 0;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [density]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const uniforms = useMemo(
    () => ({
      uTex: { value: tex },
      uImg: { value: new THREE.Vector2(1, 1) },
      uAspect: { value: 1.6 },
      uDepth: { value: 0.15 },
      uAssemble: { value: 0 },
      uTime: { value: 0 },
      uSize: { value: 3.0 },
      uBeam: { value: new THREE.Color("#57c8e8") },
    }),
    [tex],
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!mat.current || !group.current) return;
    const u = mat.current.uniforms;
    const t = state.clock.elapsedTime;
    if (!started.current) started.current = t;

    u.uTime.value = t;
    u.uAspect.value = size.width / size.height;
    const img = tex.image as { width?: number; height?: number } | undefined;
    u.uImg.value.set(img?.width ?? 1, img?.height ?? 1);
    // One point per lattice cell, in framebuffer pixels.
    const dpr = Math.min(1.75, window.devicePixelRatio || 1);
    u.uSize.value = ((size.width * dpr) / density) * 0.98;

    // Assemble over the first ~1.8 s, then hold.
    const target = Math.min(1, (t - started.current) / 1.8);
    u.uAssemble.value += (target - u.uAssemble.value) * (1 - Math.pow(0.02, delta));

    // The specimen turns toward the pointer and eases back to square.
    const ry = pointer.current.x * 0.17;
    const rx = pointer.current.y * 0.09;
    const k = 1 - Math.pow(0.006, delta);
    group.current.rotation.y += (ry - group.current.rotation.y) * k;
    group.current.rotation.x += (rx - group.current.rotation.x) * k;
  });

  return (
    <group ref={group}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={mat}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}

/**
 * A context the browser refuses outright makes r3f throw on mount, which
 * use-webgl-health cannot see — it only reports a context that was created and
 * then lost. Probe before rendering the Canvas at all.
 */
function canRenderWebgl() {
  try {
    const c = document.createElement("canvas");
    return Boolean(
      c.getContext("webgl2") ?? c.getContext("webgl") ?? c.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

export function PointScan({ src, alt }: { src: string; alt: string }) {
  const { lost, bind } = useWebglHealth();
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [density, setDensity] = useState(380);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    setSupported(canRenderWebgl());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    // A phone does not want 90,000 points; halve the lattice on small screens.
    setDensity(window.innerWidth < 768 ? 300 : 560);
    return () => mq.removeEventListener("change", on);
  }, []);

  if (lost || reduced || supported !== true) {
    return <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        aria-hidden={ready}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? "opacity-0" : "opacity-70"
        }`}
      />
      {/* Positioning lives on the wrapper: r3f sizes its buffer from the
          element it is handed, and an absolutely positioned Canvas measures
          before layout settles. */}
      <div className="absolute inset-0">
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 1.42], fov: 50 }}
          dpr={[1, 1.75]}
          gl={{ antialias: false, alpha: true }}
          onCreated={({ gl }) => bind(gl.domElement)}
        >
          <Suspense fallback={null}>
            <Cloud src={src} onReady={onReady} density={density} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
