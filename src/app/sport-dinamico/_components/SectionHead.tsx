"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { palette } from "../_data";
import { useSportMotion } from "./use-sport-motion";

/**
 * Encabezado de sección con WIPE DIAGONAL (firma): una barra naranja
 * skeweada barre el kicker al entrar al viewport, y el título embiste
 * desde la izquierda (slide-in). Mantiene consistente el ritmo agresivo
 * entre todas las piezas internas/externas.
 */
export function SectionHead({
  kicker,
  title,
  right,
}: {
  kicker: string;
  title: string;
  right?: ReactNode;
}) {
  const { slideIn, reduce } = useSportMotion();

  return (
    <div className="mb-6">
      <div className="relative overflow-hidden">
        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ x: "-130%" }}
            whileInView={{ x: "130%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-y-0 w-1/3 -skew-x-12 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${palette.orange}, transparent)`,
              opacity: 0.45,
            }}
          />
        )}
        <motion.p
          {...slideIn(0, -40)}
          className="relative text-[10px] uppercase tracking-[0.35em] font-bold mb-2"
          style={{ color: palette.orange }}
        >
          {kicker}
        </motion.p>
      </div>
      <div
        className="flex items-end justify-between flex-wrap gap-3"
        style={{ borderBottom: `1px solid ${palette.border}`, paddingBottom: "0.75rem" }}
      >
        <motion.h2
          {...slideIn(0.05, -55)}
          className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none"
        >
          {title}
        </motion.h2>
        {right && <div className="shrink-0">{right}</div>}
      </div>
    </div>
  );
}
