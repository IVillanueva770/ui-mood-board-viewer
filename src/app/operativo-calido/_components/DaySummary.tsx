"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette, pesos, estadoColor, flujo, type Pedido } from "../_data";

type Props = {
  pedidos: Pedido[];
  avanzar: (id: string) => void;
  pedidosHoy: number;
  aCobrar: number;
  entregasPendientes: number;
  nuevosPendientes: number;
};

/** Pieza interna (overview, el protagonista): KPIs grandes + pedidos de hoy con avance de un toque. */
export function DaySummary({
  pedidos,
  avanzar,
  pedidosHoy,
  aCobrar,
  entregasPendientes,
  nuevosPendientes,
}: Props) {
  const reduce = useReducedMotion();
  const { verde, verdeSoft, naranja, naranjaSoft, rojo, rojoSoft, muted, border } = palette;

  const kpis = [
    { v: String(pedidosHoy), l: "Pedidos hoy", color: verde, bg: verdeSoft },
    { v: pesos(aCobrar), l: "A cobrar hoy", color: naranja, bg: naranjaSoft },
    { v: String(entregasPendientes), l: "Entregas pendientes", color: rojo, bg: rojoSoft },
  ];

  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: verde }}>
          Hoy · sábado 17 de mayo
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Resumen del día</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {kpis.map((k, i) => (
          <motion.div
            key={k.l}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl p-5"
            style={{ backgroundColor: k.bg }}
          >
            <motion.p
              key={k.v}
              initial={reduce ? false : { scale: 0.92, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
              style={{ color: k.color }}
            >
              {k.v}
            </motion.p>
            <p className="text-sm mt-1" style={{ color: muted }}>{k.l}</p>
          </motion.div>
        ))}
      </div>

      {nuevosPendientes > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl p-4 mb-5 flex items-center gap-3"
          style={{ backgroundColor: verdeSoft, border: "1px solid #86efac" }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
            style={{ backgroundColor: "#ffffff" }}
          >
            🛍️
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold" style={{ color: "#166534" }}>
              {nuevosPendientes} {nuevosPendientes === 1 ? "pedido nuevo esperando" : "pedidos nuevos esperando"}
            </p>
            <p className="text-xs" style={{ color: "#15803d" }}>
              Tocá &quot;Empezar&quot; cuando lo arranques a preparar.
            </p>
          </div>
        </motion.div>
      )}

      <p className="font-semibold mb-3">Pedidos de hoy</p>
      <div className="space-y-2">
        {pedidos.map((p, i) => {
          const c = estadoColor[p.estado];
          const sig = flujo[p.estado];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white rounded-xl p-4 flex items-center gap-4"
              style={{ border: `1px solid ${border}` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-semibold">{p.id}</span>
                  <span className="font-semibold truncate">{p.cli}</span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold capitalize"
                    style={{ backgroundColor: c.bg, color: c.fg }}
                  >
                    {p.estado}
                  </span>
                </div>
                <p className="text-xs mt-1 truncate" style={{ color: muted }}>{p.items} · {p.hora}</p>
              </div>
              <p className="font-semibold shrink-0">{pesos(p.total)}</p>
              {sig ? (
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => avanzar(p.id)}
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg shrink-0 text-white"
                  style={{ backgroundColor: verde }}
                >
                  {sig === "preparando" ? "Empezar" : "Entregar"} →
                </motion.button>
              ) : (
                <span className="text-xs font-semibold px-3.5 py-2 shrink-0" style={{ color: muted }}>
                  {p.estado === "entregado" ? "Listo ✓" : "Cancelado"}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
