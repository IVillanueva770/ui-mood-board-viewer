"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function EtherealPage() {
  const e = getEstilo("ethereal")!;
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fafaf7", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor="#888888" />

      <main className="max-w-7xl mx-auto px-6 py-12 sm:py-20">
        {/* Hero asimétrico */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-2 md:pt-32">
            <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: "#888888" }}>vol.04</p>
            <p className="text-xs" style={{ color: "#888888" }}>2026 / mayo</p>
          </div>
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-10"
          >
            <h1 className="font-bebas text-7xl sm:text-[10rem] md:text-[14rem] leading-[0.85] tracking-tight" style={{ letterSpacing: "-0.04em" }}>
              ESTUDIO<br />
              <span style={{ color: "#ff3b00", fontStyle: "italic" }}>en construcción</span><br />
              PERMANENTE.
            </h1>
          </motion.div>
        </motion.section>

        {/* Manifiesto */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.7 }}
          className="mb-32 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "#ff3b00" }}>MANIFIESTO</p>
          </div>
          <div className="col-span-12 md:col-span-7 max-w-2xl">
            <p className="text-2xl sm:text-3xl leading-snug font-light" style={{ color: "#fafaf7" }}>
              No diseñamos para gustar. Diseñamos para que algo cambie en quien lo ve. Si pasa desapercibido, fallamos.
            </p>
            <p className="text-base mt-8 leading-relaxed" style={{ color: "#aaaaaa" }}>
              Cada proyecto es una conversación entre lo que el cliente cree que necesita, y lo que realmente le va a servir. Empezamos por escuchar.
            </p>
          </div>
        </motion.section>

        {/* Index proyectos */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-end justify-between mb-10 pb-4" style={{ borderBottom: "1px solid #333333" }}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#888888" }}>Selección · 2024–2026</p>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#888888" }}>17 proyectos</p>
          </div>

          <div className="space-y-0">
            {[
              { num: "01", titulo: "Aurora Botanical", tipo: "Identidad visual", year: "26" },
              { num: "02", titulo: "Cien Soles", tipo: "Web · editorial", year: "26" },
              { num: "03", titulo: "Matria Records", tipo: "Branding · motion", year: "25" },
              { num: "04", titulo: "Tabacal", tipo: "Packaging · web", year: "25" },
              { num: "05", titulo: "Norte Estudio", tipo: "Identidad · print", year: "24" },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ x: 8, color: "#ff3b00" }}
                className="grid grid-cols-12 gap-4 py-6 cursor-pointer transition-colors"
                style={{ borderBottom: "1px solid #222222" }}
              >
                <div className="col-span-1 text-xs" style={{ color: "#666666" }}>{p.num}</div>
                <div className="col-span-7 md:col-span-6 font-bebas text-3xl sm:text-4xl tracking-wide leading-none">
                  {p.titulo}
                </div>
                <div className="col-span-3 text-sm self-end" style={{ color: "#888888" }}>{p.tipo}</div>
                <div className="col-span-1 text-xs self-end text-right" style={{ color: "#666666" }}>'{p.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="#333333" />
      </main>
    </div>
  );
}
