"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  palette,
  pesos,
  estadoColor,
  flujo,
  FILTROS_PEDIDO,
  type FiltroPedido,
  type Pedido,
} from "../_data";

type Props = { pedidos: Pedido[]; avanzar: (id: string) => void };

/** Pieza interna: tabla de pedidos filtrable por estado, acción primaria obvia. */
export function OrdersTable({ pedidos, avanzar }: Props) {
  const { verde, verdeSoft, muted, border, surface } = palette;
  const [filtro, setFiltro] = useState<FiltroPedido>("todos");

  const visibles = filtro === "todos" ? pedidos : pedidos.filter((p) => p.estado === filtro);

  return (
    <section>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Pedidos</h2>
        <div className="flex items-center gap-2 text-xs flex-wrap">
          {FILTROS_PEDIDO.map((f) => {
            const a = filtro === f.id;
            return (
              <motion.button
                key={f.id}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.1 }}
                onClick={() => setFiltro(f.id)}
                className="px-3 py-1.5 rounded-full font-semibold"
                style={{ backgroundColor: a ? verdeSoft : "transparent", color: a ? verde : muted }}
              >
                {f.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: muted, borderBottom: `1px solid ${border}` }}
        >
          <div className="col-span-2">Pedido</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-3 text-right">Acción</div>
        </div>
        <AnimatePresence initial={false} mode="popLayout">
          {visibles.map((p, i, arr) => {
            const c = estadoColor[p.estado];
            const sig = flujo[p.estado];
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2 }}
                whileHover={{ backgroundColor: surface }}
                className="grid grid-cols-12 gap-3 px-4 py-3 items-center text-sm"
                style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
              >
                <div className="col-span-2 font-mono text-xs font-semibold">{p.id}</div>
                <div className="col-span-3 truncate">{p.cli}</div>
                <div className="col-span-2 font-semibold">{pesos(p.total)}</div>
                <div className="col-span-2">
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold capitalize"
                    style={{ backgroundColor: c.bg, color: c.fg }}
                  >
                    {p.estado}
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  {sig ? (
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => avanzar(p.id)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white"
                      style={{ backgroundColor: verde }}
                    >
                      {sig === "preparando" ? "Empezar" : "Entregar"} →
                    </motion.button>
                  ) : (
                    <span className="text-xs" style={{ color: muted }}>
                      {p.estado === "entregado" ? "Listo ✓" : "—"}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {visibles.length === 0 && (
          <div className="px-4 py-10 text-center text-sm" style={{ color: muted }}>
            No hay pedidos en este estado.
          </div>
        )}
      </div>
    </section>
  );
}
