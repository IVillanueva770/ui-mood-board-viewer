"use client";

import { motion } from "motion/react";
import { palette, type Paso } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza externa: cómo funciona el programa en 4 pasos, con línea de progreso. */
export function ComoFunciona({ pasos }: { pasos: Paso[] }) {
  const { reduce, reveal, softLift } = useGentleMotion();
  const { accent, accentSoft, muted, border, card, text } = palette;

  return (
    <section className="max-w-5xl mx-auto px-2 sm:px-4 mt-4">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>
          El programa, paso a paso
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          De la primera charla a moverte sin dolor
        </h2>
      </div>

      <div className="relative">
        {/* Línea de progreso que une los pasos */}
        <div
          aria-hidden
          className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5"
          style={{ backgroundColor: border }}
        />
        <motion.div
          aria-hidden
          className="hidden md:block absolute top-8 left-[12%] h-0.5 origin-left"
          style={{ backgroundColor: accent, right: "12%" }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5">
          {pasos.map((s, i) => (
            <motion.div key={s.n} {...reveal(i * 0.1)} {...softLift} className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 relative"
                style={{ backgroundColor: card, border: `1px solid ${border}` }}
              >
                {s.icon}
                <span
                  className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ backgroundColor: accent }}
                >
                  {s.n}
                </span>
              </div>
              <div
                className="rounded-2xl p-5 h-full"
                style={{ backgroundColor: i === 0 ? accentSoft : card, border: `1px solid ${border}` }}
              >
                <p className="font-semibold mb-1.5" style={{ color: text }}>{s.titulo}</p>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
