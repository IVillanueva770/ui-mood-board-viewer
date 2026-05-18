"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { palette, type Kpi, type ChartPoint } from "../_data";
import { useSaasMotion } from "./use-saas-motion";
import { CountUp } from "./CountUp";

/* Genera los path (línea + área) del gráfico de MRR a partir de la serie. */
function useMrrPaths(serie: ChartPoint[]) {
  return useMemo(() => {
    const W = 400;
    const H = 110;
    const pad = 6;
    const vals = serie.map((d) => d.mrr);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    const pts = serie.map((d, i) => {
      const x = (i / (serie.length - 1)) * (W - pad * 2) + pad;
      const y = H - pad - ((d.mrr - min) / span) * (H - pad * 2);
      return [x, y] as const;
    });
    const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const area = `${line} L${(W - pad).toFixed(1)},${H} L${pad},${H} Z`;
    return { line, area };
  }, [serie]);
}

/**
 * Pieza interna (overview): KPI cards con count-up al entrar + gráfico de
 * área de MRR con draw-in del trazo. Visible directo en el scroll del panel.
 */
export function MetricsOverview({ kpis, serie }: { kpis: Kpi[]; serie: ChartPoint[] }) {
  const { reduce, groupProps, groupItem } = useSaasMotion();
  const { accent, text, muted, mutedSoft, border, card, surface, ok, bad } = palette;
  const { line, area } = useMrrPaths(serie);

  return (
    <div className="p-5 sm:p-6">
      <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: accent }}>
            Resumen · últimos 30 días
          </p>
          <h2 className="text-2xl font-semibold tracking-tight" style={{ color: text }}>
            Overview
          </h2>
        </div>
        <span className="text-xs" style={{ color: muted }}>
          Comparado con el período anterior
        </span>
      </div>

      <motion.div {...groupProps} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((k) => (
          <motion.div
            key={k.id}
            variants={groupItem}
            className="rounded-xl p-4"
            style={{ border: `1px solid ${border}`, backgroundColor: card }}
          >
            <p className="text-[11px] mb-1.5" style={{ color: muted }}>
              {k.label}
            </p>
            <p className="text-2xl font-semibold tracking-tight" style={{ color: text }}>
              <CountUp
                value={k.value}
                prefix={k.prefix}
                suffix={k.suffix}
                decimals={k.decimals ?? 0}
              />
            </p>
            <p
              className="text-[11px] mt-1.5 font-medium"
              style={{ color: k.positive ? ok : bad, fontFamily: "var(--font-geist-mono)" }}
            >
              {k.delta}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div
        className="rounded-xl p-5"
        style={{ border: `1px solid ${border}`, backgroundColor: surface }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold" style={{ color: text }}>
              MRR · últimos 12 meses
            </p>
            <p className="text-[11px]" style={{ color: mutedSoft }}>
              Crecimiento sostenido +94% interanual
            </p>
          </div>
          <span
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: "#eef2ff", color: "#3730a3" }}
          >
            $ {serie[serie.length - 1].mrr.toLocaleString("es-AR")}
          </span>
        </div>
        <svg viewBox="0 0 400 110" className="w-full" preserveAspectRatio="none" style={{ height: 140 }}>
          <defs>
            <linearGradient id="saas-mrr-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={area}
            fill="url(#saas-mrr-fill)"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.path
            d={line}
            fill="none"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="flex justify-between mt-2 text-[10px]" style={{ color: mutedSoft }}>
          {serie.filter((_, i) => i % 2 === 0).map((d) => (
            <span key={d.mes}>{d.mes}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
