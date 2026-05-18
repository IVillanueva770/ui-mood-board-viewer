"use client";

import { motion } from "motion/react";
import { palette, type SemanaPlan, type DiaPlan } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { SectionHead } from "./SectionHead";
import { Counter } from "./Counter";

const DIA_STYLE: Record<DiaPlan["estado"], { bg: string; fg: string; bd: string }> = {
  done: { bg: palette.orange, fg: palette.bg, bd: palette.orange },
  today: { bg: palette.bg, fg: palette.orange, bd: palette.orange },
  rest: { bg: "transparent", fg: palette.faint, bd: palette.border },
  todo: { bg: palette.surface, fg: palette.muted, bd: palette.border },
};

/** Pieza interna: calendario del plan, semanas × días, % completado. */
export function Programa({
  semanas,
  progreso,
}: {
  semanas: SemanaPlan[];
  progreso: number;
}) {
  const { slideIn, reduce } = useSportMotion();

  return (
    <section>
      <SectionHead
        kicker="Tu plan de 4 semanas"
        title="PROGRAMA"
        right={
          <span className="font-bebas text-2xl tracking-wide" style={{ color: palette.orange }}>
            <Counter to={progreso} suffix="%" /> COMPLETO
          </span>
        }
      />

      {/* Barra de progreso del plan */}
      <div className="h-3 mb-6" style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}` }}>
        <motion.div
          initial={{ width: reduce ? `${progreso}%` : 0 }}
          whileInView={{ width: `${progreso}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
          style={{ backgroundColor: palette.orange }}
        />
      </div>

      <div className="space-y-2">
        {semanas.map((s, i) => (
          <motion.div
            key={s.semana}
            {...slideIn(i * 0.05, -45)}
            className="grid grid-cols-12 gap-3 p-4 items-center"
            style={{
              backgroundColor: palette.surface,
              border: `1px solid ${palette.border}`,
              borderLeft: `3px solid ${
                s.dias.some((d) => d.estado === "today") ? palette.orange : palette.border
              }`,
            }}
          >
            <div className="col-span-4 sm:col-span-3 min-w-0">
              <p className="font-bebas text-2xl tracking-wide leading-none">
                SEMANA {s.semana}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: palette.muted }}>
                {s.foco}
              </p>
            </div>
            <div className="col-span-8 sm:col-span-9 flex justify-end gap-1.5 flex-wrap">
              {s.dias.map((d, j) => {
                const st = DIA_STYLE[d.estado];
                return (
                  <span
                    key={j}
                    className="w-8 h-8 flex items-center justify-center font-bebas text-sm tracking-wide"
                    style={{ backgroundColor: st.bg, color: st.fg, border: `1px solid ${st.bd}` }}
                    title={d.estado}
                  >
                    {d.estado === "done" ? "✓" : d.estado === "rest" ? "·" : d.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3" style={{ backgroundColor: palette.orange }} /> Hecho
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3" style={{ border: `1px solid ${palette.orange}` }} /> Hoy
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3" style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}` }} /> Pendiente
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3" style={{ border: `1px solid ${palette.border}` }} /> Descanso
        </span>
      </div>
    </section>
  );
}
