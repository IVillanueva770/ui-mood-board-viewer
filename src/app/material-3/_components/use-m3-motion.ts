"use client";

import type { Transition } from "motion/react";

/**
 * Tokens de motion Material 3 — la FIRMA del estilo, consolidada en un solo
 * lugar para que cards/botones/nav/FAB usen exactamente el mismo lenguaje:
 * "emphasized easing" + elevación tonal + ripple (este último vive en el
 * componente compartido `Ripple`). Importá desde acá, no hardcodees curvas.
 */

type Cubic = [number, number, number, number];

export const EMPHASIZED: Cubic = [0.2, 0, 0, 1];
export const EMPHASIZED_DECEL: Cubic = [0.05, 0.7, 0.1, 1];
export const EMPHASIZED_ACCEL: Cubic = [0.3, 0, 0.8, 0.15];

export function useM3Motion() {
  /** Transición de superficie Material (cambios de tamaño/posición). */
  const surface: Transition = { duration: 0.45, ease: EMPHASIZED };

  /** Spring del state-layer / pill de la nav (sliding indicator). */
  const stateLayer: Transition = { type: "spring", stiffness: 360, damping: 30 };

  /** Press feedback estándar (lo táctil además lleva Ripple). */
  const pressable = {
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 500, damping: 30 } as Transition,
  };

  /** Entrada escalonada con decelerate emphasized (scroll-reveal Material). */
  const enter = (i = 0) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.45, ease: EMPHASIZED_DECEL, delay: i * 0.06 } as Transition,
  });

  return { surface, stateLayer, pressable, enter, EMPHASIZED, EMPHASIZED_DECEL, EMPHASIZED_ACCEL };
}
