"use client";

import { motion } from "motion/react";
import { frost } from "../_data";
import { useFrostMotion } from "./use-frost-motion";
import { GhostButton } from "./GhostButton";
import { FrostSweep } from "./FrostSweep";

/** Pieza externa: band CTA de contacto, frosted, con barrido al hover. */
export function ContactBand() {
  const { sectionReveal } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="rounded-3xl overflow-hidden relative px-8 py-16 sm:py-20 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(120,50,200,0.2), rgba(50,100,200,0.18))",
          backdropFilter: "blur(40px)",
          border: `1px solid ${frost.border}`,
        }}
      >
        <FrostSweep />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.4em] mb-6" style={{ color: frost.textMute }}>
            Let&apos;s build something
          </p>
          <h2
            className="text-4xl sm:text-6xl font-light leading-tight mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            Have a brand that needs to{" "}
            <em className="italic" style={{ color: frost.violet }}>stand out?</em>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <GhostButton>Start a project</GhostButton>
            <GhostButton variant="text">studio@monopo.tld</GhostButton>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
