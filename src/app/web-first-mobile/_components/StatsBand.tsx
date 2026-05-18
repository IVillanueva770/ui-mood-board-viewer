"use client";

import { motion } from "motion/react";
import { palette, type Stat } from "../_data";
import { useWebMotion } from "./use-web-motion";

/** Pieza externa: social proof — band de stats + logos de prensa. */
export function StatsBand({ stats }: { stats: Stat[] }) {
  const { reduce, reveal } = useWebMotion();
  const { accent, text, muted, border, surface } = palette;

  return (
    <section className="max-w-6xl mx-auto px-5">
      <div
        className="rounded-2xl px-6 py-9"
        style={{ backgroundColor: surface, border: `1px solid ${border}` }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: accent }}>{s.valor}</p>
              <p className="text-xs mt-1" style={{ color: muted }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...reveal(0.1)}
          className="flex items-center justify-center gap-6 flex-wrap pt-6"
          style={{ borderTop: `1px solid ${border}` }}
        >
          {["Wired", "TechCrunch", "La Nación", "Página/12", "BAE"].map((l) => (
            <span key={l} className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: text, opacity: 0.45 }}>
              {l}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
