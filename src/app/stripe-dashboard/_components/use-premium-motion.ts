"use client";

import { useReducedMotion } from "motion/react";

/**
 * Firma de motion de stripe-dashboard: "premium amigable".
 * Diferenciada de linear (instantáneo/denso/dark) y de stripe-real (restraint
 * frío): acá las transiciones son suaves, confiables, sin nada brusco.
 *
 * - reveal:   scroll-reveal lento y prolijo (fade-up con easing premium)
 * - softLift: elevación sutil de card en hover (sombra que crece despacio)
 * - press:    feedback de botón gentil
 *
 * El count-up de números y el draw-in del gráfico viven en sus propios
 * componentes (CountUp / RevenueChart) porque necesitan estado.
 * Todo respeta `prefers-reduced-motion`.
 */
export function usePremiumMotion() {
  const reduce = useReducedMotion();

  // Easing "premium": entra rápido, asienta lento. Sin overshoot brusco.
  const EASE = [0.22, 1, 0.36, 1] as const;

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.65, delay, ease: EASE },
        } as const);

  const softLift = reduce
    ? ({} as const)
    : ({
        whileHover: {
          y: -3,
          boxShadow: "0 12px 28px -12px rgba(15,23,42,0.18)",
        },
        transition: { duration: 0.28, ease: EASE },
      } as const);

  const press = reduce
    ? ({} as const)
    : ({
        whileHover: { y: -1 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2, ease: EASE },
      } as const);

  return { reduce, EASE, reveal, softLift, press };
}
