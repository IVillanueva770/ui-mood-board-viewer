"use client";

import { motion } from "motion/react";
import { palette, type Viaje } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza interna: lista de próximas reservas. */
export function TripsList({ viajes }: { viajes: Viaje[] }) {
  const { reduce } = useWarmMotion();
  const { muted, border, softPink } = palette;

  return (
    <section>
      <p className="text-lg font-semibold mb-4">Próximos viajes</p>
      <div className="space-y-3">
        {viajes.map((r, i) => (
          <motion.div
            key={r.id}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={reduce ? undefined : { y: -2 }}
            className="bg-white rounded-2xl p-5 flex items-center gap-4 cursor-pointer"
            style={{ border: `1px solid ${border}` }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ backgroundColor: softPink }}
            >
              {r.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{r.lugar}</p>
              <p className="text-sm truncate" style={{ color: muted }}>
                {r.ciudad} · Anfitrión: {r.anfitrion}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold">{r.fechas}</p>
              <p className="text-xs" style={{ color: muted }}>{r.noches} noches · {r.total}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
