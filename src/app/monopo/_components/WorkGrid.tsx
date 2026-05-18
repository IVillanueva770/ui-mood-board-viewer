"use client";

import { motion } from "motion/react";
import { frost, type WorkProject } from "../_data";
import { useFrostMotion } from "./use-frost-motion";

/**
 * Pieza externa: grilla de trabajos seleccionados (distinta del featured —
 * acá se navega varios). Cards frosted con barrido corto + lift al hover.
 */
export function WorkGrid({ trabajos }: { trabajos: WorkProject[] }) {
  const { sectionReveal, frostLift } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl sm:text-4xl font-light" style={{ letterSpacing: "-0.02em" }}>
          Selected <em className="italic" style={{ color: frost.violet }}>works</em>
        </h2>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: frost.textMute }}>
          {String(trabajos.length).padStart(2, "0")} projects · 2023—2026
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {trabajos.map((w) => (
          <motion.div
            key={w.id}
            initial="rest"
            whileHover="hover"
            animate="rest"
            {...frostLift(w.accent)}
            className="rounded-2xl overflow-hidden cursor-pointer relative"
            style={{
              backgroundColor: frost.surface,
              backdropFilter: frost.blur,
              border: `1px solid ${frost.border}`,
            }}
          >
            <div
              className="aspect-[4/3] relative overflow-hidden flex items-end p-5"
              style={{ background: `linear-gradient(135deg, ${w.accent}26, rgba(50,100,200,0.12))` }}
            >
              <motion.div
                aria-hidden
                variants={{ rest: { x: "-120%", opacity: 0 }, hover: { x: "120%", opacity: 1 } }}
                transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute inset-y-0 w-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.22) 50%, rgba(167,139,250,0.18) 60%, transparent 100%)",
                  filter: "blur(6px)",
                  mixBlendMode: "screen",
                }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.3em] relative"
                style={{ color: frost.textSoft }}
              >
                {w.year}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-light mb-1">{w.cliente}</h3>
              <p className="text-xs" style={{ color: frost.textMute }}>{w.tipo}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
