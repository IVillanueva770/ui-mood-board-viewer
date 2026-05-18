"use client";

import { motion } from "motion/react";
import { palette, type Trend, type Sugerido } from "../_data";
import { useWebMotion } from "./use-web-motion";

/**
 * Pieza interna: explorar — buscador + tendencias + a quién seguir.
 * En desktop vive como rail lateral; en mobile colapsa y stackea (web).
 */
export function Explorar({
  trends,
  sugeridos,
}: {
  trends: Trend[];
  sugeridos: Sugerido[];
}) {
  const { reduce, tap } = useWebMotion();
  const { accent, text, muted, border, surface, card } = palette;

  return (
    <div className="space-y-4">
      <input
        readOnly
        placeholder="Buscar temas, personas, hashtags"
        className="w-full px-4 py-2.5 rounded-full text-sm outline-none"
        style={{ backgroundColor: card, border: `1px solid ${border}`, color: text }}
      />

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: surface, border: `1px solid ${border}` }}>
        <p className="px-4 py-3 font-bold text-sm" style={{ color: text }}>Tendencias en Argentina</p>
        {trends.map((tr, i) => (
          <motion.button
            key={tr.tag}
            whileHover={reduce ? undefined : { backgroundColor: card }}
            className="w-full text-left px-4 py-2.5"
            style={{ borderTop: `1px solid ${border}` }}
          >
            <p className="text-[11px]" style={{ color: muted }}>{tr.cat}</p>
            <p className="font-bold text-sm" style={{ color: text }}>{tr.tag}</p>
            <p className="text-xs" style={{ color: muted }}>{tr.posts}</p>
          </motion.button>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: surface, border: `1px solid ${border}` }}>
        <p className="px-4 py-3 font-bold text-sm" style={{ color: text }}>A quién seguir</p>
        {sugeridos.map((s) => (
          <div
            key={s.handle}
            className="flex items-center gap-3 px-4 py-3"
            style={{ borderTop: `1px solid ${border}` }}
          >
            <div className="w-10 h-10 rounded-full shrink-0" style={{ background: s.avatar }} />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm truncate" style={{ color: text }}>{s.nombre}</p>
              <p className="text-xs truncate" style={{ color: muted }}>{s.handle} · {s.bio}</p>
            </div>
            <motion.button
              {...tap}
              className="px-4 py-1.5 rounded-full text-xs font-bold shrink-0"
              style={{ backgroundColor: text, color: card }}
            >
              Seguir
            </motion.button>
          </div>
        ))}
        <button className="w-full text-left px-4 py-3 text-sm font-medium" style={{ color: accent, borderTop: `1px solid ${border}` }}>
          Mostrar más
        </button>
      </div>
    </div>
  );
}
