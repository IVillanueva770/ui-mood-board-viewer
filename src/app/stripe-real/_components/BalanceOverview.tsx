"use client";

import { motion } from "motion/react";
import { tokens, type Metric, type ChartPoint, type Payout } from "../_data";
import { useStripeMotion } from "./use-stripe-motion";
import { StatusDot } from "./StatusDot";

/** Construye el path del área a partir de los puntos (no path hardcodeado). */
function buildPath(points: ChartPoint[], w: number, h: number) {
  const max = Math.max(...points.map((p) => p.v));
  const min = Math.min(...points.map((p) => p.v));
  const span = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p.v - min) / span) * (h - 8) - 4;
    return [x, y] as const;
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  return { line, area };
}

/**
 * Pieza interna 1: balance & payments. KPIs financieros + gráfico de volumen
 * neto (draw-in preciso, sin count-up festivo — restraint) + payouts.
 */
export function BalanceOverview({
  metrics,
  netVolume,
  netVolumeTotal,
  payouts,
}: {
  metrics: Metric[];
  netVolume: ChartPoint[];
  netVolumeTotal: string;
  payouts: Payout[];
}) {
  const { reveal } = useStripeMotion();
  const W = 520;
  const H = 120;
  const { line, area } = buildPath(netVolume, W, H);

  return (
    <section>
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: tokens.muted }}>
          Resumen · este mes
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em]" style={{ color: tokens.ink }}>
          Balance & payments
        </h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            {...reveal(i)}
            className="rounded-xl p-4"
            style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
          >
            <p className="text-[11px] uppercase tracking-[0.14em] mb-2 font-semibold" style={{ color: tokens.muted }}>
              {m.label}
            </p>
            <p className="text-lg font-semibold tracking-tight tabular-nums mb-1" style={{ color: tokens.ink }}>
              {m.val}
            </p>
            <p className="text-xs" style={{ color: m.tone === "ok" ? tokens.violet : tokens.muted }}>
              {m.delta}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-3">
        <motion.div
          {...reveal(1)}
          className="lg:col-span-2 rounded-xl p-5"
          style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
        >
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] mb-1 font-semibold" style={{ color: tokens.muted }}>
                Volumen neto
              </p>
              <p className="text-xl font-semibold tracking-tight tabular-nums" style={{ color: tokens.ink }}>
                {netVolumeTotal}
              </p>
            </div>
            <span className="text-[11px]" style={{ fontFamily: "var(--font-roboto-mono)", color: tokens.muted }}>
              últimos 30d
            </span>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sr-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={tokens.violet} stopOpacity="0.16" />
                <stop offset="100%" stopColor={tokens.violet} stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((g) => (
              <line key={g} x1="0" y1={H * g} x2={W} y2={H * g} stroke={tokens.borderSoft} strokeWidth="1" />
            ))}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              d={area}
              fill="url(#sr-grad)"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              d={line}
              fill="none"
              stroke={tokens.violet}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.div
          {...reveal(2)}
          className="rounded-xl"
          style={{ backgroundColor: tokens.surface, border: `1px solid ${tokens.border}` }}
        >
          <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${tokens.border}` }}>
            <p className="font-semibold text-sm" style={{ color: tokens.ink }}>Payouts</p>
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: tokens.muted }}>
              próximos
            </span>
          </div>
          {payouts.map((p, i) => (
            <div
              key={p.fecha}
              className="px-5 py-3.5"
              style={{ borderBottom: i < payouts.length - 1 ? `1px solid ${tokens.borderSoft}` : "none" }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold tabular-nums" style={{ color: tokens.ink }}>{p.monto}</span>
                <StatusDot tone={p.tone} label={p.estado} />
              </div>
              <p className="text-[11px]" style={{ color: tokens.muted }}>
                {p.fecha} · <span style={{ fontFamily: "var(--font-roboto-mono)" }}>{p.banco}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
