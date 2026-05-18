"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de calm: fades lentos + breathing scale.
 *
 * Easings larguísimos (0.9-1.1s), cero bounce, cero motion abrupto. La firma
 * ES la lentitud y la respiración — un orbe que respira (scale 1↔1.03 en loop
 * lentísimo) ancla el mood, el resto se revela suave al scrollear. Opuesto
 * exacto a sport-dinamico.
 *
 * Reduced-motion: se quita el loop de respiración y los desplazamientos; el
 * contenido queda visible y estático (legible), sin animación.
 */
const EASE = [0.22, 0.61, 0.36, 1] as const;

export function useCalmMotion() {
  const reduce = useReducedMotion();

  /** Fade-up lento al entrar en viewport — el reveal sereno del scroll. */
  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: { opacity: 1 } } as const)
      : ({
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.95, delay, ease: EASE },
        } as const);

  /** Fade puro, sin desplazamiento — para el hero y lo que no debe moverse. */
  const fade = (delay = 0) =>
    reduce
      ? ({ initial: { opacity: 1 } } as const)
      : ({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1.1, delay, ease: EASE },
        } as const);

  /**
   * Respiración: scale 1↔1.03 muy lento en loop infinito. La microinteracción
   * firma del estilo — se reserva a 1-2 elementos ancla (orbe del hero, aro
   * del play de hoy), nunca a todo, para que respire sin distraer.
   */
  const breathing = reduce
    ? {}
    : {
        // keyframes como array mutable a propósito: `as const` lo volvería un
        // tuple readonly y los tipos de `motion` rechazan eso.
        animate: { scale: [1, 1.03, 1] as number[] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
      };

  /** Lift cálido suave en hover — lento, sin bounce. */
  const lift = reduce
    ? ({} as const)
    : ({ whileHover: { y: -4 }, transition: { duration: 0.6, ease: EASE } } as const);

  /** Nudge lateral lentísimo (filas de lista de sesiones). */
  const nudge = reduce
    ? ({} as const)
    : ({ whileHover: { x: 6 }, transition: { duration: 0.55, ease: EASE } } as const);

  return { reduce, EASE, reveal, fade, breathing, lift, nudge };
}
