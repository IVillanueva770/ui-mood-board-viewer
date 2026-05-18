"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type Mood, type SesionHoy } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza interna (1): la sesión del día + racha suave + mood selector
 * interactivo. El aro del play respira (uso secundario de la firma). El mood
 * selector tiene estado local — al elegir, deja una nota serena, sin métrica.
 */
export function TodaySection({
  sesion,
  moods,
}: {
  sesion: SesionHoy;
  moods: Mood[];
}) {
  const { reveal, breathing, lift } = useCalmMotion();
  const { sage, clay, ink, surface, muted, line } = palette;
  const [elegido, setElegido] = useState<string | null>(null);
  const moodElegido = moods.find((m) => m.id === elegido);

  return (
    <section id="calm-today" className="scroll-mt-10">
      <motion.p
        {...reveal()}
        className="font-cormorant italic text-xl mb-10"
        style={{ color: muted }}
      >
        {sesion.invitacion}
      </motion.p>

      {/* Programa de hoy */}
      <motion.div
        {...reveal()}
        className="p-10 mb-10"
        style={{ backgroundColor: surface, borderRadius: 24, border: `1px solid ${line}` }}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] mb-5" style={{ color: clay }}>
          {sesion.programa.etiqueta}
        </p>
        <h3
          className="font-cormorant text-4xl sm:text-5xl mb-4 leading-[1.05]"
          style={{ color: ink }}
        >
          {sesion.programa.titulo}{" "}
          <em className="italic">{sesion.programa.enfasis}</em>
        </h3>
        <p className="font-cormorant italic text-lg mb-8" style={{ color: muted }}>
          {sesion.programa.desc}
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          <motion.button
            {...lift}
            className="relative flex items-center gap-3 pl-3 pr-7 py-3 text-sm tracking-wide"
            style={{ backgroundColor: ink, color: surface, borderRadius: 9999 }}
          >
            <span className="relative grid place-items-center w-9 h-9">
              <motion.span
                {...breathing}
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{ border: `1px solid ${surface}`, opacity: 0.5 }}
              />
              ▶
            </span>
            Continuar
          </motion.button>
          <p className="text-sm" style={{ color: sage }}>
            {sesion.programa.duracion} · {sesion.programa.voz}
          </p>
        </div>
      </motion.div>

      {/* Mood selector interactivo */}
      <motion.div
        {...reveal()}
        className="p-8 mb-10"
        style={{ backgroundColor: surface, borderRadius: 24, border: `1px solid ${line}` }}
      >
        <p className="text-[11px] uppercase tracking-[0.35em] mb-6" style={{ color: sage }}>
          ¿Cómo amaneciste?
        </p>
        <div className="flex flex-wrap gap-3">
          {moods.map((m) => {
            const activo = elegido === m.id;
            return (
              <motion.button
                key={m.id}
                onClick={() => setElegido(m.id)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center gap-2.5 px-5 py-2.5 text-sm"
                style={{
                  borderRadius: 9999,
                  border: `1px solid ${activo ? sage : line}`,
                  backgroundColor: activo ? sage : "transparent",
                  color: activo ? surface : muted,
                }}
              >
                <span className="text-base">{m.emoji}</span>
                {m.label}
              </motion.button>
            );
          })}
        </div>
        <motion.p
          key={elegido ?? "vacio"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-cormorant italic text-lg mt-7"
          style={{ color: moodElegido ? ink : muted }}
        >
          {moodElegido
            ? `Anotado: ${moodElegido.label.toLowerCase()}, hoy. Gracias por registrarlo.`
            : "Tomate un segundo. No hay respuesta correcta."}
        </motion.p>
      </motion.div>

      {/* Racha suave de la semana */}
      <motion.div
        {...reveal()}
        className="p-8"
        style={{ backgroundColor: surface, borderRadius: 24, border: `1px solid ${line}` }}
      >
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <p className="font-cormorant text-3xl" style={{ color: ink }}>
              {sesion.semana.minutos}
            </p>
            <p className="font-cormorant italic text-base mt-1" style={{ color: muted }}>
              {sesion.semana.detalle}
            </p>
          </div>
          <p className="text-sm" style={{ color: sage }}>
            {sesion.semana.delta}
          </p>
        </div>
        <svg viewBox="0 0 400 80" className="w-full">
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease: [0.22, 0.61, 0.36, 1] }}
            d={sesion.semana.path}
            fill="none"
            stroke={sage}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="flex justify-between text-[10px] mt-3"
          style={{ color: sage }}
        >
          {sesion.semana.dias.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
