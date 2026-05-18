"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useSportMotion } from "./use-sport-motion";

/** Pieza externa: cierre full-bleed naranja, urgencia, sin sutileza. */
export function CtaFinal() {
  const { reduce, punch } = useSportMotion();

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: palette.orange }}>
      {/* Wipe diagonal oscuro que barre el bloque al entrar */}
      <motion.div
        aria-hidden
        initial={{ x: reduce ? "0%" : "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-y-0 w-1/2 -skew-x-12 pointer-events-none"
        style={{ background: "rgba(10,10,10,0.18)" }}
      />

      <div className="relative px-6 py-14 sm:py-20 text-center">
        <motion.p
          initial={{ opacity: 0, x: reduce ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.4em] font-bold mb-5"
          style={{ color: palette.bg }}
        >
          Sin contrato · cancelás cuando quieras
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: reduce ? 0 : -70, skewX: reduce ? 0 : -6 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-bebas text-5xl sm:text-7xl leading-[0.85] tracking-wide mb-8"
          style={{ color: palette.bg }}
        >
          TU PRÓXIMA EXCUSA<br />
          YA TE ESTÁ ESPERANDO.<br />
          NO LA ESCUCHES.
        </motion.h2>

        <motion.button
          {...punch}
          type="button"
          className="font-bebas text-3xl tracking-wider uppercase px-12 py-4"
          style={{ backgroundColor: palette.bg, color: palette.orange }}
        >
          EMPEZÁ HOY →
        </motion.button>

        <p
          className="mt-7 text-xs uppercase tracking-[0.3em] font-bold"
          style={{ color: palette.bg, opacity: 0.75 }}
        >
          23.400 atletas ya arrancaron. Hoy te toca.
        </p>
      </div>
    </section>
  );
}
