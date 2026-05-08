"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function EtherealPage() {
  const e = getEstilo("ethereal")!;
  const [activeView, setActiveView] = useState("obras");

  /* ============== TAB 1 — EDITORIAL (estudio público) ============== */
  const editorial = (
    <>
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
    </>
  );

  /* ============== SUB-VISTAS DEL ATELIER (TAB 2) ============== */

  const ObrasView = (
    <div>
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: "#ff3b00" }}>obras / en taller</p>
        <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide leading-none">
          CADA OBRA <em className="italic" style={{ color: "#ff3b00" }}>tiene</em>
          <br />SU CADENA DE GESTOS.
        </h2>
      </div>

      <div className="space-y-12 mb-12">
        {[
          { tit: "AURORA BOTANICAL", etapa: "Presentación final", fecha: "14 may", autor: "Macarena R.", offset: "" },
          { tit: "CIEN SOLES", etapa: "Maquetas v3", fecha: "22 may", autor: "Joaco G.", offset: "md:ml-16" },
          { tit: "MATRIA RECORDS", etapa: "Storyboard motion", fecha: "30 may", autor: "Tomi M.", offset: "md:ml-32" },
          { tit: "TABACAL", etapa: "Discovery / etiquetas", fecha: "12 jun", autor: "Macarena R.", offset: "md:ml-8" },
        ].map((p, i) => (
          <motion.div
            key={p.tit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
  );

  const EstudiosView = (
    <div>
      <div className="mb-10 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: "#ff3b00" }}>estudios / R&D</p>
        </div>
        <div className="col-span-12 md:col-span-8 max-w-2xl">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-3">
            EJERCICIOS QUE NO COBRAMOS.
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#aaaaaa" }}>
            Tipografía, color, sistemas modulares. Lo que entrenamos antes de salir al ring.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-12">
        {[
          { num: "S/01", titulo: "Tipo variable — eje peso × óptico", tipo: "Tipo", autor: "Tomi M.", span: "md:col-span-7" },
          { num: "S/02", titulo: "Sistema cromático botánico (8 paletas)", tipo: "Color", autor: "Joaco G.", span: "md:col-span-5" },
          { num: "S/03", titulo: "Grid asimétrico de 24 columnas", tipo: "Layout", autor: "Macarena R.", span: "md:col-span-5 md:ml-8" },
          { num: "S/04", titulo: "Motion principles — easing botánico", tipo: "Motion", autor: "Tomi M.", span: "md:col-span-7" },
          { num: "S/05", titulo: "Stickers risográficos para print", tipo: "Print", autor: "Macarena R.", span: "md:col-span-12 md:max-w-2xl md:ml-24" },
        ].map((e, i) => (
          <motion.div
            key={e.num}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ borderColor: "#ff3b00" }}
            className={`col-span-12 ${e.span} cursor-pointer p-6`}
            style={{ border: "1px solid #333333" }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: "#666666" }}>{e.num}</span>
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#ff3b00" }}>{e.tipo}</span>
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wide leading-none mb-3" style={{ fontStyle: i % 2 === 0 ? "italic" : "normal" }}>
              {e.titulo}
            </h3>
            <p className="text-xs" style={{ color: "#888888" }}>{e.autor}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ClientesView = (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-3" style={{ borderBottom: "1px solid #333333", paddingBottom: "1rem" }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: "#ff3b00" }}>cartera / vínculos</p>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">CON QUIÉN TRABAJAMOS.</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#888888" }}>14 activos · 3 dormidos</p>
      </div>

      <div className="space-y-0">
        {[
          { num: "C/01", nombre: "Aurora Botanical", relacion: "3 años", proyectos: 4, estado: "activo", desde: "2023" },
          { num: "C/02", nombre: "Cien Soles", relacion: "8 meses", proyectos: 1, estado: "activo", desde: "2025" },
          { num: "C/03", nombre: "Matria Records", relacion: "5 años", proyectos: 7, estado: "activo", desde: "2021" },
          { num: "C/04", nombre: "Tabacal", relacion: "1 año", proyectos: 2, estado: "activo", desde: "2025" },
          { num: "C/05", nombre: "Cooperativa La Fina", relacion: "4 años", proyectos: 3, estado: "dormido", desde: "2022" },
          { num: "C/06", nombre: "Norte Estudio", relacion: "2 años", proyectos: 2, estado: "activo", desde: "2024" },
        ].map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ x: 8 }}
            className="grid grid-cols-12 gap-4 py-5 cursor-pointer items-baseline"
            style={{ borderBottom: "1px solid #222222" }}
          >
            <div className="col-span-1 text-xs font-mono" style={{ color: "#666666" }}>{c.num}</div>
            <div className="col-span-5 md:col-span-4 font-bebas text-2xl sm:text-3xl tracking-wide leading-none" style={{ fontStyle: i % 3 === 0 ? "italic" : "normal" }}>
              {c.nombre}
            </div>
            <div className="col-span-3 text-xs" style={{ color: "#888888" }}>{c.relacion}</div>
            <div className="col-span-2 text-xs" style={{ color: "#888888" }}>{c.proyectos} obras</div>
            <div className="col-span-1 text-xs uppercase tracking-[0.2em] text-right" style={{ color: c.estado === "activo" ? "#ff3b00" : "#666666" }}>
              {c.estado === "activo" ? "●" : "○"}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const NotasView = (
    <div>
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: "#ff3b00" }}>notas / del estudio</p>
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-2">DIARIO ABIERTO.</h2>
        <p className="text-sm" style={{ color: "#888888" }}>Pensamientos crudos. No editados. No publicados.</p>
      </div>

      <div className="space-y-12">
        {[
          {
            fecha: "07 / 05 / 26",
            titulo: "El brief no es la obra.",
            cuerpo: "Hoy Aurora pidió 3 cambios. Ninguno cambia el problema. Eso significa que el problema, todavía, no está resuelto. Hay que volver a sentarse — no en el archivo, en el problema.",
            autor: "Macarena R.",
          },
          {
            fecha: "03 / 05 / 26",
            titulo: "El silencio del cliente.",
            cuerpo: "Cuando dice 'me gusta', muchas veces no. Pero acuerda. Hay diferencia. La nuestra es notarla.",
            autor: "Tomi M.",
          },
          {
            fecha: "29 / 04 / 26",
            titulo: "Ritmo > velocidad.",
            cuerpo: "Tres semanas en una identidad y todavía no salió. No es lentitud. Es que la cosa todavía no se acomodó.",
            autor: "Joaco G.",
          },
        ].map((n, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-12 gap-4 pb-12"
            style={{ borderBottom: i < 2 ? "1px solid #222222" : "none" }}
          >
            <div className="col-span-12 md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: "#666666" }}>{n.fecha}</p>
            </div>
            <div className="col-span-12 md:col-span-10 max-w-2xl">
              <h3 className="font-bebas text-3xl sm:text-4xl tracking-wide leading-none mb-4" style={{ fontStyle: "italic" }}>
                {n.titulo}
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#aaaaaa" }}>{n.cuerpo}</p>
              <p className="text-xs" style={{ color: "#666666" }}>— {n.autor}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const ArchivoView = (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-3" style={{ borderBottom: "1px solid #333333", paddingBottom: "1rem" }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: "#888888" }}>archivo / cerrados</p>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">LO QUE QUEDÓ.</h2>
        </div>
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "#888888" }}>2018 — 2024 · 41 obras</p>
      </div>

      <div className="space-y-3">
        {[
          { year: "2024", count: 9, sample: "Norte Estudio · Bodegón · Telar" },
          { year: "2023", count: 11, sample: "Aurora · Tertulia · Pampa Húmeda" },
          { year: "2022", count: 8, sample: "Salinas · La Fina · Cooperativa" },
          { year: "2021", count: 7, sample: "Matria · Hilar · Subtropical" },
          { year: "2020", count: 4, sample: "Pandemia · piloto digital" },
          { year: "2018–19", count: 2, sample: "Inicio del estudio" },
        ].map((y, i) => (
          <motion.div
            key={y.year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ x: 6, borderLeftColor: "#ff3b00" }}
            className="grid grid-cols-12 gap-4 py-5 cursor-pointer items-center"
            style={{ borderLeft: "2px solid transparent", paddingLeft: "12px", borderBottom: "1px solid #222222" }}
          >
            <div className="col-span-3 md:col-span-2 font-bebas text-3xl sm:text-4xl tracking-wide leading-none">{y.year}</div>
            <div className="col-span-2 md:col-span-1 text-xs font-mono" style={{ color: "#888888" }}>×{y.count}</div>
            <div className="col-span-7 md:col-span-9 text-sm" style={{ color: "#aaaaaa", fontStyle: "italic" }}>{y.sample}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    obras: ObrasView,
    estudios: EstudiosView,
    clientes: ClientesView,
    notas: NotasView,
    archivo: ArchivoView,
  };

  /* ============== TAB 2 — ATELIER (workspace interno) ============== */
  const atelier = (
    <div className="rounded-none" style={{ border: "1px solid #222222", minHeight: "640px", backgroundColor: "#0d0d0d" }}>
      <InternalNav
        variant="editorial-sidebar"
        items={[
          { id: "obras", label: "Obras" },
          { id: "estudios", label: "Estudios" },
          { id: "clientes", label: "Clientes" },
          { id: "notas", label: "Notas" },
          { id: "archivo", label: "Archivo" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#ff3b00"
        bgContainer="#0d0d0d"
        textActive="#fafaf7"
        textInactive="#888888"
        borderColor="#222222"
        workspaceLabel="Atelier"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fafaf7", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor="#888888" />

      <main className="max-w-7xl mx-auto px-6 py-12 sm:py-16 overflow-x-hidden">
        <StyleTabs
          variant="editorial-underline"
          accent="#ff3b00"
          textActive="#fafaf7"
          textInactive="#666666"
          tabsClassName="mb-12 sm:mb-16"
          tabs={[
            { id: "editorial", label: "Editorial", content: editorial },
            { id: "atelier", label: "Atelier", content: atelier },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor="#333333"
          textColor="#666666"
          accentColor="#ff3b00"
          className="mt-24 mb-12"
          textClassName="text-[10px] uppercase tracking-[0.4em]"
        >
          fin / vol.04
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#aaaaaa" borderColor="#333333" />
      </main>
    </div>
  );
}
