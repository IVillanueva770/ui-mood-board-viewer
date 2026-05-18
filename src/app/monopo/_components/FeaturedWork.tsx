"use client";

import { motion } from "motion/react";
import { frost, type MonopoData } from "../_data";
import { useFrostMotion } from "./use-frost-motion";
import { FrostSweep } from "./FrostSweep";

type Featured = MonopoData["featured"];

/**
 * Pieza externa: proyecto destacado a pantalla. Superficie frosted grande
 * donde vive el barrido shimmer multicapa (firma) al hover.
 */
export function FeaturedWork({ proyecto }: { proyecto: Featured }) {
  const { sectionReveal } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: frost.textMute }}>
            SELECTED · {proyecto.year}
          </p>
          <p className="text-2xl sm:text-3xl font-light max-w-md leading-snug">
            Recent work for clients pushing boundaries.
          </p>
        </div>
      </div>

      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer relative"
        style={{
          background: "linear-gradient(135deg, rgba(120,50,200,0.3), rgba(50,100,200,0.3))",
          backdropFilter: "blur(40px)",
          border: `1px solid ${frost.border}`,
        }}
      >
        <FrostSweep />
        <motion.div
          aria-hidden
          variants={{
            rest: { borderColor: frost.border, boxShadow: "0 0 0 0 rgba(167,139,250,0)" },
            hover: { borderColor: "rgba(255,255,255,0.25)", boxShadow: "0 12px 60px -12px rgba(167,139,250,0.4)" },
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ borderWidth: "1px", borderStyle: "solid" }}
        />
        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -4 } }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center relative px-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: frost.textSoft }}>
            Featured · 01
          </p>
          <h3 className="text-4xl sm:text-6xl font-light mb-2">{proyecto.titulo}</h3>
          <p className="text-sm" style={{ color: frost.textSoft }}>{proyecto.tipo}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
