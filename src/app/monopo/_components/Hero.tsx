"use client";

import { motion } from "motion/react";
import { frost } from "../_data";
import { GhostButton } from "./GhostButton";

/** Pieza externa (hero): atmosférico, tipografía protagonista, ghost buttons. */
export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-32 min-h-[55vh] flex flex-col justify-center"
    >
      <p className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: frost.textMute }}>
        STUDIO · HANOI · TOKYO · PARIS
      </p>
      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] mb-8 tracking-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        We design <em className="font-normal italic" style={{ color: frost.violet }}>brands</em>
        <br />
        that don&apos;t <em className="font-normal italic" style={{ color: frost.blue }}>blend in.</em>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10" style={{ color: frost.textSoft }}>
        Independent design studio crafting brand identities, digital experiences, and editorial
        work for clients who want something more than templates.
      </p>

      <div className="flex flex-wrap gap-3">
        <GhostButton>See our work</GhostButton>
        <GhostButton variant="text">Get in touch</GhostButton>
      </div>
    </motion.section>
  );
}
