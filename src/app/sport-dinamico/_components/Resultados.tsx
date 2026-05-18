"use client";

import { motion } from "motion/react";
import { palette, type ResultadoStat, type Testimonio } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { SectionHead } from "./SectionHead";
import { Counter } from "./Counter";

/** Pieza externa: resultados de la comunidad (counter sprint) + testimonios. */
export function Resultados({
  resultados,
  testimonios,
}: {
  resultados: ResultadoStat[];
  testimonios: Testimonio[];
}) {
  const { slideIn } = useSportMotion();

  return (
    <section>
      <SectionHead kicker="No te lo decimos nosotros" title="RESULTADOS" />

      {/* Stats grandes con counter sprint */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-8"
        style={{ border: `1px solid ${palette.border}` }}
      >
        {resultados.map((r, i) => (
          <div
            key={r.label}
            className="p-5 sm:p-6"
            style={{
              borderRight: i < resultados.length - 1 ? `1px solid ${palette.border}` : "none",
              backgroundColor: i === 1 || i === 2 ? palette.surface : "transparent",
            }}
          >
            <p className="font-bebas text-3xl sm:text-5xl leading-none tracking-wide mb-2" style={{ color: palette.orange }}>
              <Counter to={r.val} decimals={r.decimals ?? 0} suffix={r.suffix} durationMs={1000} />
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: palette.muted }}>
              {r.label}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonios de atletas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {testimonios.map((t, i) => (
          <motion.div
            key={t.nombre}
            {...slideIn(i * 0.07, -50)}
            className="p-5 flex flex-col"
            style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}` }}
          >
            <p
              className="font-bebas text-xl tracking-wide mb-3 pb-3"
              style={{ color: palette.orange, borderBottom: `1px solid ${palette.border}` }}
            >
              {t.logro}
            </p>
            <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: palette.ink }}>
              “{t.texto}”
            </p>
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 flex items-center justify-center font-bebas text-sm tracking-wider shrink-0"
                style={{ backgroundColor: palette.orange, color: palette.bg }}
              >
                {t.iniciales}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{t.nombre}</p>
                <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: palette.muted }}>
                  {t.edad} · {t.ciudad}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
