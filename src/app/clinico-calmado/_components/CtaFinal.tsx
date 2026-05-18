"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

/** Pieza externa: CTA final, restraint (un solo mensaje, sin ruido). */
export function CtaFinal() {
  const { reduce, reveal, tap } = useAiryMotion();
  const { accent, muted, border, card, text } = palette;

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4">
      <motion.div
        {...reveal(0)}
        className="rounded-3xl p-10 sm:p-14 text-center"
        style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%)", border: `1px solid ${border}` }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3" style={{ color: text }}>
          Probalo dos semanas. Sin tarjeta.
        </h2>
        <p className="text-sm sm:text-base mb-8 max-w-md mx-auto" style={{ color: muted }}>
          Migramos tu agenda y tus pacientes por vos. Si no te ordena el consultorio,
          no pagás nada.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <motion.button
            {...tap}
            whileHover={reduce ? undefined : { y: -2 }}
            className={`px-7 py-3 rounded-full text-sm font-semibold text-white ${focusRing}`}
            style={{ backgroundColor: accent, boxShadow: "0 4px 14px rgba(14,165,233,0.3)" }}
          >
            Empezar prueba gratis
          </motion.button>
          <motion.button
            {...tap}
            className={`px-7 py-3 rounded-full text-sm font-semibold ${focusRing}`}
            style={{ backgroundColor: card, color: text, border: `1px solid ${border}` }}
          >
            Hablar con el equipo
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
