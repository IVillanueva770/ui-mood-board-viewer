"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, type Faq } from "../_data";
import { useGentleMotion } from "./use-gentle-motion";

/** Pieza externa: FAQ corta (accordion) + CTA final con reaseguro. */
export function FaqCta({ faq }: { faq: Faq[] }) {
  const { reduce, reveal, calmTap } = useGentleMotion();
  const { accent, accentDeep, muted, border, card, text } = palette;
  const [abierta, setAbierta] = useState<number | null>(0);

  return (
    <section className="max-w-5xl mx-auto px-2 sm:px-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accent }}>
            Antes de empezar
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            Las dudas de siempre
          </h2>
          <div className="space-y-2">
            {faq.map((f, i) => {
              const open = abierta === i;
              return (
                <motion.div
                  key={f.q}
                  {...reveal(i * 0.05)}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: card, border: `1px solid ${border}` }}
                >
                  <button
                    onClick={() => setAbierta(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold" style={{ color: text }}>{f.q}</span>
                    <motion.span
                      animate={reduce ? undefined : { rotate: open ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22 }}
                      className="text-lg shrink-0"
                      style={{ color: accent }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: muted }}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          {...reveal(0.1)}
          className="md:col-span-2 rounded-3xl p-7 flex flex-col justify-center text-center"
          style={{ background: "linear-gradient(160deg, #dbeafe 0%, #fef3c7 100%)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: accentDeep }}>
            Sin compromiso
          </p>
          <h3 className="text-2xl font-semibold tracking-tight mb-3" style={{ color: text }}>
            Tu primera evaluación es gratis
          </h3>
          <p className="text-sm mb-6 leading-relaxed" style={{ color: text }}>
            Hablás con un kinesiólogo, te dice si te puede ayudar y recién ahí decidís.
            Sin tarjeta, sin letra chica.
          </p>
          <motion.button
            {...calmTap}
            whileHover={reduce ? undefined : { y: -2, boxShadow: "0 14px 30px -12px rgba(59,130,246,0.5)" }}
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            Empezar evaluación gratis
          </motion.button>
          <p className="text-xs mt-3" style={{ color: muted }}>
            Te responde una persona, no un bot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
