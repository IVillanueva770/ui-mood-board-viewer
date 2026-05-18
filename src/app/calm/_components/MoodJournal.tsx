"use client";

import { motion } from "motion/react";
import { palette, type MoodEntry } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza interna (4): registro de ánimo de la semana. Visual calmo — barras
 * suaves que se llenan lento, sin gráfico agresivo ni juicio. Solo observar.
 */
export function MoodJournal({ entradas }: { entradas: MoodEntry[] }) {
  const { reveal } = useCalmMotion();
  const { sage, ink, muted, line } = palette;

  return (
    <section id="calm-mood" className="scroll-mt-10">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-3"
        style={{ color: sage }}
      >
        mood checkins
      </motion.p>
      <motion.h2
        {...reveal(0.06)}
        className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-3"
        style={{ color: ink }}
      >
        Tu semana,{" "}
        <em className="italic" style={{ color: sage }}>
          vista desde adentro.
        </em>
      </motion.h2>
      <motion.p
        {...reveal(0.12)}
        className="font-cormorant italic text-lg mb-12"
        style={{ color: muted }}
      >
        Sin juzgar, sin métricas. Solo observar.
      </motion.p>

      <div className="space-y-6">
        {entradas.map((m, i) => (
          <motion.div
            key={m.dia}
            {...reveal(i * 0.06)}
            className="grid grid-cols-12 gap-4 items-center pb-6"
            style={{ borderBottom: `1px solid ${line}` }}
          >
            <div className="col-span-3 sm:col-span-2">
              <p
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: sage }}
              >
                {m.dia}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-2xl">{m.emoji}</div>
            <div className="col-span-7 sm:col-span-6">
              <p
                className="font-cormorant italic text-2xl mb-1"
                style={{ color: ink }}
              >
                {m.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {m.nota}
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3">
              <div
                className="h-1 rounded-full overflow-hidden mb-1"
                style={{ backgroundColor: line }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.barra}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.4, delay: i * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
                  className="h-full"
                  style={{ backgroundColor: sage }}
                />
              </div>
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: sage }}
              >
                {m.hora}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
