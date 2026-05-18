"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza externa (hero): confiable-cálido, claim médico serio pero humano. */
export function LandingHero() {
  const { reduce, calmTap } = useGentleMotion();
  const { accent, accentSoft, accentDeep, text, muted, border, card } = palette;

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative max-w-5xl mx-auto px-2 sm:px-4 pt-8 pb-12 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-3xl -z-0"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)" }}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: accentSoft, color: accentDeep }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            <span className="text-xs font-semibold tracking-wide">Kinesiología y rehabilitación · acompañada</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] mb-4">
            Tu recuperación,
            <br />
            <span style={{ color: accent }}>acompañada.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: muted }}>
            Un kinesiólogo matriculado arma un plan a tu medida y te sigue de cerca. Hacés
            los ejercicios desde casa, sin sentirte en un hospital ni perdido en jerga médica.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.button
              {...calmTap}
              whileHover={reduce ? undefined : { y: -2, boxShadow: "0 14px 30px -12px rgba(59,130,246,0.5)" }}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              Empezar evaluación gratis
            </motion.button>
            <motion.button
              {...calmTap}
              whileHover={reduce ? undefined : { y: -2 }}
              className="px-5 py-3 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: card, color: text, border: `1px solid ${border}` }}
            >
              Cómo funciona →
            </motion.button>
          </div>
          <p className="text-xs mt-5" style={{ color: muted }}>
            Sin tarjeta · primera evaluación sin costo · profesionales matriculados
          </p>
        </div>

        {/* Ilustración suave: figura abstracta en calma */}
        <div className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl p-8 aspect-[4/3] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 60%, #fef3c7 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: card }}
              >
                🩺
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: text }}>Plan de Lucas</p>
                <p className="text-xs" style={{ color: muted }}>Lic. Romina Vázquez · semana 4 de 8</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { l: "Sentadilla isométrica", d: "Hecho" },
                { l: "Estiramiento isquios", d: "Hecho" },
                { l: "Puente de glúteos", d: "Hoy" },
              ].map((row, i) => (
                <motion.div
                  key={row.l}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs"
                  style={{ backgroundColor: "rgba(255,255,255,0.75)", color: text }}
                >
                  <span>{row.l}</span>
                  <span style={{ color: row.d === "Hoy" ? accent : palette.greenText }}>{row.d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
