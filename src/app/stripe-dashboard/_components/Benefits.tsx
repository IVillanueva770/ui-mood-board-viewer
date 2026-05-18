"use client";

import { motion } from "motion/react";
import { palette, type Beneficio } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

/** Pieza externa: beneficios en lenguaje de negocio (no features técnicas). */
export function Benefits({ beneficios }: { beneficios: Beneficio[] }) {
  const { reveal, softLift } = usePremiumMotion();
  const { accent, muted, border, card } = palette;

  return (
    <section>
      <motion.div {...reveal()} className="mb-9 max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Lo que ves apenas entrás
        </h2>
        <p className="text-base leading-relaxed" style={{ color: muted }}>
          Sin tutoriales ni jerga. Cuatro cosas que cualquier dueño de negocio
          necesita saber todos los días.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {beneficios.map((b, i) => (
          <motion.div
            key={b.titulo}
            {...reveal(i * 0.06)}
            {...softLift}
            className="rounded-2xl p-6"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ backgroundColor: palette.accentSoft, color: accent }}
            >
              {b.icon}
            </div>
            <h3 className="font-semibold mb-2 text-[15px]">{b.titulo}</h3>
            <p className="text-sm leading-relaxed" style={{ color: muted }}>
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
