"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette } from "../_data";

/** Pieza externa: band CTA final — cierre del pitch, sin jerga. */
export function FinalCta() {
  const reduce = useReducedMotion();
  const { verde, text, border } = palette;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-8 sm:p-12 text-center"
      style={{ background: "linear-gradient(135deg,#dcfce7 0%, #fef3c7 100%)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: verde }}>
        Pensado para vos
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 max-w-2xl mx-auto">
        Hecho para el comerciante,<br />no para el ingeniero.
      </h2>
      <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: text }}>
        Si sabés usar WhatsApp, sabés usar esto. Sin manuales, sin curso, sin llamar a un técnico
        cada vez.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="px-7 py-3.5 rounded-lg text-sm font-semibold text-white shadow-sm"
          style={{ backgroundColor: verde }}
        >
          Entrar al panel
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-7 py-3.5 rounded-lg text-sm font-semibold bg-white"
          style={{ border: `1px solid ${border}`, color: text }}
        >
          Hablar con alguien
        </motion.button>
      </div>
    </motion.div>
  );
}
