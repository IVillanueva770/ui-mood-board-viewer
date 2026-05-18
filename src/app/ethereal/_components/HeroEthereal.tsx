"use client";

import { motion } from "motion/react";
import type { Manifiesto } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion, useCursorTilt, useScrollParallax } from "./use-ethereal-motion";

/**
 * Pieza externa: hero asimétrico. Type mask reveal por línea, palabra
 * acento cursor-aware, columna meta con parallax leve y scroll-hint.
 */
export function HeroEthereal({ meta }: { meta: Manifiesto }) {
  const { reduce, maskReveal } = useEtherealMotion();
  const tilt = useCursorTilt(14);
  const parY = useScrollParallax(70);

  return (
    <section className="mb-32 grid grid-cols-12 gap-4">
      <motion.div
        style={{ y: parY }}
        className="col-span-12 md:col-span-2 md:pt-32"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: palette.muted }}>
          {meta.vol}
        </p>
        <p className="text-xs" style={{ color: palette.muted }}>{meta.periodo}</p>
        <span
          aria-hidden
          className="hidden md:block mt-10 font-bebas leading-none select-none"
          style={{ fontSize: "8rem", color: palette.border }}
        >
          ✷
        </span>
      </motion.div>

      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="col-span-12 md:col-span-10"
      >
        <h1
          className="font-bebas leading-[0.85]"
          style={{ letterSpacing: "-0.04em", fontSize: "clamp(3.5rem, 11vw, 12.5rem)" }}
        >
          <span className="block overflow-hidden">
            <motion.span className="block" {...maskReveal(0)}>
              ESTUDIO
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              style={{ color: palette.accent, fontStyle: "italic", ...tilt.style }}
              {...maskReveal(0.12)}
            >
              en construcción
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" {...maskReveal(0.24)}>
              PERMANENTE.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 flex items-center gap-4"
        >
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="block w-px h-12"
            style={{ backgroundColor: palette.accent }}
          />
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.muted }}>
            Bajá — hay obra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
