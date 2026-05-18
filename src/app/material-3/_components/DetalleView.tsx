"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { m3, elevation, pesos, type DetalleCategoria } from "../_data";
import { useM3Motion } from "./use-m3-motion";

/**
 * Vista interna 3 — Detalle de categoría con APP BAR COLAPSABLE: el header
 * grande tonal se encoge a una barra compacta al scrollear (useScroll sobre
 * el contenedor propio → useTransform). Donut SVG sin libs + insight.
 */
export function DetalleView({ detalle }: { detalle: DetalleCategoria }) {
  const { enter, EMPHASIZED } = useM3Motion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: ref });

  const headerH = useTransform(scrollY, [0, 130], [188, 72]);
  const bigOpacity = useTransform(scrollY, [0, 70], [1, 0]);
  const smallOpacity = useTransform(scrollY, [70, 120], [0, 1]);

  const R = 42;
  const C = 2 * Math.PI * R;
  let acc = 0;

  return (
    <div ref={ref} className="h-full overflow-y-auto">
      {/* App bar colapsable */}
      <motion.div
        style={{ height: headerH, backgroundColor: m3.primaryContainer }}
        className="sticky top-0 z-10 overflow-hidden"
      >
        <motion.div style={{ opacity: smallOpacity }} className="absolute inset-x-0 top-0 h-[72px] flex items-center gap-3 px-5">
          <span className="text-xl">{detalle.icon}</span>
          <span className="text-base font-medium" style={{ color: m3.onPrimaryContainer }}>{detalle.nombre}</span>
          <span className="ml-auto text-sm font-semibold" style={{ color: m3.onPrimaryContainer }}>{detalle.totalMes}</span>
        </motion.div>
        <motion.div style={{ opacity: bigOpacity }} className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{detalle.icon}</span>
            <span className="text-sm" style={{ color: m3.onPrimaryContainer }}>{detalle.nombre}</span>
          </div>
          <p className="text-3xl font-medium tracking-tight" style={{ color: m3.onPrimaryContainer }}>{detalle.totalMes}</p>
          <p className="text-xs mt-1" style={{ color: m3.tertiary }}>{detalle.variacion}</p>
        </motion.div>
      </motion.div>

      <div className="px-4 pt-5 pb-28">
        {/* Donut SVG + leyenda */}
        <motion.section
          {...enter()}
          className="rounded-3xl p-5 mb-4 flex items-center gap-5"
          style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}` }}
        >
          <svg viewBox="0 0 100 100" className="w-28 h-28 shrink-0 -rotate-90">
            <circle cx="50" cy="50" r={R} fill="none" stroke={m3.surfaceVariant} strokeWidth="12" />
            {detalle.subgastos.map((s) => {
              const len = (s.pct / 100) * C;
              const seg = (
                <motion.circle
                  key={s.etiqueta}
                  cx="50"
                  cy="50"
                  r={R}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="12"
                  strokeDasharray={`${len} ${C - len}`}
                  strokeDashoffset={-acc}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EMPHASIZED }}
                />
              );
              acc += len;
              return seg;
            })}
          </svg>
          <div className="flex-1 space-y-2">
            {detalle.subgastos.map((s) => (
              <div key={s.etiqueta} className="flex items-center gap-2 text-sm">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="flex-1" style={{ color: m3.onSurface }}>{s.etiqueta}</span>
                <span className="font-medium" style={{ color: m3.onSurfaceVariant }}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Insight */}
        <motion.section
          {...enter(1)}
          className="rounded-3xl p-5 mb-5"
          style={{ backgroundColor: m3.tertiaryContainer, color: m3.onTertiaryContainer }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-70">Insight del mes</p>
          <p className="text-sm leading-relaxed">{detalle.insight}</p>
        </motion.section>

        {/* Desglose como filas */}
        <p className="text-sm font-medium mb-3" style={{ color: m3.onSurface }}>Desglose</p>
        <div className="space-y-2">
          {detalle.subgastos.map((s, i) => (
            <motion.div
              key={s.etiqueta}
              {...enter(i)}
              className="rounded-2xl p-4"
              style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outlineVariant}`, boxShadow: elevation(1) }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium" style={{ color: m3.onSurface }}>{s.etiqueta}</span>
                <span style={{ color: m3.onSurfaceVariant }}>{pesos(s.monto)}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: m3.surfaceVariant }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.05, 0.7, 0.1, 1], delay: 0.1 + i * 0.05 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: s.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
