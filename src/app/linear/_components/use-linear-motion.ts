"use client";

import { useReducedMotion } from "motion/react";
import { tokens } from "../_data";

/**
 * Firma de motion de linear (refero · power-user):
 * - focus ring neon-lime keyboard-first (consolida ola 1)
 * - dimming de siblings al hover lo maneja la lista (estado compartido) con `INSTANT`
 * - ⌘K palette = fade+scale (`palettePanel`)
 * - transiciones INSTANTÁNEAS: velocidad ES la firma, nadie espera animaciones largas
 * - restraint: el lime aparece poco y golpea fuerte
 *
 * Reduced-motion: el focus ring se CONSERVA estático (es identidad keyboard-first,
 * no decoración); se sacan transforms, scale y desplazamientos.
 */
const INSTANT = { duration: 0.12, ease: [0.2, 0, 0, 1] } as const;

export function useLinearMotion() {
  const reduce = useReducedMotion();

  /** Reveal sobrio al entrar en viewport (corto — no es un mood lento). */
  const reveal = reduce
    ? {}
    : ({
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
      } as const);

  /** Borde/anillo de foco lime para filas y cards (keyboard-first). */
  const ring = (accent: string = tokens.lime) =>
    reduce
      ? ({ whileFocus: { boxShadow: `0 0 0 2px ${accent}` } } as const)
      : ({
          whileHover: { borderColor: tokens.lineStrong },
          whileFocus: { boxShadow: `0 0 0 2px ${accent}`, borderColor: accent },
          transition: INSTANT,
        } as const);

  const press = reduce ? ({} as const) : ({ whileTap: { scale: 0.98 }, transition: INSTANT } as const);

  /** Glow lime sutil para el CTA primario (el accent, raro y duro). */
  const cta = reduce
    ? ({} as const)
    : ({
        whileHover: { boxShadow: `0 0 0 4px rgba(228,242,34,0.28)` },
        whileTap: { scale: 0.98 },
        transition: INSTANT,
      } as const);

  const overlay = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: reduce ? 0 : 0.12 },
  } as const;

  /** ⌘K — fade + scale instantáneo. */
  const palettePanel = reduce
    ? ({ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } } as const)
    : ({
        initial: { opacity: 0, scale: 0.97, y: -6 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: -4 },
        transition: { duration: 0.14, ease: [0.2, 0, 0, 1] },
      } as const);

  /** Detalle de issue = panel lateral seco (sin spring blando). */
  const drawer = reduce
    ? ({ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } } as const)
    : ({
        initial: { x: 36, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 36, opacity: 0 },
        transition: { duration: 0.16, ease: [0.2, 0, 0, 1] },
      } as const);

  return { reduce, reveal, ring, press, cta, overlay, palettePanel, drawer, INSTANT };
}
