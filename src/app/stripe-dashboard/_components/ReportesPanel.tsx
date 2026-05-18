"use client";

import { motion } from "motion/react";
import { palette, pesos, type BarraReporte, type SegmentoDonut } from "../_data";
import { usePremiumMotion } from "./use-premium-motion";

const R = 52;
const CIRC = 2 * Math.PI * R;

/** Sub-vista "Reportes": barras + donut bien etiquetados, look exportable. */
export function ReportesPanel({
  ingresosPorRubro,
  mediosDeCobro,
}: {
  ingresosPorRubro: BarraReporte[];
  mediosDeCobro: SegmentoDonut[];
}) {
  const { reveal, press, reduce } = usePremiumMotion();
  const { muted, border, card, text } = palette;

  // Offsets acumulados para los segmentos del donut.
  let acumulado = 0;
  const segmentos = mediosDeCobro.map((s) => {
    const dash = (s.pct / 100) * CIRC;
    const seg = { ...s, dash, offset: acumulado };
    acumulado += dash;
    return seg;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: muted }}>
            Crecimiento · marzo
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Reportes</h2>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            {...press}
            className="px-3 py-1.5 text-xs font-medium rounded-md"
            style={{ border: `1px solid ${border}`, color: muted }}
          >
            ↓ PDF
          </motion.button>
          <motion.button
            {...press}
            className="px-3 py-1.5 text-xs font-medium rounded-md text-white"
            style={{ backgroundColor: palette.accent }}
          >
            ↓ Excel
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Barras: ingresos por rubro */}
        <motion.div
          {...reveal()}
          className="rounded-xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <p className="font-semibold text-sm mb-5">Ingresos por rubro</p>
          <div className="space-y-4">
            {ingresosPorRubro.map((b, i) => (
              <div key={b.label}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="font-medium" style={{ color: text }}>{b.label}</span>
                  <span className="tabular-nums font-semibold" style={{ color: muted }}>
                    {pesos(b.monto)}
                  </span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: palette.grid }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: palette.accent }}
                    initial={reduce ? false : { width: 0 }}
                    whileInView={reduce ? undefined : { width: `${b.pct}%` }}
                    animate={reduce ? { width: `${b.pct}%` } : undefined}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Donut: medios de cobro */}
        <motion.div
          {...reveal(0.08)}
          className="rounded-xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <p className="font-semibold text-sm mb-5">Cómo te pagan</p>
          <div className="flex items-center gap-6 flex-wrap">
            <svg
              viewBox="0 0 140 140"
              className="w-36 h-36 shrink-0"
              role="img"
              aria-label={`Medios de cobro: ${mediosDeCobro.map((m) => `${m.label} ${m.pct}%`).join(", ")}`}
            >
              <g transform="rotate(-90 70 70)">
                <circle cx="70" cy="70" r={R} fill="none" stroke={palette.grid} strokeWidth="16" />
                {segmentos.map((s) => (
                  <motion.circle
                    key={s.label}
                    cx="70"
                    cy="70"
                    r={R}
                    fill="none"
                    stroke={s.color}
                    strokeWidth="16"
                    strokeDasharray={`${s.dash} ${CIRC - s.dash}`}
                    strokeDashoffset={-s.offset}
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={reduce ? undefined : { opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </g>
              <text
                x="70"
                y="66"
                textAnchor="middle"
                className="font-semibold"
                style={{ fontSize: "16px", fill: text }}
              >
                {mediosDeCobro[0].pct}%
              </text>
              <text x="70" y="82" textAnchor="middle" style={{ fontSize: "9px", fill: muted }}>
                {mediosDeCobro[0].label}
              </text>
            </svg>

            <ul className="m-0 p-0 list-none space-y-2.5 flex-1 min-w-[120px]">
              {mediosDeCobro.map((m) => (
                <li key={m.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: m.color }} />
                    <span className="truncate" style={{ color: text }}>{m.label}</span>
                  </span>
                  <span className="tabular-nums font-semibold shrink-0" style={{ color: muted }}>
                    {m.pct}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
