"use client";

import { motion } from "motion/react";
import { palette, pesos, type Kpi, type SerieIngresos, type Movimiento } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";
import { CountUp } from "./CountUp";
import { RevenueChart } from "./RevenueChart";

const ESTADO_COLOR: Record<Movimiento["estado"], string> = {
  Acreditado: palette.okDot,
  Pendiente: palette.warnDot,
  Rechazado: palette.errDot,
};

/**
 * Sub-vista "Resumen": el corazón del dashboard amigable. Densa y visible
 * en scroll (KPIs con count-up + gráfico con draw-in + comparativa + últimos
 * cobros) — no esconde nada tras otro nivel de navegación.
 */
export function OverviewPanel({
  kpis,
  ingresos,
  movimientos,
}: {
  kpis: Kpi[];
  ingresos: SerieIngresos;
  movimientos: Movimiento[];
}) {
  const { reveal, softLift } = usePremiumMotion();
  const { muted, border, card, text } = palette;
  const recientes = movimientos.slice(0, 4);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: muted }}>
          Resumen · marzo
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Hola, Guadalupe 👋</h2>
      </div>

      {/* KPIs con count-up (firma de motion) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((k, i) => (
          <motion.div
            key={k.id}
            {...reveal(i * 0.05)}
            {...softLift}
            className="rounded-xl p-4"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <p className="text-xs mb-2" style={{ color: muted }}>{k.label}</p>
            <p className="text-xl sm:text-2xl font-semibold tracking-tight mb-1">
              <CountUp
                to={k.valor}
                prefijo={k.prefijo}
                sufijo={k.sufijo}
                decimales={k.decimales}
              />
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="text-[11px] px-1.5 py-0.5 rounded font-medium"
                style={{
                  backgroundColor: k.up ? palette.okBg : palette.errBg,
                  color: k.up ? palette.okFg : palette.errFg,
                }}
              >
                {k.up ? "▲" : "▼"} {k.deltaPct}%
              </span>
            </div>
            <p className="text-[11px] mt-2 leading-snug" style={{ color: muted }}>
              {k.comparativa}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Gráfico de ingresos con draw-in + comparativa */}
      <motion.div
        {...reveal()}
        className="rounded-xl p-5"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <RevenueChart ingresos={ingresos} />
      </motion.div>

      {/* Últimos cobros — actividad visible sin cambiar de vista */}
      <motion.div
        {...reveal()}
        className="rounded-xl"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${border}` }}>
          <p className="font-semibold text-sm">Últimos cobros</p>
          <span className="text-xs" style={{ color: muted }}>Hoy y ayer</span>
        </div>
        <ul className="m-0 p-0 list-none">
          {recientes.map((m, i) => (
            <li
              key={m.id}
              className="px-5 py-3 flex items-center justify-between gap-3"
              style={{ borderBottom: i < recientes.length - 1 ? `1px solid ${palette.grid}` : "none" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: ESTADO_COLOR[m.estado] }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: text }}>{m.concepto}</p>
                  <p className="text-[11px] mt-0.5 truncate" style={{ color: muted }}>
                    {m.cliente} · {m.fecha}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold tabular-nums shrink-0">{pesos(m.monto)}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
