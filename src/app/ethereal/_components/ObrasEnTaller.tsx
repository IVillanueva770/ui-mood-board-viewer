"use client";

import { motion } from "motion/react";
import type { CapacidadStat, ObraTaller } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

/** Pieza interna: obras en el taller con etapa, avance y strip de capacidad. */
export function ObrasEnTaller({
  obras,
  capacidad,
}: {
  obras: ObraTaller[];
  capacidad: CapacidadStat[];
}) {
  const { reduce, drift } = useEtherealMotion();

  return (
    <section>
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: palette.accent }}>
          obras / en taller
        </p>
        <MaskHeading className="font-bebas text-4xl sm:text-6xl tracking-wide leading-none">
          CADA OBRA <em className="italic" style={{ color: palette.accent }}>tiene</em>
          <br />SU CADENA DE GESTOS.
        </MaskHeading>
      </div>

      <div className="space-y-10 mb-14">
        {obras.map((o, i) => (
          <motion.div key={o.id} {...drift(i * 0.08)} className={`group max-w-2xl ${o.offset}`}>
            <div className="flex items-baseline gap-4 mb-1.5">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: palette.faint }}>
                {o.num}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: palette.accent }}>
                {o.etapa}
              </span>
            </div>
            <h3
              className="font-bebas text-3xl sm:text-5xl tracking-wide leading-none mb-3 transition-colors group-hover:[color:#ff3b00]"
              style={{ color: palette.fg }}
            >
              {o.titulo}
            </h3>
            <div className="h-px w-full mb-2" style={{ backgroundColor: palette.border }}>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: o.progreso / 100 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0.3 : 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-px origin-left"
                style={{ backgroundColor: palette.accent }}
              />
            </div>
            <div className="flex items-baseline justify-between gap-4 text-xs" style={{ color: palette.muted }}>
              <span className="font-mono">due {o.fecha} · {o.progreso}%</span>
              <span>{o.autor}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10"
        style={{ borderTop: `1px solid ${palette.rule}` }}
      >
        {capacidad.map((s) => (
          <div key={s.l}>
            <p className="font-bebas text-4xl tracking-wide mb-1.5" style={{ color: palette.fg }}>
              {s.v}
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
