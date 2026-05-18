"use client";

import { motion } from "motion/react";
import type { Manifiesto } from "../_data";
import { palette } from "../_data";
import { useEtherealMotion } from "./use-ethereal-motion";
import { MaskHeading } from "./MaskHeading";

/** Pieza externa: manifiesto editorial con la grilla rota a propósito. */
export function ManifiestoBlock({ data }: { data: Manifiesto }) {
  const { reveal } = useEtherealMotion();

  return (
    <section className="mb-32 grid grid-cols-12 gap-4">
      <motion.div className="col-span-12 md:col-span-4 md:pt-2" {...reveal(0)}>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: palette.accent }}>
          Manifiesto
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] mt-3 font-mono" style={{ color: palette.faint }}>
          {data.vol} · {data.periodo}
        </p>
      </motion.div>

      <div className="col-span-12 md:col-span-8 max-w-2xl">
        <MaskHeading
          className="text-3xl sm:text-[2.6rem] leading-snug font-light"
          style={{ color: palette.fg }}
        >
          {data.lead}
        </MaskHeading>
        <motion.p
          className="text-base mt-8 leading-relaxed md:ml-16"
          style={{ color: palette.soft }}
          {...reveal(0.15)}
        >
          {data.cuerpo}
        </motion.p>
        <motion.p
          className="text-xs mt-6 md:ml-16 font-mono uppercase tracking-[0.2em]"
          style={{ color: palette.faint }}
          {...reveal(0.25)}
        >
          {data.firma}
        </motion.p>
      </div>
    </section>
  );
}
