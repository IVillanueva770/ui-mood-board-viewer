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

        {/* Divider de cambio de modo */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          <span className="text-[10px] uppercase tracking-[0.4em] font-light" style={{ color: "#888888" }}>
            inside the studio
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* ====== VISTA OPERATIVA — panel interno del estudio ====== */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: "#888888" }}>02 · operations</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-5" style={{ letterSpacing: "-0.02em" }}>
                The studio is a system. <em className="italic" style={{ color: "#a78bfa" }}>This</em> is what runs underneath.
              </h2>
              <p className="text-base leading-relaxed max-w-xl" style={{ color: "#aaaaaa" }}>
                Cómo gestionamos pipeline, capacidad de equipo, y cobranza. Sin Notion-frankenstein, sin Trellos compartidos a medio mantener.
              </p>
            </div>
          </div>

          {/* Pipeline minimal */}
          <div className="mb-12">
            <div className="flex items-end justify-between mb-6">
              <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#888888" }}>Active projects</p>
              <p className="text-xs" style={{ color: "#666666" }}>06 — Spring 2026</p>
            </div>
            <div className="space-y-0">
              {[
                { num: "01", cliente: "Aurora Botanical", tipo: "Brand identity", etapa: "Final review", deadline: "May 14", asignado: "MR · TM" },
                { num: "02", cliente: "Cien Soles", tipo: "Web · editorial", etapa: "Design phase", deadline: "May 22", asignado: "JG" },
                { num: "03", cliente: "Matria Records", tipo: "Branding · motion", etapa: "Design phase", deadline: "May 30", asignado: "TM · KS" },
                { num: "04", cliente: "Tabacal", tipo: "Packaging · web", etapa: "Discovery", deadline: "Jun 12", asignado: "MR" },
                { num: "05", cliente: "Norte Estudio", tipo: "Identity · print", etapa: "Brief", deadline: "Jun 28", asignado: "TBD" },
                { num: "06", cliente: "Casa Verde", tipo: "Identity", etapa: "Hold", deadline: "—", asignado: "—" },
              ].map((p) => (
                <motion.div
                  key={p.num}
                  whileHover={{ x: 6 }}
                  className="grid grid-cols-12 gap-3 py-5 cursor-pointer"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="col-span-1 text-xs self-center" style={{ color: "#666666", fontFamily: "var(--font-geist-mono)" }}>{p.num}</div>
                  <div className="col-span-11 md:col-span-5 self-center">
                    <p className="text-2xl font-light leading-tight">{p.cliente}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{p.tipo}</p>
                  </div>
                  <div className="col-span-6 md:col-span-2 self-center">
                    <span className="text-xs px-2 py-1 rounded-sm" style={{
                      backgroundColor: p.etapa === "Final review" ? "rgba(167,139,250,0.15)" : p.etapa === "Hold" ? "rgba(255,255,255,0.04)" : "rgba(96,165,250,0.1)",
                      color: p.etapa === "Final review" ? "#a78bfa" : p.etapa === "Hold" ? "#666" : "#60a5fa",
                    }}>
                      {p.etapa}
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2 self-center text-xs" style={{ color: "#aaaaaa", fontFamily: "var(--font-geist-mono)" }}>{p.deadline}</div>
                  <div className="col-span-3 md:col-span-2 self-center text-xs text-right" style={{ color: "#888888", fontFamily: "var(--font-geist-mono)" }}>{p.asignado}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capacity + revenue stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { val: "82%", label: "Team capacity", sub: "spring 2026" },
              { val: "$ 47.2k", label: "MRR projects", sub: "+12% q/q" },
              { val: "14d", label: "Avg discovery", sub: "down from 21d" },
              { val: "0.94", label: "On-time delivery", sub: "last 12 months" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-light tracking-tight mb-2">{s.val}</p>
                <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#aaaaaa" }}>{s.label}</p>
                <p className="text-[10px]" style={{ color: "#666666", fontFamily: "var(--font-geist-mono)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="rgba(255,255,255,0.1)" />
      </main>
    </div>
  );
}
