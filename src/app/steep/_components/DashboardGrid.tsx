"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { tokens, type Kpi } from "../_data";
import { useSteepMotion } from "./use-steep-motion";
import { barHeights, linePath } from "./charts";

/**
 * Interno · pieza 1: el dashboard. Grid de tarjetas-chart (línea, barras, big
 * number) con draw-in + filtros de rango y segmento (chips interactivos, estado
 * local — sin SQL para el evaluador). Los datos llegan por props.
 */
function KpiChart({ k }: { k: Kpi }) {
  const { draw, grow } = useSteepMotion();

  if (k.tipo === "big") {
    return (
      <div className="flex items-center" style={{ height: 44 }}>
        <span
          className="text-[11px] px-2.5 py-1 rounded font-mono"
          style={{ backgroundColor: tokens.mist, color: tokens.terracotta }}
        >
          sin variación
        </span>
      </div>
    );
  }

  if (k.tipo === "bars") {
    const hs = barHeights(k.points);
    return (
      <div className="flex items-end gap-1.5" style={{ height: 44 }}>
        {hs.map((h, i) => (
          <motion.div
            key={i}
            {...grow(i)}
            className="flex-1 rounded-t"
            style={{ ["--bar-h" as string]: `${h}%`, backgroundColor: k.color }}
          />
        ))}
      </div>
    );
  }

  return (
    <svg viewBox="0 0 200 44" className="w-full" style={{ height: 44 }} preserveAspectRatio="none">
      <motion.path
        {...draw(0.2, 1.1)}
        d={linePath(k.points, 200, 44, 4)}
        fill="none"
        stroke={k.color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardGrid({
  kpis,
  rangos,
  segmentos,
}: {
  kpis: Kpi[];
  rangos: string[];
  segmentos: string[];
}) {
  const { reveal, lift } = useSteepMotion();
  const [rango, setRango] = useState(rangos[1]);
  const [segmento, setSegmento] = useState(segmentos[0]);

  const toneColor = (t: Kpi["tone"]) =>
    t === "up" ? tokens.terracotta : t === "down" ? tokens.rust : tokens.slate;

  return (
    <section>
      <div className="flex items-end justify-between flex-wrap gap-4 mb-7">
        <motion.h3
          {...reveal(0)}
          className="font-cormorant text-3xl sm:text-4xl font-medium leading-tight"
          style={{ color: tokens.ink }}
        >
          Tablero — <em className="italic" style={{ color: tokens.terracotta }}>últimos {rango.toLowerCase()}.</em>
        </motion.h3>
        <motion.div {...reveal(1)} className="flex items-center gap-2 flex-wrap">
          {rangos.map((r) => {
            const a = r === rango;
            return (
              <button
                key={r}
                onClick={() => setRango(r)}
                className="px-3 py-1.5 text-xs rounded-md transition-colors"
                style={{
                  backgroundColor: a ? tokens.ink : tokens.surface,
                  color: a ? tokens.canvas : tokens.slate,
                }}
              >
                {r}
              </button>
            );
          })}
        </motion.div>
      </div>

      <motion.div {...reveal(1)} className="flex items-center gap-2 flex-wrap mb-7">
        <span className="text-[11px] uppercase tracking-wider mr-1" style={{ color: tokens.terracotta }}>
          segmento
        </span>
        {segmentos.map((s) => {
          const a = s === segmento;
          return (
            <button
              key={s}
              onClick={() => setSegmento(s)}
              className="px-3 py-1.5 text-xs rounded-full transition-colors"
              style={{
                backgroundColor: a ? tokens.mist : "transparent",
                color: a ? tokens.terracotta : tokens.slate,
                border: `1px solid ${a ? tokens.mist : tokens.border}`,
              }}
            >
              {s}
            </button>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {kpis.map((k, i) => (
          <motion.div
            key={k.id}
            {...reveal(i)}
            {...lift}
            className="p-6 rounded-xl cursor-pointer"
            style={{ backgroundColor: tokens.canvas, border: `1px solid ${tokens.border}` }}
          >
            <div className="flex items-baseline justify-between mb-3">
              <p className="text-xs uppercase tracking-wider" style={{ color: tokens.terracotta }}>
                {k.name}
              </p>
              <span className="text-[11px] font-mono" style={{ color: toneColor(k.tone) }}>
                {k.delta}
              </span>
            </div>
            <p className="font-cormorant text-4xl mb-4" style={{ color: tokens.ink }}>
              {k.val}
            </p>
            <KpiChart k={k} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
