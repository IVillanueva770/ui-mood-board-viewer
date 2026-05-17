"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type ProductoAdmin } from "../_data";

/** Pieza interna: catálogo del comercio con stock + toggle activo real. */
export function ProductsTable({ productos }: { productos: ProductoAdmin[] }) {
  const { verde, text, muted, border, surface } = palette;
  const [activos, setActivos] = useState<Record<string, boolean>>(
    () => Object.fromEntries(productos.map((p) => [p.id, p.activo])),
  );

  const toggle = (id: string) => setActivos((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section>
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: verde }}>
            114 productos · 8 categorías
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Productos</h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ backgroundColor: verde }}
        >
          + Nuevo producto
        </motion.button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: surface, color: muted, borderBottom: `1px solid ${border}` }}
        >
          <div className="col-span-1" />
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">Categoría</div>
          <div className="col-span-2">Precio</div>
          <div className="col-span-2">Stock</div>
          <div className="col-span-1 text-right">On</div>
        </div>
        {productos.map((p, i, arr) => {
          const on = activos[p.id];
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.22, delay: i * 0.03 }}
              whileHover={{ backgroundColor: surface }}
              className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm"
              style={{ borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none" }}
            >
              <div className="col-span-1">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{ background: p.gradient }}
                >
                  {p.emoji}
                </div>
              </div>
              <div className="col-span-4 truncate font-medium" style={{ opacity: on ? 1 : 0.5 }}>
                {p.nombre}
              </div>
              <div className="col-span-2 text-xs" style={{ color: muted }}>{p.categoria}</div>
              <div className="col-span-2 font-semibold">{p.precio}</div>
              <div className="col-span-2">
                <span
                  className="text-xs font-semibold"
                  style={{ color: p.stock < 5 ? "#dc2626" : text }}
                >
                  {p.stock === 0 ? "Sin stock" : `${p.stock} u.`}
                </span>
              </div>
              <div className="col-span-1 flex justify-end">
                <button
                  onClick={() => toggle(p.id)}
                  className="w-9 h-5 rounded-full relative transition-colors"
                  style={{ backgroundColor: on ? verde : "#d4d4d4" }}
                  aria-label={`${on ? "Desactivar" : "Activar"} ${p.nombre}`}
                  aria-pressed={on}
                >
                  <motion.div
                    initial={false}
                    animate={{ x: on ? 18 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm"
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
