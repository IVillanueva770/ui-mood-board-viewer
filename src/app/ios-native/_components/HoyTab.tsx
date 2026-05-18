"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type Habito } from "../_data";
import { useIosMotion } from "./use-ios-motion";
import { BottomSheet } from "./BottomSheet";

/**
 * Pieza interna (tab Hoy): hábitos del día + racha. Tocar el círculo completa
 * con BOUNCE (firma). Tocar la fila abre el bottom-sheet con instrucciones y
 * acciones — slide-up nativo. Estado de completado local (interacción de la
 * pieza); el set inicial llega por props desde _data.
 */
export function HoyTab({ habitosIniciales }: { habitosIniciales: Habito[] }) {
  const { reduce, tap, enter } = useIosMotion();
  const { text, muted, secondary, groupBg, card, green, accent } = palette;
  const [habitos, setHabitos] = useState(habitosIniciales);
  const [sel, setSel] = useState<Habito | null>(null);

  const pendientes = useMemo(() => habitos.filter((h) => !h.done).length, [habitos]);

  const toggle = (id: string) =>
    setHabitos((prev) => prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h)));

  const selActual = sel ? habitos.find((h) => h.id === sel.id) ?? sel : null;

  return (
    <div className="p-5">
      <h1 className="text-[28px] font-bold tracking-tight mb-0.5" style={{ color: text }}>
        Hola, Nacho
      </h1>
      <p className="text-sm mb-6" style={{ color: muted }}>
        {pendientes === 0 ? "Completaste todo. Buen día." : `Te quedan ${pendientes} hábitos`}
      </p>

      <motion.div
        {...enter(0)}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg,#007aff,#5856d6)", color: "#fff" }}
      >
        <p className="text-[11px] uppercase tracking-wider opacity-80 mb-1">Racha actual</p>
        <p className="text-4xl font-bold tracking-tight mb-1">12 días</p>
        <p className="text-xs opacity-80">Tu mejor racha fue de 28 días — vas bien.</p>
      </motion.div>

      <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: muted }}>
        Hoy
      </p>
      <div className="space-y-3">
        {habitos.map((h, i) => (
          <motion.div
            key={h.id}
            {...enter(i + 1)}
            onClick={() => setSel(h)}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer"
            style={{ backgroundColor: groupBg }}
          >
            <motion.button
              onClick={(ev) => {
                ev.stopPropagation();
                toggle(h.id);
              }}
              animate={{ backgroundColor: h.done ? green : card }}
              transition={{ duration: 0.18 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
              style={{ border: h.done ? "none" : `1px solid ${palette.sep}` }}
              aria-label={h.done ? "Marcar como pendiente" : "Marcar como hecho"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={h.done ? "check" : "emoji"}
                  initial={reduce ? false : { scale: 0, opacity: 0 }}
                  animate={
                    reduce
                      ? { scale: 1, opacity: 1 }
                      : h.done
                        ? { scale: [0, 1.18, 1], opacity: 1 }
                        : { scale: 1, opacity: 1 }
                  }
                  exit={reduce ? undefined : { scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 600, damping: 18 }}
                  style={{ color: h.done ? "#fff" : undefined }}
                >
                  {h.done ? "✓" : h.emoji}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <div className="flex-1 min-w-0">
              <motion.p
                animate={{ color: h.done ? muted : text }}
                className="font-semibold text-sm leading-tight"
                style={{ textDecorationLine: h.done ? "line-through" : "none" }}
              >
                {h.titulo}
              </motion.p>
              <p className="text-xs mt-0.5" style={{ color: muted }}>
                {h.detalle} · {h.duracion}
              </p>
            </div>
            <span style={{ color: muted }}>›</span>
          </motion.div>
        ))}
      </div>

      <BottomSheet
        open={!!selActual}
        onClose={() => setSel(null)}
        title={selActual?.titulo}
      >
        {selActual && (
          <div>
            <div
              className="rounded-2xl p-4 mb-4 flex items-center gap-3"
              style={{ backgroundColor: groupBg }}
            >
              <span
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: card }}
              >
                {selActual.emoji}
              </span>
              <div>
                <p className="text-sm font-semibold" style={{ color: text }}>
                  {selActual.detalle}
                </p>
                <p className="text-xs" style={{ color: muted }}>
                  Duración estimada · {selActual.duracion}
                </p>
              </div>
            </div>

            <p className="text-[11px] uppercase tracking-wider font-semibold mb-2" style={{ color: muted }}>
              Cómo hacerlo
            </p>
            <ol className="space-y-2.5 mb-5">
              {selActual.instrucciones.map((paso, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: secondary }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={{ backgroundColor: selActual.color + "22", color: selActual.color }}
                  >
                    {i + 1}
                  </span>
                  {paso}
                </li>
              ))}
            </ol>

            <div className="flex gap-3">
              <motion.button
                {...tap}
                onClick={() => {
                  if (!selActual.done) toggle(selActual.id);
                  setSel(null);
                }}
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: selActual.done ? muted : accent }}
              >
                {selActual.done ? "Ya está hecho ✓" : "Marcar como hecho"}
              </motion.button>
              <motion.button
                {...tap}
                onClick={() => setSel(null)}
                className="px-5 py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: groupBg, color: text }}
              >
                Posponer
              </motion.button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}
