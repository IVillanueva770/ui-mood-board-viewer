"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function MonopoPage() {
  const e = getEstilo("monopo")!;
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }} className="font-inter">
      {/* Animated gradient bg */}
      <motion.div
        aria-hidden
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(120, 50, 200, 0.25), transparent 50%), radial-gradient(circle at 70% 70%, rgba(50, 100, 200, 0.2), transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(120, 50, 200, 0.25), transparent 50%), radial-gradient(circle at 20% 70%, rgba(50, 100, 200, 0.2), transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(120, 50, 200, 0.25), transparent 50%), radial-gradient(circle at 70% 70%, rgba(50, 100, 200, 0.2), transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10"
      />

      <StyleHeader estilo={e} borderColor="rgba(255,255,255,0.1)" navColor="#6d6d6d" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
        {/* Hero ghost-button style */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32 min-h-[60vh] flex flex-col justify-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "#888888" }}>
            STUDIO · HANOI · TOKYO · PARIS
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] mb-8 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            We design <em className="font-normal italic" style={{ color: "#a78bfa" }}>brands</em><br />
            that don't <em className="font-normal italic" style={{ color: "#60a5fa" }}>blend in.</em>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10" style={{ color: "#aaaaaa" }}>
            Independent design studio crafting brand identities, digital experiences, and editorial work for clients who want something more than templates.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Ghost button style monopo */}
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3 text-sm font-medium transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                borderRadius: "75.024px",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              See our work
            </motion.button>
            <motion.button
              whileHover={{ x: 4 }}
              className="px-7 py-3 text-sm font-medium flex items-center gap-2"
              style={{ color: "#aaaaaa" }}
            >
              Get in touch <span style={{ color: "#a78bfa" }}>→</span>
            </motion.button>
          </div>
        </motion.section>

        {/* Featured project */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "#888888" }}>SELECTED · 2026</p>
              <p className="text-2xl sm:text-3xl font-light max-w-md leading-snug">
                Recent work for clients pushing boundaries.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer relative"
            style={{
              background: "linear-gradient(135deg, rgba(120,50,200,0.3), rgba(50,100,200,0.3))",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#aaaaaa" }}>Featured · 01</p>
              <h3 className="text-4xl sm:text-6xl font-light mb-2">Aurora Botanical</h3>
              <p className="text-sm" style={{ color: "#aaaaaa" }}>Brand identity · Web · Packaging</p>
            </div>
          </motion.div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="rgba(255,255,255,0.1)" />
      </main>
    </div>
  );
}
