"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de airbnb-friendly: cálido y humano.
 * - reveal: scroll-reveal suave (fade-up)
 * - lift:   lift cálido suave en hover de card (spring gentil)
 * - bounce: bounce gentil en CTAs
 * Todo respeta `prefers-reduced-motion`.
 */
export function useWarmMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay },
        } as const);

  const lift = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -4 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
      } as const);

  const bounce = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -2, scale: 1.03 },
        whileTap: { scale: 0.96 },
        transition: { type: "spring", stiffness: 400, damping: 18 },
      } as const);

  return { reduce, reveal, lift, bounce };
}
