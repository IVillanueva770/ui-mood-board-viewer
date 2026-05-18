"use client";

import { motion } from "motion/react";
import { palette, type Perfil, type MensajeChat, type NotaPlan } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza interna: contacto con el profesional — chat + notas del plan. */
export function MiKine({
  perfil,
  chat,
  notas,
}: {
  perfil: Perfil;
  chat: MensajeChat[];
  notas: NotaPlan[];
}) {
  const { reduce, reveal, calmTap } = useGentleMotion();
  const { accent, accentSoft, accentDeep, green, muted, border, card, text } = palette;

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: accent }}>
          Tu profesional
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Mi kinesióloga</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Chat */}
        <motion.div
          {...reveal(0)}
          className="lg:col-span-3 rounded-2xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: `1px solid ${border}` }}>
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
              style={{ backgroundColor: accentSoft, color: accentDeep }}
            >
              {perfil.kine.split(" ").map((p) => p[0]).join("").slice(-2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm" style={{ color: text }}>{perfil.kine}</p>
              <p className="text-xs flex items-center gap-1.5" style={{ color: green }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: green }} />
                En línea · responde en ~2 h
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {chat.map((m, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`flex ${m.from === "yo" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${m.from === "yo" ? "rounded-br-sm" : "rounded-bl-sm"}`}
                  style={{
                    backgroundColor: m.from === "yo" ? accent : palette.surface,
                    color: m.from === "yo" ? "#ffffff" : text,
                  }}
                >
                  <p className="text-sm leading-relaxed">{m.texto}</p>
                  <p className="text-[10px] mt-1 opacity-70">{m.hora}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="rounded-2xl p-2.5 flex items-center gap-2"
            style={{ backgroundColor: palette.surface, border: `1px solid ${border}` }}
          >
            <input
              className="flex-1 bg-transparent outline-none text-sm px-2"
              placeholder={`Escribile a ${perfil.kine.split(" ")[1]}…`}
              readOnly
            />
            <motion.button
              {...calmTap}
              className="w-9 h-9 rounded-full text-white text-sm flex items-center justify-center shrink-0"
              style={{ backgroundColor: accent }}
            >
              ↑
            </motion.button>
          </div>
        </motion.div>

        {/* Notas del plan */}
        <motion.div
          {...reveal(0.08)}
          className="lg:col-span-2 rounded-2xl p-5"
          style={{ backgroundColor: card, border: `1px solid ${border}` }}
        >
          <p className="font-semibold text-sm mb-4" style={{ color: text }}>
            Notas de tu plan
          </p>
          <div className="space-y-4">
            {notas.map((nota) => (
              <div key={nota.titulo}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: accent }}>
                  {nota.titulo}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>{nota.detalle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
