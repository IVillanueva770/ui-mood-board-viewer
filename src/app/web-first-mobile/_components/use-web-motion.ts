"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de web-first-mobile: "se siente web, no app".
 * - reveal: fade-up corto (transición de sitio web, no de app nativa)
 * - hoverLift: lift sutil de card — existe en desktop (hover), no en touch
 * - tap: feedback corto, SIN rubber-band/spring iOS (eso es ios-native)
 * Reduced-motion estricto.
 */
export function useWebMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] },
        } as const);

  const hoverLift = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -3, boxShadow: "0 10px 28px -14px rgba(15,20,25,0.25)" },
        transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
      } as const);

  const tap = reduce ? ({} as const) : ({ whileTap: { scale: 0.97 } } as const);

  return { reduce, reveal, hoverLift, tap };
}
