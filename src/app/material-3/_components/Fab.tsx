"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ripple } from "@/components/ripple";
import { m3, elevation } from "../_data";
import { useM3Motion } from "./use-m3-motion";

const CATS = ["Súper", "Transporte", "Comida afuera", "Servicios", "Ocio", "Salud"];

/**
 * FAB Material 3 con morph (firma). Colapsado = extended FAB. Al tocar, la
 * MISMA superficie (`layoutId`) se transforma en un bottom sheet de carga
 * rápida con emphasized easing. Autocontenido: maneja su estado y un toast de
 * confirmación, sin levantar estado al resto de la app (YAGNI).
 */
export function Fab() {
  const { surface, EMPHASIZED_DECEL } = useM3Motion();
  const [open, setOpen] = useState(false);
  const [monto, setMonto] = useState("");
  const [cat, setCat] = useState(CATS[0]);
  const [toast, setToast] = useState(false);

  const guardar = () => {
    setOpen(false);
    setMonto("");
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <>
      {/* Scrim */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 z-30"
            style={{ backgroundColor: "rgba(0,0,0,0.32)" }}
          />
        )}
      </AnimatePresence>

      {/* Superficie que morfea: FAB <-> sheet (mismo layoutId) */}
      {!open ? (
        <motion.button
          layoutId="m3-fab-surface"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.96 }}
          transition={surface}
          className="absolute right-4 bottom-4 z-40 flex items-center gap-2 px-5 h-14 rounded-2xl text-sm font-semibold"
          style={{ backgroundColor: m3.primaryContainer, color: m3.onPrimaryContainer, boxShadow: elevation(3) }}
          aria-label="Cargar gasto"
        >
          <span className="text-xl leading-none">＋</span>
          Cargar
        </motion.button>
      ) : (
        <motion.div
          layoutId="m3-fab-surface"
          transition={surface}
          className="absolute left-0 right-0 bottom-0 z-40 rounded-t-[28px] p-5"
          style={{ backgroundColor: m3.surfaceContainerHigh, boxShadow: elevation(4) }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EMPHASIZED_DECEL, delay: 0.08 }}
          >
            <div className="mx-auto w-9 h-1 rounded-full mb-5" style={{ backgroundColor: m3.outlineVariant }} />
            <h3 className="text-lg font-medium tracking-tight mb-4" style={{ color: m3.onSurface }}>
              Cargar gasto
            </h3>

            <label className="block text-xs mb-1.5" style={{ color: m3.onSurfaceVariant }}>Monto</label>
            <div
              className="flex items-center rounded-xl px-4 h-12 mb-4"
              style={{ backgroundColor: m3.surface, border: `1px solid ${m3.outline}` }}
            >
              <span className="text-base mr-1" style={{ color: m3.onSurfaceVariant }}>$</span>
              <input
                value={monto}
                onChange={(e) => setMonto(e.target.value.replace(/[^0-9.]/g, ""))}
                inputMode="decimal"
                placeholder="0"
                className="flex-1 bg-transparent outline-none text-base"
                style={{ color: m3.onSurface }}
              />
            </div>

            <p className="text-xs mb-2" style={{ color: m3.onSurfaceVariant }}>Categoría</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {CATS.map((c) => {
                const sel = c === cat;
                return (
                  <Ripple
                    key={c}
                    as="button"
                    color="rgba(103,80,164,0.2)"
                    onClick={() => setCat(c)}
                    className="px-3.5 py-2 rounded-lg text-xs font-medium"
                    style={{
                      backgroundColor: sel ? m3.secondaryContainer : "transparent",
                      color: sel ? m3.onSecondaryContainer : m3.onSurfaceVariant,
                      border: `1px solid ${sel ? m3.secondaryContainer : m3.outlineVariant}`,
                    }}
                  >
                    {sel ? "✓ " : ""}{c}
                  </Ripple>
                );
              })}
            </div>

            <div className="flex justify-end gap-2">
              <Ripple
                as="button"
                color="rgba(103,80,164,0.16)"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ color: m3.primary }}
              >
                Cancelar
              </Ripple>
              <Ripple
                as="button"
                color="rgba(255,255,255,0.35)"
                onClick={guardar}
                className="px-6 py-2.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: m3.primary, color: m3.onPrimary, boxShadow: elevation(1) }}
              >
                Guardar
              </Ripple>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Toast de confirmación */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: EMPHASIZED_DECEL }}
            className="absolute left-4 right-4 bottom-4 z-40 rounded-xl px-4 py-3 text-sm flex items-center gap-2"
            style={{ backgroundColor: m3.onSurface, color: m3.surface, boxShadow: elevation(3) }}
          >
            <span style={{ color: m3.successContainer }}>✓</span>
            Gasto agregado
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
