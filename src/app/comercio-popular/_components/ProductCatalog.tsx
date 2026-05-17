"use client";

import { useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import {
  palette,
  fmt,
  CATEGORIAS,
  type Categoria,
  type Producto,
} from "../_data";

type Props = {
  productos: Producto[];
  cart: Record<string, number>;
  setQty: (id: string, q: number) => void;
  onFly: (p: Producto, ev: MouseEvent<HTMLButtonElement>) => void;
};

/** Pieza externa: catálogo filtrable por categoría + agregar/stepper. */
export function ProductCatalog({ productos, cart, setQty, onFly }: Props) {
  const { verde, text, muted, border } = palette;
  const [activeCat, setActiveCat] = useState<Categoria>("Todo");

  const visibles =
    activeCat === "Todo" ? productos : productos.filter((p) => p.categoria === activeCat);

  return (
    <section className="mt-1">
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 -mx-2 px-2">
        {CATEGORIAS.map((cat) => {
          const a = activeCat === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => setActiveCat(cat)}
              whileTap={{ scale: 0.96 }}
              className="text-sm px-4 py-2 rounded-full whitespace-nowrap shrink-0"
              style={{
                backgroundColor: a ? verde : "#ffffff",
                color: a ? "#ffffff" : text,
                border: a ? `1px solid ${verde}` : `1px solid ${border}`,
                fontWeight: a ? 600 : 500,
              }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {visibles.map((p, i) => {
          const q = cart[p.id] || 0;
          return (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.035 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl overflow-hidden flex flex-col"
              style={{ border: `1px solid ${border}` }}
            >
              <div
                className="aspect-square flex items-center justify-center text-4xl"
                style={{ background: p.gradient }}
              >
                {p.emoji}
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <p className="text-sm font-medium leading-snug mb-1 line-clamp-2">{p.nombre}</p>
                <p className="text-lg font-semibold mb-2">{fmt(p.precio)}</p>
                {q === 0 ? (
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(ev) => onFly(p, ev)}
                    className="mt-auto py-2 rounded-lg text-xs font-semibold text-white w-full"
                    style={{ backgroundColor: verde }}
                  >
                    + Agregar
                  </motion.button>
                ) : (
                  <div
                    className="mt-auto flex items-center justify-between rounded-lg px-1.5 py-1"
                    style={{ border: `1px solid ${verde}` }}
                  >
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => setQty(p.id, q - 1)}
                      className="w-7 h-7 rounded-md text-lg leading-none font-semibold"
                      style={{ color: verde }}
                      aria-label={`Quitar uno de ${p.nombre}`}
                    >
                      −
                    </motion.button>
                    <motion.span
                      key={q}
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="text-sm font-bold tabular-nums"
                    >
                      {q}
                    </motion.span>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => setQty(p.id, q + 1)}
                      className="w-7 h-7 rounded-md text-lg leading-none font-semibold"
                      style={{ color: verde }}
                      aria-label={`Agregar uno de ${p.nombre}`}
                    >
                      +
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {visibles.length === 0 && (
        <p className="text-sm text-center py-12" style={{ color: muted }}>
          No hay productos en esa categoría.
        </p>
      )}
    </section>
  );
}
