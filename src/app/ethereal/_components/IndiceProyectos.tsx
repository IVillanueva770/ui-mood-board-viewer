"use client";

import { motion } from "motion/react";
import type { EntradaIndice } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion } from "./use-ethereal-motion";

/**
 * Pieza externa: índice editorial enumerado. Hover = línea acento que
 * crece + corrimiento gestual de la fila (firma ethereal en lista).
 */
export function IndiceProyectos({
  titulo,
  rango,
  total,
  entradas,
}: {
  titulo: string;
  rango: string;
  total: string;
  entradas: EntradaIndice[];
}) {
  const { reduce } = useEtherealMotion();

  return (
    <section className="mb-24">
      <div
        className="flex items-end justify-between mb-10 pb-4"
        style={{ borderBottom: `1px solid ${palette.rule}` }}
      >
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
          {titulo} · {rango}
        </p>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
          {total}
        </p>
      </div>

      <div className="space-y-0">
        {entradas.map((p, i) => (
          <motion.div
            key={p.num}
            initial="enter"
            whileInView="rest"
            whileHover="hover"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              enter: { opacity: 0, x: reduce ? 0 : -20 },
              rest: { opacity: 1, x: 0 },
              hover: {},
            }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-12 gap-4 py-6 cursor-pointer"
            style={{ borderBottom: `1px solid ${palette.border}` }}
          >
            <motion.div
              aria-hidden
              variants={{ enter: { scaleX: 0 }, rest: { scaleX: 0 }, hover: { scaleX: reduce ? 0 : 1 } }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
              style={{ backgroundColor: palette.accent, transformOrigin: "left center" }}
            />
            <motion.div
              variants={{
                enter: { x: 0, scale: 1, color: palette.faint },
                rest: { x: 0, scale: 1, color: palette.faint },
                hover: { x: reduce ? 0 : -8, scale: reduce ? 1 : 1.15, color: palette.accent },
              }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="col-span-1 text-xs font-mono"
              style={{ transformOrigin: "left center" }}
            >
              {p.num}
            </motion.div>
            <motion.div
              variants={{
                enter: { x: 0, fontStyle: "normal" },
                rest: { x: 0, fontStyle: "normal" },
                hover: { x: reduce ? 0 : 12, fontStyle: "italic" },
              }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="col-span-7 md:col-span-6 font-bebas text-3xl sm:text-4xl tracking-wide leading-none"
              style={{ color: palette.fg }}
            >
              {p.titulo}
            </motion.div>
            <motion.div
              variants={{
                enter: { y: 0, color: palette.muted },
                rest: { y: 0, color: palette.muted },
                hover: { y: reduce ? 0 : 6, color: palette.accent },
              }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="col-span-3 text-sm self-end"
            >
              {p.tipo}
            </motion.div>
            <motion.div
              variants={{
                enter: { y: 0, color: palette.faint },
                rest: { y: 0, color: palette.faint },
                hover: { y: reduce ? 0 : -10, color: palette.fg },
              }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="col-span-1 text-xs self-end text-right font-mono"
            >
              &apos;{p.year}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
