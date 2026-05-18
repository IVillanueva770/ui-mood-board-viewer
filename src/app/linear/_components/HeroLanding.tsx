"use client";

import { motion } from "motion/react";
import { tokens, mono, statusColor, type Issue } from "../_data";
import { useLinearMotion } from "./use-linear-motion";

/** Pieza externa (hero): landing de dev-tool, restraint total + mock del board. */
export function HeroLanding({ preview }: { preview: Issue[] }) {
  const { reduce, cta, press } = useLinearMotion();
  const t = tokens;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-72 -z-0 opacity-25 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 100%, ${t.lime} 0%, transparent 60%)` }}
      />
      <div className="relative max-w-5xl mx-auto pt-16 sm:pt-24 pb-8 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold"
          style={{ color: t.lime, fontFamily: mono }}
        >
          v2026.05 · ahora con cycles inteligentes
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-7xl font-semibold tracking-[-0.025em] leading-[1.02] mb-6"
        >
          La herramienta de los
          <br />
          <span style={{ color: t.lime }}>que se mueven rápido.</span>
        </motion.h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: t.fg2 }}>
          Gestión de issues, cycles y proyectos para power users. Keyboard-first, sin spinners,
          con todo el equipo alineado por defecto.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
          <motion.button
            {...cta}
            className="px-5 py-2.5 text-sm font-semibold rounded"
            style={{ backgroundColor: t.lime, color: t.bg }}
          >
            Empezar — es gratis
          </motion.button>
          <motion.button
            {...press}
            className="px-5 py-2.5 text-sm font-semibold rounded transition-colors hover:border-white/30"
            style={{ backgroundColor: "transparent", color: t.fg, border: `1px solid ${t.lineStrong}` }}
          >
            Hablar con ventas →
          </motion.button>
        </div>
      </div>

      {/* Visual del board — mock estático, lo VIVO es el tab Workspace */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="relative max-w-4xl mx-auto rounded-xl overflow-hidden"
        style={{ backgroundColor: t.surface, border: `1px solid ${t.line}`, boxShadow: "0 32px 80px -32px rgba(0,0,0,0.8)" }}
      >
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${t.line}` }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.lineStrong }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.lineStrong }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.lineStrong }} />
          <span className="ml-3 text-xs" style={{ color: t.faint, fontFamily: mono }}>
            exo · my issues
          </span>
        </div>
        <div className="divide-y" style={{ borderColor: t.line }}>
          {preview.map((i) => (
            <div key={i.id} className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center" style={{ borderTop: `1px solid ${t.line}` }}>
              <span className="col-span-2 text-xs" style={{ fontFamily: mono, color: t.muted }}>
                {i.id}
              </span>
              <span className="col-span-7 truncate" style={{ color: t.fg }}>
                {i.title}
              </span>
              <span className="col-span-3 inline-flex items-center gap-1.5 text-xs justify-end" style={{ color: t.fg2 }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor[i.status] }} />
                {i.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
