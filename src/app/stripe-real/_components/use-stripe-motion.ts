"use client";

import { useReducedMotion } from "motion/react";
import { tokens, elevation } from "../_data";

/**
 * Firma de motion de stripe-real: RESTRAINT.
 *
 * Stripe casi no anima — la firma ES la contención + el deep-violet que
 * aparece justo. Diferente de stripe-dashboard (count-up festivo) y de linear
 * (dark/keyboard-first). Acá: elevación sutil en hover (y:-2, sombra que
 * crece despacio con tinte violeta), focus-ring deep-violet, hover de fila
 * casi imperceptible, draw-in preciso del gráfico. Cero rebote, cero blur.
 *
 * Reduced-motion: se conserva la elevación de reposo ESTÁTICA (es identidad
 * visual) pero sin desplazamiento ni transición.
 */
const EASE = [0.32, 0.72, 0, 1] as const;
const PRECISE = { duration: 0.2, ease: EASE } as const;

export function useStripeMotion() {
  const reduce = useReducedMotion();

  /** Card que se eleva apenas: y:-2 + sombra suave con tinte deep-violet. */
  const lift = reduce
    ? ({ initial: { boxShadow: elevation.rest } } as const)
    : ({
        initial: { boxShadow: elevation.rest, y: 0 },
        whileHover: { boxShadow: elevation.hover, y: -2 },
        transition: PRECISE,
      } as const);

  /** Botón primario: tap firme, sombra violeta que respira. Sin rebote. */
  const press = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -1, boxShadow: `0 10px 26px -8px ${tokens.violet}66` },
        whileTap: { scale: 0.985 },
        transition: { duration: 0.16, ease: EASE },
      } as const);

  /** Hover de fila de tabla: el violet que aparece justo, casi nada de fondo. */
  const row = reduce
    ? ({} as const)
    : ({ whileHover: { backgroundColor: tokens.bg }, transition: { duration: 0.14 } } as const);

  /** Reveal de sección al entrar — fade-up corto, escalonable por index. */
  const reveal = (i = 0) =>
    reduce
      ? ({} as const)
      : ({
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: i * 0.05, ease: EASE },
        } as const);

  /** Tailwind para el focus-ring deep-violet (la firma "violet que aparece"). */
  const focusRing =
    "outline-none focus-visible:ring-2 focus-visible:ring-[#533afd] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return { reduce, lift, press, row, reveal, focusRing, EASE };
}
