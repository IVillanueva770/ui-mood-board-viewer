"use client";

import { motion } from "motion/react";
import { tokens } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";

/** Pieza externa: CTA final. Restraint — fondo ink, un acento violet, sin ruido. */
export function CtaBand() {
  const { press, reveal } = useStripeMotion();

  return (
    <motion.section
      {...reveal(0)}
      className="relative rounded-2xl overflow-hidden px-7 sm:px-12 py-12 sm:py-16"
      style={{ backgroundColor: tokens.ink }}
    >
      <div
        aria-hidden
        className="absolute -right-20 -top-24 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(circle, ${tokens.violet}, transparent 65%)` }}
      />
      <div className="relative max-w-xl">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.025em] mb-3 text-white">
          Mové tu primer dólar hoy
        </h2>
        <p className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: "#94a3b8" }}>
          Sin contrato, sin mínimos. Pricing por transacción, sin costos de
          setup. Empezás en modo test en minutos.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <motion.button
            {...press}
            className="px-6 py-3 text-sm font-semibold rounded-md text-white"
            style={{ backgroundColor: tokens.violet, boxShadow: `0 4px 12px ${tokens.violet}59` }}
          >
            Crear cuenta →
          </motion.button>
          <motion.button
            whileHover={{ color: "#ffffff" }}
            transition={{ duration: 0.16 }}
            className="px-6 py-3 text-sm font-semibold rounded-md"
            style={{ border: "1px solid rgba(255,255,255,0.18)", color: "#cbd5e1" }}
          >
            Ver la documentación
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
