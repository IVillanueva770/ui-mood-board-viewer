"use client";

import { motion } from "motion/react";
import { palette, type Stat } from "../_data";
import { useBrutalMotion } from "./use-brutal-motion";

/** Pieza externa: stats brutalist en bloque dividido, color-flip duro en hover. */
export function StatsBrutal({ stats }: { stats: Stat[] }) {
  const { colorFlip } = useBrutalMotion();
  const { ink, bg, lime } = palette;

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: `3px solid ${ink}` }}>
      {stats.map((s, i) => {
        const dark = i % 2 !== 0;
        return (
          <motion.div
            key={s.label}
            {...colorFlip(lime, ink)}
            className="p-6 sm:p-8 text-center cursor-pointer"
            style={{
              borderRight: i < stats.length - 1 ? `3px solid ${ink}` : "none",
              backgroundColor: dark ? ink : bg,
              color: dark ? bg : ink,
            }}
          >
            <div className="font-bebas text-6xl sm:text-7xl leading-none mb-1">{s.num}</div>
            <div className="text-xs uppercase tracking-widest font-bold">{s.label}</div>
          </motion.div>
        );
      })}
    </section>
  );
}
