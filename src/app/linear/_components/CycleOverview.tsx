"use client";

import { motion } from "motion/react";
import { tokens, mono, type Cycle, type Metric } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/** Pieza interna: estado del cycle — KPIs + progreso + burndown SVG (sin libs). */
export function CycleOverview({ cycle, metrics }: { cycle: Cycle; metrics: Metric[] }) {
  const { reduce, ring } = useLinearMotion();
  const t = tokens;

  return (
    <section>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl font-semibold tracking-tight">{cycle.name}</h2>
            <span className="text-[11px] px-2 py-0.5 rounded font-semibold" style={{ backgroundColor: t.lime, color: t.bg }}>
              Activo
            </span>
          </div>
          <p className="text-sm mt-1" style={{ color: t.muted }}>
            {cycle.range}
          </p>
        </div>
        <p className="text-xs" style={{ color: t.muted, fontFamily: mono }}>
          {cycle.progress}% · {cycle.daysLeft}d restantes
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            tabIndex={0}
            {...ring()}
            className="rounded-lg p-4 cursor-default focus-visible:outline-none"
            style={{ backgroundColor: t.surface, border: `1px solid ${t.line}` }}
          >
            <div className="text-xs mb-1" style={{ color: t.muted }}>
              {m.label}
            </div>
            <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
            <div className="text-xs mt-1" style={{ color: t.lime, fontFamily: mono }}>
              {m.delta}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Progreso del cycle */}
        <div className="p-5 rounded-lg" style={{ backgroundColor: t.surface, border: `1px solid ${t.line}` }}>
          <div className="flex items-baseline justify-between mb-3">
            <p className="text-sm font-semibold">Progreso</p>
            <p className="text-xs" style={{ color: t.muted, fontFamily: mono }}>
              {cycle.done}/{cycle.scoped} hechas
            </p>
          </div>
          <div className="h-2 rounded-full overflow-hidden mb-4" style={{ backgroundColor: t.line }}>
            <motion.div
              initial={reduce ? false : { width: 0 }}
              whileInView={{ width: `${cycle.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${t.lime}, ${t.limeDim})` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { val: cycle.scoped, label: "Scoped" },
              { val: cycle.done, label: "Done" },
              { val: cycle.remaining, label: "Quedan" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold tracking-tight">{s.val}</div>
                <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: t.faint }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Burndown */}
        <div className="p-5 rounded-lg" style={{ backgroundColor: t.surface, border: `1px solid ${t.line}` }}>
          <p className="text-sm font-semibold mb-4">Burndown</p>
          <svg viewBox="0 0 384 80" className="w-full" preserveAspectRatio="none" style={{ height: 96 }}>
            <line x1="0" y1="2" x2="384" y2="74" stroke={t.lineStrong} strokeWidth="1" strokeDasharray="3 3" />
            <motion.path
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 }}
              d={cycle.burndown}
              fill="none"
              stroke={t.lime}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex justify-between text-xs mt-2" style={{ color: t.faint, fontFamily: mono }}>
            <span>D1</span>
            <span>D5</span>
            <span>D10</span>
            <span>D14</span>
          </div>
        </div>
      </div>
    </section>
  );
}
