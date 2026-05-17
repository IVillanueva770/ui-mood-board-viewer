"use client";

import { motion } from "motion/react";
import { palette, type SocialAvatar } from "../_data";

/** Pieza externa: prueba social (negocios chicos que ya lo usan). */
export function SocialProof({ avatares }: { avatares: SocialAvatar[] }) {
  const { text, muted, border } = palette;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 flex items-center justify-between gap-4 flex-wrap mb-12"
      style={{ border: `1px solid ${border}` }}
    >
      <div>
        <p className="font-semibold mb-1">Más de 8.400 negocios chicos en Argentina ya lo usan.</p>
        <p className="text-sm" style={{ color: muted }}>
          Almacenes, kioscos, ferreterías y panaderías. Soporte en castellano, gente real.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {avatares.map((a) => (
          <div
            key={a.letra}
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 border-white -ml-3 first:ml-0"
            style={{ backgroundColor: a.bg, color: text }}
          >
            {a.letra}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
