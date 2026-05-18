"use client";

import { useReducedMotion } from "motion/react";
import { REST_SHADOW } from "../_data";

/**
 * Firma de motion de cursor: SOMBRA MULTI-CAPA que se PROFUNDIZA al levantar
 * el elemento (warm studio — nunca flat, tinte Inkwell), con un easing suave
 * pero corto (densidad compacta, "cálido pero preciso": ni frío como linear,
 * ni festivo). El command palette entra con fade+scale; el file-tree expande
 * con height suave.
 *
 * Reduced-motion: se conserva la sombra multi-capa ESTÁTICA (es identidad
 * visual, no decoración) pero sin desplazamiento ni reveals.
 */
const LIFT_SHADOW =
  "0 2px 4px rgba(38,37,16,0.05), 0 10px 20px -6px rgba(38,37,16,0.10), 0 24px 44px -14px rgba(38,37,16,0.18)";

const EASE = [0.22, 1, 0.36, 1] as const;

export function useStudioMotion() {
  const reduce = useReducedMotion();

  /** Card/botón que se levanta: la sombra multi-capa crece y el bloque sube. */
  const lift = reduce
    ? ({ initial: { boxShadow: REST_SHADOW } } as const)
    : ({
        initial: { boxShadow: REST_SHADOW, y: 0 },
        whileHover: { boxShadow: LIFT_SHADOW, y: -3 },
        whileTap: { y: -1, boxShadow: REST_SHADOW },
        transition: { duration: 0.22, ease: EASE },
      } as const);

  /** Reveal escalonado al entrar en viewport (ritmo de scroll del estudio). */
  const reveal = (i = 0) =>
    reduce
      ? ({} as const)
      : ({
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, delay: i * 0.05, ease: EASE },
        } as const);

  /** Fade+scale del command palette (firma dev-tool). */
  const pop = reduce
    ? ({} as const)
    : ({
        initial: { opacity: 0, scale: 0.97, y: 6 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 0.26, ease: EASE },
      } as const);

  /** Expand/collapse suave del file-tree (height auto animada). */
  const collapse = reduce
    ? ({} as const)
    : ({
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.22, ease: EASE },
      } as const);

  return { reduce, lift, reveal, pop, collapse, LIFT_SHADOW };
}
