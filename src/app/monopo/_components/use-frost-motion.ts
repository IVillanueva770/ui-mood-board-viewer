"use client";

import { useReducedMotion } from "motion/react";
import { frost } from "../_data";

/**
 * Firma de motion de monopo (estilo refero, atmosférico premium):
 *
 *  · ghost button con SWEEP de fill al hover (radius 75.024px de marca)
 *  · frosted LIFT en cards: sube, el borde aclara, glow del accent abajo
 *  · el shifting gradient de fondo (vivo, lento, orgánico) vive en
 *    `AtmosphericBg` con transforms; el SWEEP diagonal en `FrostSweep`.
 *
 * Reduced-motion: se conserva el lenguaje frosted (borde/elevación final
 * ESTÁTICOS — es identidad) pero sin barridos ni desplazamientos.
 */
const EASE = [0.22, 0.61, 0.36, 1] as const;

export function useFrostMotion() {
  const reduce = useReducedMotion();

  /**
   * Ghost button: variantes `rest`/`hover` para el contenedor. El barrido y
   * el realce de superficie se montan como capas hijas (ver `GhostButton`).
   */
  const ghostHover = reduce
    ? ({ initial: "rest", animate: "rest" } as const)
    : ({ initial: "rest", whileHover: "hover", animate: "rest", whileTap: { scale: 0.98 } } as const);

  /** Lift frosted de card: elevación + borde claro + glow del accent. */
  const frostLift = (glow: string = frost.violet) =>
    reduce
      ? ({} as const)
      : ({
          whileHover: {
            y: -4,
            borderColor: frost.borderHover,
            boxShadow: `0 16px 50px -12px ${glow}40`,
          },
          transition: { duration: 0.4, ease: EASE },
        } as const);

  /** Fila de tabla: tinte frosted + nudge seco. */
  const rowHover = reduce
    ? ({} as const)
    : ({
        whileHover: { backgroundColor: "rgba(167,139,250,0.06)", x: 2 },
        transition: { duration: 0.15 },
      } as const);

  /** Reveal de sección al entrar en viewport (atmosférico, lento). */
  const sectionReveal = reduce
    ? ({} as const)
    : ({
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, ease: EASE },
      } as const);

  return { reduce, ghostHover, frostLift, rowHover, sectionReveal, EASE };
}
