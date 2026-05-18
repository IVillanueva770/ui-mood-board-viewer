"use client";

import { motion } from "motion/react";
import { palette, type Kpi, type Turno, ESTADO_TURNO } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

/** Pieza interna (hero del workspace): KPIs del día + agenda con estados. */
export function AgendaDia({ kpis, turnos }: { kpis: Kpi[]; turnos: Turno[] }) {
  const { reduce, reveal, rowHover, tap } = useAiryMotion();
  const { accent, accentDeep, muted, border, hairline, card, text } = palette;

  return (
    <section>
      <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: accent }}>
            Hoy · jueves 22 de mayo
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Agenda</h2>
        </div>
        <motion.button
          {...tap}
          whileHover={reduce ? undefined : { y: -1 }}
          className={`px-4 py-2 text-sm font-semibold rounded-full text-white ${focusRing}`}
          style={{ backgroundColor: accent }}
        >
          + Nuevo turno
        </motion.button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            {...reveal(i * 0.05)}
            className="rounded-2xl p-4"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <p className="text-xs mb-2" style={{ color: muted }}>{k.label}</p>
            <p className="text-2xl font-semibold tracking-tight mb-1" style={{ color: text }}>{k.valor}</p>
            <p className="text-xs" style={{ color: accent }}>{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...reveal(0.1)}
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${border}` }}>
          <p className="font-semibold text-sm" style={{ color: text }}>Turnos del día</p>
          <span className="text-xs" style={{ color: muted }}>{turnos.length} programados</span>
        </div>
        {turnos.map((t, i) => {
          const est = ESTADO_TURNO[t.estado];
          return (
            <motion.button
              key={t.hora}
              {...rowHover}
              className={`w-full grid grid-cols-12 px-5 py-3 items-center text-sm text-left ${focusRing}`}
              style={{ borderBottom: i < turnos.length - 1 ? `1px solid ${hairline}` : "none" }}
            >
              <div className="col-span-2 font-semibold tabular-nums" style={{ color: accentDeep }}>{t.hora}</div>
              <div className="col-span-2 hidden sm:flex">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold"
                  style={{ backgroundColor: palette.accentSoft, color: accentDeep }}
                >
                  {t.iniciales}
                </span>
              </div>
              <div className="col-span-7 sm:col-span-5 min-w-0">
                <p className="font-medium truncate" style={{ color: text }}>{t.paciente}</p>
                <p className="text-xs truncate" style={{ color: muted }}>{t.motivo}</p>
              </div>
              <div className="col-span-3 flex justify-end">
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: est.bg, color: est.fg }}
                >
                  {t.estado}
                </span>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
