"use client";

import { motion } from "motion/react";
import { palette, pesos, type ClienteResumen } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

/** Sub-vista "Clientes": lista con métricas por cliente, lenguaje claro. */
export function ClientesPanel({ clientes }: { clientes: ClienteResumen[] }) {
  const { reveal, softLift } = usePremiumMotion();
  const { muted, border, card, text } = palette;

  const totalFacturado = clientes.reduce((s, c) => s + c.total, 0);
  const mejor = clientes.reduce((a, b) => (b.total > a.total ? b : a), clientes[0]);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider mb-1" style={{ color: muted }}>
          {clientes.length} clientes · {pesos(totalFacturado)} este año
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tus clientes</h2>
      </div>

      <motion.div
        {...reveal()}
        className="rounded-xl p-5 flex items-center gap-4"
        style={{ backgroundColor: palette.accentSoft, border: `1px solid ${border}` }}
      >
        <span
          className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
          style={{ backgroundColor: card, color: palette.accent }}
        >
          {mejor.inicial}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: palette.accent }}>
            Tu mejor cuenta del mes
          </p>
          <p className="font-semibold truncate">{mejor.nombre}</p>
          <p className="text-xs" style={{ color: muted }}>
            {pesos(mejor.total)} en {mejor.operaciones} operaciones
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {clientes.map((c, i) => (
          <motion.div
            key={c.id}
            {...reveal(i * 0.05)}
            {...softLift}
            className="rounded-xl p-5 cursor-pointer"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                style={{ backgroundColor: c.color, color: palette.text }}
              >
                {c.inicial}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate" style={{ color: text }}>{c.nombre}</p>
                <p className="text-xs truncate" style={{ color: muted }}>{c.rubro}</p>
              </div>
              <span
                className="text-[11px] px-1.5 py-0.5 rounded font-medium shrink-0"
                style={{
                  backgroundColor: c.up ? palette.okBg : palette.errBg,
                  color: c.up ? palette.okFg : palette.errFg,
                }}
              >
                {c.trend}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: muted }}>Facturado</p>
                <p className="font-semibold tabular-nums">{pesos(c.total)}</p>
              </div>
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: muted }}>Operaciones</p>
                <p className="font-semibold tabular-nums">{c.operaciones}</p>
              </div>
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: muted }}>Último cobro</p>
                <p className="font-medium text-xs">{c.ultima}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
