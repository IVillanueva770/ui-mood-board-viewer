"use client";

import { motion } from "motion/react";
import { tokens } from "../_data";
import { useSteepMotion } from "./use-steep-motion";

/**
 * Interno · header del workspace (NO es una pieza funcional, es el chrome del
 * lado interno — equivalente a ConsoleHeader en stripe-real). Identidad del
 * workspace + acción primaria. Las piezas funcionales van apiladas debajo.
 */
export function WorkspaceBar() {
  const { reveal, press } = useSteepMotion();

  return (
    <motion.div
      {...reveal(0)}
      className="flex items-end justify-between flex-wrap gap-4 pb-6"
      style={{ borderBottom: `1px solid ${tokens.border}` }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center font-cormorant text-2xl"
          style={{ backgroundColor: tokens.mist, color: tokens.terracotta }}
        >
          A
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] mb-1" style={{ color: tokens.terracotta }}>
            workspace · acme
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-medium leading-none" style={{ color: tokens.ink }}>
            Analytics
          </h2>
        </div>
      </div>
      <motion.button
        {...press}
        className="px-5 py-2.5 text-sm font-medium rounded-md"
        style={{ backgroundColor: tokens.ink, color: tokens.canvas }}
      >
        Nuevo reporte
      </motion.button>
    </motion.div>
  );
}
