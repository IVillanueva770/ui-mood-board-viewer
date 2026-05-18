"use client";

import { motion } from "motion/react";
import { tokens, type MetricDrill } from "../_data";
import { useSteepMotion } from "./use-steep-motion";
import { areaPath, linePath } from "./charts";

/**
 * Interno · pieza 4: detalle de métrica (drill-down). Define-once: fórmula +
 * dueño, total grande, serie temporal de 12 meses con draw-in elegante +
 * breakdown por componente con barras. El "use everywhere" hecho visible.
 */
export function MetricDetail({ drill }: { drill: MetricDrill }) {
  const { reveal, draw, fill } = useSteepMotion();
  const W = 640;
  const H = 200;
  const vals = drill.serie.map((p) => p.v);
  const maxPct = Math.max(...drill.breakdown.map((b) => b.pct), 1);

  return (
    <section>
      <motion.div {...reveal(0)} className="mb-7">
        <p className="text-[11px] uppercase tracking-[0.24em] mb-2" style={{ color: tokens.terracotta }}>
          métrica · fuente única
        </p>
        <h3 className="font-cormorant text-3xl sm:text-4xl font-medium leading-tight mb-3" style={{ color: tokens.ink }}>
          {drill.name} — <em className="italic" style={{ color: tokens.terracotta }}>definida una vez.</em>
        </h3>
        <div className="flex items-center gap-4 flex-wrap text-xs" style={{ color: tokens.slate }}>
          <span
            className="px-3 py-1.5 rounded-md font-mono"
            style={{ backgroundColor: tokens.surface }}
          >
            {drill.formula}
          </span>
          <span>
            dueño · <span style={{ color: tokens.terracotta }}>{drill.owner}</span>
          </span>
        </div>
      </motion.div>

      <motion.div
        {...reveal(1)}
        className="rounded-xl p-6 mb-5"
        style={{ backgroundColor: tokens.canvas, border: `1px solid ${tokens.border}` }}
      >
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: tokens.terracotta }}>
              total · 12 meses
            </p>
            <p className="font-cormorant text-5xl leading-none" style={{ color: tokens.ink }}>
              {drill.total}
            </p>
          </div>
          <span className="text-sm font-mono" style={{ color: tokens.terracotta }}>
            {drill.delta}
          </span>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 200 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="steep-drill-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={tokens.mist} stopOpacity="0.9" />
              <stop offset="100%" stopColor={tokens.mist} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75, 1].map((g) => (
            <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke={tokens.border} strokeWidth="1" />
          ))}
          <motion.path {...fill(1)} d={areaPath(vals, W, H, 10)} fill="url(#steep-drill-grad)" />
          <motion.path
            {...draw(0.25, 1.4)}
            d={linePath(vals, W, H, 10)}
            fill="none"
            stroke={tokens.terracotta}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex justify-between mt-3 text-[10px] font-mono" style={{ color: tokens.slate }}>
          {drill.serie.map((p) => (
            <span key={p.label}>{p.label}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...reveal(2)}
        className="rounded-xl p-6"
        style={{ backgroundColor: tokens.surface }}
      >
        <p className="text-[11px] uppercase tracking-wider mb-5" style={{ color: tokens.terracotta }}>
          composición del total
        </p>
        <div className="space-y-4">
          {drill.breakdown.map((b, i) => (
            <div key={b.k} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 text-sm" style={{ color: tokens.ink }}>
                {b.k}
              </div>
              <div className="col-span-7">
                <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: tokens.canvas }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: i === 0 ? tokens.terracotta : tokens.clay }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(b.pct / maxPct) * 100}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
                  />
                </div>
              </div>
              <div className="col-span-2 text-right text-sm font-mono" style={{ color: tokens.ink }}>
                {b.val}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
