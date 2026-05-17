"use client";

import { motion } from "motion/react";
import { palette } from "../_data";

/** Pieza externa: hero del pitch (sin tecnicismos) + CTAs. */
export function LandingHero() {
  const { verde, verdeSoft, text, muted, border } = palette;

  return (
    <div className="text-center mb-9">
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
        style={{ backgroundColor: verdeSoft, color: verde }}
      >
        <span>●</span>
        <span className="text-xs font-semibold">Para comerciantes y kioscos · sin tecnicismos</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-4 max-w-3xl mx-auto">
        Tu negocio, ordenado<br />en una sola pantalla.
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: muted }}>
        Pedidos, productos, clientes y cobros: todo junto, sin abrir mil pestañas. Pensado para que
        entres y lo entiendas al toque.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 10px 24px -8px rgba(22,163,74,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 rounded-lg text-sm font-semibold text-white"
          style={{ backgroundColor: verde }}
        >
          Entrar al panel
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-5 py-3 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: "#ffffff", color: text, border: `1px solid ${border}` }}
        >
          Ver cómo se usa →
        </motion.button>
      </div>
    </div>
  );
}
