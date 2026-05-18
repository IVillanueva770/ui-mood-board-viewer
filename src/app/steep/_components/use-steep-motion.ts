"use client";

import { useReducedMotion } from "motion/react";
import { elevation, tokens } from "../_data";

/**
 * Firma de motion de steep: RIGOR CON CALIDEZ.
 *
 * Ni festivo (no es stripe-dashboard con count-up) ni frío. Tres gestos:
 *   1. draw-in de charts — los paths se DIBUJAN al entrar, despacio y elegante.
 *   2. reveal de serif con restraint — fade-up sobrio, escalonable por index.
 *   3. hover mist cálido — el warm mist #fbe1d1 aparece suave en hover (fondo
 *      tenue + lift mínimo), nunca un color de marca duro.
 * Todo contenido: easing largo, cero rebote, cero blur.
 *
 * Reduced-motion: se conserva la elevación de reposo ESTÁTICA (es identidad
 * visual) pero sin desplazamiento, draw-in ni transición.
 */
const EASE = [0.22, 0.61, 0.36, 1] as const;

export function useSteepMotion() {
  const reduce = useReducedMotion();

  /** Reveal de sección/serif: fade-up sobrio, escalonable por index. */
  const reveal = (i = 0) =>
    reduce
      ? ({} as const)
      : ({
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
        } as const);

  /** Card que se eleva apenas con tinte mist al hacer hover. */
  const lift = reduce
    ? ({ initial: { boxShadow: elevation.rest } } as const)
    : ({
        initial: { boxShadow: elevation.rest, y: 0 },
        whileHover: { boxShadow: elevation.hover, y: -2 },
        transition: { duration: 0.35, ease: EASE },
      } as const);

  /** Botón primario: lift mínimo + sombra que respira. Sin rebote. */
  const press = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -1, boxShadow: "0 12px 28px -6px rgba(23,25,28,0.18)" },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.4, ease: EASE },
      } as const);

  /** Botón secundario: el mist cálido invade el fondo en hover. */
  const mistBtn = reduce
    ? ({} as const)
    : ({
        whileHover: { backgroundColor: tokens.mist },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.5, ease: EASE },
      } as const);

  /** Hover de fila de tabla: el mist aparece tenue de fondo. */
  const row = reduce
    ? ({} as const)
    : ({
        whileHover: { backgroundColor: "rgba(251,225,209,0.3)" },
        transition: { duration: 0.18 },
      } as const);

  /** Props del path que se dibuja (draw-in elegante, contenido). */
  const draw = (delay = 0.2, duration = 1.2) =>
    reduce
      ? ({ initial: { pathLength: 1 } } as const)
      : ({
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration, delay, ease: EASE },
        } as const);

  /** Relleno de área que aparece detrás del path ya dibujado. */
  const fill = (delay = 0.9) =>
    reduce
      ? ({ initial: { opacity: 1 } } as const)
      : ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.6, delay, ease: EASE },
        } as const);

  /** Barra que crece desde la base. */
  const grow = (i = 0) =>
    reduce
      ? ({ initial: { height: "100%" } } as const)
      : ({
          initial: { height: 0 },
          whileInView: { height: "var(--bar-h)" },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.6, delay: 0.15 + i * 0.04, ease: EASE },
        } as const);

  return { reduce, reveal, lift, press, mistBtn, row, draw, fill, grow, EASE };
}
