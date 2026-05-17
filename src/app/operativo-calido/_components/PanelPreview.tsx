"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette, estadoColor, type PreviewKPI, type PreviewRow } from "../_data";

type Props = { kpis: PreviewKPI[]; rows: PreviewRow[] };

/** Pieza externa: captura mock del panel ("qué te vas a encontrar adentro"). */
export function PanelPreview({ kpis, rows }: Props) {
  const reduce = useReducedMotion();
  const { muted, border, surface } = palette;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden mb-12 mx-auto max-w-3xl"
      style={{ border: `1px solid ${border}`, boxShadow: "0 24px 48px -24px rgba(0,0,0,0.16)" }}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ backgroundColor: surface, borderBottom: `1px solid ${border}` }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fca5a5" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fcd34d" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#86efac" }} />
        <span className="text-[11px] ml-3" style={{ color: muted }}>
          Tienda de Fátima — Resumen del día
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl p-3.5" style={{ backgroundColor: k.bg }}>
              <p className="text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: k.color }}>
                {k.valor}
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: muted }}>{k.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
          {rows.map((r, i, arr) => (
            <div
              key={r.id}
              className="flex items-center gap-3 px-4 py-2.5 text-sm"
              style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
            >
              <span className="font-mono text-xs font-semibold w-16">{r.id}</span>
              <span className="flex-1 truncate">{r.cli}</span>
              <span className="font-semibold">{r.total}</span>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize"
                style={{ backgroundColor: estadoColor[r.estado].bg, color: estadoColor[r.estado].fg }}
              >
                {r.estado}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
