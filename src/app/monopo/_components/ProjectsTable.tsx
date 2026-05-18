"use client";

import { motion } from "motion/react";
import { frost, type ActiveProject, type StudioStat } from "../_data";
import { useFrostMotion } from "./use-frost-motion";

const TONE: Record<ActiveProject["tone"], { bg: string; fg: string }> = {
  violet: { bg: "rgba(167,139,250,0.15)", fg: frost.violet },
  blue: { bg: "rgba(96,165,250,0.10)", fg: frost.blue },
  mute: { bg: "rgba(255,255,255,0.04)", fg: frost.textFaint },
};

/**
 * Pieza interna: tabla de proyectos activos + fila de KPIs del estudio.
 * Visible en scroll (no escondida tras sub-nav).
 */
export function ProjectsTable({
  proyectos,
  stats,
}: {
  proyectos: ActiveProject[];
  stats: StudioStat[];
}) {
  const { sectionReveal, rowHover } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: frost.textMute }}>
            Projects
          </p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            The studio is a system.{" "}
            <em className="italic" style={{ color: frost.violet }}>This</em> runs underneath.
          </h2>
        </div>
      </div>

      <div
        className="rounded-2xl overflow-hidden mb-8"
        style={{ backgroundColor: frost.surface, backdropFilter: frost.blur, border: `1px solid ${frost.border}` }}
      >
        <div
          className="grid grid-cols-12 gap-3 text-[10px] uppercase tracking-[0.2em] py-3 px-5"
          style={{ color: frost.textFaint, borderBottom: `1px solid ${frost.border}` }}
        >
          <div className="col-span-1" style={{ fontFamily: frost.mono }}>#</div>
          <div className="col-span-11 md:col-span-5">Client</div>
          <div className="col-span-6 md:col-span-2">Stage</div>
          <div className="col-span-3 md:col-span-2">Due</div>
          <div className="col-span-3 md:col-span-2 text-right">Owner</div>
        </div>

        {proyectos.map((p, i) => (
          <motion.div
            key={p.num}
            {...rowHover}
            className="grid grid-cols-12 gap-3 py-5 px-5 cursor-pointer"
            style={{ borderTop: i > 0 ? `1px solid rgba(255,255,255,0.04)` : "none" }}
          >
            <div
              className="col-span-1 text-xs self-center"
              style={{ color: frost.textFaint, fontFamily: frost.mono }}
            >
              {p.num}
            </div>
            <div className="col-span-11 md:col-span-5 self-center">
              <p className="text-xl font-light leading-tight">{p.cliente}</p>
              <p className="text-xs mt-0.5" style={{ color: frost.textMute }}>{p.tipo}</p>
            </div>
            <div className="col-span-6 md:col-span-2 self-center">
              <span
                className="text-xs px-2 py-1 rounded-sm"
                style={{ backgroundColor: TONE[p.tone].bg, color: TONE[p.tone].fg }}
              >
                {p.etapa}
              </span>
            </div>
            <div
              className="col-span-3 md:col-span-2 self-center text-xs"
              style={{ color: frost.textSoft, fontFamily: frost.mono }}
            >
              {p.deadline}
            </div>
            <div
              className="col-span-3 md:col-span-2 self-center text-xs text-right"
              style={{ color: frost.textMute, fontFamily: frost.mono }}
            >
              {p.asignado}
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
        style={{ borderTop: `1px solid ${frost.border}` }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl sm:text-4xl font-light tracking-tight mb-2">{s.val}</p>
            <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: frost.textSoft }}>
              {s.label}
            </p>
            <p className="text-[10px]" style={{ color: frost.textFaint, fontFamily: frost.mono }}>
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
