"use client";

import { motion } from "motion/react";
import { palette, type Ring, type WeekDay, type Insight } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/* Anillos concéntricos tipo Actividad de iOS (SVG, sin libs). */
function ActivityRings({ rings }: { rings: Ring[] }) {
  const { reduce } = useIosMotion();
  const size = 168;
  const cx = size / 2;
  const stroke = 15;
  const gap = 4;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {rings.map((r, i) => {
        const radius = cx - stroke / 2 - i * (stroke + gap);
        const c = 2 * Math.PI * radius;
        const pct = Math.min(100, r.valor) / 100;
        return (
          <g key={r.id} transform={`rotate(-90 ${cx} ${cx})`}>
            <circle
              cx={cx}
              cy={cx}
              r={radius}
              fill="none"
              stroke={r.color}
              strokeOpacity={0.18}
              strokeWidth={stroke}
            />
            <motion.circle
              cx={cx}
              cy={cx}
              r={radius}
              fill="none"
              stroke={r.color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              initial={reduce ? false : { strokeDashoffset: c }}
              whileInView={{ strokeDashoffset: c * (1 - pct) }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 + i * 0.12 }}
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Pieza interna (tab Progreso): anillos de Actividad iOS + barras de la semana
 * + insights. Los anillos se "llenan" con spring al entrar (firma nativa).
 */
export function ProgresoTab({
  rings,
  semana,
  insights,
}: {
  rings: Ring[];
  semana: WeekDay[];
  insights: Insight[];
}) {
  const { enter, reduce } = useIosMotion();
  const { text, muted, groupBg, accent, sep } = palette;

  return (
    <div className="p-5">
      <h1 className="text-[28px] font-bold tracking-tight mb-0.5" style={{ color: text }}>
        Tu progreso
      </h1>
      <p className="text-sm mb-6" style={{ color: muted }}>
        Mayo · 18 días de actividad
      </p>

      <motion.div
        {...enter(0)}
        className="rounded-2xl p-5 mb-5 flex items-center gap-5"
        style={{ backgroundColor: groupBg }}
      >
        <ActivityRings rings={rings} />
        <div className="space-y-3 flex-1 min-w-0">
          {rings.map((r) => (
            <div key={r.id}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: r.color }} />
                <span className="text-sm font-semibold" style={{ color: text }}>
                  {r.label}
                </span>
              </div>
              <p className="text-xs ml-[18px] mt-0.5" style={{ color: muted }}>
                {r.metaTexto}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: muted }}>
        Esta semana
      </p>
      <motion.div {...enter(1)} className="rounded-2xl p-4 mb-5" style={{ backgroundColor: groupBg }}>
        <div className="flex items-end justify-between gap-2 h-28 mb-2">
          {semana.map((b, i) => (
            <motion.div
              key={b.d}
              initial={reduce ? false : { height: 0 }}
              whileInView={{ height: `${b.pct}%` }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.1 + i * 0.05 }}
              className="flex-1 rounded-md"
              style={{ backgroundColor: b.done ? accent : sep, minHeight: 8 }}
            />
          ))}
        </div>
        <div className="flex justify-between gap-2">
          {semana.map((b) => (
            <span
              key={b.d}
              className="flex-1 text-center text-[10px] font-medium"
              style={{ color: muted }}
            >
              {b.d}
            </span>
          ))}
        </div>
      </motion.div>

      <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: muted }}>
        Datos
      </p>
      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: groupBg }}>
        {insights.map((s, i) => (
          <motion.div
            key={s.label}
            {...enter(i + 2)}
            className="flex items-center gap-3 p-3.5"
            style={{ borderTop: i > 0 ? `0.5px solid ${sep}` : "none" }}
          >
            <span className="text-xl shrink-0">{s.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-tight" style={{ color: text }}>
                {s.label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: muted }}>
                {s.sub}
              </p>
            </div>
            <p className="text-sm font-semibold tabular-nums" style={{ color: text }}>
              {s.val}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
