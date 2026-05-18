"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useIosMotion } from "./use-ios-motion";

export type TabId = "hoy" | "turnos" | "progreso" | "perfil";

export const TABS: { id: TabId; icon: string; label: string }[] = [
  { id: "hoy", icon: "🏠", label: "Hoy" },
  { id: "turnos", icon: "📅", label: "Turnos" },
  { id: "progreso", icon: "📊", label: "Progreso" },
  { id: "perfil", icon: "👤", label: "Perfil" },
];

/**
 * Pieza interna (navegación firma iOS): tab bar abajo, anclado al frame del
 * teléfono. Es la firma del mood — NO se reemplaza por un sidebar ni se
 * esconde. Ícono activo con spring (escala/elevación) + punto indicador con
 * layout spring. Cada tab abre una pieza funcional distinta.
 */
export function TabBar({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  const { reduce } = useIosMotion();
  const { accent, muted } = palette;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 px-5 pt-2 pb-3 flex items-stretch justify-around"
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: `0.5px solid ${palette.sep}`,
      }}
    >
      {TABS.map((t) => {
        const a = active === t.id;
        return (
          <motion.button
            key={t.id}
            onClick={() => onChange(t.id)}
            whileTap={reduce ? undefined : { scale: 0.85 }}
            transition={{ type: "spring", stiffness: 600, damping: 18 }}
            className="flex flex-col items-center gap-0.5 relative px-3 flex-1"
            aria-label={t.label}
            aria-current={a ? "page" : undefined}
          >
            <motion.span
              animate={reduce ? undefined : { scale: a ? 1.16 : 1, y: a ? -1 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="text-xl leading-none"
            >
              {t.icon}
            </motion.span>
            <motion.span
              animate={{ color: a ? accent : muted }}
              className="text-[10px] font-semibold"
            >
              {t.label}
            </motion.span>
            {a && (
              <motion.span
                layoutId={reduce ? undefined : "ios-tab-dot"}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute -bottom-1 w-1 h-1 rounded-full"
                style={{ backgroundColor: accent }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
