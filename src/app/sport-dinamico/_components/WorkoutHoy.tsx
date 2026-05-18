"use client";

import { motion } from "motion/react";
import { palette, type WorkoutHoy as WorkoutHoyT } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { PunchButton } from "./PunchButton";

/** Pieza interna: el entrenamiento de HOY — foco, ejercicios, progreso de serie. */
export function WorkoutHoy({ w }: { w: WorkoutHoyT }) {
  const { slideIn, charge, reduce } = useSportMotion();
  const pct = Math.round((w.serieActual / w.seriesTotal) * 100);

  return (
    <section>
      {/* Card grande del día */}
      <motion.div
        {...slideIn(0, -50)}
        className="relative overflow-hidden mb-4"
        style={{
          background: `linear-gradient(135deg, ${palette.surfaceAlt} 0%, ${palette.bg} 55%, #2a1410 100%)`,
          border: `1px solid ${palette.border}`,
        }}
      >
        <div
          aria-hidden
          className="absolute -right-24 -top-24 w-80 h-80 -skew-x-12"
          style={{ background: `linear-gradient(180deg, ${palette.orange}22, transparent 70%)` }}
        />
        <div className="relative px-6 sm:px-8 py-8">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: palette.orange }}>
            Día {w.dia} · Semana {w.semana} · {w.fecha}
          </p>
          <h2 className="font-bebas text-5xl sm:text-7xl leading-[0.85] tracking-wide mb-3">
            {w.titulo}
          </h2>
          <p className="text-sm mb-6" style={{ color: palette.muted }}>
            {w.foco} · ~{w.duracionMin} min · descanso {w.descansoSeg}″
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <PunchButton className="text-3xl px-10 py-4">EMPEZAR ▶</PunchButton>
            <div className="flex-1 min-w-[180px]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
                  Progreso de serie
                </span>
                <span className="font-bebas text-lg leading-none" style={{ color: palette.orange }}>
                  {w.serieActual} / {w.seriesTotal}
                </span>
              </div>
              <div className="h-2.5" style={{ backgroundColor: palette.bg }}>
                <motion.div
                  initial={{ width: reduce ? `${pct}%` : 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                  style={{ backgroundColor: palette.orange }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lista de ejercicios */}
      <div className="space-y-2">
        {w.ejercicios.map((ej, i) => (
          <motion.div
            key={ej.nombre}
            {...slideIn(i * 0.05, -45)}
            {...charge}
            className="grid grid-cols-12 gap-3 p-4 items-center cursor-pointer"
            style={{
              backgroundColor: palette.surface,
              border: `1px solid ${palette.border}`,
              borderLeft: `3px solid ${ej.hecho ? palette.green : palette.orange}`,
              opacity: ej.hecho ? 0.65 : 1,
            }}
          >
            <div
              className="col-span-1 font-bebas text-2xl leading-none"
              style={{ color: ej.hecho ? palette.green : palette.orange }}
            >
              {ej.hecho ? "✓" : String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-7 sm:col-span-6 min-w-0">
              <p className="font-bebas text-xl sm:text-2xl tracking-wide leading-none">
                {ej.nombre}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-2 text-center">
              <p className="font-bebas text-xl tracking-wide leading-none">
                {ej.series}×{ej.reps}
              </p>
              <p className="text-[9px] uppercase tracking-widest" style={{ color: palette.faint }}>
                series
              </p>
            </div>
            <div className="col-span-2 sm:col-span-3 text-right">
              <span
                className="font-bebas text-xl tracking-wide px-2.5 py-1"
                style={{ backgroundColor: palette.surfaceAlt, color: palette.ink }}
              >
                {ej.carga}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
