"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de clinico-calmado: aireado y mínimo (restraint).
 * - reveal: fade-up corto y suave
 * - rowHover: hover de fila suave (sólo color de fondo, sin desplazar)
 * Profesionalismo = sin floritura. Reduced-motion estricto.
 */
export function useAiryMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.45, delay, ease: [0.32, 0.72, 0, 1] },
        } as const);

  const rowHover = reduce ? ({} as const) : ({ whileHover: { backgroundColor: "#f8fafc" } } as const);

  const tap = reduce ? ({} as const) : ({ whileTap: { scale: 0.98 } } as const);

  return { reduce, reveal, rowHover, tap };
}

/**
 * Focus ring celeste — la firma a11y del estilo. Keyboard-first =
 * parte del mood "clínico prolijo". Se aplica en todo elemento interactivo.
 */
export const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-white transition-shadow";
