"use client";

import { motion } from "motion/react";
import { palette, type Testimonio } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza externa: testimonios de pacientes reales (tono cercano, argentino). */
export function Testimonios({ testimonios }: { testimonios: Testimonio[] }) {
  const { reveal, softLift } = useGentleMotion();
  const { accent, muted, border, card, text } = palette;

  return (
    <section className="max-w-5xl mx-auto px-2 sm:px-4 mt-4">
      <div className="text-center mb-9">
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>
          Pacientes como vos
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Volver a moverse sin miedo
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonios.map((t, i) => (
          <motion.div
            key={t.id}
            {...reveal(i * 0.08)}
            {...softLift}
            className="rounded-2xl p-6 flex flex-col"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: text }}>
              “{t.texto}”
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${border}` }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                style={{ backgroundColor: t.color, color: palette.accentDeep }}
              >
                {t.inicial}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate" style={{ color: text }}>
                  {t.nombre} · {t.edad}
                </p>
                <p className="text-xs truncate" style={{ color: muted }}>
                  {t.lugar} · {t.motivo}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
