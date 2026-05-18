"use client";

import { motion, useReducedMotion } from "motion/react";
import { palette, type SerieIngresos } from "../_data";

const W = 680;
const H = 200;
const PAD_Y = 16;

/** Catmull-Rom → Bézier: curva suave y prolija, sin librerías. */
function smoothPath(pts: readonly (readonly [number, number])[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

function toPoints(serie: number[], min: number, max: number) {
  const span = max - min || 1;
  return serie.map((v, i) => {
    const x = (i / (serie.length - 1)) * W;
    const y = H - PAD_Y - ((v - min) / span) * (H - PAD_Y * 2);
    return [x, y] as const;
  });
}

/**
 * Gráfico de ingresos prolijo: serie de este año con draw-in del path
 * (firma de motion) + comparativa del año anterior como línea tenue
 * punteada. Sin librerías de chart — SVG + motion. Respeta reduced-motion.
 */
export function RevenueChart({ ingresos }: { ingresos: SerieIngresos }) {
  const reduce = useReducedMotion();
  const { accent, muted, grid } = palette;

  const all = [...ingresos.actual, ...ingresos.previo];
  const min = Math.min(...all) * 0.92;
  const max = Math.max(...all) * 1.04;

  const ptsActual = toPoints(ingresos.actual, min, max);
  const ptsPrevio = toPoints(ingresos.previo, min, max);
  const lineActual = smoothPath(ptsActual);
  const linePrevio = smoothPath(ptsPrevio);
  const area = `${lineActual} L ${W} ${H} L 0 ${H} Z`;
  const ultimo = ptsActual[ptsActual.length - 1];

  const drawIn = reduce
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <figure className="m-0">
      <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: muted }}>
            Ingresos · últimos 8 meses
          </p>
          <p className="text-2xl font-semibold tracking-tight">{ingresos.totalActual}</p>
        </div>
        <div className="flex items-center gap-4 text-xs" style={{ color: muted }}>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 rounded-full" style={{ backgroundColor: accent }} />
            Este año
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-px" style={{ borderTop: `2px dashed ${muted}` }} />
            Año anterior
          </span>
          <span
            className="px-1.5 py-0.5 rounded font-medium"
            style={{ backgroundColor: palette.okBg, color: palette.okFg }}
          >
            {ingresos.variacion}
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto" }} role="img"
        aria-label={`Ingresos mensuales. Este año ${ingresos.totalActual}, año anterior ${ingresos.totalPrevio}, ${ingresos.variacion}.`}>
        <defs>
          <linearGradient id="sd-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grilla horizontal */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line key={f} x1="0" y1={H * f - PAD_Y / 2} x2={W} y2={H * f - PAD_Y / 2} stroke={grid} strokeWidth="1" />
        ))}

        {/* Comparativa: año anterior, tenue y punteado, fade-in */}
        <motion.path
          d={linePrevio}
          fill="none"
          stroke={muted}
          strokeWidth="1.6"
          strokeDasharray="5 5"
          strokeLinecap="round"
          opacity={0.4}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 0.4 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Área bajo la serie actual */}
        <motion.path
          d={area}
          fill="url(#sd-area)"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.9 }}
        />

        {/* Serie actual: el path se dibuja (firma de motion) */}
        <motion.path
          d={lineActual}
          fill="none"
          stroke={accent}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...drawIn}
        />

        {/* Punto final destacado */}
        <motion.circle
          cx={ultimo[0]}
          cy={ultimo[1]}
          r="4.5"
          fill={accent}
          stroke={palette.card}
          strokeWidth="2"
          initial={reduce ? false : { scale: 0 }}
          whileInView={reduce ? undefined : { scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 360, damping: 18, delay: reduce ? 0 : 1.5 }}
        />
      </svg>

      <div className="flex justify-between mt-2 px-1" style={{ color: muted }}>
        {ingresos.meses.map((m) => (
          <span key={m} className="text-[11px]">{m}</span>
        ))}
      </div>
      <figcaption className="sr-only">
        Comparación de ingresos mensuales contra el año anterior, {ingresos.variacion}.
      </figcaption>
    </figure>
  );
}
