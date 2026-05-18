"use client";

import { useReducedMotion } from "motion/react";
import { palette } from "../_data";

/**
 * Firma de motion CANÓNICA del cluster (dimes es el benchmark):
 * hard-shadow-shift sin blur + transición instantánea snappy (tween ~0.1s,
 * NUNCA spring blando) + color-flip duro. Cero blur, cero gradiente.
 * Esta es la microinteracción que los demás briefs copian adaptada.
 *
 * Reduced-motion: se conserva la sombra dura ESTÁTICA (es identidad visual,
 * no decoración) pero sin desplazamiento ni flip.
 */
const SNAP = { duration: 0.1, ease: [0.2, 0, 0, 1] } as const;

export function useBrutalMotion() {
  const reduce = useReducedMotion();

  /**
   * Sombra dura que se desplaza: en hover crece y el bloque sube-izquierda;
   * en press la sombra colapsa y el bloque "cae" adentro de la página.
   */
  const hardShadow = (rest = 6, hover = 12, color: string = palette.ink) =>
    reduce
      ? ({ initial: { boxShadow: `${rest}px ${rest}px 0 0 ${color}` } } as const)
      : ({
          initial: { boxShadow: `${rest}px ${rest}px 0 0 ${color}`, x: 0, y: 0 },
          whileHover: { boxShadow: `${hover}px ${hover}px 0 0 ${color}`, x: -2, y: -2 },
          whileTap: { boxShadow: `0px 0px 0 0 ${color}`, x: rest, y: rest },
          transition: SNAP,
        } as const);

  /** Color-flip duro instantáneo (filas, chips de acción, bloques de stat). */
  const colorFlip = (bg: string, fg: string) =>
    reduce
      ? ({} as const)
      : ({ whileHover: { backgroundColor: bg, color: fg }, transition: { duration: 0.06 } } as const);

  /** Nudge lateral seco (items de lista de actividad). */
  const nudge = reduce ? ({} as const) : ({ whileHover: { x: 4 }, transition: SNAP } as const);

  return { reduce, hardShadow, colorFlip, nudge, SNAP };
}
