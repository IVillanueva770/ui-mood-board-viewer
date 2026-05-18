"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion del estilo sport-dinamico:
 * - slide-in AGRESIVO: los bloques entran rápido desde el costado, con un
 *   skew leve que se endereza (sensación de "embestida").
 * - scale-punch: los CTAs pegan un golpe al accionarse (1 → 0.93 → 1.06 → 1).
 * - charge: las filas se adelantan seco en hover.
 * Easing duro y rápido (`SPRINT`), lo opuesto a calm/medico.
 *
 * Reduced-motion: se baja la intensidad (sin desplazamiento ni overshoot)
 * pero se mantiene el carácter (entradas rápidas, no fades lentos).
 */
const SPRINT = { duration: 0.36, ease: [0.16, 1, 0.3, 1] } as const;

export function useSportMotion() {
  const reduce = useReducedMotion();

  /** Slide-in desde el costado en viewport. `from` negativo = entra de izquierda. */
  const slideIn = (delay = 0, from = -60) =>
    reduce
      ? ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.25, delay },
        } as const)
      : ({
          initial: { opacity: 0, x: from, skewX: from < 0 ? -7 : 7 },
          whileInView: { opacity: 1, x: 0, skewX: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { ...SPRINT, delay },
        } as const);

  /**
   * Scale-punch para CTAs: hover crece, tap pega el golpe con overshoot.
   * Sin `as const`: el array de keyframes `scale` debe ser mutable para
   * motion (un tuple readonly no es asignable a `ValueKeyframesDefinition`).
   */
  const punch = reduce
    ? { whileTap: { opacity: 0.85 } }
    : {
        whileHover: { scale: 1.04 },
        whileTap: {
          scale: [1, 0.93, 1.06, 1],
          transition: { duration: 0.32, ease: SPRINT.ease },
        },
        transition: { type: "spring" as const, stiffness: 420, damping: 17 },
      };

  /** Embestida lateral seca en hover de fila/card. */
  const charge = reduce
    ? ({} as const)
    : ({ whileHover: { x: 6 }, transition: SPRINT } as const);

  /** Levante duro de card (sin blur, contraste de motion alto). */
  const liftHard = reduce
    ? ({} as const)
    : ({ whileHover: { y: -4, scale: 1.015 }, transition: SPRINT } as const);

  return { reduce, slideIn, punch, charge, liftHard, SPRINT };
}
