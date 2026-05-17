"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { type Toast as ToastData } from "./use-orders-board";

/** Firma de motion del estilo: toast cálido, rápido, sin vueltas. */
export function Toast({ toast }: { toast: ToastData }) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 480, damping: 30 }}
          className="fixed left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg"
          style={{ backgroundColor: "#166534", color: "#ffffff", zIndex: 60 }}
        >
          <span className="text-base">✓</span>
          <span className="text-sm font-semibold">{toast.msg}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
