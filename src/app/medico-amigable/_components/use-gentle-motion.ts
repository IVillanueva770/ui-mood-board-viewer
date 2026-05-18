"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de medico-amigable: confianza gentil.
 * - reveal: fade-up lento y suave al entrar en viewport
 * - softLift: elevación calma en hover de card (spring sin rebote)
 * - calmTap: feedback contenido al accionar
 * Nada brusco (es salud — transmitir cuidado). Reduced-motion estricto.
 */
export function useGentleMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] },
        } as const);

  const softLift = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -3 },
        transition: { type: "spring", stiffness: 220, damping: 24 },
      } as const);

  const calmTap = reduce ? ({} as const) : ({ whileTap: { scale: 0.97 } } as const);

  return { reduce, reveal, softLift, calmTap };
}
