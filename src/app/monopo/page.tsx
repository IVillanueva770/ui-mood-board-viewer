"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function MonopoPage() {
  const e = getEstilo("monopo")!;
  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }} className="font-inter">
      {/* SVG filter para grano del shimmer — se aplica con filter:url(#monopo-grain) */}
      <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="monopo-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0.55 0"
            />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
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
            {/* Ghost button con shimmer firma monopo */}
            <motion.button
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              animate="rest"
              className="relative px-7 py-3 text-sm font-medium overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
                borderRadius: "75.024px",
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <motion.span
                aria-hidden
                variants={{
                  rest: { x: "-110%", opacity: 0 },
                  hover: { x: "110%", opacity: 1 },
                }}
                transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute inset-y-0 w-1/2 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.18) 45%, rgba(167,139,250,0.25) 55%, transparent 100%)",
                }}
              />
              <motion.span
                variants={{
                  rest: { backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.3)" },
                  hover: { backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.5)" },
                }}
                transition={{ duration: 0.4 }}
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ borderRadius: "75.024px" }}
              />
              <span className="relative">See our work</span>
            </motion.button>
            <motion.button
              whileHover={{ x: 4, color: "#ffffff" }}
              className="px-7 py-3 text-sm font-medium flex items-center gap-2"
              style={{ color: "#aaaaaa" }}
            >
              Get in touch
              <motion.span
                initial={{ filter: "drop-shadow(0 0 0px rgba(167,139,250,0))" }}
                whileHover={{ filter: "drop-shadow(0 0 6px rgba(167,139,250,0.8))" }}
                style={{ color: "#a78bfa" }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.section>

        {/* Featured project */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer relative group"
            style={{
              background: "linear-gradient(135deg, rgba(120,50,200,0.3), rgba(50,100,200,0.3))",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Capa 1 — estela trasera, ancha y muy translúcida */}
            <motion.div
              aria-hidden
              variants={{
                rest: { x: "-130%", opacity: 0 },
                hover: { x: "130%", opacity: 1 },
              }}
              transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute -inset-y-10 w-[85%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(108deg, transparent 0%, rgba(167,139,250,0.05) 30%, rgba(167,139,250,0.15) 50%, rgba(96,165,250,0.08) 70%, transparent 100%)",
                filter: "blur(20px)",
                mixBlendMode: "screen",
                transform: "rotate(-2deg)",
              }}
            />
            {/* Capa 2 — banda principal con grano y blur sutil */}
            <motion.div
              aria-hidden
              variants={{
                rest: { x: "-115%", opacity: 0 },
                hover: { x: "115%", opacity: 1 },
              }}
              transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
              className="absolute -inset-y-4 w-[55%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.28) 48%, rgba(255,255,255,0.32) 52%, rgba(167,139,250,0.18) 70%, transparent 100%)",
                filter: "blur(8px) url(#monopo-grain)",
                mixBlendMode: "screen",
                transform: "rotate(-2deg)",
              }}
            />
            {/* Capa 3 — punto de luz radial caliente que viaja con la banda */}
            <motion.div
              aria-hidden
              variants={{
                rest: { x: "-115%", opacity: 0 },
                hover: { x: "115%", opacity: 1 },
              }}
              transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
              className="absolute inset-y-0 w-1/2 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 45% 70% at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(167,139,250,0.28) 35%, transparent 65%)",
                mixBlendMode: "screen",
                filter: "blur(2px)",
              }}
            />
            {/* Capa 4 — segundo pase a contramano, muy sutil, da textura "respirada" */}
            <motion.div
              aria-hidden
              variants={{
                rest: { x: "120%", opacity: 0 },
                hover: { x: "-120%", opacity: 0.6 },
              }}
              transition={{ duration: 2, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
              className="absolute inset-y-0 w-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(75deg, transparent 0%, rgba(96,165,250,0.12) 50%, transparent 100%)",
                filter: "blur(14px)",
                mixBlendMode: "screen",
              }}
            />
            {/* Border glow al hover */}
            <motion.div
              aria-hidden
              variants={{
                rest: { borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 0 0 rgba(167,139,250,0)" },
                hover: { borderColor: "rgba(255,255,255,0.25)", boxShadow: "0 12px 60px -12px rgba(167,139,250,0.4)" },
              }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            />
            <motion.div
              variants={{ rest: { y: 0 }, hover: { y: -4 } }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-center relative"
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "#aaaaaa" }}>Featured · 01</p>
              <h3 className="text-4xl sm:text-6xl font-light mb-2">Aurora Botanical</h3>
              <p className="text-sm" style={{ color: "#aaaaaa" }}>Brand identity · Web · Packaging</p>
            </motion.div>
          </motion.div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="rgba(255,255,255,0.1)" />
      </main>
    </div>
  );
}
