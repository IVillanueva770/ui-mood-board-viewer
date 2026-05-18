"use client";

import { motion } from "motion/react";
import { tokens, mono } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/** Pieza externa: CTA final + cierre técnico minimal (restraint, no grita). */
export function CtaBand() {
  const { reduce, cta, press } = useLinearMotion();
  const t = tokens;

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-xl text-center px-6 py-16 sm:py-20"
      style={{ backgroundColor: t.surface, border: `1px solid ${t.line}` }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 -z-0 opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 100%, ${t.lime} 0%, transparent 65%)` }}
      />
      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.3em] mb-5 font-semibold" style={{ color: t.lime, fontFamily: mono }}>
          empezá hoy
        </p>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-5 max-w-2xl mx-auto">
          Tu próximo cycle puede empezar en 30 segundos.
        </h2>
        <p className="text-sm sm:text-base mb-10 max-w-md mx-auto" style={{ color: t.fg2 }}>
          Gratis para equipos chicos. Sin tarjeta. Importás tus issues y arrancás.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <motion.button
            {...cta}
            className="px-6 py-3 text-sm font-semibold rounded"
            style={{ backgroundColor: t.lime, color: t.bg }}
          >
            Crear workspace
          </motion.button>
          <motion.button
            {...press}
            className="px-6 py-3 text-sm font-semibold rounded transition-colors"
            style={{ backgroundColor: "transparent", color: t.fg, border: `1px solid ${t.lineStrong}` }}
          >
            Ver la documentación →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
