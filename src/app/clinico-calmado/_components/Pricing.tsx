"use client";

import { motion } from "motion/react";
import { palette, type Plan } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

/** Pieza externa: pricing (software profesional → el pricing es esperado). */
export function Pricing({ planes }: { planes: Plan[] }) {
  const { reduce, reveal, tap } = useAiryMotion();
  const { accent, accentDeep, muted, border, card, surface, text } = palette;

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.22em] mb-2 font-semibold" style={{ color: accent }}>
          Planes
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Pagás por lo que usás, sin sorpresas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {planes.map((p, i) => (
          <motion.div
            key={p.nombre}
            {...reveal(i * 0.08)}
            className="rounded-2xl p-7 flex flex-col relative"
            style={{
              backgroundColor: p.destacado ? card : surface,
              border: `1px solid ${p.destacado ? accent : border}`,
              boxShadow: p.destacado ? "0 18px 40px -24px rgba(14,165,233,0.4)" : "none",
            }}
          >
            {p.destacado && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: accent }}
              >
                Más elegido
              </span>
            )}
            <p className="text-sm font-semibold mb-1" style={{ color: accentDeep }}>{p.nombre}</p>
            <p className="text-xs mb-4" style={{ color: muted }}>{p.resumen}</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-semibold tracking-tight" style={{ color: text }}>{p.precio}</span>
              <span className="text-sm" style={{ color: muted }}>{p.periodo}</span>
            </div>
            <ul className="space-y-2.5 mb-7 flex-1">
              {p.features.map((ft) => (
                <li key={ft} className="flex items-start gap-2 text-sm" style={{ color: text }}>
                  <span className="mt-0.5 shrink-0" style={{ color: accent }}>✓</span>
                  <span>{ft}</span>
                </li>
              ))}
            </ul>
            <motion.button
              {...tap}
              whileHover={reduce ? undefined : { y: -2 }}
              className={`w-full py-2.5 rounded-full text-sm font-semibold ${focusRing}`}
              style={
                p.destacado
                  ? { backgroundColor: accent, color: "#ffffff" }
                  : { backgroundColor: card, color: text, border: `1px solid ${border}` }
              }
            >
              {p.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
