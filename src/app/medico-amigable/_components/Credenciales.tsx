"use client";

import { motion } from "motion/react";
import { palette, type Metrica, type Aval } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza externa: confianza/credenciales — métricas + avales. Serio sin ser frío. */
export function Credenciales({ metricas, avales }: { metricas: Metrica[]; avales: Aval[] }) {
  const { reduce, reveal } = useGentleMotion();
  const { accent, muted, border, card, text } = palette;

  return (
    <section className="max-w-5xl mx-auto px-2 sm:px-4 mt-4">
      <motion.div
        {...reveal(0)}
        className="rounded-3xl p-8 sm:p-10"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f1f5f9 100%)", border: `1px solid ${border}` }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-6 text-center" style={{ color: accent }}>
          Por qué podés confiar
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metricas.map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center rounded-2xl py-5 px-3"
              style={{ backgroundColor: card, border: `1px solid ${border}` }}
            >
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1" style={{ color: text }}>
                {m.valor}
              </p>
              <p className="text-xs leading-snug" style={{ color: muted }}>{m.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {avales.map((a, i) => (
            <motion.div
              key={a.titulo}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="rounded-2xl p-5 flex gap-3"
              style={{ backgroundColor: card, border: `1px solid ${border}` }}
            >
              <span className="text-2xl shrink-0">{a.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: text }}>{a.titulo}</p>
                <p className="text-xs leading-relaxed" style={{ color: muted }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
