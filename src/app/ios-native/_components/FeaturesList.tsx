"use client";

import { motion } from "motion/react";
import { palette, type FeatureGroup } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/**
 * Pieza externa (features): qué hace la app, en formato lista agrupada iOS
 * (header de sección + filas con ícono e ícono-tile, separadores hairline).
 * Mismo lenguaje visual que Ajustes — coherente con el mood nativo.
 */
export function FeaturesList({ groups }: { groups: FeatureGroup[] }) {
  const { enter } = useIosMotion();
  const { text, muted, secondary, card, sep, groupBg } = palette;

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight mb-1 px-1" style={{ color: text }}>
        Qué vas a poder hacer
      </h2>
      <p className="text-sm mb-6 px-1" style={{ color: muted }}>
        Lo justo, bien hecho. Sin features de relleno.
      </p>

      <div className="space-y-6">
        {groups.map((g, gi) => (
          <div key={g.titulo}>
            <p
              className="text-[11px] uppercase tracking-wider font-semibold mb-2 px-3"
              style={{ color: muted }}
            >
              {g.titulo}
            </p>
            <motion.div
              {...enter(gi)}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: card, border: `1px solid ${sep}` }}
            >
              {g.items.map((it, i) => (
                <div
                  key={it.label}
                  className="flex items-center gap-3.5 p-4"
                  style={{ borderTop: i > 0 ? `0.5px solid ${sep}` : "none" }}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: groupBg }}
                  >
                    {it.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight" style={{ color: text }}>
                      {it.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: secondary }}>
                      {it.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
