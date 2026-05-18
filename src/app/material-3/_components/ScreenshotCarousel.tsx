"use client";

import { motion } from "motion/react";
import { m3, type ScreenSpec } from "../_data";
import { useM3Motion } from "./use-m3-motion";
import { ScreenMock } from "./ScreenMock";

/**
 * Pieza externa 3 — carrusel de capturas (Play Store). Scroll horizontal con
 * drag, snap por captura, lift Material en hover. Reusa `ScreenMock`.
 */
export function ScreenshotCarousel({ capturas }: { capturas: ScreenSpec[] }) {
  const { enter } = useM3Motion();

  return (
    <section className="max-w-5xl mx-auto">
      <motion.h2
        {...enter()}
        className="text-xl font-medium tracking-tight mb-5 px-5"
        style={{ color: m3.onSurface }}
      >
        Capturas
      </motion.h2>

      <motion.div
        {...enter()}
        className="overflow-x-auto pb-4 px-5"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4 w-max">
          {capturas.map((c) => (
            <motion.div
              key={c.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              style={{ scrollSnapAlign: "start" }}
            >
              <ScreenMock spec={c} width={176} />
              <p className="text-xs font-medium mt-2 px-1" style={{ color: m3.onSurface }}>{c.titulo}</p>
              <p className="text-[11px] px-1" style={{ color: m3.onSurfaceVariant }}>{c.bullet}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
