"use client";

import dynamic from "next/dynamic";
import { useAboud } from "@/content/schema-ext";
import { HERO_SHOT } from "@/content/media";

const PointScan = dynamic(
  () => import("@/components/three/point-scan").then((m) => m.PointScan),
  { ssr: false },
);

export function Hero() {
  const c = useAboud();

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-void">
      <PointScan src={HERO_SHOT} alt={c.scan.alt} />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void from-6% via-void/55 via-48% to-void/15" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[94rem] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <p
          className="label-serif mb-6 text-beam"
          style={{ animation: "scan-in 900ms 200ms both cubic-bezier(.65,0,.35,1)" }}
        >
          {c.hero.eyebrow}
        </p>

        <h1
          className="scan-target max-w-[16ch] font-display text-hero font-extrabold uppercase leading-[0.92] tracking-[-0.02em]"
          style={{ animation: "scan-in 1200ms 340ms both cubic-bezier(.65,0,.35,1)" }}
        >
          {c.hero.headline}
        </h1>

        <p
          className="mt-7 max-w-[54ch] text-lead leading-relaxed text-steel-2"
          style={{ animation: "scan-in 1000ms 620ms both cubic-bezier(.65,0,.35,1)" }}
        >
          {c.hero.sub}
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-3"
          style={{ animation: "scan-in 900ms 820ms both cubic-bezier(.65,0,.35,1)" }}
        >
          <a
            href="#collection"
            className="border border-chalk bg-chalk px-7 py-3 text-[0.84rem] font-semibold uppercase tracking-[0.1em] text-void transition-colors duration-300 hover:border-beam hover:bg-beam"
          >
            {c.hero.primaryCta}
          </a>
          <a
            href="tel:+201102069606"
            className="border border-white/30 px-7 py-3 text-[0.84rem] font-medium tracking-[0.06em] transition-colors duration-300 hover:border-chalk hover:bg-chalk hover:text-void"
          >
            {c.hero.secondaryCta}
          </a>
        </div>

        <p className="label-serif mt-10 flex items-center gap-3 text-steel">
          <span className="inline-block h-px w-8 bg-beam" />
          {c.scan.hint}
        </p>
      </div>
    </section>
  );
}
