"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { DividerReveal } from "@/components/divider-reveal";

export default function DimesPage() {
  return (
    <div style={{ backgroundColor: "#fffbed", color: "#0a0a0a", minHeight: "100vh" }} className="font-inter">
      {/* Top nav */}
      <div className="px-6 py-3 flex items-center justify-between text-xs uppercase tracking-wider" style={{ borderBottom: "2px solid #0a0a0a" }}>
        <Link href="/" transitionTypes={["nav-back"]} className="hover:underline">← Volver al index</Link>
        <div>Dimes · brutalist</div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Hero gigante */}
        <section className="mb-16 sm:mb-24">
          <motion.div
            initial={{ boxShadow: "8px 8px 0 0 #0a0a0a", x: 0, y: 0 }}
            whileHover={{ boxShadow: "14px 14px 0 0 #0a0a0a", x: -2, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-6 sm:p-10 mb-8"
            style={{ border: "3px solid #0a0a0a" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-4">Estudio · diseño · marca</p>
            <h1 className="font-bebas text-6xl sm:text-9xl leading-[0.9] tracking-wide mb-6">
              MARCAS <br />
              <span style={{ color: "#ff6b35" }}>QUE NO PASAN</span><br />
              DESAPERCIBIDAS.
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl leading-snug font-medium">
              Hacemos branding crudo, sin filtros y sin frases hechas. Si querés un sitio que parezca otro más, no llames.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              initial={{ boxShadow: "5px 5px 0 0 #ff6b35", x: 0, y: 0 }}
              whileHover={{ boxShadow: "8px 8px 0 0 #ff6b35", x: -2, y: -2 }}
              whileTap={{ boxShadow: "0px 0px 0 0 #ff6b35", x: 5, y: 5 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="px-8 py-4 font-bebas text-2xl tracking-wide"
              style={{
                backgroundColor: "#0a0a0a",
                color: "#fffbed",
                border: "2px solid #0a0a0a",
              }}
            >
              VER PROYECTOS
            </motion.button>
            <motion.button
              initial={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 0, y: 0 }}
              whileHover={{ boxShadow: "5px 5px 0 0 #0a0a0a", x: -2, y: -2, backgroundColor: "#0a0a0a", color: "#fffbed" }}
              whileTap={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="px-8 py-4 font-bebas text-2xl tracking-wide"
              style={{ backgroundColor: "transparent", color: "#0a0a0a", border: "2px solid #0a0a0a" }}
            >
              ESCRIBINOS →
            </motion.button>
          </div>
        </section>

        {/* Stats brutalist */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16" style={{ border: "3px solid #0a0a0a" }}>
          {[
            { num: "47", label: "Proyectos" },
            { num: "12", label: "Años" },
            { num: "∞", label: "Cafés" },
            { num: "0", label: "Templates" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ backgroundColor: "#dfff00", color: "#0a0a0a" }}
              transition={{ duration: 0.05 }}
              className="p-6 sm:p-8 text-center cursor-pointer"
              style={{
                borderRight: i < 3 ? "3px solid #0a0a0a" : "none",
                backgroundColor: i % 2 === 0 ? "#fffbed" : "#0a0a0a",
                color: i % 2 === 0 ? "#0a0a0a" : "#fffbed",
              }}
            >
              <div className="font-bebas text-6xl sm:text-7xl leading-none mb-1">{s.num}</div>
              <div className="text-xs uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Projects grid */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide">PROYECTOS RECIENTES</h2>
            <a href="#" className="text-sm uppercase tracking-wider underline">Ver todos →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: "Cervecería Bestia", tag: "Branding · Web", color: "#ff6b35" },
              { titulo: "Studio Roma", tag: "Identidad · Print", color: "#004e89" },
              { titulo: "Beat Records", tag: "Web · Motion", color: "#0a0a0a" },
              { titulo: "Calle 14", tag: "Branding", color: "#dfff00" },
            ].map((p) => (
              <motion.div
                key={p.titulo}
                initial={{ boxShadow: "6px 6px 0 0 #0a0a0a", x: 0, y: 0 }}
                whileHover={{ boxShadow: "12px 12px 0 0 #0a0a0a", x: -3, y: -3 }}
                whileTap={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 6, y: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="overflow-hidden cursor-pointer"
                style={{ border: "3px solid #0a0a0a" }}
              >
                <div className="h-44 sm:h-56 flex items-center justify-center" style={{ backgroundColor: p.color }}>
                  <span
                    className="font-bebas text-5xl sm:text-7xl tracking-wider"
                    style={{ color: p.color === "#dfff00" || p.color === "#ff6b35" ? "#0a0a0a" : "#fffbed" }}
                  >
                    {p.titulo.split(" ")[0].toUpperCase()}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between" style={{ borderTop: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
                  <div>
                    <div className="font-bebas text-2xl tracking-wide leading-none mb-1">{p.titulo.toUpperCase()}</div>
                    <div className="text-xs uppercase tracking-widest">{p.tag}</div>
                  </div>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="font-bebas text-3xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section
          className="p-6 sm:p-10 mb-16 text-center"
          style={{ backgroundColor: "#0a0a0a", color: "#fffbed", border: "3px solid #0a0a0a" }}
        >
          <h3 className="font-bebas text-4xl sm:text-6xl mb-4 tracking-wide">¿TE TIRA?</h3>
          <p className="mb-6 max-w-xl mx-auto">Coordinamos una llamada de 20 minutos sin compromiso. Te decimos qué se puede y qué no.</p>
          <motion.button
            initial={{ boxShadow: "0px 0px 0 0 #fffbed", x: 0, y: 0 }}
            whileHover={{ boxShadow: "6px 6px 0 0 #fffbed", x: -2, y: -2 }}
            whileTap={{ boxShadow: "0px 0px 0 0 #fffbed", x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="px-8 py-4 font-bebas text-2xl tracking-wide"
            style={{ backgroundColor: "#dfff00", color: "#0a0a0a", border: "2px solid #dfff00" }}
          >
            AGENDAR LLAMADA
          </motion.button>
        </section>

        {/* ====== VISTA OPERATIVA ====== */}
        <section className="mb-16">
          {/* Divider firma — brutalist stamp */}
          <DividerReveal
            variant="brutalist-stamp"
            lineColor="#0a0a0a"
            textColor="#0a0a0a"
            accentColor="#dfff00"
            className="mb-12"
            textClassName="text-xs uppercase tracking-[0.3em] font-bold"
          >
            / VISTA INTERNA · PANEL DE OPERACIONES
          </DividerReveal>

          <div className="mb-10">
            <h2 className="font-bebas text-5xl sm:text-7xl tracking-wide leading-[0.9] mb-4">
              ASÍ <br />
              <span style={{ color: "#ff6b35" }}>OPERA</span> EL <br />
              ESTUDIO.
            </h2>
            <p className="text-base sm:text-lg max-w-2xl leading-snug">
              No solo nos ven crudos por fuera. Por dentro corre un sistema operativo sin Notion pintado de pastel ni dashboards aguados.
            </p>
          </div>

          {/* Pipeline kanban brutalist */}
          <div className="mb-14">
            <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
              <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide">PIPELINE</h3>
              <div className="flex gap-0" style={{ border: "2px solid #0a0a0a" }}>
                {["TODO", "ESTA SEMANA", "ATRASADO"].map((f, i) => (
                  <motion.button
                    key={f}
                    whileHover={{ backgroundColor: i === 0 ? "#0a0a0a" : "#dfff00" }}
                    transition={{ duration: 0.05 }}
                    className="px-3.5 py-2 text-xs uppercase tracking-widest font-bold"
                    style={{
                      backgroundColor: i === 0 ? "#0a0a0a" : "transparent",
                      color: i === 0 ? "#fffbed" : "#0a0a0a",
                      borderRight: i < 2 ? "2px solid #0a0a0a" : "none",
                    }}
                  >
                    {f}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  col: "BRIEF",
                  accent: "#dfff00",
                  cards: [
                    { cliente: "Vino Norte", proyecto: "Identidad + etiqueta", deadline: "12 MAY", avatar: "MR" },
                    { cliente: "Café Tres Patas", proyecto: "Naming + logo", deadline: "18 MAY", avatar: "JG" },
                  ],
                },
                {
                  col: "EN DISEÑO",
                  accent: "#ff6b35",
                  cards: [
                    { cliente: "Cervecería Bestia", proyecto: "Re-brand completo", deadline: "09 MAY", avatar: "TM" },
                    { cliente: "Studio Roma", proyecto: "Sistema editorial", deadline: "14 MAY", avatar: "MR" },
                    { cliente: "Beat Records", proyecto: "Web + motion", deadline: "20 MAY", avatar: "JG" },
                  ],
                },
                {
                  col: "REVISIÓN",
                  accent: "#004e89",
                  cards: [
                    { cliente: "Calle 14", proyecto: "Branding v3", deadline: "08 MAY", avatar: "TM" },
                  ],
                },
                {
                  col: "ENTREGADO",
                  accent: "#0a0a0a",
                  cards: [
                    { cliente: "Bocha Bar", proyecto: "Identidad", deadline: "OK", avatar: "MR" },
                    { cliente: "Río Salado", proyecto: "Print + web", deadline: "OK", avatar: "JG" },
                  ],
                },
              ].map((column) => (
                <div key={column.col} className="p-3" style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
                  <div
                    className="flex items-center justify-between mb-4 pb-2"
                    style={{ borderBottom: "2px solid #0a0a0a" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="block w-3.5 h-3.5" style={{ backgroundColor: column.accent, border: "1.5px solid #0a0a0a" }} />
                      <span className="font-bebas text-2xl tracking-wider">{column.col}</span>
                    </div>
                    <span
                      className="font-mono text-xs px-2 py-0.5"
                      style={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}
                    >
                      {String(column.cards.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {column.cards.map((card) => (
                      <motion.div
                        key={card.cliente}
                        initial={{ boxShadow: "4px 4px 0 0 #0a0a0a", x: 0, y: 0 }}
                        whileHover={{ boxShadow: "8px 8px 0 0 #0a0a0a", x: -2, y: -2 }}
                        whileTap={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 4, y: 4 }}
                        transition={{ type: "spring", stiffness: 500, damping: 22 }}
                        className="p-3 cursor-grab"
                        style={{ border: "2px solid #0a0a0a", backgroundColor: "#fffbed" }}
                      >
                        <div className="font-bebas text-2xl leading-tight tracking-wide mb-1">{card.cliente.toUpperCase()}</div>
                        <div className="text-sm uppercase tracking-wider mb-3 leading-snug">{card.proyecto}</div>
                        <div className="flex items-center justify-between">
                          <span
                            className="font-bebas text-sm flex items-center justify-center w-9 h-9"
                            style={{
                              backgroundColor: column.accent,
                              color: column.accent === "#dfff00" || column.accent === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                              border: "1.5px solid #0a0a0a",
                            }}
                          >
                            {card.avatar}
                          </span>
                          <span
                            className="font-mono text-xs px-2 py-1"
                            style={{
                              backgroundColor: column.col === "REVISIÓN" || column.col === "ENTREGADO" ? "#dfff00" : "transparent",
                              border: "1.5px solid #0a0a0a",
                            }}
                          >
                            {card.deadline}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                    {/* botón para agregar card */}
                    <motion.button
                      whileHover={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}
                      transition={{ duration: 0.05 }}
                      className="w-full py-2.5 font-bebas text-base tracking-widest"
                      style={{ border: "2px dashed #0a0a0a", color: "#0a0a0a", backgroundColor: "transparent" }}
                    >
                      + SUMAR
                    </motion.button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking de horas — tabla brutalist */}
          <div className="mb-14">
            <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
              <h3 className="font-bebas text-4xl sm:text-5xl tracking-wide">HORAS · SEMANA 19</h3>
              <div className="flex items-baseline gap-3">
                <span className="font-bebas text-2xl tracking-wide">42.5 H</span>
                <span className="text-xs uppercase tracking-widest">FACTURABLES</span>
              </div>
            </div>

            <div style={{ border: "3px solid #0a0a0a" }}>
              {/* header */}
              <div
                className="grid grid-cols-12 text-xs uppercase tracking-widest font-bold"
                style={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}
              >
                <div className="col-span-4 px-4 py-3.5" style={{ borderRight: "2px solid #fffbed" }}>CLIENTE / PROYECTO</div>
                <div className="col-span-2 px-4 py-3.5 text-right" style={{ borderRight: "2px solid #fffbed" }}>HS</div>
                <div className="col-span-3 px-4 py-3.5 text-right hidden sm:block" style={{ borderRight: "2px solid #fffbed" }}>TARIFA</div>
                <div className="col-span-3 sm:col-span-3 px-4 py-3.5">ESTADO</div>
              </div>

              {[
                { cliente: "CERVECERÍA BESTIA", proyecto: "Re-brand completo", hs: "12.0", tarifa: "$ 380.000", estado: "EN CURSO", chip: "#dfff00" },
                { cliente: "STUDIO ROMA", proyecto: "Sistema editorial", hs: "8.5", tarifa: "$ 295.000", estado: "EN CURSO", chip: "#dfff00" },
                { cliente: "CALLE 14", proyecto: "Branding v3", hs: "6.0", tarifa: "$ 180.000", estado: "REVISIÓN", chip: "#004e89" },
                { cliente: "BEAT RECORDS", proyecto: "Web + motion", hs: "9.5", tarifa: "$ 420.000", estado: "EN CURSO", chip: "#ff6b35" },
                { cliente: "BOCHA BAR", proyecto: "Identidad", hs: "4.5", tarifa: "$ 120.000", estado: "FACTURADO", chip: "#0a0a0a" },
                { cliente: "RÍO SALADO", proyecto: "Print + web", hs: "2.0", tarifa: "$ 80.000", estado: "FACTURADO", chip: "#0a0a0a" },
              ].map((r, i) => (
                <motion.div
                  key={r.cliente}
                  whileHover={{ backgroundColor: "#dfff00" }}
                  transition={{ duration: 0.05 }}
                  className="grid grid-cols-12 cursor-pointer"
                  style={{
                    borderTop: i > 0 ? "2px solid #0a0a0a" : "none",
                    backgroundColor: "#fffbed",
                  }}
                >
                  <div className="col-span-4 px-4 py-4" style={{ borderRight: "2px solid #0a0a0a" }}>
                    <div className="font-bebas text-xl leading-tight tracking-wide">{r.cliente}</div>
                    <div className="text-sm uppercase tracking-wider opacity-70 mt-0.5">{r.proyecto}</div>
                  </div>
                  <div className="col-span-2 px-4 py-4 text-right font-mono font-bold text-base" style={{ borderRight: "2px solid #0a0a0a" }}>
                    {r.hs}
                  </div>
                  <div
                    className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block"
                    style={{ borderRight: "2px solid #0a0a0a" }}
                  >
                    {r.tarifa}
                  </div>
                  <div className="col-span-3 sm:col-span-3 px-4 py-4 flex items-center">
                    <span
                      className="font-bebas text-xs tracking-widest px-2.5 py-1"
                      style={{
                        backgroundColor: r.chip,
                        color: r.chip === "#dfff00" || r.chip === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                        border: "1.5px solid #0a0a0a",
                      }}
                    >
                      {r.estado}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* footer total */}
              <div
                className="grid grid-cols-12 font-bold"
                style={{ borderTop: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}
              >
                <div className="col-span-4 px-4 py-4 font-bebas text-2xl tracking-wide" style={{ borderRight: "2px solid #0a0a0a" }}>TOTAL</div>
                <div className="col-span-2 px-4 py-4 text-right font-mono text-base" style={{ borderRight: "2px solid #0a0a0a" }}>42.5</div>
                <div className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block" style={{ borderRight: "2px solid #0a0a0a" }}>$ 1.475.000</div>
                <div className="col-span-3 sm:col-span-3 px-4 py-4"></div>
              </div>
            </div>
          </div>

          {/* Activity feed + nota lateral */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 p-5" style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
              <div className="flex items-center justify-between mb-4 pb-2" style={{ borderBottom: "2px solid #0a0a0a" }}>
                <span className="font-bebas text-3xl tracking-wide">ACTIVIDAD</span>
                <span className="font-mono text-xs uppercase opacity-70">en vivo</span>
              </div>
              <ul className="space-y-3.5">
                {[
                  { iniciales: "MR", color: "#ff6b35", texto: "movió", target: "STUDIO ROMA", a: "EN DISEÑO", time: "12 min" },
                  { iniciales: "JG", color: "#dfff00", texto: "facturó", target: "BOCHA BAR", a: "$ 120.000", time: "1 h" },
                  { iniciales: "TM", color: "#004e89", texto: "subió revisión", target: "CALLE 14", a: "v3", time: "2 h" },
                  { iniciales: "MR", color: "#ff6b35", texto: "creó brief", target: "VINO NORTE", a: "etiqueta + label", time: "ayer" },
                ].map((a, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.08 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span
                      className="font-bebas text-sm flex items-center justify-center w-9 h-9 flex-shrink-0"
                      style={{
                        backgroundColor: a.color,
                        color: a.color === "#dfff00" || a.color === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                        border: "1.5px solid #0a0a0a",
                      }}
                    >
                      {a.iniciales}
                    </span>
                    <span className="text-base flex-1 leading-snug">
                      <span className="opacity-70">{a.texto} </span>
                      <span className="font-bebas text-xl tracking-wide">{a.target}</span>
                      <span className="opacity-70"> → </span>
                      <span className="font-mono text-sm">{a.a}</span>
                    </span>
                    <span className="font-mono text-xs uppercase opacity-50 flex-shrink-0">{a.time}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              className="p-5 flex flex-col justify-between"
              style={{ backgroundColor: "#dfff00", border: "3px solid #0a0a0a" }}
            >
              <div>
                <div className="text-xs uppercase tracking-[0.3em] mb-3 font-bold">NOTA AL ESTUDIO</div>
                <p className="font-bebas text-3xl tracking-wide leading-[0.95] mb-2">
                  CHEQUEAR REVISIÓN <br />DE CALLE 14 ANTES <br />DE LAS 18.
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="font-mono text-xs uppercase opacity-80">— TM</span>
                <motion.button
                  whileHover={{ backgroundColor: "#0a0a0a", color: "#dfff00" }}
                  transition={{ duration: 0.05 }}
                  className="px-3.5 py-2 font-bebas text-base tracking-widest"
                  style={{ border: "2px solid #0a0a0a", backgroundColor: "transparent", color: "#0a0a0a" }}
                >
                  HECHO ✓
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Meta info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-xs" style={{ borderTop: "2px solid #0a0a0a" }}>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">PALETA</div>
            <div className="space-y-1 font-mono">
              <div>--bg: #fffbed</div>
              <div>--fg: #0a0a0a</div>
              <div>--accent-1: #ff6b35</div>
              <div>--accent-2: #004e89</div>
              <div>--accent-3: #dfff00</div>
            </div>
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">TIPOGRAFÍA</div>
            <div className="space-y-1">
              <div>Bebas Neue (display)</div>
              <div>Inter (body)</div>
            </div>
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">CUÁNDO USAR</div>
            <p className="leading-relaxed">
              Marcas que quieren personalidad fuerte, productos creativos, estudios de diseño, branding alternativo. Polariza por diseño.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
