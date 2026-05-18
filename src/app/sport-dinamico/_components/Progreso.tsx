"use client";

import { motion } from "motion/react";
import { palette, type PR, type Racha, type VolumenSemana } from "../_data";
import { useSportMotion } from "./use-sport-motion";
import { SectionHead } from "./SectionHead";
import { Counter } from "./Counter";

/** Pieza interna: PRs, racha y volumen semanal (counters + barras que corren). */
export function Progreso({
  prs,
  racha,
  volumen,
}: {
  prs: PR[];
  racha: Racha;
  volumen: VolumenSemana[];
}) {
  const { slideIn, reduce } = useSportMotion();
  const maxTon = Math.max(...volumen.map((v) => v.ton));

  return (
    <section>
      <SectionHead
        kicker="Lo que movés, no lo que prometés"
        title="PROGRESO"
        right={
          <span className="font-bebas text-2xl tracking-wide" style={{ color: palette.orange }}>
            🔥 <Counter to={racha.dias} /> DÍAS
          </span>
        }
      />

      {/* PRs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-6" style={{ border: `1px solid ${palette.border}` }}>
        {prs.map((p, i) => (
          <div
            key={p.ejercicio}
            className="p-4 sm:p-5"
            style={{
              borderRight: i < prs.length - 1 ? `1px solid ${palette.border}` : "none",
              backgroundColor: i % 2 === 1 ? palette.surface : "transparent",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: palette.muted }}>
              {p.ejercicio}
            </p>
            <p className="font-bebas text-4xl sm:text-5xl leading-none tracking-wide">
              <Counter to={p.valor} />
              <span className="text-xl ml-1" style={{ color: palette.muted }}>{p.unidad}</span>
            </p>
            <p className="text-[11px] mt-1 font-bold" style={{ color: palette.green }}>
              +{p.deltaKg} {p.unidad === "reps" ? "reps" : "kg"} este mes
            </p>
          </div>
        ))}
      </div>

      {/* Racha de la semana */}
      <div
        className="flex items-center justify-between gap-3 p-4 mb-6 flex-wrap"
        style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}` }}
      >
        <div>
          <p className="font-bebas text-2xl tracking-wide leading-none">RACHA ACTUAL</p>
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.muted }}>
            mejor histórica: {racha.mejor} días
          </p>
        </div>
        <div className="flex gap-1.5">
          {racha.estaSemana.map((on, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="w-8 h-8 flex items-center justify-center font-bebas text-sm"
              style={{
                backgroundColor: on ? palette.orange : palette.bg,
                color: on ? palette.bg : palette.faint,
                border: `1px solid ${on ? palette.orange : palette.border}`,
              }}
            >
              {["L", "M", "M", "J", "V", "S", "D"][i]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volumen semanal — barras que corren */}
      <div className="p-5" style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}` }}>
        <div className="flex items-baseline justify-between mb-5">
          <p className="font-bebas text-2xl tracking-wide">VOLUMEN SEMANAL (TON)</p>
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: palette.orange }}>
            +18% vs mes pasado
          </p>
        </div>
        <div className="flex items-end gap-2 sm:gap-3 h-40">
          {volumen.map((v, i) => {
            const h = (v.ton / maxTon) * 100;
            const last = i === volumen.length - 1;
            return (
              <div key={v.sem} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: reduce ? `${h}%` : 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                  style={{ backgroundColor: last ? palette.orange : palette.border }}
                />
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{ color: last ? palette.orange : palette.faint, fontFamily: "monospace" }}
                >
                  {v.sem}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
