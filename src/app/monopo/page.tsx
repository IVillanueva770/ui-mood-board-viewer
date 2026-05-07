"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function MonopoPage() {
  const e = getEstilo("monopo")!;
  const [activeView, setActiveView] = useState<string>("projects");

  const heroComercial = (
    <div className="pt-2 pb-8">
      {/* Hero ghost-button style */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-32 min-h-[55vh] flex flex-col justify-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "#888888" }}>
          STUDIO · HANOI · TOKYO · PARIS
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] mb-8 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
          We design <em className="font-normal italic" style={{ color: "#a78bfa" }}>brands</em><br />
          that don&apos;t <em className="font-normal italic" style={{ color: "#60a5fa" }}>blend in.</em>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-10" style={{ color: "#aaaaaa" }}>
          Independent design studio crafting brand identities, digital experiences, and editorial work for clients who want something more than templates.
        </p>

        <div className="flex flex-wrap gap-3">
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
              variants={{ rest: { x: "-110%", opacity: 0 }, hover: { x: "110%", opacity: 1 } }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-y-0 w-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.18) 45%, rgba(167,139,250,0.25) 55%, transparent 100%)",
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
          <motion.div
            aria-hidden
            variants={{ rest: { x: "-130%", opacity: 0 }, hover: { x: "130%", opacity: 1 } }}
            transition={{ duration: 1.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute -inset-y-10 w-[85%] pointer-events-none"
            style={{
              background: "linear-gradient(108deg, transparent 0%, rgba(167,139,250,0.05) 30%, rgba(167,139,250,0.15) 50%, rgba(96,165,250,0.08) 70%, transparent 100%)",
              filter: "blur(20px)",
              mixBlendMode: "screen",
              transform: "rotate(-2deg)",
            }}
          />
          <motion.div
            aria-hidden
            variants={{ rest: { x: "-115%", opacity: 0 }, hover: { x: "115%", opacity: 1 } }}
            transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
            className="absolute -inset-y-4 w-[55%] pointer-events-none"
            style={{
              background: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.28) 48%, rgba(255,255,255,0.32) 52%, rgba(167,139,250,0.18) 70%, transparent 100%)",
              filter: "blur(8px) url(#monopo-grain)",
              mixBlendMode: "screen",
              transform: "rotate(-2deg)",
            }}
          />
          <motion.div
            aria-hidden
            variants={{ rest: { x: "-115%", opacity: 0 }, hover: { x: "115%", opacity: 1 } }}
            transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.05 }}
            className="absolute inset-y-0 w-1/2 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 45% 70% at 50% 50%, rgba(255,255,255,0.55) 0%, rgba(167,139,250,0.28) 35%, transparent 65%)",
              mixBlendMode: "screen",
              filter: "blur(2px)",
            }}
          />
          <motion.div
            aria-hidden
            variants={{ rest: { x: "120%", opacity: 0 }, hover: { x: "-120%", opacity: 0.6 } }}
            transition={{ duration: 2, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
            className="absolute inset-y-0 w-1/3 pointer-events-none"
            style={{
              background: "linear-gradient(75deg, transparent 0%, rgba(96,165,250,0.12) 50%, transparent 100%)",
              filter: "blur(14px)",
              mixBlendMode: "screen",
            }}
          />
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
    </div>
  );

  /* ====== SUB-VISTAS DEL STUDIO ====== */

  const ProjectsView = (
    <div>
      <div className="grid grid-cols-12 gap-8 mb-10">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: "#888888" }}>02 · projects</p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            The studio is a system. <em className="italic" style={{ color: "#a78bfa" }}>This</em> is what runs underneath.
          </h2>
        </div>
      </div>

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
    </div>
  );

  const ClientsView = (
    <div>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "#888888" }}>02 · clients</p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            <em className="italic" style={{ color: "#a78bfa" }}>Long-term</em> partners.
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(167,139,250,0.12)" }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2.5 text-xs uppercase tracking-widest rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", backdropFilter: "blur(8px)" }}
        >
          + add client
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { nombre: "Aurora Botanical", sector: "Wellness · Skincare", deals: 4, total: "$ 86k", year: "since 2024", glow: "#a78bfa" },
          { nombre: "Cien Soles", sector: "Editorial", deals: 7, total: "$ 142k", year: "since 2022", glow: "#60a5fa" },
          { nombre: "Matria Records", sector: "Music label", deals: 3, total: "$ 58k", year: "since 2025", glow: "#a78bfa" },
          { nombre: "Tabacal", sector: "Beverages", deals: 2, total: "$ 24k", year: "new — 2026", glow: "#60a5fa" },
          { nombre: "Norte Estudio", sector: "Architecture", deals: 5, total: "$ 96k", year: "since 2023", glow: "#a78bfa" },
          { nombre: "Casa Verde", sector: "Hospitality", deals: 1, total: "$ 18k", year: "paused", glow: "#666666" },
        ].map((c) => (
          <motion.div
            key={c.nombre}
            whileHover={{
              y: -4,
              borderColor: "rgba(255,255,255,0.18)",
              boxShadow: `0 12px 40px -8px ${c.glow}40`,
            }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl cursor-pointer relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ backgroundColor: c.glow }}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: "#888888" }}>{c.year}</p>
              <h3 className="text-2xl font-light mb-1">{c.nombre}</h3>
              <p className="text-xs" style={{ color: "#888888" }}>{c.sector}</p>

              <div className="mt-6 pt-4 grid grid-cols-2 gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#666666" }}>Projects</p>
                  <p className="text-2xl font-light tabular-nums">{String(c.deals).padStart(2, "0")}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "#666666" }}>Total billed</p>
                  <p className="text-2xl font-light tabular-nums" style={{ fontFamily: "var(--font-geist-mono)" }}>{c.total}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const InvoicesView = (
    <div>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "#888888" }}>02 · invoices</p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            <em className="italic" style={{ color: "#60a5fa" }}>Money</em>, in motion.
          </h2>
        </div>
      </div>

      {/* Stats glass */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Pending", val: "$ 32.4k", glow: "#a78bfa" },
          { label: "Overdue", val: "$ 8.1k", glow: "#f87171" },
          { label: "This month", val: "$ 47.2k", glow: "#60a5fa" },
          { label: "Year to date", val: "$ 412k", glow: "#ffffff" },
        ].map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.18)" }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
              style={{ backgroundColor: s.glow }}
            />
            <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "#888888" }}>{s.label}</p>
            <p className="text-3xl font-light tabular-nums" style={{ fontFamily: "var(--font-geist-mono)" }}>{s.val}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabla glass */}
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)" }}>
        <div
          className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] py-3 px-5"
          style={{ color: "#666666", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="col-span-2" style={{ fontFamily: "var(--font-geist-mono)" }}>Inv.</div>
          <div className="col-span-4">Client</div>
          <div className="col-span-2 text-right">Amount</div>
          <div className="col-span-2 hidden sm:block">Due</div>
          <div className="col-span-2">Status</div>
        </div>

        {[
          { num: "0042", cliente: "Cien Soles", monto: "$ 18.500", vence: "May 12", estado: "PENDING", chip: "#a78bfa" },
          { num: "0041", cliente: "Aurora Botanical", monto: "$ 24.000", vence: "May 8", estado: "OVERDUE", chip: "#f87171" },
          { num: "0040", cliente: "Norte Estudio", monto: "$ 11.200", vence: "May 10", estado: "PENDING", chip: "#a78bfa" },
          { num: "0039", cliente: "Matria Records", monto: "$ 9.800", vence: "May 1", estado: "PAID", chip: "#666666" },
          { num: "0038", cliente: "Tabacal", monto: "$ 5.400", vence: "Apr 28", estado: "PAID", chip: "#666666" },
        ].map((f, i) => (
          <motion.div
            key={f.num}
            whileHover={{ backgroundColor: "rgba(167,139,250,0.06)", x: 2 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-12 py-4 px-5 cursor-pointer items-center"
            style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
          >
            <div className="col-span-2 text-xs" style={{ fontFamily: "var(--font-geist-mono)", color: "#888888" }}>#{f.num}</div>
            <div className="col-span-4 text-base font-light">{f.cliente}</div>
            <div className="col-span-2 text-sm text-right tabular-nums" style={{ fontFamily: "var(--font-geist-mono)" }}>{f.monto}</div>
            <div className="col-span-2 hidden sm:block text-xs" style={{ color: "#888888", fontFamily: "var(--font-geist-mono)" }}>{f.vence}</div>
            <div className="col-span-2">
              <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm" style={{
                backgroundColor: f.chip + "20",
                color: f.chip,
                border: `1px solid ${f.chip}40`,
              }}>
                {f.estado}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const TeamView = (
    <div>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "#888888" }}>02 · team</p>
          <h2 className="text-4xl sm:text-5xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Four <em className="italic" style={{ color: "#a78bfa" }}>hands</em>, one studio.
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(167,139,250,0.12)" }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-2.5 text-xs uppercase tracking-widest rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", backdropFilter: "blur(8px)" }}
        >
          + invite
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { ini: "MR", nombre: "Macarena Ríos", rol: "Lead designer", glow: "#a78bfa", capacity: 92, role: "Brand · Identity", proyectos: 3, since: "2022" },
          { ini: "JG", nombre: "Joaquín Garza", rol: "Designer · Web", glow: "#60a5fa", capacity: 78, role: "Web · Editorial", proyectos: 2, since: "2024" },
          { ini: "TM", nombre: "Tomás Müller", rol: "Designer · Motion", glow: "#a78bfa", capacity: 85, role: "Motion · Brand", proyectos: 2, since: "2023" },
          { ini: "KS", nombre: "Karina Sosa", rol: "Project manager", glow: "#60a5fa", capacity: 72, role: "Operations", proyectos: 6, since: "2022" },
        ].map((m) => (
          <motion.div
            key={m.ini}
            whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.18)", boxShadow: `0 16px 50px -12px ${m.glow}40` }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl relative overflow-hidden cursor-pointer"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              aria-hidden
              className="absolute -top-16 -left-12 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{ backgroundColor: m.glow }}
            />
            <div className="relative flex items-start gap-4 mb-5">
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-base font-light flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${m.glow}80, rgba(0,0,0,0.4))`,
                  border: "1px solid rgba(255,255,255,0.15)",
                  letterSpacing: "0.05em",
                }}
              >
                {m.ini}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-light leading-tight">{m.nombre}</h3>
                <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{m.rol}</p>
                <p className="text-[10px] mt-1.5 uppercase tracking-wider" style={{ color: "#666666", fontFamily: "var(--font-geist-mono)" }}>since {m.since}</p>
              </div>
            </div>

            <div className="relative mb-4">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest" style={{ color: "#888888" }}>Capacity</span>
                <span className="text-xs tabular-nums" style={{ color: "#aaaaaa", fontFamily: "var(--font-geist-mono)" }}>{m.capacity}%</span>
              </div>
              <div className="h-px relative" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.capacity}%` }}
                  transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-y-0 left-0"
                  style={{
                    background: m.capacity > 85 ? "linear-gradient(90deg, #a78bfa, #f87171)" : `linear-gradient(90deg, ${m.glow}, ${m.glow}80)`,
                    height: "2px",
                    top: "-0.5px",
                    boxShadow: `0 0 12px ${m.glow}80`,
                  }}
                />
              </div>
            </div>

            <div className="relative flex items-baseline justify-between text-xs" style={{ color: "#888888" }}>
              <span>{m.role}</span>
              <span style={{ fontFamily: "var(--font-geist-mono)" }}>{m.proyectos} active</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const SettingsView = (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "#888888" }}>02 · settings</p>
        <h2 className="text-4xl sm:text-5xl font-light leading-tight" style={{ letterSpacing: "-0.02em" }}>
          Preferences.
        </h2>
      </div>

      <div className="space-y-3 max-w-3xl">
        {[
          { label: "Display name", val: "Monopo Studio", action: "Edit" },
          { label: "Email", val: "studio@monopo.tld", action: "Change" },
          { label: "Workspace handle", val: "@monopo", action: "Edit" },
          { label: "Theme", val: "Always dark", action: "—", lock: true },
          { label: "Font", val: "Inter Variable", action: "Change" },
          { label: "Region & currency", val: "Buenos Aires · USD", action: "Edit" },
          { label: "Two-factor", val: "Enabled · Authy", action: "Manage" },
          { label: "API keys", val: "1 active key", action: "Rotate" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            whileHover={{ backgroundColor: "rgba(167,139,250,0.04)", borderColor: "rgba(255,255,255,0.18)" }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              borderRadius: "16px",
              padding: "20px",
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
              animationDelay: `${i * 0.04}s`,
            }}
            className="flex items-center justify-between gap-4 flex-wrap"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest mb-1.5" style={{ color: "#888888" }}>{s.label}</p>
              <p className="text-base font-light">{s.val}</p>
            </div>
            <motion.button
              whileHover={!s.lock ? { x: 3, color: "#a78bfa" } : {}}
              className="text-xs uppercase tracking-widest"
              style={{ color: s.lock ? "#444444" : "#aaaaaa", fontFamily: "var(--font-geist-mono)" }}
              disabled={s.lock}
            >
              {s.action} {!s.lock && "→"}
            </motion.button>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-5 rounded-2xl"
          style={{
            backgroundColor: "rgba(248,113,113,0.04)",
            border: "1px solid rgba(248,113,113,0.18)",
          }}
        >
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "#f87171" }}>Danger zone</p>
          <p className="text-sm font-light mb-3" style={{ color: "#aaaaaa" }}>Permanently delete this workspace and all of its data. This action cannot be undone.</p>
          <motion.button
            whileHover={{ backgroundColor: "rgba(248,113,113,0.12)", borderColor: "rgba(248,113,113,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 text-xs uppercase tracking-widest rounded-full"
            style={{ border: "1px solid rgba(248,113,113,0.25)", color: "#f87171" }}
          >
            Delete workspace
          </motion.button>
        </motion.div>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    projects: ProjectsView,
    clients: ClientsView,
    invoices: InvoicesView,
    team: TeamView,
    settings: SettingsView,
  };

  const studioInterno = (
    <div className="pt-2">
      <InternalNav
        variant="glass-topnav"
        items={[
          { id: "projects", label: "Projects" },
          { id: "clients", label: "Clients" },
          { id: "invoices", label: "Invoices" },
          { id: "team", label: "Team" },
          { id: "settings", label: "Settings" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#a78bfa"
        bgContainer="rgba(255,255,255,0.02)"
        textActive="#ffffff"
        textInactive="#666666"
        borderColor="rgba(255,255,255,0.1)"
        workspaceLabel="MONOPO"
        workspaceInitial="M"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }} className="font-inter">
      {/* SVG filter para grano del shimmer */}
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

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16 relative">
        <StyleTabs
          variant="glass-line"
          accent="#a78bfa"
          textActive="#ffffff"
          textInactive="#666666"
          borderColor="rgba(255,255,255,0.1)"
          tabsClassName="mb-12"
          tabs={[
            { id: "work", label: "Work", content: heroComercial },
            { id: "studio", label: "Studio", content: studioInterno },
          ]}
        />

        <div className="mt-20">
          <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="rgba(255,255,255,0.1)" />
        </div>
      </main>
    </div>
  );
}
