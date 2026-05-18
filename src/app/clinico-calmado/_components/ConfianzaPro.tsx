"use client";

import { motion } from "motion/react";
import { palette, type Metrica, type TestimonioPro } from "../_data";
import { useAiryMotion } from "./use-airy-motion";

/** Pieza externa: confianza profesional — métricas + testimonios de kines/médicos. */
export function ConfianzaPro({
  metricas,
  testimonios,
}: {
  metricas: Metrica[];
  testimonios: TestimonioPro[];
}) {
  const { reduce, reveal } = useAiryMotion();
  const { accent, accentDeep, muted, border, card, surface, text } = palette;

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4">
      <div
        className="rounded-3xl p-8 sm:p-10"
        style={{ backgroundColor: surface, border: `1px solid ${border}` }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-9">
          {metricas.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1" style={{ color: accentDeep }}>
                {m.valor}
              </p>
              <p className="text-xs leading-snug" style={{ color: muted }}>{m.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              {...reveal(i * 0.08)}
              className="rounded-2xl p-5 flex flex-col"
              style={{ backgroundColor: card, border: `1px solid ${border}` }}
            >
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: text }}>
                “{t.texto}”
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${border}` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                  style={{ backgroundColor: t.color, color: accentDeep }}
                >
                  {t.inicial}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: text }}>{t.nombre}</p>
                  <p className="text-xs truncate" style={{ color: muted }}>{t.rol} · {t.lugar}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs mt-7" style={{ color: muted }}>
          <span style={{ color: accent }}>🔒</span> Datos del paciente cifrados y bajo Ley 25.326 ·
          backups diarios · cumplimiento ISO 27001
        </p>
      </div>
    </section>
  );
}
