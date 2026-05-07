"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function EtherealPage() {
  const e = getEstilo("ethereal")!;
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fafaf7", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor="#888888" />

      <main className="max-w-7xl mx-auto px-6 py-12 sm:py-20 overflow-x-hidden">
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
            <h1
              className="font-bebas leading-[0.85] tracking-tight"
              style={{
                letterSpacing: "-0.04em",
                fontSize: "clamp(3.5rem, 11vw, 12.5rem)",
              }}
            >
              ESTUDIO<br />
              <span style={{ color: "#ff3b00", fontStyle: "italic" }}>en construcción</span><br />
              PERMANENTE.
            </h1>
          </motion.div>
        </motion.section>

        {/* Manifiesto */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
          animate={{ opacity: 1 }}
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
                initial="enter"
                animate="rest"
                whileHover="hover"
                variants={{
                  enter: { opacity: 0, x: -20 },
                  rest: { opacity: 1, x: 0 },
                  hover: {},
                }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative grid grid-cols-12 gap-4 py-6 cursor-pointer"
                style={{ borderBottom: "1px solid #222222" }}
              >
                {/* Línea naranja inferior que crece desde el centro al hover */}
                <motion.div
                  aria-hidden
                  variants={{
                    enter: { scaleX: 0 },
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
                  style={{ backgroundColor: "#ff3b00", transformOrigin: "center" }}
                />
                {/* Número: se desplaza a la izquierda y crece */}
                <motion.div
                  variants={{
                    enter: { x: 0, scale: 1, color: "#666666" },
                    rest: { x: 0, scale: 1, color: "#666666" },
                    hover: { x: -8, scale: 1.15, color: "#ff3b00" },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="col-span-1 text-xs font-mono"
                  style={{ transformOrigin: "left center" }}
                >
                  {p.num}
                </motion.div>
                {/* Título: itálica + slight push a la derecha */}
                <motion.div
                  variants={{
                    enter: { x: 0, fontStyle: "normal", color: "#fafaf7" },
                    rest: { x: 0, fontStyle: "normal", color: "#fafaf7" },
                    hover: { x: 12, fontStyle: "italic", color: "#fafaf7" },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="col-span-7 md:col-span-6 font-bebas text-3xl sm:text-4xl tracking-wide leading-none"
                >
                  {p.titulo}
                </motion.div>
                {/* Tipo: cae hacia abajo, fade a naranja */}
                <motion.div
                  variants={{
                    enter: { y: 0, color: "#888888" },
                    rest: { y: 0, color: "#888888" },
                    hover: { y: 6, color: "#ff3b00" },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="col-span-3 text-sm self-end"
                >
                  {p.tipo}
                </motion.div>
                {/* Year: sube y se aclara */}
                <motion.div
                  variants={{
                    enter: { y: 0, color: "#666666" },
                    rest: { y: 0, color: "#666666" },
                    hover: { y: -10, color: "#fafaf7" },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                  className="col-span-1 text-xs self-end text-right font-mono"
                >
                  &apos;{p.year}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider asimétrico */}
        <div className="grid grid-cols-12 gap-4 mb-20">
          <div className="col-span-12 md:col-span-2" />
          <div className="col-span-12 md:col-span-10 flex items-center gap-5">
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "#666666" }}>
              02 / op
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "#333333" }} />
          </div>
        </div>

        {/* ====== VISTA OPERATIVA — atelier interno ====== */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "#888888" }}>atelier</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-bebas leading-[0.85] tracking-tight mb-12"
              style={{
                letterSpacing: "-0.04em",
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
              }}
            >
              CADA OBRA <em className="italic" style={{ color: "#ff3b00" }}>tiene</em><br />
              SU CADENA DE GESTOS.
            </h2>

            {/* Pipeline asimétrico — bloques con offsets distintos */}
            <div className="space-y-12 mb-16">
              {[
                { tit: "AURORA BOTANICAL", etapa: "Presentación final", fecha: "14 may", autor: "Macarena R.", offset: "" },
                { tit: "CIEN SOLES", etapa: "Maquetas v3", fecha: "22 may", autor: "Joaco G.", offset: "md:ml-16" },
                { tit: "MATRIA RECORDS", etapa: "Storyboard motion", fecha: "30 may", autor: "Tomi M.", offset: "md:ml-32" },
                { tit: "TABACAL", etapa: "Discovery / etiquetas", fecha: "12 jun", autor: "Macarena R.", offset: "md:ml-8" },
              ].map((p, i) => (
                <motion.div
                  key={p.tit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group max-w-2xl ${p.offset}`}
                >
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: "#666666" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "#ff3b00" }}>{p.etapa}</span>
                  </div>
                  <h3 className="font-bebas text-3xl sm:text-5xl tracking-wide leading-none mb-2 transition-colors group-hover:[color:#ff3b00]">{p.tit}</h3>
                  <div className="flex items-baseline justify-between gap-4 text-xs" style={{ color: "#888888" }}>
                    <span className="font-mono">due {p.fecha}</span>
                    <span>{p.autor}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Capacidad atelier */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10" style={{ borderTop: "1px solid #333333" }}>
              {[
                { v: "04", l: "Manos en obra" },
                { v: "12 / 17", l: "Sem. comprometidas" },
                { v: "Q3·26", l: "Próximo libre" },
                { v: "≈ 6 sem", l: "Cola estimada" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-bebas text-4xl tracking-wide mb-1.5">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#888888" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="#333333" />
      </main>
    </div>
  );
}
