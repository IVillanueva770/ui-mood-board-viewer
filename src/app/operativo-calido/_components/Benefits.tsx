"use client";

import { motion } from "motion/react";
import { palette, type Beneficio } from "../_data";

/** Pieza externa: 3 beneficios en lenguaje llano (no jerga). */
export function Benefits({ beneficios }: { beneficios: Beneficio[] }) {
  const { muted, border } = palette;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {beneficios.map((c, i) => (
        <motion.div
          key={c.num}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          whileHover={{ y: -3 }}
          className="bg-white rounded-xl p-5"
          style={{ border: `1px solid ${border}` }}
        >
          <p className="text-xs font-mono font-semibold mb-2" style={{ color: c.color }}>{c.num}</p>
          <p className="font-semibold text-lg mb-1.5">{c.titulo}</p>
          <p className="text-sm leading-relaxed" style={{ color: muted }}>{c.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
