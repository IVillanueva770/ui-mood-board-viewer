"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { Ripple } from "@/components/ripple";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function Material3Page() {
  const e = getEstilo("material-3")!;
  const [activeChip, setActiveChip] = useState("Hoy");
  const [activeView, setActiveView] = useState("inicio");

  /* ============== TAB 1 — LANDING SaaS ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="max-w-4xl mx-auto px-5 pt-8 pb-12 sm:pt-12 sm:pb-16 text-center"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-7" style={{ backgroundColor: "#eaddff", color: "#21005d" }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#6750a4" }} />
        <span className="text-xs font-semibold tracking-wide">Material 3 · Salud y rehabilitación</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto" style={{ color: "#1d1b20" }}>
        La rehabilitación,<br />
        <span style={{ color: "#6750a4" }}>diseñada como debe ser.</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#49454f" }}>
        Tu kine te asigna sesiones, vos las hacés desde tu celular. Sin papeles, sin recordatorios torpes. Acompañamiento real entre visitas.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(103,80,164,0.35)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="px-6 py-3 rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: "#6750a4" }}
        >
          Descargar gratis
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#eaddff" }}
          className="px-6 py-3 rounded-full text-sm font-semibold transition-colors"
          style={{ color: "#21005d", border: "1px solid #cac4d0" }}
        >
          Para profesionales →
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
        {[
          { tit: "Tu plan, en tu bolsillo", desc: "Cada sesión asignada por tu kine, lista para hacer.", color: "#6750a4", bg: "#eaddff" },
          { tit: "Recordatorios que no molestan", desc: "Material 3 motion: suaves, oportunos, sin spam.", color: "#7d5260", bg: "#ffd8e4" },
          { tit: "Tu kine ve tu progreso", desc: "Si saltás sesiones, lo sabe. Si avanzás, también.", color: "#386a20", bg: "#d7eac7" },
        ].map((h) => (
          <motion.div
            key={h.tit}
            whileHover={{ y: -3 }}
            className="rounded-2xl p-5"
            style={{ backgroundColor: h.bg }}
          >
            <div className="w-9 h-9 rounded-xl mb-3 flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: h.color }}>
              ◆
            </div>
            <h4 className="font-medium mb-1" style={{ color: h.color }}>{h.tit}</h4>
            <p className="text-xs leading-relaxed" style={{ color: "#49454f" }}>{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS DE LA APP (TAB 2 — phone mock) ============== */

  const InicioView = (
    <>
      {/* Top app bar */}
      <div className="flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-base"
            style={{ backgroundColor: "#eaddff", color: "#21005d" }}
          >
            N
          </div>
          <div>
            <p className="text-xs" style={{ color: "#79747e" }}>Buen día</p>
            <p className="text-base font-medium">Nacho</p>
          </div>
        </div>
        <Ripple
          color="rgba(33, 0, 93, 0.18)"
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#e8def8" }}
          ariaLabel="Notificaciones"
        >
          <span style={{ color: "#21005d" }}>🔔</span>
        </Ripple>
      </div>

      {/* Hero card filled */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl p-6 mb-5"
        style={{ backgroundColor: "#6750a4", color: "#ffffff" }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Progreso semanal</p>
        <p className="text-5xl font-medium tracking-tight mb-1">68%</p>
        <p className="text-sm opacity-90 mb-4">Vas mejor que la semana pasada</p>

        <div className="h-2 rounded-full mb-2 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "68%" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: "#d0bcff" }}
          />
        </div>
        <p className="text-xs opacity-70">8 sesiones de 12 esta semana</p>
      </motion.section>

      {/* Quick actions tonal chips */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {[
          { label: "Hoy" },
          { label: "Ejercicios" },
          { label: "Citas" },
          { label: "Progreso" },
        ].map((c) => {
          const active = activeChip === c.label;
          return (
            <Ripple
              key={c.label}
              color={active ? "rgba(255,255,255,0.4)" : "rgba(33,0,93,0.18)"}
              className="px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium"
              style={{
                backgroundColor: active ? "#6750a4" : "#e8def8",
                color: active ? "#ffffff" : "#21005d",
              }}
              onClick={() => setActiveChip(c.label)}
            >
              {c.label}
            </Ripple>
          );
        })}
      </div>

      <p className="text-sm font-medium mb-3 px-1" style={{ color: "#49454f" }}>Próximas sesiones</p>
      <div className="space-y-3 mb-6">
        {[
          { titulo: "Movilidad lumbar", hora: "10:00", duracion: "30 min", tipo: "Online", color: "#6750a4" },
          { titulo: "Fortalecimiento core", hora: "16:30", duracion: "45 min", tipo: "Presencial", color: "#7d5260" },
          { titulo: "Estiramientos guiados", hora: "20:00", duracion: "15 min", tipo: "Online", color: "#386a20" },
        ].map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <Ripple
              as="div"
              color={`${s.color}26`}
              className="rounded-2xl p-4 flex items-center gap-3 cursor-pointer"
              style={{ backgroundColor: "#ffffff", border: "1px solid #cac4d0" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${s.color}1a` }}
              >
                <span className="text-lg" style={{ color: s.color }}>●</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{s.titulo}</p>
                <p className="text-xs mt-0.5" style={{ color: "#79747e" }}>
                  {s.hora} · {s.duracion} · {s.tipo}
                </p>
              </div>
              <span style={{ color: "#79747e" }}>›</span>
            </Ripple>
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl p-5"
        style={{ backgroundColor: "#ffffff", boxShadow: "0 1px 2px rgba(0,0,0,0.06), 0 2px 6px rgba(103,80,164,0.08)" }}
      >
        <p className="text-sm font-medium mb-4" style={{ color: "#49454f" }}>Esta semana</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: "8", label: "Sesiones" },
            { val: "4h 20m", label: "Tiempo" },
            { val: "12", label: "Días seguidos" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-medium tracking-tight" style={{ color: "#21005d" }}>{s.val}</div>
              <div className="text-xs mt-1" style={{ color: "#79747e" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );

  const AgendaView = (
    <>
      <div className="mb-6 px-1">
        <p className="text-xs" style={{ color: "#79747e" }}>Esta semana</p>
        <h2 className="text-2xl font-medium tracking-tight">Mi agenda</h2>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { dia: "LUN", num: "12", sesion: "Movilidad lumbar", hora: "10:00", tipo: "Online", color: "#6750a4", estado: "completada" },
          { dia: "MAR", num: "13", sesion: "Fortalecimiento core", hora: "16:30", tipo: "Presencial", color: "#7d5260", estado: "completada" },
          { dia: "MIÉ", num: "14", sesion: "Estiramientos guiados", hora: "20:00", tipo: "Online", color: "#386a20", estado: "hoy" },
          { dia: "JUE", num: "15", sesion: "Movilidad lumbar", hora: "10:00", tipo: "Online", color: "#6750a4", estado: "próxima" },
          { dia: "VIE", num: "16", sesion: "Tren superior", hora: "16:30", tipo: "Presencial", color: "#7d5260", estado: "próxima" },
        ].map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Ripple
              as="div"
              color={`${d.color}26`}
              className="rounded-2xl p-4 flex items-center gap-3 cursor-pointer"
              style={{
                backgroundColor: d.estado === "hoy" ? "#eaddff" : "#ffffff",
                border: d.estado === "hoy" ? `1px solid ${d.color}` : "1px solid #cac4d0",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex flex-col items-center justify-center shrink-0"
                style={{ backgroundColor: `${d.color}1a`, color: d.color }}
              >
                <span className="text-[9px] font-medium tracking-wide opacity-70">{d.dia}</span>
                <span className="text-base font-medium tracking-tight">{d.num}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{d.sesion}</p>
                <p className="text-xs mt-0.5" style={{ color: "#79747e" }}>{d.hora} · {d.tipo}</p>
              </div>
              <span
                className="text-[10px] uppercase font-bold px-2 py-1 rounded-full"
                style={{
                  backgroundColor: d.estado === "completada" ? "#d7eac7" : d.estado === "hoy" ? d.color : "#f7f2fa",
                  color: d.estado === "completada" ? "#386a20" : d.estado === "hoy" ? "#ffffff" : "#79747e",
                }}
              >
                {d.estado}
              </span>
            </Ripple>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl p-4 text-center" style={{ backgroundColor: "#fff8f8", border: "1px solid #ffd8e4" }}>
        <p className="text-xs" style={{ color: "#79747e" }}>Próxima visita presencial</p>
        <p className="text-base font-medium mt-1" style={{ color: "#7d5260" }}>Lun 19/05 · 17:00</p>
      </div>
    </>
  );

  const ProgresoView = (
    <>
      <div className="mb-6 px-1">
        <p className="text-xs" style={{ color: "#79747e" }}>Últimas 4 semanas</p>
        <h2 className="text-2xl font-medium tracking-tight">Tu evolución</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl p-5 mb-5"
        style={{ backgroundColor: "#386a20", color: "#ffffff" }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Adherencia</p>
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-5xl font-medium tracking-tight">87%</p>
          <p className="text-sm opacity-80">+12 vs mes pasado</p>
        </div>
        {/* Barras semanales */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { sem: "S1", pct: 72 },
            { sem: "S2", pct: 81 },
            { sem: "S3", pct: 90 },
            { sem: "S4", pct: 87 },
          ].map((w, i) => (
            <div key={w.sem} className="text-center">
              <div className="h-20 flex items-end mb-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${w.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
                  className="w-full rounded-md"
                  style={{ backgroundColor: "#d7eac7" }}
                />
              </div>
              <p className="text-[10px] opacity-70">{w.sem}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { val: "47", label: "Sesiones totales", color: "#6750a4", bg: "#eaddff" },
          { val: "23h", label: "Tiempo invertido", color: "#7d5260", bg: "#ffd8e4" },
          { val: "12", label: "Días seguidos", color: "#386a20", bg: "#d7eac7" },
          { val: "4 / 4", label: "Objetivos cumplidos", color: "#21005d", bg: "#e8def8" },
        ].map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -2 }}
            className="rounded-2xl p-4"
            style={{ backgroundColor: s.bg }}
          >
            <div className="text-2xl font-medium tracking-tight" style={{ color: s.color }}>{s.val}</div>
            <div className="text-xs mt-1" style={{ color: "#49454f" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl p-4" style={{ backgroundColor: "#ffffff", border: "1px solid #cac4d0" }}>
        <p className="text-sm font-medium mb-2">Tu kine vio tu progreso</p>
        <p className="text-xs leading-relaxed" style={{ color: "#79747e" }}>
          &ldquo;Excelente esta semana, Nacho. Para mayo te subo la intensidad del core.&rdquo;
        </p>
        <p className="text-[10px] mt-2 font-medium" style={{ color: "#6750a4" }}>— Lic. Nacho Galland · hace 2h</p>
      </div>
    </>
  );

  const MensajesView = (
    <>
      <div className="mb-6 px-1">
        <p className="text-xs" style={{ color: "#79747e" }}>2 sin leer</p>
        <h2 className="text-2xl font-medium tracking-tight">Mensajes</h2>
      </div>

      <div className="space-y-2">
        {[
          { from: "Lic. Nacho Galland", initial: "N", body: "Excelente esta semana, te subo la intensidad del core para mayo.", time: "2h", unread: true, color: "#6750a4" },
          { from: "Recordatorio app", initial: "📅", body: "Tu próxima sesión presencial es el lunes a las 17:00.", time: "5h", unread: true, color: "#7d5260" },
          { from: "Lic. Nacho Galland", initial: "N", body: "Subí el video del ejercicio con la banda elástica. Cualquier duda escribime.", time: "1d", unread: false, color: "#6750a4" },
          { from: "Soporte", initial: "🛟", body: "¿Cómo está yendo tu experiencia? 30 segundos.", time: "3d", unread: false, color: "#386a20" },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Ripple
              as="div"
              color={`${m.color}26`}
              className="rounded-2xl p-4 flex gap-3 cursor-pointer items-start"
              style={{
                backgroundColor: m.unread ? "#eaddff" : "#ffffff",
                border: "1px solid " + (m.unread ? m.color : "#cac4d0"),
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-medium shrink-0"
                style={{ backgroundColor: `${m.color}1a`, color: m.color }}
              >
                {m.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-medium text-sm truncate">{m.from}</p>
                  <span className="text-[10px] flex-shrink-0" style={{ color: "#79747e" }}>{m.time}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#49454f" }}>{m.body}</p>
              </div>
              {m.unread && (
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: m.color }} />
              )}
            </Ripple>
          </motion.div>
        ))}
      </div>
    </>
  );

  const PerfilView = (
    <>
      <div className="text-center mb-7">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-medium mb-4"
          style={{ backgroundColor: "#eaddff", color: "#21005d" }}
        >
          N
        </motion.div>
        <h2 className="text-xl font-medium tracking-tight">Nacho Pérez</h2>
        <p className="text-xs mt-1" style={{ color: "#79747e" }}>Paciente desde marzo 2026</p>
      </div>

      <div className="rounded-3xl p-5 mb-4" style={{ backgroundColor: "#eaddff" }}>
        <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#21005d" }}>Tu kine</p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-medium" style={{ backgroundColor: "#6750a4", color: "#ffffff" }}>
            NG
          </div>
          <div>
            <p className="font-medium text-sm">Lic. Nacho Galland</p>
            <p className="text-xs" style={{ color: "#49454f" }}>Kinesiología deportiva · MP 4231</p>
          </div>
        </div>
      </div>

      <div className="space-y-1 mb-4">
        {[
          { label: "Mis datos", icon: "👤" },
          { label: "Plan de tratamiento", icon: "📋" },
          { label: "Notificaciones", icon: "🔔" },
          { label: "Privacidad", icon: "🔒" },
          { label: "Pagos", icon: "💳" },
          { label: "Ayuda", icon: "❓" },
        ].map((it) => (
          <Ripple
            key={it.label}
            as="div"
            color="rgba(103,80,164,0.18)"
            className="rounded-2xl p-3 flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: "#ffffff", border: "1px solid #cac4d0" }}
          >
            <span className="text-lg">{it.icon}</span>
            <span className="flex-1 text-sm font-medium">{it.label}</span>
            <span style={{ color: "#79747e" }}>›</span>
          </Ripple>
        ))}
      </div>

      <button
        className="w-full rounded-2xl p-3 text-sm font-medium"
        style={{ backgroundColor: "#ffd8e4", color: "#7d5260", border: "1px solid #efb8c8" }}
      >
        Cerrar sesión
      </button>
    </>
  );

  const subViews: Record<string, React.ReactNode> = {
    inicio: InicioView,
    agenda: AgendaView,
    progreso: ProgresoView,
    mensajes: MensajesView,
    perfil: PerfilView,
  };

  /* ============== TAB 2 — APP (phone mock con bottom nav M3) ============== */
  const appMock = (
    <main className="max-w-md mx-auto px-4 py-6">
      <div className="relative pb-32">
        <InternalNav
          variant="m3-bottom"
          items={[
            { id: "inicio", label: "Inicio", icon: "⌂" },
            { id: "agenda", label: "Agenda", icon: "📅" },
            { id: "progreso", label: "Progreso", icon: "📊" },
            { id: "mensajes", label: "Mensajes", icon: "💬" },
            { id: "perfil", label: "Perfil", icon: "👤" },
          ]}
          active={activeView}
          onChange={setActiveView}
          accent="#21005d"
          bgContainer="#f7f2fa"
          bgActive="#eaddff"
          textActive="#21005d"
          textInactive="#49454f"
          borderColor="#e8def8"
        >
          {subViews[activeView]}
        </InternalNav>
      </div>
    </main>
  );

  return (
    <div style={{ backgroundColor: "#fef7ff", color: "#1d1b20", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e8def8" navColor="#79747e" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <StyleTabs
          variant="soft-pill"
          accent="#6750a4"
          textActive="#ffffff"
          textInactive="#49454f"
          bgContainer="#eaddff"
          tabsClassName="mb-8 flex justify-center"
          tabs={[
            { id: "landing", label: "Landing", content: landing },
            { id: "app", label: "App", content: appMock },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor="#e8def8"
          textColor="#79747e"
          className="max-w-md mx-auto px-4 mt-8 mb-4"
          textClassName="text-[10px] uppercase tracking-[0.2em] font-medium"
        >
          fin del recorrido
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#49454f" borderColor="#e8def8" />
      </main>
    </div>
  );
}
