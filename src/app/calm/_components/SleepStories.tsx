"use client";

import { motion } from "motion/react";
import { palette, type SleepStory } from "../_data";
import { useCalmMotion } from "./use-calm-motion";

/**
 * Pieza interna (3): sleep stories — grid de cards con look de player. Lift
 * cálido suave al hover (lento, sin bounce). Reveal escalonado al scrollear.
 */
export function SleepStories({ stories }: { stories: SleepStory[] }) {
  const { reveal, lift } = useCalmMotion();
  const { sage, ink, surface, muted, line } = palette;

  return (
    <section id="calm-sleep" className="scroll-mt-10">
      <motion.p
        {...reveal()}
        className="text-[11px] uppercase tracking-[0.35em] mb-3"
        style={{ color: sage }}
      >
        sleep stories
      </motion.p>
      <motion.h2
        {...reveal(0.06)}
        className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-3"
        style={{ color: ink }}
      >
        Para cuando{" "}
        <em className="italic" style={{ color: sage }}>
          no llega
        </em>{" "}
        el sueño.
      </motion.h2>
      <motion.p
        {...reveal(0.12)}
        className="font-cormorant italic text-lg mb-12"
        style={{ color: muted }}
      >
        Voces lentas, narradas para que te dejes llevar.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <motion.div
            key={s.tit}
            {...reveal(i * 0.07)}
            {...lift}
            className="p-7 cursor-pointer"
            style={{ backgroundColor: surface, borderRadius: 22, border: `1px solid ${line}` }}
          >
            <div className="flex items-center justify-between mb-7">
              <div
                className="w-12 h-12 rounded-full"
                style={{ backgroundColor: s.color, opacity: 0.7 }}
              />
              <span
                className="grid place-items-center w-9 h-9 rounded-full text-xs"
                style={{ border: `1px solid ${line}`, color: sage }}
              >
                ▶
              </span>
            </div>
            <h3
              className="font-cormorant italic text-2xl mb-2 leading-tight"
              style={{ color: ink }}
            >
              {s.tit}
            </h3>
            <p className="text-sm mb-4" style={{ color: muted }}>
              {s.narrador}
            </p>
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: sage }}
            >
              {s.min}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
