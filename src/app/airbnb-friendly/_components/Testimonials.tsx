"use client";

import { motion } from "motion/react";
import { palette, type Testimonio } from "../_data";
import { useWarmMotion } from "./use-warm-motion";

/** Pieza externa: social proof — reviews reales-mock argentinas. */
export function Testimonials({ testimonios }: { testimonios: Testimonio[] }) {
  const { reveal, lift } = useWarmMotion();
  const { rausch, text, muted, border } = palette;

  return (
    <section className="mt-16">
      <div className="text-center mb-9">
        <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: rausch }}>
          ❤️ Huéspedes que volvieron
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Lo que dicen los que ya viajaron
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonios.map((t, i) => (
          <motion.div
            key={t.id}
            {...reveal(i * 0.08)}
            {...lift}
            className="bg-white rounded-2xl p-6 flex flex-col"
            style={{ border: `1px solid ${border}` }}
          >
            <div className="text-base mb-3" style={{ color: rausch }}>★★★★★</div>
            <p className="text-sm leading-relaxed flex-1 mb-5">“{t.texto}”</p>
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
                style={{ backgroundColor: t.color, color: text }}
              >
                {t.inicial}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.nombre}</p>
                <p className="text-xs" style={{ color: muted }}>{t.ciudad}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
