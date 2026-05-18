"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de ios-native: se siente NATIVO, no web.
 * - springSoft / springSnappy: springs del sistema (no easings de CSS).
 * - tabSwitch: transición entre vistas del tab bar (deslizamiento corto).
 * - pop: bounce al completar un hábito (overshoot real, no fade).
 * - sheet: presentación bottom-sheet slide-up (la firma de "acción" iOS).
 * - tap: feedback de toque (rubber, contenido).
 * Diferencia dura con material-3 (ripple) y web-first (sin spring nativo).
 * Reduced-motion estricto.
 */
export function useIosMotion() {
  const reduce = useReducedMotion();

  const tabSwitch = reduce
    ? ({ initial: false } as const)
    : ({
        initial: { opacity: 0, x: 14 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -14 },
        transition: { duration: 0.24, ease: [0.32, 0.72, 0, 1] },
      } as const);

  const sheet = reduce
    ? ({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      } as const)
    : ({
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", stiffness: 380, damping: 36 },
      } as const);

  const tap = reduce ? ({} as const) : ({ whileTap: { scale: 0.96 } } as const);

  const enter = (i = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.04 + i * 0.05, type: "spring", stiffness: 360, damping: 28 },
        } as const);

  return { reduce, tabSwitch, sheet, tap, enter };
}
