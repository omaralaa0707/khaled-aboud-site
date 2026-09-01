"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useLocale } from "@/i18n/locale-provider";

/**
 * This site's arrival motion: a scanline. The content is clipped to nothing and
 * opened along the reading direction while a thin luminous rule rides the
 * leading edge, so it appears to be *scanned in* rather than faded.
 *
 * The observed element and the clipped element must not be the same node.
 * `clip-path: inset(0 0 0 100%)` collapses the element's intersection
 * rectangle to zero, so an IntersectionObserver watching that same node never
 * reports it as visible, it never opens, and the section renders permanently
 * blank. The outer div is measured; only the inner one is clipped.
 */
export function Scan({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const { dir } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  const closed = dir === "rtl" ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)";
  const open = "inset(0% 0% 0% 0%)";

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="relative"
        initial={{ clipPath: closed }}
        animate={{ clipPath: inView ? open : closed }}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-px bg-beam"
          style={{ boxShadow: "0 0 14px 2px var(--color-beam)" }}
          initial={{ [dir === "rtl" ? "right" : "left"]: "0%", opacity: 0 }}
          animate={
            inView
              ? { [dir === "rtl" ? "right" : "left"]: "100%", opacity: [0, 1, 1, 0] }
              : { [dir === "rtl" ? "right" : "left"]: "0%", opacity: 0 }
          }
          transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
        />
      </motion.div>
    </div>
  );
}
