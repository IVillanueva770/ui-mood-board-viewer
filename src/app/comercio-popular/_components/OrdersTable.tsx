"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type EstadoPedido, type Pedido } from "../_data";

const FILTROS = ["Todos", "Preparando", "Listo", "Entregado"] as const;
type Filtro = (typeof FILTROS)[number];

const chip: Record<EstadoPedido, { bg: string; fg: string }> = {
  Listo: { bg: "#fef3c7", fg: "#92400e" },
  Preparando: { bg: "#fed7aa", fg: "#9a3412" },
  Entregado: { bg: "#dcfce7", fg: "#166534" },
};

/** Pieza interna: pedidos del día, filtrables por estado. */
export function OrdersTable({ pedidos }: { pedidos: Pedido[] }) {
  const { verde, verdeSoft, muted, border, surface } = palette;
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visibles = filtro === "Todos" ? pedidos : pedidos.filter((p) => p.estado === filtro);

  return (
    <section>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Pedidos</h2>
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: verdeSoft, color: verde }}
        >
          12 hoy · $86.450
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {FILTROS.map((f) => {
          const a = f === filtro;
          return (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: a ? verde : "#ffffff",
                color: a ? "#ffffff" : muted,
                border: a ? `1px solid ${verde}` : `1px solid ${border}`,
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: muted, borderBottom: `1px solid ${border}` }}
        >
          <div className="col-span-2">Pedido</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Pago</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-1 text-right">Hora</div>
        </div>
        {visibles.map((p, i, arr) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            whileHover={{ backgroundColor: surface }}
            className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer"
            style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
          >
            <div className="col-span-2 font-mono text-xs font-semibold">{p.id}</div>
            <div className="col-span-3 truncate">{p.cliente}</div>
            <div className="col-span-2 font-semibold">{p.total}</div>
            <div className="col-span-2 text-xs" style={{ color: muted }}>{p.pago}</div>
            <div className="col-span-2">
              <span
                className="text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded-full"
                style={{ backgroundColor: chip[p.estado].bg, color: chip[p.estado].fg }}
              >
                {p.estado}
              </span>
            </div>
            <div className="col-span-1 text-right text-xs" style={{ color: muted }}>{p.hora}</div>
          </motion.div>
        ))}
        {visibles.length === 0 && (
          <p className="text-sm text-center py-10" style={{ color: muted }}>
            No hay pedidos {filtro.toLowerCase()}.
          </p>
        )}
      </div>
    </section>
  );
}
