"use client";

import { motion } from "motion/react";
import { palette, type Plan } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

/** Pieza externa: planes simples / cómo empezar. Sin letra chica. */
export function Pricing({ planes }: { planes: Plan[] }) {
  const { reveal, press } = usePremiumMotion();
  const { accent, text, muted, border, card } = palette;

  return (
    <section>
      <motion.div {...reveal()} className="mb-9 text-center max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Empezás gratis. Crecés cuando quieras.
        </h2>
        <p className="text-base leading-relaxed" style={{ color: muted }}>
          Sin tarjeta para arrancar, sin permanencia. Pagás solo si tu negocio
          ya está facturando todos los días.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {planes.map((p, i) => {
          const dest = p.destacado;
          return (
            <motion.div
              key={p.id}
              {...reveal(i * 0.07)}
              className="rounded-2xl p-6 relative"
              style={{
                backgroundColor: dest ? accent : card,
                color: dest ? "#ffffff" : text,
                border: `1px solid ${dest ? accent : border}`,
                boxShadow: dest ? `0 18px 40px -16px ${accent}88` : "none",
              }}
            >
              {dest && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/20">
                  Más elegido
                </span>
              )}
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: dest ? "rgba(255,255,255,0.85)" : accent }}
              >
                {p.nombre}
              </p>
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-3xl font-semibold tracking-tight">{p.precio}</span>
                <span
                  className="text-sm mb-1"
                  style={{ color: dest ? "rgba(255,255,255,0.75)" : muted }}
                >
                  / {p.periodo}
                </span>
              </div>
              <p
                className="text-sm mb-5"
                style={{ color: dest ? "rgba(255,255,255,0.85)" : muted }}
              >
                {p.resumen}
              </p>

              <ul className="space-y-2.5 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-0.5 shrink-0"
                      style={{ color: dest ? "#ffffff" : accent }}
                    >
                      ✓
                    </span>
                    <span style={{ color: dest ? "rgba(255,255,255,0.95)" : text }}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                {...press}
                className="w-full py-3 text-sm font-semibold rounded-lg"
                style={
                  dest
                    ? { backgroundColor: "#ffffff", color: accent }
                    : { backgroundColor: palette.accentSoft, color: accent }
                }
              >
                {p.cta}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
