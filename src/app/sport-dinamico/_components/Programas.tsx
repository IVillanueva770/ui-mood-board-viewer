"use client";

import { motion } from "motion/react";
import { palette, type Programa } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { SectionHead } from "./SectionHead";
import { PunchButton } from "./PunchButton";

const NIVEL_COLOR: Record<Programa["nivel"], string> = {
  PRINCIPIANTE: palette.green,
  INTERMEDIO: palette.orange,
  AVANZADO: palette.red,
};

/** Pieza externa: planes de entrenamiento, hover agresivo + barra de intensidad. */
export function Programas({ programas }: { programas: Programa[] }) {
  const { slideIn, liftHard } = useSportMotion();

  return (
    <section>
      <SectionHead kicker="Elegí tu programa" title="PLANES" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {programas.map((p, i) => (
          <motion.div
            key={p.nombre}
            {...slideIn(i * 0.05, i % 2 === 0 ? -60 : 60)}
            {...liftHard}
            className="relative p-5 cursor-pointer"
            style={{
              backgroundColor: p.destacado ? palette.surfaceAlt : palette.surface,
              border: `1px solid ${p.destacado ? palette.orange : palette.border}`,
            }}
          >
            {p.destacado && (
              <span
                className="absolute -top-px right-4 text-[10px] font-bebas tracking-[0.2em] px-2 py-1"
                style={{ backgroundColor: palette.orange, color: palette.bg }}
              >
                MÁS ELEGIDO
              </span>
            )}

            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-bebas text-3xl sm:text-4xl tracking-wide leading-none">
                {p.nombre}
              </h3>
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 shrink-0"
                style={{ border: `1px solid ${NIVEL_COLOR[p.nivel]}`, color: NIVEL_COLOR[p.nivel] }}
              >
                {p.nivel}
              </span>
            </div>

            <p className="text-sm mb-4" style={{ color: palette.muted }}>
              {p.foco}
            </p>

            <div className="flex items-center gap-4 mb-4 text-[11px] uppercase tracking-[0.15em]" style={{ color: palette.muted }}>
              <span>{p.semanas} semanas</span>
              <span style={{ color: palette.faint }}>·</span>
              <span>{p.sesionesSem} / semana</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.faint }}>
                  Intensidad
                </span>
                <span className="font-bebas text-lg leading-none" style={{ color: palette.orange }}>
                  {p.intensidad}
                </span>
              </div>
              <div className="h-2" style={{ backgroundColor: palette.bg }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.intensidad}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                  style={{ backgroundColor: palette.orange }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3" style={{ borderTop: `1px solid ${palette.border}` }}>
              <span className="font-bebas text-2xl tracking-wide">{p.precio}</span>
              <PunchButton className="text-base px-4 py-2">EMPEZAR</PunchButton>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
