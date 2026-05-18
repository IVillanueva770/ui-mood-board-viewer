"use client";

import { motion } from "motion/react";
import { palette, type PlanTratamiento } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

/** Pieza interna: plantillas de tratamiento + asignación a paciente. */
export function Planes({ tratamientos }: { tratamientos: PlanTratamiento[] }) {
  const { reduce, reveal, tap } = useAiryMotion();
  const { accent, accentDeep, muted, faint, border, card, surface, text } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: accent }}>
            {tratamientos.length} plantillas activas
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Planes de tratamiento</h2>
        </div>
        <motion.button
          {...tap}
          whileHover={reduce ? undefined : { y: -1 }}
          className={`px-4 py-2 text-sm font-semibold rounded-full ${focusRing}`}
          style={{ backgroundColor: card, color: text, border: `1px solid ${border}` }}
        >
          + Nueva plantilla
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tratamientos.map((t, i) => (
          <motion.div
            key={t.nombre}
            {...reveal(i * 0.05)}
            className="rounded-2xl p-5"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="min-w-0">
                <p className="font-semibold truncate" style={{ color: text }}>{t.nombre}</p>
                <p className="text-xs" style={{ color: muted }}>{t.zona}</p>
              </div>
              <span
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0"
                style={{ backgroundColor: palette.accentSoft, color: accentDeep }}
              >
                {t.asignados} asignados
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              {[
                { v: t.ejercicios, l: "Ejercicios" },
                { v: t.semanas, l: "Semanas" },
                { v: t.asignados, l: "Pacientes" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl py-3" style={{ backgroundColor: surface }}>
                  <p className="text-lg font-semibold" style={{ color: text }}>{m.v}</p>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: faint }}>{m.l}</p>
                </div>
              ))}
            </div>
            <motion.button
              {...tap}
              className={`w-full py-2 rounded-full text-sm font-semibold ${focusRing}`}
              style={{ backgroundColor: palette.accentSoft, color: accentDeep }}
            >
              Asignar a un paciente
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
