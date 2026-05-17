"use client";

import { motion } from "motion/react";
import { palette, type ItemConfianza } from "../_data";

/** Pieza externa: band de confianza (envío / pagos / atención). */
export function TrustBand({ items }: { items: ItemConfianza[] }) {
  const { verdeSoft, muted, border } = palette;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
      {items.map((b) => (
        <motion.div
          key={b.titulo}
          whileHover={{ y: -2 }}
          className="bg-white rounded-xl p-4 flex items-start gap-3"
          style={{ border: `1px solid ${border}` }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
            style={{ backgroundColor: verdeSoft }}
          >
            {b.icon}
          </div>
          <div>
            <p className="text-sm font-semibold">{b.titulo}</p>
            <p className="text-xs mt-0.5" style={{ color: muted }}>{b.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
