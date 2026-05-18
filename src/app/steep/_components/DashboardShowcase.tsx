"use client";

import { motion } from "motion/react";
import { tokens, type ShowcaseChart } from "../_data";
import { useSteepMotion } from "./use-steep-motion";
import { areaPath, barHeights, linePath, ring } from "./charts";

/**
 * Externo · pieza 3: showcase de dashboards. Un tablero mock con cuatro tipos
 * de chart distintos (área, barras, big number + sparkline, ring de progreso),
 * todos prolijos y con draw-in. Demuestra "dashboards elegantes".
 */
function ChartBody({ c }: { c: ShowcaseChart }) {
  const { draw, fill, grow } = useSteepMotion();
  const W = 240;
  const H = 92;

  if (c.tipo === "area") {
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 92 }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={`steep-sw-${c.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tokens.mist} stopOpacity="0.85" />
            <stop offset="100%" stopColor={tokens.mist} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path {...fill(0.9)} d={areaPath(c.points, W, H, 6)} fill={`url(#steep-sw-${c.id})`} />
        <motion.path
          {...draw(0.2, 1.1)}
          d={linePath(c.points, W, H, 6)}
          fill="none"
          stroke={tokens.terracotta}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (c.tipo === "bars") {
    const hs = barHeights(c.points);
    return (
      <div className="flex items-end gap-2" style={{ height: 92 }}>
        {hs.map((h, k) => (
          <motion.div
            key={k}
            {...grow(k)}
            className="flex-1 rounded-t"
            style={{
              ["--bar-h" as string]: `${h}%`,
              backgroundColor: k === 0 ? tokens.terracotta : tokens.clay,
            }}
          />
        ))}
      </div>
    );
  }

  if (c.tipo === "ring") {
    const { c: circ, filled, r } = ring(c.pct ?? 0);
    return (
      <div className="flex items-center justify-center" style={{ height: 92 }}>
        <svg viewBox="0 0 90 90" className="w-[88px] h-[88px] -rotate-90">
          <circle cx="45" cy="45" r={r} fill="none" stroke={tokens.border} strokeWidth="7" />
          <motion.circle
            cx="45"
            cy="45"
            r={r}
            fill="none"
            stroke={tokens.terracotta}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - filled }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </svg>
      </div>
    );
  }

  // big
  return (
    <div className="flex flex-col justify-center" style={{ height: 92 }}>
      <p className="font-cormorant text-5xl leading-none mb-2" style={{ color: tokens.ink }}>
        {c.big}
      </p>
      <svg viewBox="0 0 200 24" className="w-full" style={{ height: 24 }} preserveAspectRatio="none">
        <motion.path
          {...draw(0.3, 1)}
          d={linePath(c.points, 200, 24, 3)}
          fill="none"
          stroke={tokens.clay}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function DashboardShowcase({ showcase }: { showcase: ShowcaseChart[] }) {
  const { reveal, lift } = useSteepMotion();

  return (
    <section>
      <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
        <motion.h2
          {...reveal(0)}
          className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight"
          style={{ color: tokens.ink }}
        >
          Un tablero que <em className="italic" style={{ color: tokens.terracotta }}>respira.</em>
        </motion.h2>
        <motion.span
          {...reveal(1)}
          className="text-xs uppercase tracking-[0.22em]"
          style={{ color: tokens.terracotta }}
        >
          vista compartida · solo lectura
        </motion.span>
      </div>

      <motion.div
        {...reveal(1)}
        className="p-6 rounded-2xl"
        style={{ backgroundColor: tokens.surface }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {showcase.map((c, i) => (
            <motion.div
              key={c.id}
              {...reveal(i + 1)}
              {...lift}
              className="p-5 rounded-xl"
              style={{ backgroundColor: tokens.canvas, border: `1px solid ${tokens.border}` }}
            >
              <div className="flex items-baseline justify-between mb-4">
                <p className="text-[11px] uppercase tracking-wider" style={{ color: tokens.terracotta }}>
                  {c.titulo}
                </p>
                <span className="text-[11px] font-mono" style={{ color: tokens.slate }}>
                  {c.caption}
                </span>
              </div>
              <ChartBody c={c} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
