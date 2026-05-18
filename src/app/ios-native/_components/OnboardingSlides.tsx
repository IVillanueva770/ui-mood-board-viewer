"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "motion/react";
import { palette, type OnbSlide } from "../_data";
import { useIosMotion } from "./use-ios-motion";

/**
 * Pieza externa (onboarding): 3 slides swipeables con paginación por puntos —
 * el patrón clásico de "qué hace la app" del onboarding iOS. Drag horizontal
 * con spring nativo + flechas, igual que un primer arranque real.
 */
export function OnboardingSlides({ slides }: { slides: OnbSlide[] }) {
  const { reduce, tap } = useIosMotion();
  const { text, muted, card, sep, accent } = palette;
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (n: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, n));
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(idx + 1);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(idx - 1);
  };

  const s = slides[idx];

  return (
    <section
      className="rounded-3xl p-6 sm:p-8"
      style={{ backgroundColor: card, border: `1px solid ${sep}` }}
    >
      <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-5" style={{ color: muted }}>
        Así arranca
      </p>

      <div className="relative overflow-hidden" style={{ minHeight: 220 }}>
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={s.id}
            custom={dir}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
            initial={reduce ? false : { opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -80 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="flex flex-col items-center text-center px-2"
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6"
              style={{ background: s.gradient }}
            >
              {s.emoji}
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-2 max-w-xs" style={{ color: text }}>
              {s.titulo}
            </h3>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: muted }}>
              {s.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-6">
        <motion.button
          {...tap}
          onClick={() => go(idx - 1)}
          disabled={idx === 0}
          className="text-sm font-semibold disabled:opacity-30"
          style={{ color: accent }}
        >
          Atrás
        </motion.button>

        <div className="flex items-center gap-2">
          {slides.map((sl, i) => (
            <button
              key={sl.id}
              onClick={() => go(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 22 : 7,
                height: 7,
                backgroundColor: i === idx ? accent : sep,
              }}
            />
          ))}
        </div>

        <motion.button
          {...tap}
          onClick={() => go(idx + 1)}
          disabled={idx === slides.length - 1}
          className="text-sm font-semibold disabled:opacity-30"
          style={{ color: accent }}
        >
          {idx === slides.length - 1 ? "Listo" : "Siguiente"}
        </motion.button>
      </div>
    </section>
  );
}
