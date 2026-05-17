"use client";

import { motion } from "motion/react";
import { palette, type Cliente } from "../_data";

/** Pieza interna: clientes del comercio. */
export function CustomersTable({ clientes }: { clientes: Cliente[] }) {
  const { verde, verdeSoft, muted, border, surface } = palette;

  return (
    <section>
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Clientes</h2>
        <span className="text-xs" style={{ color: muted }}>418 registrados · 67 activos este mes</span>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: muted, borderBottom: `1px solid ${border}` }}
        >
          <div className="col-span-4">Nombre</div>
          <div className="col-span-3">Teléfono</div>
          <div className="col-span-2 text-right">Compras</div>
          <div className="col-span-3 text-right">Total gastado</div>
        </div>
        {clientes.map((c, i, arr) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.24, delay: i * 0.03 }}
            whileHover={{ backgroundColor: surface }}
            className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer"
            style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
          >
            <div className="col-span-4 flex items-center gap-2 min-w-0">
              <span className="truncate font-medium">{c.nombre}</span>
              {c.frecuente && (
                <span
                  className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0"
                  style={{ backgroundColor: verdeSoft, color: verde }}
                >
                  Frecuente
                </span>
              )}
            </div>
            <div className="col-span-3 text-xs font-mono" style={{ color: muted }}>{c.telefono}</div>
            <div className="col-span-2 text-right">{c.compras}</div>
            <div className="col-span-3 text-right font-semibold">{c.total}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
