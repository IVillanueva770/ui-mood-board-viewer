"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useWebMotion } from "./use-web-motion";

/**
 * Chrome del app interno: barra superior de SITIO WEB (brand + search + nav).
 * Deliberadamente NO es un bottom-tab nativo — esa es la diferencia legible
 * con ios-native: acá es claramente una web responsive.
 */
export function AppTopBar() {
  const { reduce, tap } = useWebMotion();
  const { accent, text, muted, border, surface, card } = palette;

  const links = ["Inicio", "Explorar", "Notificaciones", "Mensajes"];

  return (
    <div
      className="sticky top-0 z-20 flex items-center gap-4 px-4 sm:px-6 py-3 backdrop-blur-md"
      style={{ backgroundColor: "rgba(255,255,255,0.86)", borderBottom: `1px solid ${border}` }}
    >
      <div className="flex items-center gap-2 shrink-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
          style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" }}
        >
          N
        </div>
        <span className="font-bold hidden sm:inline" style={{ color: text }}>Nube</span>
      </div>

      <nav className="hidden md:flex items-center gap-6 ml-2">
        {links.map((l, i) => (
          <a
            key={l}
            href="#"
            className="text-sm font-medium relative"
            style={{ color: i === 0 ? text : muted }}
          >
            {l}
            {i === 0 && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: accent }} />
            )}
          </a>
        ))}
      </nav>

      <div className="flex-1 max-w-xs ml-auto">
        <input
          readOnly
          placeholder="Buscar en Nube"
          className="w-full px-4 py-2 rounded-full text-sm outline-none"
          style={{ backgroundColor: surface, border: `1px solid ${border}`, color: text }}
        />
      </div>

      <motion.button
        {...tap}
        className="px-4 py-2 rounded-full text-sm font-bold text-white shrink-0 hidden sm:block"
        style={{ backgroundColor: accent }}
      >
        Postear
      </motion.button>
      <div
        className="w-9 h-9 rounded-full shrink-0"
        style={{ background: "linear-gradient(135deg,#1d9bf0,#8b5cf6)", border: `2px solid ${card}` }}
      />
    </div>
  );
}
