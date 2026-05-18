"use client";

import { motion } from "motion/react";
import { tokens, mono, type Stat } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/** Pieza externa: social proof — números duros + logos. Restraint refero. */
export function MetricsBand({ stats, logos }: { stats: Stat[]; logos: string[] }) {
  const { reduce } = useLinearMotion();
  const t = tokens;

  return (
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ backgroundColor: t.line }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="px-6 py-8 text-center"
            style={{ backgroundColor: t.surface }}
          >
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: i === 0 ? t.lime : t.fg }}>
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-wider mt-2" style={{ color: t.muted }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-6 sm:gap-12 flex-wrap text-sm" style={{ color: t.faint }}>
        <span className="text-xs uppercase tracking-[0.2em]">Equipos que ya se mueven rápido</span>
        {logos.map((l) => (
          <span key={l} style={{ fontFamily: mono, color: t.muted }}>
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
