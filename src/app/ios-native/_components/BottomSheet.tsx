"use client";

import { type ReactNode } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { palette } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/**
 * Pieza interna reusable: bottom-sheet modal iOS — slide-up con spring nativo,
 * drag handle, y drag-to-dismiss (arrastrar hacia abajo cierra). Es LA firma
 * de "acción/detalle" del mood iOS. Presentacional: recibe contenido por
 * children, el estado de apertura lo maneja quien lo usa.
 */
export function BottomSheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}) {
  const { reduce, sheet } = useIosMotion();
  const { card, sep, muted, text } = palette;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 110 || info.velocity.y > 650) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            {...sheet}
            drag={reduce ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            className="relative w-full max-h-[78%] overflow-y-auto rounded-t-[1.75rem] pb-8"
            style={{ backgroundColor: card }}
            role="dialog"
            aria-label={title ?? "Detalle"}
          >
            <div className="sticky top-0 pt-2.5 pb-2" style={{ backgroundColor: card }}>
              <div
                className="w-9 h-1 rounded-full mx-auto"
                style={{ backgroundColor: sep }}
                aria-hidden
              />
              {title && (
                <div className="flex items-center justify-between px-5 mt-3">
                  <p className="text-lg font-bold tracking-tight" style={{ color: text }}>
                    {title}
                  </p>
                  <button
                    onClick={onClose}
                    className="text-sm font-semibold"
                    style={{ color: palette.accent }}
                    aria-label="Cerrar"
                  >
                    Listo
                  </button>
                </div>
              )}
            </div>
            <div className="px-5 pt-2">{children}</div>
            {!title && (
              <p className="text-center text-[11px] mt-4" style={{ color: muted }}>
                Deslizá hacia abajo para cerrar
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
