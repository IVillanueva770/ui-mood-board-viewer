"use client";

import { motion } from "motion/react";
import { palette, type BarraVenta, type KPI } from "../_data";

type Props = { kpis: KPI[]; ventas: BarraVenta[]; total: string };

/** Pieza interna (overview): KPIs + gráfico de barras semanal (sin libs). */
export function MetricsPanel({ kpis, ventas, total }: Props) {
  const { verde, verdeSoft, muted, border } = palette;

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: verde }}>
          Resumen del comercio · Mayo 2026
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Métricas</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {kpis.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-white rounded-xl p-4"
            style={{ border: `1px solid ${border}` }}
          >
            <p className="text-xl sm:text-2xl font-semibold tracking-tight">{s.valor}</p>
            <div className="flex items-baseline justify-between mt-1.5">
              <p className="text-xs" style={{ color: muted }}>{s.label}</p>
              <span className="text-[10px] font-semibold" style={{ color: s.up ? verde : muted }}>
                {s.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-5" style={{ border: `1px solid ${border}` }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold">Ventas por día · esta semana</p>
          <span className="text-xs" style={{ color: muted }}>Total: {total}</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {ventas.map((b, i) => (
            <div key={b.dia} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${b.valor}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                className="w-full rounded-t-md"
                style={{ backgroundColor: b.valor === 100 ? verde : verdeSoft, minHeight: "8px" }}
              />
              <span className="text-xs font-mono" style={{ color: muted }}>{b.dia}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
