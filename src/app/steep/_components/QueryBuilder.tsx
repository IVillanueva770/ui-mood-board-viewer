"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens, type QueryRow } from "../_data";
import { useSteepMotion } from "./use-steep-motion";

/**
 * Interno · pieza 2: explorar / query. Builder visual (métrica × dimensión ×
 * filtro) + preview vivo: al cambiar la dimensión, la tabla y las barras se
 * recomputan desde el mock. Sin SQL — el evaluador lo ve funcionar scrolleando.
 */
export function QueryBuilder({
  metrics,
  dims,
  result,
}: {
  metrics: string[];
  dims: string[];
  result: Record<string, QueryRow[]>;
}) {
  const { reveal } = useSteepMotion();
  const [metric, setMetric] = useState(metrics[0]);
  const [dim, setDim] = useState(dims[0]);
  const rows = result[dim] ?? [];
  const maxPct = Math.max(...rows.map((r) => r.pct), 1);

  return (
    <section>
      <motion.h3
        {...reveal(0)}
        className="font-cormorant text-3xl sm:text-4xl font-medium leading-tight mb-2"
        style={{ color: tokens.ink }}
      >
        Explorar — <em className="italic" style={{ color: tokens.terracotta }}>sin escribir SQL.</em>
      </motion.h3>
      <motion.p {...reveal(0)} className="text-sm mb-7" style={{ color: tokens.slate }}>
        Elegí qué medir y cómo cortarlo. El resultado se actualiza al instante.
      </motion.p>

      <motion.div
        {...reveal(1)}
        className="rounded-xl p-6 mb-5"
        style={{ backgroundColor: tokens.surface }}
      >
        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-wider mb-2.5" style={{ color: tokens.terracotta }}>
              Métrica
            </p>
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => {
                const a = m === metric;
                return (
                  <button
                    key={m}
                    onClick={() => setMetric(m)}
                    className="px-3 py-1.5 text-xs rounded-md transition-colors"
                    style={{
                      backgroundColor: a ? tokens.ink : tokens.canvas,
                      color: a ? tokens.canvas : tokens.slate,
                      border: `1px solid ${a ? tokens.ink : tokens.border}`,
                    }}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider mb-2.5" style={{ color: tokens.terracotta }}>
              Agrupar por
            </p>
            <div className="flex flex-wrap gap-2">
              {dims.map((d) => {
                const a = d === dim;
                return (
                  <button
                    key={d}
                    onClick={() => setDim(d)}
                    className="px-3 py-1.5 text-xs rounded-full transition-colors"
                    style={{
                      backgroundColor: a ? tokens.mist : "transparent",
                      color: a ? tokens.terracotta : tokens.slate,
                      border: `1px solid ${a ? tokens.mist : tokens.border}`,
                    }}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider mb-2.5" style={{ color: tokens.terracotta }}>
              Filtro
            </p>
            <div
              className="text-xs px-3 py-2 rounded-md font-mono"
              style={{ backgroundColor: tokens.canvas, color: tokens.slate, border: `1px solid ${tokens.border}` }}
            >
              status = &apos;paid&apos; · últimos 30 días
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...reveal(2)}
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: tokens.canvas, border: `1px solid ${tokens.border}` }}
      >
        <div
          className="px-6 py-3 flex items-center justify-between text-[11px] uppercase tracking-wider"
          style={{ borderBottom: `1px solid ${tokens.border}`, backgroundColor: tokens.surface, color: tokens.terracotta }}
        >
          <span>
            {metric} por {dim.toLowerCase()}
          </span>
          <span className="font-mono">{rows.length} filas</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.dim}
            className="px-6 py-4 grid grid-cols-12 gap-4 items-center"
            style={{ borderBottom: i < rows.length - 1 ? `1px solid ${tokens.border}` : "none" }}
          >
            <div className="col-span-4 font-cormorant italic text-lg" style={{ color: tokens.ink }}>
              {r.dim}
            </div>
            <div className="col-span-6">
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: tokens.surface }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: i === 0 ? tokens.terracotta : tokens.clay }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(r.pct / maxPct) * 100}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </div>
            </div>
            <div className="col-span-2 text-right text-sm font-mono" style={{ color: tokens.ink }}>
              {r.val}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
