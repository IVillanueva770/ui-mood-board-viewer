"use client";

import { motion } from "motion/react";
import { palette } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza externa: hero + buscador (destino/fechas) + chips de destino rápido. */
export function SearchPanel({ destinos }: { destinos: string[] }) {
  const { reduce } = useWarmMotion();
  const { rausch, text, muted, border } = palette;

  return (
    <section className="pt-2">
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-4 max-w-3xl mx-auto"
        >
          Lugares para quedarte<br />
          <span style={{ color: rausch }}>donde quieras.</span>
        </motion.h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: muted }}>
          Buscá un destino, elegí fechas y reservá en segundos. Hospedaje real, anfitriones reales.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-white rounded-full mx-auto max-w-3xl mb-5 flex items-center gap-1 p-2 shadow-sm"
        style={{ border: `1px solid ${border}` }}
      >
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Dónde</p>
          <p className="text-sm" style={{ color: muted }}>Bariloche, Río Negro</p>
        </div>
        <div className="w-px h-8" style={{ backgroundColor: border }} />
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Llegada</p>
          <p className="text-sm" style={{ color: muted }}>14 jul</p>
        </div>
        <div className="w-px h-8 hidden sm:block" style={{ backgroundColor: border }} />
        <div className="flex-1 px-5 py-2 cursor-pointer rounded-full hover:bg-neutral-50 transition hidden sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5">Salida</p>
          <p className="text-sm" style={{ color: muted }}>21 jul</p>
        </div>
        <motion.button
          whileHover={reduce ? undefined : { scale: 1.05 }}
          whileTap={reduce ? undefined : { scale: 0.95 }}
          className="rounded-full text-white text-sm font-semibold px-6 py-3 flex items-center gap-2 shrink-0"
          style={{ backgroundColor: rausch }}
        >
          <span>🔎</span><span>Buscar</span>
        </motion.button>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs mr-1" style={{ color: muted }}>Buscados esta semana:</span>
        {destinos.map((c) => (
          <motion.button
            key={c}
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="px-4 py-2 rounded-full text-sm bg-white"
            style={{ border: `1px solid ${border}`, color: text }}
          >
            📍 {c}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
