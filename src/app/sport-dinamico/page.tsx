"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function SportDinamicoPage() {
  const e = getEstilo("sport-dinamico")!;
  const [activeView, setActiveView] = useState("tablero");

  /* ============== TAB 1 — LANDING APP ENTRENO ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-8 pb-14 sm:pt-12 sm:pb-20 text-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-96 -z-0 opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,87,34,0.6), transparent 70%)" }}
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 font-bold" style={{ color: "#ff5722" }}>
          FUERZA · CARDIO · MOVILIDAD
        </p>
        <h1 className="font-bebas text-7xl sm:text-9xl leading-[0.85] tracking-wide mb-6">
          ENTRENÁS<br />
          <span style={{ color: "#ff5722" }}>VOS.</span> NO LA APP.
        </h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto mb-10" style={{ color: "#a3a3a3" }}>
          Plan diseñado por entrenadores reales. Progresión semanal real. Sin gamificación de niño que infla métricas falsas.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="font-bebas text-2xl tracking-wider px-8 py-3.5"
            style={{ backgroundColor: "#ff5722", color: "#0a0a0a" }}
          >
            EMPEZAR 7 DÍAS GRATIS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="font-bebas text-2xl tracking-wider px-8 py-3.5"
            style={{ border: "2px solid #fafafa", color: "#fafafa", backgroundColor: "transparent" }}
          >
            VER PLANES →
          </motion.button>
        </div>

        <div className="grid grid-cols-3 gap-0 max-w-3xl mx-auto" style={{ border: "1px solid #2a2a2a" }}>
          {[
            { val: "47K", label: "ENTRENAMIENTOS / MES" },
            { val: "12+", label: "ENTRENADORES" },
            { val: "★ 4.9", label: "APP STORE / PLAY" },
          ].map((s, i) => (
            <div key={s.label} className="p-5 text-center" style={{ borderRight: i < 2 ? "1px solid #2a2a2a" : "none" }}>
              <p className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none mb-1">{s.val}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: "#a3a3a3" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS DEL CUERPO TÉCNICO (workspace) ============== */

  const TableroView = (
    <div>
      {/* Hero card del día */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #2a1410 100%)",
          border: "1px solid #2a2a2a",
          minHeight: "300px",
        }}
      >
        <div
          aria-hidden
          className="absolute -right-32 -top-32 w-96 h-96 rotate-45"
          style={{ background: "linear-gradient(180deg, rgba(255,87,34,0.18), transparent 70%)" }}
        />
        <div className="relative px-6 sm:px-8 py-8 sm:py-10">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: "#ff5722" }}>
            Día 12 · Semana 3 · Lunes 12/05
          </p>
          <h1 className="font-bebas text-5xl sm:text-7xl leading-[0.85] tracking-wide mb-3">
            CLUB ATLÉTICO<br />
            <span style={{ color: "#ff5722" }}>NORTE.</span>
          </h1>
          <p className="text-sm max-w-md" style={{ color: "#a3a3a3" }}>
            22 atletas activos. 4 sesiones programadas hoy. 2 lesionados. 1 a evaluar.
          </p>
        </div>
      </motion.div>

      {/* Stats brutales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-8" style={{ border: "1px solid #2a2a2a" }}>
        {[
          { num: "22", label: "Activos", accent: false },
          { num: "94%", label: "Asistencia mes", accent: false },
          { num: "8.2", label: "RPE promedio", accent: true },
          { num: "2", label: "Lesionados", accent: false },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-4 sm:p-5"
            style={{
              borderRight: i < 3 ? "1px solid #2a2a2a" : "none",
              backgroundColor: s.accent ? "#ff5722" : "#1a1a1a",
              color: s.accent ? "#0a0a0a" : "#fafafa",
            }}
          >
            <div className="font-bebas text-4xl sm:text-5xl leading-none tracking-wide mb-1">{s.num}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Sesiones del día */}
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2" style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "0.75rem" }}>
        <h2 className="font-bebas text-3xl sm:text-4xl tracking-wide">SESIONES DE HOY</h2>
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#a3a3a3" }}>4 programadas</span>
      </div>

      <div className="space-y-2 mb-8">
        {[
          { hora: "07:00", titulo: "PRIMERA — TREN INFERIOR", grupo: "Sub 19", count: "12 atletas", estado: "EN CURSO" },
          { hora: "10:30", titulo: "RECUPERACIÓN", grupo: "Equipo A", count: "5 atletas", estado: "PRÓXIMA" },
          { hora: "16:00", titulo: "FUERZA — TREN SUPERIOR", grupo: "Sub 17", count: "9 atletas", estado: "PRÓXIMA" },
          { hora: "18:30", titulo: "TÉCNICO + CARDIO", grupo: "Equipo A", count: "11 atletas", estado: "PRÓXIMA" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ x: 4 }}
            className="grid grid-cols-12 gap-3 p-4 cursor-pointer"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2a2a2a",
              borderLeft: s.estado === "EN CURSO" ? "3px solid #ff5722" : "1px solid #2a2a2a",
            }}
          >
            <div className="col-span-2 sm:col-span-1 font-bebas text-2xl tracking-wide leading-none self-center" style={{ color: "#ff5722" }}>
              {s.hora.split(":")[0]}
              <span className="text-base">:{s.hora.split(":")[1]}</span>
            </div>
            <div className="col-span-7 sm:col-span-7 self-center">
              <p className="font-bebas text-xl sm:text-2xl tracking-wide leading-none mb-1">{s.titulo}</p>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#a3a3a3" }}>{s.grupo} · {s.count}</p>
            </div>
            <div className="col-span-3 sm:col-span-4 text-right self-center">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1.5"
                style={{
                  backgroundColor: s.estado === "EN CURSO" ? "#ff5722" : "transparent",
                  color: s.estado === "EN CURSO" ? "#0a0a0a" : "#a3a3a3",
                  border: s.estado === "EN CURSO" ? "none" : "1px solid #2a2a2a",
                }}
              >
                {s.estado}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center py-6 px-6"
        style={{ borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}
      >
        <p className="font-bebas text-2xl sm:text-3xl tracking-wide leading-tight">
          EL CUERPO LOGRA LO QUE LA MENTE CREE.
          <br />
          <span style={{ color: "#ff5722" }}>NO PIENSES. EMPEZÁ.</span>
        </p>
      </motion.div>
    </div>
  );

  const PlantillaView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3" style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1rem" }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "#ff5722" }}>22 atletas activos</p>
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">PLANTILLA</h2>
        </div>
        <button
          className="font-bebas text-lg tracking-wider px-5 py-2.5"
          style={{ backgroundColor: "#ff5722", color: "#0a0a0a" }}
        >
          + ALTA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {[
          { num: "07", nombre: "Mateo Domínguez", pos: "Volante", edad: 19, estado: "OK", rpe: 7.2, sesiones: "12 / 12" },
          { num: "10", nombre: "Bruno Aguilar", pos: "Delantero", edad: 22, estado: "OK", rpe: 8.1, sesiones: "11 / 12" },
          { num: "04", nombre: "Tomás Ríos", pos: "Defensor", edad: 21, estado: "LESIÓN", rpe: 0, sesiones: "0 / 12" },
          { num: "11", nombre: "Luca Salinas", pos: "Extremo", edad: 18, estado: "OK", rpe: 7.8, sesiones: "12 / 12" },
          { num: "08", nombre: "Iván Costa", pos: "Volante", edad: 20, estado: "EVAL", rpe: 6.4, sesiones: "8 / 12" },
          { num: "01", nombre: "Joaquín Méndez", pos: "Arquero", edad: 23, estado: "OK", rpe: 7.5, sesiones: "10 / 12" },
          { num: "05", nombre: "Felipe Acosta", pos: "Defensor", edad: 24, estado: "OK", rpe: 8.4, sesiones: "12 / 12" },
          { num: "09", nombre: "Bautista Sosa", pos: "Delantero", edad: 19, estado: "LESIÓN", rpe: 0, sesiones: "2 / 12" },
        ].map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ x: 3 }}
            className="grid grid-cols-12 gap-2 p-3 items-center cursor-pointer"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2a2a2a",
              borderLeft:
                p.estado === "LESIÓN"
                  ? "3px solid #ef4444"
                  : p.estado === "EVAL"
                  ? "3px solid #eab308"
                  : "3px solid #22c55e",
            }}
          >
            <div className="col-span-2 font-bebas text-3xl tracking-wide leading-none" style={{ color: "#ff5722" }}>
              {p.num}
            </div>
            <div className="col-span-7 min-w-0">
              <p className="font-medium text-sm truncate">{p.nombre}</p>
              <p className="text-[10px] uppercase tracking-[0.15em]" style={{ color: "#a3a3a3" }}>
                {p.pos} · {p.edad}a
              </p>
            </div>
            <div className="col-span-3 text-right">
              <p className="font-bebas text-lg tracking-wide leading-none" style={{ color: p.rpe === 0 ? "#666" : "#fafafa" }}>
                {p.rpe === 0 ? "—" : p.rpe.toFixed(1)}
              </p>
              <p className="text-[9px] uppercase tracking-widest" style={{ color: "#666" }}>RPE</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const PartidosView = (
    <div>
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "#ff5722" }}>Calendario · próximas 4 fechas</p>
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">PARTIDOS</h2>
      </div>

      <div className="space-y-3 mb-8">
        {[
          { fecha: "SAB 17/05", rival: "DEPORTIVO LIBERTAD", local: true, tipo: "LIGA · J7", hora: "16:00" },
          { fecha: "MIÉ 21/05", rival: "ATLÉTICO PAMPA", local: false, tipo: "COPA · 16vos", hora: "21:30" },
          { fecha: "SAB 24/05", rival: "GIMNASIA NORTE", local: true, tipo: "LIGA · J8", hora: "18:00" },
          { fecha: "DOM 01/06", rival: "RACING DEL VALLE", local: false, tipo: "LIGA · J9", hora: "16:00" },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ x: 4 }}
            className="grid grid-cols-12 gap-3 p-5 cursor-pointer items-center"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
          >
            <div className="col-span-3 sm:col-span-2">
              <p className="font-bebas text-xl tracking-wide leading-none" style={{ color: "#ff5722" }}>{p.fecha}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: "#a3a3a3" }}>{p.hora}</p>
            </div>
            <div className="col-span-7 sm:col-span-8">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-bebas text-2xl tracking-wide leading-none">CA NORTE</span>
                <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#666" }}>vs</span>
                <span className="font-bebas text-2xl tracking-wide leading-none">{p.rival}</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: "#a3a3a3" }}>{p.tipo}</p>
            </div>
            <div className="col-span-2 text-right">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1"
                style={{
                  backgroundColor: p.local ? "#ff5722" : "transparent",
                  color: p.local ? "#0a0a0a" : "#a3a3a3",
                  border: p.local ? "none" : "1px solid #2a2a2a",
                }}
              >
                {p.local ? "LOCAL" : "VISITA"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-0" style={{ border: "1px solid #2a2a2a" }}>
        {[
          { v: "5W", l: "VICTORIAS" },
          { v: "1D", l: "EMPATES" },
          { v: "0L", l: "DERROTAS" },
        ].map((s, i) => (
          <div key={s.l} className="p-5 text-center" style={{ borderRight: i < 2 ? "1px solid #2a2a2a" : "none" }}>
            <p className="font-bebas text-5xl tracking-wide leading-none mb-1" style={{ color: i === 0 ? "#22c55e" : i === 1 ? "#eab308" : "#ef4444" }}>{s.v}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: "#a3a3a3" }}>{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const StatsView = (
    <div>
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "#ff5722" }}>Cargas · últimas 4 semanas</p>
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">STATS</h2>
      </div>

      {/* Curva carga */}
      <div className="p-5 mb-6" style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-bebas text-2xl tracking-wide">CARGA SEMANAL</p>
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#ff5722" }}>+18% vs mes pasado</p>
        </div>
        <svg viewBox="0 0 400 100" className="w-full">
          <line x1="0" y1="60" x2="400" y2="60" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="3 3" />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            d="M0,72 L60,68 L120,55 L180,42 L240,48 L300,30 L360,22 L400,18"
            fill="none"
            stroke="#ff5722"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-between text-[10px] mt-2" style={{ color: "#666", fontFamily: "monospace" }}>
          <span>S1</span><span>S2</span><span>S3</span><span>S4</span><span>S5</span><span>S6</span><span>S7</span><span>HOY</span>
        </div>
      </div>

      {/* Top performers */}
      <p className="font-bebas text-2xl tracking-wide mb-3">TOP RPE · ESTA SEMANA</p>
      <div className="space-y-2 mb-6">
        {[
          { num: "10", nombre: "Bruno Aguilar", rpe: 8.1, bar: 95 },
          { num: "05", nombre: "Felipe Acosta", rpe: 8.4, bar: 100 },
          { num: "11", nombre: "Luca Salinas", rpe: 7.8, bar: 88 },
          { num: "01", nombre: "Joaquín Méndez", rpe: 7.5, bar: 82 },
        ].map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.06 }}
            className="grid grid-cols-12 gap-3 p-3 items-center"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
          >
            <div className="col-span-1 font-bebas text-xl tracking-wide" style={{ color: "#ff5722" }}>{p.num}</div>
            <div className="col-span-4 text-sm font-medium truncate">{p.nombre}</div>
            <div className="col-span-5 h-2" style={{ backgroundColor: "#0a0a0a" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.bar}%` }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                className="h-full"
                style={{ backgroundColor: "#ff5722" }}
              />
            </div>
            <div className="col-span-2 font-bebas text-xl tracking-wide leading-none text-right">{p.rpe.toFixed(1)}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const CuerpoTecnicoView = (
    <div>
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "#ff5722" }}>5 profesionales</p>
        <h2 className="font-bebas text-4xl sm:text-5xl tracking-wide leading-none">CUERPO TÉCNICO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {[
          { iniciales: "DT", nombre: "Marcelo Ruiz", rol: "Director técnico", desde: "2022", color: "#ff5722" },
          { iniciales: "PF", nombre: "Lucas Vera", rol: "Preparador físico", desde: "2023", color: "#fafafa" },
          { iniciales: "AY", nombre: "Diego Cabrera", rol: "Ayudante de campo", desde: "2024", color: "#fafafa" },
          { iniciales: "KN", nombre: "Nacho Galland", rol: "Kinesiólogo", desde: "2024", color: "#22c55e" },
          { iniciales: "PS", nombre: "Cecilia Ortega", rol: "Psicóloga deportiva", desde: "2025", color: "#fafafa" },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="p-4 flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
          >
            <div
              className="w-14 h-14 flex items-center justify-center font-bebas text-xl tracking-wider shrink-0"
              style={{ backgroundColor: m.color, color: m.color === "#fafafa" || m.color === "#ff5722" ? "#0a0a0a" : "#0a0a0a" }}
            >
              {m.iniciales}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{m.nombre}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] mt-0.5" style={{ color: "#a3a3a3" }}>
                {m.rol}
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono" style={{ color: "#666" }}>{m.desde}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-5 text-center" style={{ borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a" }}>
        <p className="font-bebas text-2xl sm:text-3xl tracking-wide leading-tight">
          NADIE GANA SOLO.
          <br />
          <span style={{ color: "#ff5722" }}>EL EQUIPO LO ARMA EL EQUIPO.</span>
        </p>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    tablero: TableroView,
    plantilla: PlantillaView,
    partidos: PartidosView,
    stats: StatsView,
    cuerpo: CuerpoTecnicoView,
  };

  /* ============== TAB 2 — WORKSPACE CUERPO TÉCNICO ============== */
  const workspace = (
    <div style={{ border: "1px solid #2a2a2a", minHeight: "640px", backgroundColor: "#0a0a0a" }}>
      <InternalNav
        variant="sport-vertical"
        items={[
          { id: "tablero", label: "Tablero" },
          { id: "plantilla", label: "Plantilla" },
          { id: "partidos", label: "Partidos" },
          { id: "stats", label: "Stats" },
          { id: "cuerpo", label: "C. técnico" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#ff5722"
        textActive="#fafafa"
        textInactive="#a3a3a3"
        borderColor="#2a2a2a"
        workspaceLabel="CA NORTE"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#fafafa", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor="#a3a3a3" />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <StyleTabs
          variant="sport-block"
          accent="#ff5722"
          textActive="#0a0a0a"
          textInactive="#fafafa"
          borderColor="#2a2a2a"
          tabsClassName="mb-8"
          tabs={[
            { id: "landing", label: "Landing", content: landing },
            { id: "club", label: "Club", content: workspace },
          ]}
        />

        <DividerReveal
          variant="slide-in"
          lineColor="#2a2a2a"
          textColor="#ff5722"
          className="mb-8"
          textClassName="font-bebas text-sm uppercase tracking-[0.3em]"
        >
          ↓ FIN DEL MATCH
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#a3a3a3" borderColor="#2a2a2a" headingClass="font-bebas tracking-wide" />
      </main>
    </div>
  );
}
