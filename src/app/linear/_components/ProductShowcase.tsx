"use client";

import { motion } from "motion/react";
import { tokens, mono, statusColor, priorityColor, STATUS_ORDER, type Issue } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/**
 * Pieza externa: showcase del command center "en acción" — mock estático rico
 * (sidebar + lista) que muestra de qué va el producto antes de entrar al
 * Workspace vivo. Distinto del tab interno: acá es captura, allá es funcional.
 */
export function ProductShowcase({ issues }: { issues: Issue[] }) {
  const { reveal } = useLinearMotion();
  const t = tokens;
  const nav = ["Inbox", "Mis issues", "Active", "Cycles", "Projects"];

  return (
    <motion.section {...reveal}>
      <div className="max-w-2xl mb-10">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3">
          Todo el trabajo, una sola vista
        </h2>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: t.fg2 }}>
          Issues, prioridades y asignados sin cambiar de pantalla. Denso pero legible —
          pensado para mirarlo todo el día.
        </p>
      </div>

      <div
        className="rounded-xl overflow-hidden grid grid-cols-12"
        style={{ backgroundColor: t.surface, border: `1px solid ${t.line}`, boxShadow: "0 32px 80px -32px rgba(0,0,0,0.8)" }}
      >
        {/* Sidebar mock */}
        <aside className="hidden sm:block col-span-3 lg:col-span-2 p-3" style={{ borderRight: `1px solid ${t.line}`, backgroundColor: t.bg }}>
          <div className="flex items-center gap-2 mb-5 px-1">
            <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: t.lime, color: t.bg }}>
              E
            </span>
            <span className="text-sm font-semibold">Exo</span>
          </div>
          <nav className="space-y-0.5">
            {nav.map((n, i) => (
              <div
                key={n}
                className="px-2.5 py-1.5 rounded text-sm"
                style={{
                  color: i === 1 ? t.fg : t.muted,
                  backgroundColor: i === 1 ? t.surface : "transparent",
                  borderLeft: i === 1 ? `2px solid ${t.lime}` : "2px solid transparent",
                }}
              >
                {n}
              </div>
            ))}
          </nav>
        </aside>

        {/* Lista mock */}
        <div className="col-span-12 sm:col-span-9 lg:col-span-10">
          <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${t.line}` }}>
            <span className="text-sm font-semibold">Mis issues</span>
            <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: t.bg, color: t.muted, border: `1px solid ${t.line}` }}>
              {issues.length} abiertas
            </span>
          </div>
          {issues.map((i, idx) => (
            <div
              key={i.id}
              className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center"
              style={{ borderTop: idx === 0 ? "none" : `1px solid ${t.line}` }}
            >
              <span className="col-span-2 sm:col-span-1 w-2 h-2 rounded-full" style={{ backgroundColor: priorityColor[i.priority] }} />
              <span className="col-span-3 sm:col-span-2 text-xs" style={{ fontFamily: mono, color: t.muted }}>
                {i.id}
              </span>
              <span className="col-span-7 sm:col-span-6 truncate">{i.title}</span>
              <span className="hidden sm:inline-flex col-span-3 items-center gap-1.5 text-xs justify-end" style={{ color: t.fg2 }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor[i.status] }} />
                {i.status}
              </span>
            </div>
          ))}
          <div className="px-4 py-2 flex gap-1.5" style={{ borderTop: `1px solid ${t.line}` }}>
            {STATUS_ORDER.map((s) => (
              <span key={s} className="text-[10px] px-1.5 py-0.5 rounded" style={{ color: t.faint, fontFamily: mono }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
