"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

/**
 * Pieza externa (hero): claro y confiable, NO oscuro técnico. Claim de
 * negocio + CTA + preview de un dashboard limpio (mock estático prolijo,
 * con una mini-curva que se dibuja). Sienta el tono "premium amigable".
 */
export function Hero() {
  const { reduce, press, EASE } = usePremiumMotion();
  const { accent, text, muted, border, card } = palette;

  // Mini-sparkline decorativa del preview (se dibuja una vez).
  const spark = [16, 22, 19, 28, 34, 31, 42, 48];
  const sw = 220;
  const sh = 56;
  const smax = Math.max(...spark);
  const smin = Math.min(...spark);
  const sd = spark
    .map((v, i) => {
      const x = (i / (spark.length - 1)) * sw;
      const y = sh - ((v - smin) / (smax - smin)) * (sh - 6) - 3;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <section className="relative overflow-hidden rounded-3xl px-6 sm:px-10 pt-12 pb-12 sm:pt-16"
      style={{ backgroundColor: card, border: `1px solid ${border}` }}>
      <div
        aria-hidden
        className="absolute -top-24 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50"
        style={{ background: `radial-gradient(circle, ${accent}33, transparent 65%)` }}
      />

      <div className="relative grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-5"
            style={{ color: accent }}
          >
            Cobros y métricas
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
            className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.08] mb-5"
          >
            Tu negocio en números,
            <br />
            <span style={{ color: accent }}>claro y a tiempo.</span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-md"
            style={{ color: muted }}
          >
            Cuánto entró, quién te debe y cómo venís contra el mes pasado.
            Pensado para que lo entiendas vos, no tu sistema.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.button
              {...press}
              className="px-6 py-3 text-sm font-semibold rounded-lg text-white"
              style={{ backgroundColor: accent, boxShadow: `0 8px 20px -8px ${accent}99` }}
            >
              Crear cuenta gratis
            </motion.button>
            <motion.button
              {...press}
              className="px-6 py-3 text-sm font-semibold rounded-lg"
              style={{ border: `1px solid ${border}`, color: text }}
            >
              Ver demo →
            </motion.button>
          </motion.div>
        </div>

        {/* Preview de dashboard limpio */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="rounded-2xl p-5"
          style={{ backgroundColor: palette.surface, border: `1px solid ${border}` }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold" style={{ color: muted }}>Ingresos del mes</p>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-medium"
              style={{ backgroundColor: palette.okBg, color: palette.okFg }}
            >
              +12,4%
            </span>
          </div>
          <p className="text-3xl font-semibold tracking-tight mb-4">$4.820.000</p>
          <svg viewBox={`0 0 ${sw} ${sh}`} className="w-full" style={{ height: "auto" }} aria-hidden>
            <motion.path
              d={sd}
              fill="none"
              stroke={accent}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
            />
          </svg>
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { k: "Cobros", v: "318" },
              { k: "Ticket", v: "$15.160" },
              { k: "A término", v: "96,4%" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg p-3" style={{ backgroundColor: card, border: `1px solid ${border}` }}>
                <p className="text-[10px] mb-1" style={{ color: muted }}>{s.k}</p>
                <p className="text-sm font-semibold tabular-nums">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
