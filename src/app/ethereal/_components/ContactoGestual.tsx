"use client";

import { motion } from "motion/react";
import type { Contacto } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion, useCursorTilt } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

/** Pieza externa: contacto minimal y gestual. El CTA es cursor-aware. */
export function ContactoGestual({ data }: { data: Contacto }) {
  const { reduce, reveal } = useEtherealMotion();
  const tilt = useCursorTilt(18);

  return (
    <section className="mb-24 grid grid-cols-12 gap-4">
      <motion.div className="col-span-12 md:col-span-3" {...reveal(0)}>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.accent }}>
          Contacto
        </p>
        <p className="text-xs mt-4 leading-relaxed" style={{ color: palette.muted }}>
          {data.ubicacion}
        </p>
        <p className="text-[10px] mt-3 font-mono uppercase tracking-[0.2em]" style={{ color: palette.faint }}>
          {data.detalle}
        </p>
      </motion.div>

      <div className="col-span-12 md:col-span-9">
        <MaskHeading
          className="text-2xl sm:text-4xl leading-snug font-light max-w-2xl"
          style={{ color: palette.fg }}
        >
          {data.frase}
        </MaskHeading>

        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="mt-12 inline-block"
        >
          <motion.a
            href={`mailto:${data.email}`}
            style={tilt.style}
            whileHover={reduce ? undefined : { letterSpacing: "0.02em" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-baseline gap-5 font-bebas tracking-wide leading-none"
          >
            <span
              className="text-5xl sm:text-7xl"
              style={{ color: palette.fg }}
            >
              iniciemos algo
            </span>
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl sm:text-6xl"
              style={{ color: palette.accent }}
            >
              →
            </motion.span>
          </motion.a>
          <p className="mt-4 text-sm font-mono" style={{ color: palette.muted }}>
            {data.email}
          </p>
        </div>
      </div>
    </section>
  );
}
