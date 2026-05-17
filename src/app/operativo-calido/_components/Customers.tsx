"use client";

import { motion } from "motion/react";
import { palette, type ClienteOp } from "../_data";

/** Pieza interna: clientes con contacto directo por WhatsApp. */
export function Customers({ clientes }: { clientes: ClienteOp[] }) {
  const { naranja, naranjaSoft, text, muted, border, surface } = palette;

  return (
    <section>
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: naranja }}>
            172 clientes registrados
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Clientes</h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          className="px-4 py-2 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: "#ffffff", color: text, border: `1px solid ${border}` }}
        >
          Exportar CSV
        </motion.button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-3 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: muted, borderBottom: `1px solid ${border}` }}
        >
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">WhatsApp</div>
          <div className="col-span-3">Último pedido</div>
          <div className="col-span-3 text-right">Total gastado</div>
        </div>
        {clientes.map((c, i, arr) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ backgroundColor: surface }}
            className="grid grid-cols-12 gap-3 px-4 py-3 items-center text-sm cursor-pointer"
            style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
          >
            <div className="col-span-4 flex items-center gap-2 min-w-0">
              <span className="truncate font-medium">{c.nombre}</span>
              {c.frecuente && (
                <span
                  className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0"
                  style={{ backgroundColor: naranjaSoft, color: "#9a3412" }}
                >
                  Frecuente
                </span>
              )}
            </div>
            <div className="col-span-2 text-xs flex items-center gap-1" style={{ color: "#15803d" }}>
              <span>💬</span>
              <span className="truncate">{c.wpp}</span>
            </div>
            <div className="col-span-3 text-xs" style={{ color: muted }}>{c.ultimo}</div>
            <div className="col-span-3 text-right font-semibold">{c.total}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
