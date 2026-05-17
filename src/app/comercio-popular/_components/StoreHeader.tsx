"use client";

import { motion } from "motion/react";
import { palette, type Comercio } from "../_data";

/** Pieza externa: cabecera del comercio + buscador de productos. */
export function StoreHeader({ comercio }: { comercio: Comercio }) {
  const { verde, verdeSoft, muted, border } = palette;

  return (
    <div>
      <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ backgroundColor: verdeSoft }}
          >
            🏪
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{comercio.nombre}</h1>
            <p className="text-xs" style={{ color: muted }}>{comercio.direccion}</p>
          </div>
        </div>
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: verdeSoft, color: verde }}
        >
          ● {comercio.estado}
        </span>
      </div>

      <div
        className="bg-white rounded-xl mt-5 mb-5 flex items-center gap-2 px-4 py-3"
        style={{ border: `1px solid ${border}` }}
      >
        <span style={{ color: muted }}>🔎</span>
        <input
          className="flex-1 bg-transparent outline-none text-sm"
          placeholder="Buscar productos… ej. yerba, leche, fideos"
          readOnly
        />
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="text-sm font-semibold px-3 py-1 rounded-lg text-white"
          style={{ backgroundColor: verde, color: "#fff" }}
        >
          Buscar
        </motion.button>
      </div>
    </div>
  );
}
