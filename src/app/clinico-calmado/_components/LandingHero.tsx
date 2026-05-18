"use client";

import { motion } from "motion/react";
import { palette, type Turno, ESTADO_TURNO } from "../_data";
import { useAiryMotion, focusRing } from "./use-airy-motion";

/** Pieza externa (hero): SaaS clínico — claim + CTA + captura del workspace. */
export function LandingHero({ turnos }: { turnos: Turno[] }) {
  const { reduce, tap } = useAiryMotion();
  const { accent, accentDeep, muted, border, hairline, surface, card, text } = palette;

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
      className="relative max-w-6xl mx-auto px-2 sm:px-4 pt-8 pb-10 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-0 w-[480px] h-[360px] blur-3xl -z-0 opacity-60"
        style={{ background: "radial-gradient(circle at 70% 40%, rgba(14,165,233,0.22), transparent 65%)" }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] mb-5 font-semibold" style={{ color: accent }}>
            Software clínico para kinesiología
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.06] mb-4">
            El consultorio,
            <br />
            <span style={{ color: accent }}>ordenado.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-md" style={{ color: muted }}>
            Agenda, ficha clínica, planes de tratamiento y cobros en un solo lugar.
            Hecho con kinesiólogos reales, no con consultores de software.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.button
              {...tap}
              whileHover={reduce ? undefined : { y: -2 }}
              className={`px-6 py-3 text-sm font-semibold rounded-full text-white ${focusRing}`}
              style={{ backgroundColor: accent, boxShadow: "0 4px 14px rgba(14,165,233,0.28)" }}
            >
              Probar 14 días gratis
            </motion.button>
            <motion.button
              {...tap}
              className={`px-6 py-3 text-sm font-semibold rounded-full ${focusRing}`}
              style={{ border: `1px solid ${border}`, color: text, backgroundColor: card }}
            >
              Pedir demo →
            </motion.button>
          </div>
          <p className="text-xs mt-5" style={{ color: muted }}>
            Sin tarjeta · migramos tus datos · cancelás cuando quieras
          </p>
        </div>

        {/* Captura del workspace */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${border}`, backgroundColor: card, boxShadow: "0 24px 50px -28px rgba(15,23,42,0.25)" }}
        >
          <div
            className="flex items-center gap-1.5 px-4 py-2.5"
            style={{ borderBottom: `1px solid ${hairline}`, backgroundColor: surface }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fca5a5" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fcd34d" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#86efac" }} />
            <span className="ml-3 text-xs" style={{ color: muted }}>Agenda · jueves 22 de mayo</span>
          </div>
          <div className="p-4 space-y-1.5">
            {turnos.slice(0, 5).map((t) => {
              const est = ESTADO_TURNO[t.estado];
              return (
                <div
                  key={t.hora}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs"
                  style={{ backgroundColor: surface }}
                >
                  <span className="font-semibold tabular-nums w-12 shrink-0" style={{ color: accentDeep }}>
                    {t.hora}
                  </span>
                  <span className="flex-1 truncate" style={{ color: text }}>{t.paciente}</span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: est.bg, color: est.fg }}
                  >
                    {t.estado}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
