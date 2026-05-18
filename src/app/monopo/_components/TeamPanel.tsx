"use client";

import { motion } from "motion/react";
import { frost, type TeamMember } from "../_data";
import { useFrostMotion } from "./use-frost-motion";
import { GhostButton } from "./GhostButton";

/** Pieza interna: equipo del estudio con barra de capacity animada. */
export function TeamPanel({ equipo }: { equipo: TeamMember[] }) {
  const { sectionReveal, frostLift, reduce } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: frost.textMute }}>
            Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Four <em className="italic" style={{ color: frost.violet }}>hands</em>, one studio.
          </h2>
        </div>
        <GhostButton>+ Invite</GhostButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {equipo.map((m) => (
          <motion.div
            key={m.ini}
            {...frostLift(m.glow)}
            className="p-6 rounded-2xl relative overflow-hidden cursor-pointer"
            style={{
              backgroundColor: frost.surface,
              backdropFilter: frost.blur,
              border: `1px solid ${frost.border}`,
            }}
          >
            <div
              aria-hidden
              className="absolute -top-16 -left-12 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ backgroundColor: m.glow }}
            />
            <div className="relative flex items-start gap-4 mb-5">
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-base font-light flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${m.glow}80, rgba(0,0,0,0.4))`,
                  border: `1px solid ${frost.borderHover}`,
                  letterSpacing: "0.05em",
                }}
              >
                {m.ini}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-light leading-tight">{m.nombre}</h3>
                <p className="text-xs mt-0.5" style={{ color: frost.textMute }}>{m.rol}</p>
                <p
                  className="text-[10px] mt-1.5 uppercase tracking-wider"
                  style={{ color: frost.textFaint, fontFamily: frost.mono }}
                >
                  since {m.since}
                </p>
              </div>
            </div>

            <div className="relative mb-4">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: frost.textMute }}>
                  Capacity
                </span>
                <span
                  className="text-xs tabular-nums"
                  style={{ color: frost.textSoft, fontFamily: frost.mono }}
                >
                  {m.capacity}%
                </span>
              </div>
              <div className="h-px relative" style={{ backgroundColor: frost.border }}>
                <motion.div
                  initial={reduce ? false : { width: 0 }}
                  whileInView={{ width: `${m.capacity}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute left-0"
                  style={{
                    background:
                      m.capacity > 85
                        ? `linear-gradient(90deg, ${frost.violet}, ${frost.danger})`
                        : `linear-gradient(90deg, ${m.glow}, ${m.glow}80)`,
                    height: "2px",
                    top: "-0.5px",
                    boxShadow: `0 0 12px ${m.glow}80`,
                  }}
                />
              </div>
            </div>

            <div
              className="relative flex items-baseline justify-between text-xs"
              style={{ color: frost.textMute }}
            >
              <span>{m.area}</span>
              <span style={{ fontFamily: frost.mono }}>{m.proyectos} active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
