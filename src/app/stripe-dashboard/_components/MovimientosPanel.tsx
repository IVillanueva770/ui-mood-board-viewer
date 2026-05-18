"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  palette,
  pesos,
  FILTROS_FECHA,
  type FiltroFecha,
  type Movimiento,
  type EstadoMov,
} from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

const ESTADO: Record<EstadoMov, { bg: string; fg: string; dot: string }> = {
  Acreditado: { bg: palette.okBg, fg: palette.okFg, dot: palette.okDot },
  Pendiente: { bg: palette.warnBg, fg: palette.warnFg, dot: palette.warnDot },
  Rechazado: { bg: palette.errBg, fg: palette.errFg, dot: palette.errDot },
};

/** Cuántos movimientos muestra cada filtro de fecha (mock determinista). */
const CORTE: Record<FiltroFecha, number> = {
  Hoy: 3,
  "7 días": 6,
  "Este mes": 8,
  Todo: 8,
};

/** Sub-vista "Movimientos": tabla clara, estados con color, filtro por fecha. */
export function MovimientosPanel({ movimientos }: { movimientos: Movimiento[] }) {
  const { reveal, press } = usePremiumMotion();
  const { muted, border, card, text } = palette;
  const [filtro, setFiltro] = useState<FiltroFecha>("Este mes");

  const visibles = movimientos.slice(0, CORTE[filtro]);
  const totalAcreditado = visibles
    .filter((m) => m.estado === "Acreditado")
    .reduce((s, m) => s + m.monto, 0);

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: muted }}>
            {visibles.length} movimientos · {pesos(totalAcreditado)} acreditado
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Movimientos</h2>
        </div>
        <motion.button
          {...press}
          className="px-3 py-1.5 text-xs font-medium rounded-md"
          style={{ border: `1px solid ${border}`, color: muted }}
        >
          ↓ Exportar Excel
        </motion.button>
      </div>

      {/* Filtro por fecha */}
      <div className="flex flex-wrap gap-2">
        {FILTROS_FECHA.map((f) => {
          const activo = f === filtro;
          return (
            <motion.button
              key={f}
              onClick={() => setFiltro(f)}
              whileTap={{ scale: 0.97 }}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors"
              style={{
                backgroundColor: activo ? palette.accent : card,
                color: activo ? "#ffffff" : muted,
                border: `1px solid ${activo ? palette.accent : border}`,
              }}
            >
              {f}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        {...reveal()}
        className="rounded-xl overflow-hidden"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <div
          className="hidden sm:grid grid-cols-12 px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ borderBottom: `1px solid ${border}`, color: muted, backgroundColor: palette.surface }}
        >
          <div className="col-span-2">Fecha</div>
          <div className="col-span-4">Concepto</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Monto</div>
          <div className="col-span-1 text-right">Estado</div>
        </div>

        {visibles.map((m, i) => {
          const est = ESTADO[m.estado];
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.035, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: palette.surface }}
              className="grid grid-cols-2 sm:grid-cols-12 gap-y-1 px-5 py-3.5 text-sm items-center"
              style={{ borderBottom: i < visibles.length - 1 ? `1px solid ${palette.grid}` : "none" }}
            >
              <div className="col-span-1 sm:col-span-2 text-xs" style={{ color: muted }}>{m.fecha}</div>
              <div className="col-span-2 sm:col-span-4 min-w-0 order-3 sm:order-none">
                <p className="font-medium truncate" style={{ color: text }}>{m.concepto}</p>
                <p className="text-[11px] truncate" style={{ color: muted }}>{m.medio}</p>
              </div>
              <div className="col-span-2 sm:col-span-3 text-xs truncate order-4 sm:order-none" style={{ color: muted }}>
                {m.cliente}
              </div>
              <div className="col-span-1 sm:col-span-2 font-semibold tabular-nums text-right sm:text-left">
                {pesos(m.monto)}
              </div>
              <div className="col-span-1 sm:col-span-1 flex items-center justify-end gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: est.dot }} />
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded hidden sm:inline"
                  style={{ backgroundColor: est.bg, color: est.fg }}
                >
                  {m.estado}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
