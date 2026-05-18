"use client";

import { motion } from "motion/react";
import { palette, type PuntoReporte, type MotivoConsulta } from "../_data";
import { useAiryMotion } from "./use-airy-motion";

/** Pieza interna: reportes — KPIs derivados + gráfico SVG + por motivo. */
export function Reportes({
  reporte,
  motivos,
}: {
  reporte: PuntoReporte[];
  motivos: MotivoConsulta[];
}) {
  const { reduce, reveal } = useAiryMotion();
  const { accent, accentDeep, muted, faint, border, hairline, card, text } = palette;

  const ultimo = reporte[reporte.length - 1];
  const previo = reporte[reporte.length - 2];
  const deltaSes = ultimo.sesiones - previo.sesiones;
  const maxSes = Math.max(...reporte.map((r) => r.sesiones));
  const maxIng = Math.max(...reporte.map((r) => r.ingresos));

  const W = 360;
  const H = 110;
  const x = (i: number) => 20 + (i / (reporte.length - 1)) * (W - 40);
  const yIng = (v: number) => H - 10 - (v / maxIng) * (H - 25);

  const kpis = [
    { label: "Sesiones del mes", val: String(ultimo.sesiones), sub: `${deltaSes >= 0 ? "+" : ""}${deltaSes} vs mes previo` },
    { label: "Ingresos del mes", val: `$${ultimo.ingresos}k`, sub: "84% cobrado" },
    { label: "Sesiones / paciente", val: "3.4", sub: "+0.2" },
  ];

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: accent }}>
          Mes en curso · mayo
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Reportes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            {...reveal(i * 0.05)}
            className="rounded-2xl p-5"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <p className="text-xs mb-2" style={{ color: muted }}>{k.label}</p>
            <p className="text-3xl font-semibold tracking-tight mb-1" style={{ color: text }}>{k.val}</p>
            <p className="text-xs" style={{ color: accent }}>{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <motion.div
          {...reveal(0.05)}
          className="rounded-2xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-sm" style={{ color: text }}>Sesiones e ingresos</p>
            <div className="flex items-center gap-3 text-[11px]" style={{ color: muted }}>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: palette.accentSoft }} /> sesiones</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 rounded" style={{ backgroundColor: accent }} /> ingresos</span>
            </div>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 150 }}>
            {reporte.map((r, i) => {
              const bw = 22;
              const bh = (r.sesiones / maxSes) * (H - 25);
              return (
                <motion.rect
                  key={r.mes}
                  x={x(i) - bw / 2}
                  width={bw}
                  rx={3}
                  initial={reduce ? false : { height: 0, y: H - 10 }}
                  whileInView={reduce ? undefined : { height: bh, y: H - 10 - bh }}
                  animate={reduce ? { height: bh, y: H - 10 - bh } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  fill={palette.accentSoft}
                />
              );
            })}
            <motion.path
              d={reporte.map((r, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${yIng(r.ingresos).toFixed(1)}`).join(" ")}
              fill="none"
              stroke={accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            />
          </svg>
          <div className="flex justify-between text-[10px] mt-1 px-3" style={{ color: faint }}>
            {reporte.map((r) => (
              <span key={r.mes}>{r.mes}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.1)}
          className="rounded-2xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <p className="font-semibold text-sm mb-4" style={{ color: text }}>Por motivo de consulta</p>
          <div className="space-y-3">
            {motivos.map((c, i) => (
              <div key={c.motivo}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="font-medium" style={{ color: text }}>{c.motivo}</span>
                  <span className="tabular-nums text-xs" style={{ color: muted }}>{c.val} sesiones</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: hairline }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: accentDeep }}
                    initial={reduce ? false : { width: 0 }}
                    whileInView={reduce ? undefined : { width: `${c.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
