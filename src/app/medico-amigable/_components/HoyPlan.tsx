"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { palette, type Perfil, type Turno, type EjercicioHoy } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";
import { ProgressRing } from "./ProgressRing";
import { CheckExercise } from "./CheckExercise";

/**
 * Pieza interna (hero del paciente): saludo + anillo de progreso que se llena
 * EN VIVO al marcar ejercicios (firma de motion) + racha + próximo turno +
 * ejercicios de hoy con check.
 */
export function HoyPlan({
  perfil,
  turno,
  ejercicios,
}: {
  perfil: Perfil;
  turno: Turno;
  ejercicios: EjercicioHoy[];
}) {
  const { reduce, reveal, calmTap } = useGentleMotion();
  const { accent, accentSoft, accentDeep, amber, amberSoft, muted, border, card, surface, text } = palette;

  const [items, setItems] = useState(ejercicios);
  const hechos = items.filter((e) => e.hecho).length;
  const pct = Math.round((hechos / items.length) * 100);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((e) => (e.id === id ? { ...e, hecho: !e.hecho } : e)));

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold shrink-0"
          style={{ backgroundColor: accentSoft, color: accentDeep }}
        >
          {perfil.inicial}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
            Hola, {perfil.nombre.split(" ")[0]} 👋
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">Mi recuperación</h2>
        </div>
      </div>

      {/* Tarjeta de progreso del día + racha + próximo turno */}
      <motion.div
        {...reveal(0)}
        className="rounded-3xl p-6 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center mb-5"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)", border: `1px solid ${border}` }}
      >
        <div className="flex justify-center">
          <ProgressRing
            value={pct}
            color={accent}
            track="#dbeafe"
            centerTop={`${pct}%`}
            centerBottom="del día"
            textColor={text}
            mutedColor={muted}
          />
        </div>
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: text }}>
            {perfil.programa} · semana {perfil.semana} de {perfil.totalSemanas}
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>
            {hechos === items.length
              ? "¡Listo por hoy! Gran trabajo, descansá tranquilo."
              : `Te quedan ${items.length - hechos} de ${items.length} ejercicios. Vas muy bien.`}
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: amberSoft, color: "#92400e" }}
            >
              🔥 Racha de {perfil.racha} días
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: card, color: text, border: `1px solid ${border}` }}
            >
              👩‍⚕️ {perfil.kine}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Próximo turno */}
      <motion.div
        {...reveal(0.05)}
        className="rounded-2xl p-4 mb-5 flex items-center gap-4"
        style={{ backgroundColor: amberSoft, border: "1px solid #fde68a" }}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ backgroundColor: card }}
        >
          🗓️
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: amber }}>
            Próximo turno · {turno.fecha}
          </p>
          <p className="font-semibold text-sm mt-0.5" style={{ color: text }}>
            {turno.prof} · {turno.hora}
          </p>
          <p className="text-xs" style={{ color: muted }}>
            {turno.modalidad} · {turno.motivo}
          </p>
        </div>
        <motion.button
          {...calmTap}
          className="text-xs font-semibold px-3 py-2 rounded-lg shrink-0"
          style={{ backgroundColor: card, border: "1px solid #fde68a", color: text }}
        >
          Reagendar
        </motion.button>
      </motion.div>

      {/* Ejercicios de hoy */}
      <motion.div
        {...reveal(0.1)}
        className="rounded-2xl p-5"
        style={{ backgroundColor: card, border: `1px solid ${border}` }}
      >
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold" style={{ color: text }}>Ejercicios de hoy</p>
          <span className="text-xs" style={{ color: muted }}>{hechos}/{items.length} completados</span>
        </div>
        <div className="space-y-2">
          {items.map((ej) => (
            <div
              key={ej.id}
              className="rounded-xl p-3 flex items-center gap-3"
              style={{ backgroundColor: ej.hecho ? "#f0fdf4" : surface }}
            >
              <CheckExercise done={ej.hecho} onToggle={() => toggle(ej.id)} />
              <span className="text-lg shrink-0">{ej.icon}</span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-semibold truncate"
                  style={{ color: text, textDecoration: ej.hecho ? "line-through" : "none", opacity: ej.hecho ? 0.6 : 1 }}
                >
                  {ej.nombre}
                </p>
                <p className="text-xs" style={{ color: muted }}>{ej.detalle}</p>
              </div>
              <span className="text-xs font-mono shrink-0" style={{ color: muted }}>{ej.duracion}</span>
            </div>
          ))}
        </div>
        <motion.button
          {...calmTap}
          whileHover={reduce ? undefined : { y: -1 }}
          className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          {hechos === items.length ? "Repasar la rutina" : "Empezar rutina guiada →"}
        </motion.button>
      </motion.div>
    </section>
  );
}
