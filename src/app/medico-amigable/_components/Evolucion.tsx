"use client";

import { motion } from "motion/react";
import { palette, type PuntoEvolucion, type Logro } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza interna: evolución de dolor/movilidad (SVG) + logros alcanzados. */
export function Evolucion({
  evolucion,
  logros,
}: {
  evolucion: PuntoEvolucion[];
  logros: Logro[];
}) {
  const { reduce, reveal } = useGentleMotion();
  const { accent, amber, muted, border, card, amberSoft, text } = palette;

  const W = 400;
  const H = 130;
  const n = evolucion.length;
  const x = (i: number) => (i / (n - 1)) * W;
  // dolor 0..10 (invertido: menos es mejor → arriba), movilidad 0..100
  const yDolor = (v: number) => H - (v / 10) * H;
  const yMov = (v: number) => H - (v / 100) * H;

  const path = (sel: (p: PuntoEvolucion) => number) =>
    evolucion.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${sel(p).toFixed(1)}`).join(" ");

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: accent }}>
          Tu evolución · últimas 6 semanas
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Dolor y movilidad</h2>
      </div>

      <motion.div
        {...reveal(0)}
        className="rounded-2xl p-5 mb-5"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <div className="flex items-center gap-5 mb-4 text-xs" style={{ color: muted }}>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full" style={{ backgroundColor: accent }} /> Movilidad
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full" style={{ backgroundColor: amber }} /> Dolor
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 150 }}>
          {[0.25, 0.5, 0.75].map((g) => (
            <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke={border} strokeWidth="1" strokeDasharray="3 4" />
          ))}
          <motion.path
            d={path((p) => yMov(p.movilidad))}
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
          />
          <motion.path
            d={path((p) => yDolor(p.dolor))}
            fill="none"
            stroke={amber}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </svg>
        <div className="flex justify-between text-[10px] mt-2" style={{ color: muted }}>
          {evolucion.map((p) => (
            <span key={p.semana}>{p.semana}</span>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: muted }}>
          El dolor bajó de <strong style={{ color: text }}>7 a 2</strong> y la movilidad subió a{" "}
          <strong style={{ color: text }}>82%</strong>. Vas en el camino correcto.
        </p>
      </motion.div>

      <p className="font-semibold mb-3" style={{ color: text }}>Logros alcanzados</p>
      <div className="space-y-2">
        {logros.map((l, i) => (
          <motion.div
            key={l.titulo}
            {...reveal(0.05 + i * 0.06)}
            className="rounded-2xl p-4 flex items-center gap-4"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0"
              style={{ backgroundColor: amberSoft }}
            >
              {l.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm" style={{ color: text }}>{l.titulo}</p>
              <p className="text-xs" style={{ color: muted }}>{l.desc}</p>
            </div>
            <span className="text-xs font-mono shrink-0" style={{ color: muted }}>{l.fecha}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
