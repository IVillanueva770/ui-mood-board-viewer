"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  palette,
  ZONAS,
  type EjercicioBiblioteca,
  type FiltroZona,
} from "../_data";
import { useGentleMotion } from "./use-gentle-motion";
import { CheckExercise } from "./CheckExercise";

const DIF_COLOR: Record<EjercicioBiblioteca["dificultad"], { bg: string; fg: string }> = {
  Suave: { bg: "#dcfce7", fg: "#166534" },
  Moderado: { bg: "#dbeafe", fg: "#1e40af" },
  Exigente: { bg: "#fef3c7", fg: "#92400e" },
};

/** Pieza interna: biblioteca de ejercicios con filtro por zona + marcar hecho. */
export function Biblioteca({ ejercicios }: { ejercicios: EjercicioBiblioteca[] }) {
  const { reduce, reveal } = useGentleMotion();
  const { accent, muted, border, card, surface, text } = palette;

  const [filtro, setFiltro] = useState<FiltroZona>("Todas");
  const [items, setItems] = useState(ejercicios);

  const visibles = filtro === "Todas" ? items : items.filter((e) => e.zona === filtro);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((e) => (e.id === id ? { ...e, hecho: !e.hecho } : e)));

  return (
    <section>
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: accent }}>
          Tu biblioteca
        </p>
        <h2 className="text-2xl font-semibold tracking-tight">Ejercicios del plan</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {ZONAS.map((z) => {
          const activo = z === filtro;
          return (
            <motion.button
              key={z}
              onClick={() => setFiltro(z)}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: activo ? accent : card,
                color: activo ? "#ffffff" : text,
                border: `1px solid ${activo ? accent : border}`,
              }}
            >
              {z}
            </motion.button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibles.map((ej, i) => {
          const dif = DIF_COLOR[ej.dificultad];
          return (
            <motion.div
              key={ej.id}
              {...reveal(i * 0.04)}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: card, border: `1px solid ${border}` }}
            >
              <div
                className="aspect-[16/7] flex items-center justify-center relative"
                style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
              >
                <span className="text-3xl opacity-80">▶</span>
                <span
                  className="absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: card, color: muted }}
                >
                  {ej.zona}
                </span>
              </div>
              <div className="p-4 flex items-center gap-3">
                <CheckExercise done={ej.hecho} onToggle={() => toggle(ej.id)} />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-semibold truncate"
                    style={{ color: text, opacity: ej.hecho ? 0.6 : 1 }}
                  >
                    {ej.nombre}
                  </p>
                  <p className="text-xs" style={{ color: muted }}>{ej.duracion}</p>
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-1 rounded-full shrink-0"
                  style={{ backgroundColor: dif.bg, color: dif.fg }}
                >
                  {ej.dificultad}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {visibles.length === 0 && (
        <p className="text-sm text-center py-10" style={{ color: muted, backgroundColor: surface, borderRadius: 16 }}>
          No hay ejercicios de esa zona en tu plan todavía.
        </p>
      )}
    </section>
  );
}
