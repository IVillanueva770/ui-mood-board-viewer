"use client";

import { motion } from "motion/react";
import { palette, type SettingsGroup, type Perfil } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/**
 * Pieza interna (tab Perfil): tarjeta de cuenta + ajustes agrupados estilo
 * iOS Settings (grupos con header, filas con chevron, separadores hairline).
 */
export function PerfilTab({
  perfil,
  grupos,
}: {
  perfil: Perfil;
  grupos: SettingsGroup[];
}) {
  const { enter, tap } = useIosMotion();
  const { text, muted, groupBg, sep, red } = palette;

  return (
    <div className="p-5">
      <h1 className="text-[28px] font-bold tracking-tight mb-6" style={{ color: text }}>
        Perfil
      </h1>

      <motion.div
        {...enter(0)}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 p-4 rounded-2xl mb-6 cursor-pointer"
        style={{ backgroundColor: groupBg }}
      >
        <span
          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg text-white shrink-0"
          style={{ background: "linear-gradient(135deg,#007aff,#5856d6)" }}
        >
          {perfil.inicial}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold" style={{ color: text }}>
            {perfil.nombre}
          </p>
          <p className="text-xs truncate" style={{ color: muted }}>
            {perfil.email} · {perfil.sync}
          </p>
        </div>
        <span style={{ color: muted }}>›</span>
      </motion.div>

      {grupos.map((g, gi) => (
        <div key={g.titulo} className="mb-5">
          <p
            className="text-[11px] uppercase tracking-wider font-semibold mb-2 px-3"
            style={{ color: muted }}
          >
            {g.titulo}
          </p>
          <motion.div
            {...enter(gi + 1)}
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: groupBg }}
          >
            {g.items.map((it, i) => (
              <motion.div
                key={it.label}
                whileTap={{ backgroundColor: "#e5e5ea" }}
                className="flex items-center gap-3 p-3.5 cursor-pointer"
                style={{ borderTop: i > 0 ? `0.5px solid ${sep}` : "none" }}
              >
                <span className="text-lg shrink-0">{it.icon}</span>
                <span className="flex-1 text-sm font-medium" style={{ color: text }}>
                  {it.label}
                </span>
                <span className="text-sm" style={{ color: muted }}>
                  {it.val}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      <motion.button
        {...tap}
        className="w-full py-3.5 rounded-2xl text-sm font-semibold"
        style={{ backgroundColor: groupBg, color: red }}
      >
        Cerrar sesión
      </motion.button>
    </div>
  );
}
