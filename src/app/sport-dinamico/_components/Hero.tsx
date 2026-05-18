"use client";

import { motion } from "motion/react";
import { palette, type HeroStat } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { PunchButton } from "./PunchButton";
import { Counter } from "./Counter";

/** Pieza externa (hero): tipografía GIGANTE, dark + naranja, diagonal viva. */
export function Hero({ stats }: { stats: HeroStat[] }) {
  const { reduce } = useSportMotion();

  return (
    <section className="relative overflow-hidden text-center pt-6 pb-12">
      {/* Diagonal naranja en movimiento (firma de fondo) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: reduce ? 0 : -120 }}
        animate={{ opacity: 0.22, x: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[130%] h-80 -skew-y-6 -z-0 blur-3xl"
        style={{ background: `radial-gradient(circle, ${palette.orange}, transparent 70%)` }}
      />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, x: reduce ? 0 : -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.4em] mb-6 font-bold"
          style={{ color: palette.orange }}
        >
          FUERZA · CARDIO · MOVILIDAD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: reduce ? 0 : -80, skewX: reduce ? 0 : -6 }}
          animate={{ opacity: 1, x: 0, skewX: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="font-bebas text-7xl sm:text-9xl leading-[0.82] tracking-wide mb-6"
        >
          ENTRENÁS<br />
          <span style={{ color: palette.orange }}>VOS.</span> NO LA APP.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-base sm:text-lg max-w-xl mx-auto mb-10"
          style={{ color: palette.muted }}
        >
          Plan armado por entrenadores reales. Progresión semanal que se ajusta a
          vos. Sin gamificación de jardín que infla métricas falsas.
        </motion.p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <PunchButton className="text-2xl px-8 py-3.5">EMPEZÁ 7 DÍAS GRATIS</PunchButton>
          <PunchButton variant="outline" className="text-2xl px-8 py-3.5">
            VER PLANES →
          </PunchButton>
        </div>

        <div
          className="grid grid-cols-3 gap-0 max-w-3xl mx-auto"
          style={{ border: `1px solid ${palette.border}` }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-5 text-center"
              style={{ borderRight: i < stats.length - 1 ? `1px solid ${palette.border}` : "none" }}
            >
              <p className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">
                <Counter to={s.val} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.2em] font-bold"
                style={{ color: palette.muted }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
