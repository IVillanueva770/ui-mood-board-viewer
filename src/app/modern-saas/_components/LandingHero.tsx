"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

/**
 * Pieza externa (hero): eyebrow + headline grande con palabra en gradient +
 * sub + doble CTA (primario + "Ver demo →") + visual de producto con gradient
 * sheen sutil en movimiento. Mucho aire — es la landing SaaS de referencia.
 */
export function LandingHero() {
  const { reduce, tap } = useSaasMotion();
  const { accent, text, muted, border, surface, card } = palette;

  return (
    <section className="relative pt-4 pb-4">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-16 h-80 -z-10 opacity-60 blur-3xl"
        style={{ background: palette.gradientSoft }}
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p
          className="text-xs uppercase tracking-[0.22em] mb-5 font-medium"
          style={{ color: accent }}
        >
          Plataforma · Beta abierta
        </p>
        <h1
          className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] leading-[1.04] mb-7"
          style={{ color: text }}
        >
          Construí{" "}
          <span
            style={{
              background: palette.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            menos infraestructura
          </span>
          , lanzá más producto.
        </h1>
        <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: muted }}>
          La plataforma que reemplaza tu stack de seis pestañas con una sola API.
          Setup en segundos, sin tarjeta de crédito.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            {...tap}
            whileHover={reduce ? undefined : { y: -2, boxShadow: "0 14px 34px -12px rgba(94,106,210,0.5)" }}
            transition={{ duration: 0.2 }}
            className="px-6 py-3 text-sm font-medium rounded-lg"
            style={{ backgroundColor: text, color: "#fff" }}
          >
            Empezar gratis
          </motion.button>
          <motion.button
            {...tap}
            whileHover={reduce ? undefined : { borderColor: text }}
            className="px-6 py-3 text-sm font-medium rounded-lg border"
            style={{ borderColor: "#cbd5e1", color: text, backgroundColor: card }}
          >
            Ver demo →
          </motion.button>
        </div>
      </motion.div>

      {/* Visual de producto: mock dashboard con gradient sheen en movimiento */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-14 rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${border}`,
          backgroundColor: card,
          boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 24px 60px -32px rgba(94,106,210,0.35)",
        }}
      >
        {!reduce && (
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-50"
            style={{
              background:
                "linear-gradient(110deg, transparent 30%, rgba(139,92,246,0.10) 45%, rgba(236,72,153,0.10) 55%, transparent 70%)",
              backgroundSize: "260% 100%",
            }}
            animate={{ backgroundPositionX: ["120%", "-60%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        )}
        <div
          className="relative flex items-center gap-2 px-4 py-2.5"
          style={{ borderBottom: `1px solid ${border}`, backgroundColor: surface }}
        >
          {["#f87171", "#fbbf24", "#34d399"].map((c) => (
            <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
          <span className="ml-3 text-xs font-mono" style={{ color: muted }}>
            acme-prod · production
          </span>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 p-5">
          {[
            { l: "MRR", v: "$ 48.250" },
            { l: "Usuarios", v: "8.420" },
            { l: "Churn", v: "1,8%" },
            { l: "NRR", v: "118%" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-lg p-3"
              style={{ border: `1px solid ${border}`, backgroundColor: card }}
            >
              <p className="text-[11px] mb-1" style={{ color: muted }}>{s.l}</p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: text }}>{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
