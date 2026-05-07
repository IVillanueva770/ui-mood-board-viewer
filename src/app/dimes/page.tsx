"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function DimesPage() {
  const [activeView, setActiveView] = useState<string>("pipeline");

  const heroComercial = (
    <div className="pt-4 pb-8">
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
            style={{ backgroundColor: "#0a0a0a", color: "#fffbed", border: "2px solid #0a0a0a" }}
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
                <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} className="font-bebas text-3xl">→</motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section
        className="p-6 sm:p-10 text-center"
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
    </div>
  );

  /* ====== SUB-VISTAS DEL WORKSPACE ====== */

  const PipelineView = (
    <div>
      <div className="mb-8 flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">PIPELINE</h2>
          <p className="text-xs uppercase tracking-widest opacity-70">06 proyectos activos · Spring 2026</p>
        </div>
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
          { col: "BRIEF", accent: "#dfff00", cards: [{ cliente: "Vino Norte", proyecto: "Identidad + etiqueta", deadline: "12 MAY", avatar: "MR" }, { cliente: "Café Tres Patas", proyecto: "Naming + logo", deadline: "18 MAY", avatar: "JG" }] },
          { col: "EN DISEÑO", accent: "#ff6b35", cards: [{ cliente: "Cervecería Bestia", proyecto: "Re-brand completo", deadline: "09 MAY", avatar: "TM" }, { cliente: "Studio Roma", proyecto: "Sistema editorial", deadline: "14 MAY", avatar: "MR" }, { cliente: "Beat Records", proyecto: "Web + motion", deadline: "20 MAY", avatar: "JG" }] },
          { col: "REVISIÓN", accent: "#004e89", cards: [{ cliente: "Calle 14", proyecto: "Branding v3", deadline: "08 MAY", avatar: "TM" }] },
          { col: "ENTREGADO", accent: "#0a0a0a", cards: [{ cliente: "Bocha Bar", proyecto: "Identidad", deadline: "OK", avatar: "MR" }, { cliente: "Río Salado", proyecto: "Print + web", deadline: "OK", avatar: "JG" }] },
        ].map((column) => (
          <div key={column.col} className="p-3" style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
            <div className="flex items-center justify-between mb-4 pb-2" style={{ borderBottom: "2px solid #0a0a0a" }}>
              <div className="flex items-center gap-2">
                <span className="block w-3.5 h-3.5" style={{ backgroundColor: column.accent, border: "1.5px solid #0a0a0a" }} />
                <span className="font-bebas text-2xl tracking-wider">{column.col}</span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5" style={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}>
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
  );

  const HorasView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">HORAS · SEMANA 19</h2>
          <p className="text-xs uppercase tracking-widest opacity-70">06 al 12 de mayo · 4 personas</p>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-bebas text-2xl tracking-wide">42.5 H</span>
          <span className="text-xs uppercase tracking-widest">FACTURABLES</span>
        </div>
      </div>

      <div className="mb-10" style={{ border: "3px solid #0a0a0a" }}>
        <div className="grid grid-cols-12 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}>
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
            style={{ borderTop: i > 0 ? "2px solid #0a0a0a" : "none", backgroundColor: "#fffbed" }}
          >
            <div className="col-span-4 px-4 py-4" style={{ borderRight: "2px solid #0a0a0a" }}>
              <div className="font-bebas text-xl leading-tight tracking-wide">{r.cliente}</div>
              <div className="text-sm uppercase tracking-wider opacity-70 mt-0.5">{r.proyecto}</div>
            </div>
            <div className="col-span-2 px-4 py-4 text-right font-mono font-bold text-base" style={{ borderRight: "2px solid #0a0a0a" }}>{r.hs}</div>
            <div className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block" style={{ borderRight: "2px solid #0a0a0a" }}>{r.tarifa}</div>
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

        <div className="grid grid-cols-12 font-bold" style={{ borderTop: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
          <div className="col-span-4 px-4 py-4 font-bebas text-2xl tracking-wide" style={{ borderRight: "2px solid #0a0a0a" }}>TOTAL</div>
          <div className="col-span-2 px-4 py-4 text-right font-mono text-base" style={{ borderRight: "2px solid #0a0a0a" }}>42.5</div>
          <div className="col-span-3 px-4 py-4 text-right font-mono text-base hidden sm:block" style={{ borderRight: "2px solid #0a0a0a" }}>$ 1.475.000</div>
          <div className="col-span-3 sm:col-span-3 px-4 py-4"></div>
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
              { iniciales: "MR", color: "#ff6b35", texto: "facturó", target: "STUDIO ROMA", a: "$ 295.000", time: "12 min" },
              { iniciales: "JG", color: "#dfff00", texto: "cargó horas", target: "BEAT RECORDS", a: "+3.5h", time: "1 h" },
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

        <div className="p-5 flex flex-col justify-between" style={{ backgroundColor: "#dfff00", border: "3px solid #0a0a0a" }}>
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
    </div>
  );

  const ClientesView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">CLIENTES</h2>
          <p className="text-xs uppercase tracking-widest opacity-70">14 activos · 8 dormidos · 47 totales</p>
        </div>
        <motion.button
          initial={{ boxShadow: "5px 5px 0 0 #ff6b35", x: 0, y: 0 }}
          whileHover={{ boxShadow: "8px 8px 0 0 #ff6b35", x: -2, y: -2 }}
          whileTap={{ boxShadow: "0px 0px 0 0 #ff6b35", x: 5, y: 5 }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          className="px-5 py-3 font-bebas text-lg tracking-wider"
          style={{ backgroundColor: "#0a0a0a", color: "#fffbed", border: "2px solid #0a0a0a" }}
        >
          + NUEVO CLIENTE
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { nombre: "Cervecería Bestia", sector: "Bebidas artesanales", proyectos: 4, monto: "$ 1.4M", estado: "ACTIVO", chip: "#dfff00" },
          { nombre: "Studio Roma", sector: "Editorial", proyectos: 7, monto: "$ 2.1M", estado: "ACTIVO", chip: "#dfff00" },
          { nombre: "Beat Records", sector: "Música", proyectos: 3, monto: "$ 890k", estado: "ACTIVO", chip: "#ff6b35" },
          { nombre: "Calle 14", sector: "Hospitalidad", proyectos: 2, monto: "$ 320k", estado: "ACTIVO", chip: "#dfff00" },
          { nombre: "Bocha Bar", sector: "Hospitalidad", proyectos: 1, monto: "$ 120k", estado: "DORMIDO", chip: "#0a0a0a" },
          { nombre: "Río Salado", sector: "Turismo", proyectos: 2, monto: "$ 280k", estado: "DORMIDO", chip: "#0a0a0a" },
          { nombre: "Vino Norte", sector: "Bebidas", proyectos: 1, monto: "$ 95k", estado: "BRIEF", chip: "#004e89" },
          { nombre: "Café Tres Patas", sector: "Hospitalidad", proyectos: 1, monto: "$ 60k", estado: "BRIEF", chip: "#004e89" },
        ].map((c) => (
          <motion.div
            key={c.nombre}
            initial={{ boxShadow: "5px 5px 0 0 #0a0a0a", x: 0, y: 0 }}
            whileHover={{ boxShadow: "10px 10px 0 0 #0a0a0a", x: -2, y: -2 }}
            whileTap={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 5, y: 5 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="p-5 cursor-pointer"
            style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-bebas text-2xl leading-tight tracking-wide mb-1">{c.nombre.toUpperCase()}</div>
                <div className="text-xs uppercase tracking-wider opacity-70">{c.sector}</div>
              </div>
              <span
                className="font-bebas text-xs tracking-widest px-2 py-1"
                style={{
                  backgroundColor: c.chip,
                  color: c.chip === "#dfff00" || c.chip === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                  border: "1.5px solid #0a0a0a",
                }}
              >
                {c.estado}
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-3" style={{ borderTop: "2px solid #0a0a0a" }}>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider opacity-70">Proyectos</div>
                <div className="font-bebas text-3xl tracking-wide leading-none">{String(c.proyectos).padStart(2, "0")}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs uppercase tracking-wider opacity-70">Facturado</div>
                <div className="font-bebas text-2xl tracking-wide leading-none">{c.monto}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const FacturasView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">FACTURAS</h2>
          <p className="text-xs uppercase tracking-widest opacity-70">3 pendientes · $ 845k por cobrar</p>
        </div>
        <motion.button
          initial={{ boxShadow: "5px 5px 0 0 #ff6b35", x: 0, y: 0 }}
          whileHover={{ boxShadow: "8px 8px 0 0 #ff6b35", x: -2, y: -2 }}
          whileTap={{ boxShadow: "0px 0px 0 0 #ff6b35", x: 5, y: 5 }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          className="px-5 py-3 font-bebas text-lg tracking-wider"
          style={{ backgroundColor: "#0a0a0a", color: "#fffbed", border: "2px solid #0a0a0a" }}
        >
          + EMITIR FACTURA
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8" style={{ border: "3px solid #0a0a0a" }}>
        {[
          { label: "POR COBRAR", val: "$ 845k", color: "#fffbed", fg: "#0a0a0a" },
          { label: "ATRASADAS", val: "$ 180k", color: "#ff6b35", fg: "#0a0a0a" },
          { label: "ESTE MES", val: "$ 1.2M", color: "#0a0a0a", fg: "#fffbed" },
          { label: "ANUAL", val: "$ 14.8M", color: "#dfff00", fg: "#0a0a0a" },
        ].map((s, i) => (
          <div
            key={s.label}
            className="p-5"
            style={{
              borderRight: i < 3 ? "3px solid #0a0a0a" : "none",
              backgroundColor: s.color,
              color: s.fg,
            }}
          >
            <div className="font-bebas text-3xl sm:text-4xl tracking-wide leading-none mb-1">{s.val}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabla facturas */}
      <div style={{ border: "3px solid #0a0a0a" }}>
        <div className="grid grid-cols-12 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: "#0a0a0a", color: "#fffbed" }}>
          <div className="col-span-2 px-4 py-3.5" style={{ borderRight: "2px solid #fffbed" }}>FACT.</div>
          <div className="col-span-4 px-4 py-3.5" style={{ borderRight: "2px solid #fffbed" }}>CLIENTE</div>
          <div className="col-span-2 px-4 py-3.5 text-right" style={{ borderRight: "2px solid #fffbed" }}>MONTO</div>
          <div className="col-span-2 px-4 py-3.5 hidden sm:block" style={{ borderRight: "2px solid #fffbed" }}>VENCE</div>
          <div className="col-span-2 px-4 py-3.5">ESTADO</div>
        </div>

        {[
          { num: "0042", cliente: "Studio Roma", monto: "$ 295.000", vence: "12 may", estado: "PENDIENTE", chip: "#dfff00" },
          { num: "0041", cliente: "Cervecería Bestia", monto: "$ 380.000", vence: "08 may", estado: "ATRASADA", chip: "#ff6b35" },
          { num: "0040", cliente: "Calle 14", monto: "$ 180.000", vence: "10 may", estado: "PENDIENTE", chip: "#dfff00" },
          { num: "0039", cliente: "Beat Records", monto: "$ 420.000", vence: "01 may", estado: "COBRADA", chip: "#0a0a0a" },
          { num: "0038", cliente: "Bocha Bar", monto: "$ 120.000", vence: "28 abr", estado: "COBRADA", chip: "#0a0a0a" },
          { num: "0037", cliente: "Río Salado", monto: "$ 80.000", vence: "20 abr", estado: "COBRADA", chip: "#0a0a0a" },
        ].map((f, i) => (
          <motion.div
            key={f.num}
            whileHover={{ backgroundColor: "#dfff00" }}
            transition={{ duration: 0.05 }}
            className="grid grid-cols-12 cursor-pointer"
            style={{ borderTop: i > 0 ? "2px solid #0a0a0a" : "none", backgroundColor: "#fffbed" }}
          >
            <div className="col-span-2 px-4 py-4 font-mono font-bold" style={{ borderRight: "2px solid #0a0a0a" }}>#{f.num}</div>
            <div className="col-span-4 px-4 py-4 font-bebas text-xl tracking-wide" style={{ borderRight: "2px solid #0a0a0a" }}>{f.cliente.toUpperCase()}</div>
            <div className="col-span-2 px-4 py-4 text-right font-mono font-bold" style={{ borderRight: "2px solid #0a0a0a" }}>{f.monto}</div>
            <div className="col-span-2 px-4 py-4 hidden sm:block font-mono text-sm" style={{ borderRight: "2px solid #0a0a0a" }}>{f.vence}</div>
            <div className="col-span-2 px-4 py-4 flex items-center">
              <span
                className="font-bebas text-xs tracking-widest px-2 py-1"
                style={{
                  backgroundColor: f.chip,
                  color: f.chip === "#dfff00" || f.chip === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                  border: "1.5px solid #0a0a0a",
                }}
              >
                {f.estado}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const EquipoView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">EQUIPO</h2>
          <p className="text-xs uppercase tracking-widest opacity-70">4 personas · 82% capacidad ocupada</p>
        </div>
        <motion.button
          whileHover={{ boxShadow: "5px 5px 0 0 #0a0a0a", x: -2, y: -2 }}
          whileTap={{ boxShadow: "0px 0px 0 0 #0a0a0a", x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          className="px-5 py-3 font-bebas text-lg tracking-wider"
          style={{ backgroundColor: "transparent", color: "#0a0a0a", border: "2px solid #0a0a0a" }}
        >
          + INVITAR ↑
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            iniciales: "MR",
            nombre: "Macarena Ríos",
            rol: "Lead designer",
            avatar: "#ff6b35",
            capacity: 92,
            proyectos: ["Cervecería Bestia", "Studio Roma", "Vino Norte"],
            tarifa: "$ 28.000/h",
          },
          {
            iniciales: "JG",
            nombre: "Joaquín Garza",
            rol: "Designer · Web",
            avatar: "#dfff00",
            capacity: 78,
            proyectos: ["Beat Records", "Café Tres Patas"],
            tarifa: "$ 22.000/h",
          },
          {
            iniciales: "TM",
            nombre: "Tomás Müller",
            rol: "Designer · Motion",
            avatar: "#004e89",
            capacity: 85,
            proyectos: ["Calle 14", "Beat Records"],
            tarifa: "$ 24.000/h",
          },
          {
            iniciales: "KS",
            nombre: "Karina Sosa",
            rol: "Project manager",
            avatar: "#0a0a0a",
            capacity: 72,
            proyectos: ["Coordina los 6 proyectos activos"],
            tarifa: "$ 18.000/h",
          },
        ].map((m) => (
          <motion.div
            key={m.iniciales}
            initial={{ boxShadow: "6px 6px 0 0 #0a0a0a", x: 0, y: 0 }}
            whileHover={{ boxShadow: "12px 12px 0 0 #0a0a0a", x: -3, y: -3 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="p-5"
            style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <span
                className="font-bebas text-3xl flex items-center justify-center w-16 h-16 flex-shrink-0"
                style={{
                  backgroundColor: m.avatar,
                  color: m.avatar === "#dfff00" || m.avatar === "#ff6b35" ? "#0a0a0a" : "#fffbed",
                  border: "2px solid #0a0a0a",
                }}
              >
                {m.iniciales}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bebas text-2xl leading-tight tracking-wide">{m.nombre.toUpperCase()}</div>
                <div className="text-sm uppercase tracking-wider opacity-70 mb-2">{m.rol}</div>
                <div className="font-mono text-xs">{m.tarifa}</div>
              </div>
            </div>

            {/* Capacity bar */}
            <div className="mb-4">
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-xs uppercase tracking-widest font-bold">Capacidad ocupada</span>
                <span className="font-bebas text-lg leading-none">{m.capacity}%</span>
              </div>
              <div className="h-3" style={{ border: "2px solid #0a0a0a", backgroundColor: "#fffbed" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.capacity}%` }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="h-full"
                  style={{ backgroundColor: m.capacity > 85 ? "#ff6b35" : "#dfff00" }}
                />
              </div>
            </div>

            {/* Proyectos */}
            <div>
              <div className="text-xs uppercase tracking-widest font-bold mb-2">Asignado a</div>
              <div className="flex flex-wrap gap-1.5">
                {m.proyectos.map((p) => (
                  <span
                    key={p}
                    className="font-mono text-xs px-2 py-1"
                    style={{ border: "1.5px solid #0a0a0a", backgroundColor: "#fffbed" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  /* ====== SUB-VIEWS MAP ====== */

  const subViews: Record<string, React.ReactNode> = {
    pipeline: PipelineView,
    horas: HorasView,
    clientes: ClientesView,
    facturas: FacturasView,
    equipo: EquipoView,
  };

  const vistaOperativa = (
    <div className="pt-2 pb-8" style={{ border: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
      <InternalNav
        variant="brutalist-sidebar"
        items={[
          { id: "pipeline", label: "Pipeline", badge: "06" },
          { id: "horas", label: "Horas", shortcut: "⌘H" },
          { id: "clientes", label: "Clientes", badge: "14" },
          { id: "facturas", label: "Facturas", badge: "03" },
          { id: "equipo", label: "Equipo" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#0a0a0a"
        bgContainer="#fffbed"
        textActive="#fffbed"
        textInactive="#0a0a0a"
        borderColor="#0a0a0a"
        workspaceLabel="DIMES"
        workspaceInitial="D"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#fffbed", color: "#0a0a0a", minHeight: "100vh" }} className="font-inter">
      {/* Top nav */}
      <div className="px-6 py-3 flex items-center justify-between text-xs uppercase tracking-wider" style={{ borderBottom: "2px solid #0a0a0a" }}>
        <Link href="/" transitionTypes={["nav-back"]} className="hover:underline">← Volver al index</Link>
        <div>Dimes · brutalist</div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <StyleTabs
          variant="brutalist"
          accent="#0a0a0a"
          textActive="#fffbed"
          textInactive="#0a0a0a"
          bgContainer="#fffbed"
          tabsClassName="mb-10"
          tabs={[
            { id: "estudio", label: "ESTUDIO", content: heroComercial },
            { id: "adentro", label: "ADENTRO", content: vistaOperativa },
          ]}
        />

        {/* Meta info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-12 text-xs" style={{ borderTop: "2px solid #0a0a0a" }}>
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
