"use client";

import { useReducedMotion, type Variants } from "motion/react";

/**
 * Firma de motion de modern-saas: premium, suave, nada brusco.
 * - reveal: fade-up al entrar en viewport (whileInView). LA firma del mood
 *   ("animaciones de scroll"). Usado suelto en piezas no-listadas.
 * - group/groupItem: variants padre/hijo para el fade-up ESCALONADO (stagger)
 *   de grids — esa cascada es la firma concreta del estilo.
 * - hoverCard: elevación soft + borde accent (la card "respira" al hover).
 * - tap: feedback corto y contenido.
 * Reduced-motion estricto: si el usuario lo pide, todo aparece sin animar.
 */
export function useSaasMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({ initial: false } as const)
      : ({
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        } as const);

  const group: Variants = reduce
    ? {}
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      };

  const groupItem: Variants = reduce
    ? {}
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      };

  const groupProps = reduce
    ? ({} as const)
    : ({
        variants: group,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-60px" },
      } as const);

  const hoverCard = (accent: string) =>
    reduce
      ? ({} as const)
      : ({
          whileHover: {
            y: -5,
            borderColor: accent,
            boxShadow: "0 18px 40px -22px rgba(94,106,210,0.45)",
          },
          transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
        } as const);

  const tap = reduce ? ({} as const) : ({ whileTap: { scale: 0.97 } } as const);

  return { reduce, reveal, group, groupItem, groupProps, hoverCard, tap };
}
