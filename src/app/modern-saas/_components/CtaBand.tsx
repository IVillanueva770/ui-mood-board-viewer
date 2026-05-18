"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useSaasMotion } from "./use-saas-motion";

/**
 * Pieza externa (CTA final): banda full-width con gradient sutil + doble CTA.
 * Cierre de la landing antes del footer.
 */
export function CtaBand() {
  const { reduce, reveal, tap } = useSaasMotion();

  return (
    <motion.section
      {...reveal()}
      className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-14 sm:py-16 text-center"
      style={{ backgroundColor: palette.text }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(94,106,210,0.45), transparent 55%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.35), transparent 55%)",
        }}
      />
      <div className="relative">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-white">
          Desplegá tu primera API hoy.
        </h2>
        <p className="text-base mb-9 max-w-md mx-auto" style={{ color: "#cbd5e1" }}>
          Gratis hasta que tengas tracción. Sin tarjeta, sin llamada de ventas,
          sin migración dolorosa.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button
            {...tap}
            whileHover={reduce ? undefined : { y: -2, boxShadow: "0 14px 34px -12px rgba(255,255,255,0.35)" }}
            className="px-6 py-3 text-sm font-medium rounded-lg"
            style={{ backgroundColor: "#fff", color: palette.text }}
          >
            Empezar gratis
          </motion.button>
          <motion.button
            {...tap}
            whileHover={reduce ? undefined : { borderColor: "#fff" }}
            className="px-6 py-3 text-sm font-medium rounded-lg border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
          >
            Leer la documentación →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
