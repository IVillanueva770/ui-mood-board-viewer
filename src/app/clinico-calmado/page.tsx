"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function ClinicoCalmadoPage() {
  const e = getEstilo("clinico-calmado")!;
  const [activeView, setActiveView] = useState("agenda");

  /* ============== TAB 1 — SERVICIO ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-20 sm:pt-16 sm:pb-24 text-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-20 h-80 -z-0 opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 50%, rgba(14,165,233,0.32), transparent 60%)" }}
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.22em] mb-5 font-semibold" style={{ color: "#0ea5e9" }}>
          Software clínico
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] leading-[1.05] mb-5 max-w-3xl mx-auto" style={{ color: "#0f172a" }}>
          El organizador<br />
          <span style={{ color: "#0ea5e9" }}>del consultorio.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#64748b" }}>
          Agenda, historia clínica, planes de ejercicio y facturación en un solo lugar. Hecho con kinesiólogos reales, no con consultores de software.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 12px 28px -6px rgba(14,165,233,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-6 py-3 text-sm font-semibold rounded-full text-white"
            style={{ backgroundColor: "#0ea5e9", boxShadow: "0 4px 12px rgba(14,165,233,0.28)" }}
          >
            Probar 30 días gratis
          </motion.button>
          <motion.button
            whileHover={{ borderColor: "#0ea5e9", color: "#0ea5e9", x: 2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="px-6 py-3 text-sm font-semibold rounded-full"
            style={{ border: "1px solid #cbd5e1", color: "#0f172a", backgroundColor: "#ffffff" }}
          >
            Pedir demo →
          </motion.button>
        </div>

        <p className="text-xs uppercase tracking-[0.18em] font-semibold mb-6" style={{ color: "#94a3b8" }}>
          Lo que ya está adentro
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-left max-w-5xl mx-auto">
          {[
            { tit: "Agenda", desc: "Turnos online con confirmación por WhatsApp.", icon: "◇" },
            { tit: "Historia clínica", desc: "Evoluciones SOAP, fotos y test funcionales.", icon: "≡" },
            { tit: "Plan de ejercicios", desc: "Asignación con video, repeticiones y registro.", icon: "↗" },
            { tit: "Facturación", desc: "Recibos, monotributo y reportes mensuales.", icon: "ƒ" },
          ].map((f, i) => (
            <motion.div
              key={f.tit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-white"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white text-base" style={{ backgroundColor: "#0ea5e9" }}>{f.icon}</div>
              <h4 className="font-semibold mb-1.5" style={{ color: "#0f172a" }}>{f.tit}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS WORKSPACE ============== */

  const AgendaView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#0ea5e9" }}>Hoy · jueves 8 de mayo</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Agenda</h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 text-sm font-semibold rounded-full text-white"
          style={{ backgroundColor: "#0ea5e9" }}
        >
          + Nuevo turno
        </motion.button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Turnos hoy", val: "8", sub: "1 cancelado" },
          { label: "Pacientes activos", val: "42", sub: "+3 este mes" },
          { label: "Pagos del mes", val: "$248,400", sub: "85% cobrado" },
          { label: "Adherencia plan", val: "78%", sub: "+4 pp" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl p-4"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <p className="text-xs mb-2" style={{ color: "#64748b" }}>{m.label}</p>
            <p className="text-2xl font-semibold tracking-tight mb-1" style={{ color: "#0f172a" }}>{m.val}</p>
            <p className="text-xs" style={{ color: "#0ea5e9" }}>{m.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid #e2e8f0" }}>
          <p className="font-semibold text-sm" style={{ color: "#0f172a" }}>Turnos del día</p>
          <span className="text-xs" style={{ color: "#64748b" }}>8 programados</span>
        </div>
        {[
          { hora: "08:30", paciente: "Mariana Soto", motivo: "Lumbalgia · evolución", estado: "Confirmado", color: "#10b981" },
          { hora: "09:15", paciente: "Tomás Brizuela", motivo: "Rodilla · post-op semana 4", estado: "Confirmado", color: "#10b981" },
          { hora: "10:00", paciente: "Cecilia Pereyra", motivo: "Hombro · evaluación", estado: "Confirmado", color: "#10b981" },
          { hora: "11:00", paciente: "Federico Lacroix", motivo: "Cervical · primera consulta", estado: "Pendiente", color: "#f59e0b" },
          { hora: "14:30", paciente: "Pilar Otermín", motivo: "Plan ejercicios · revisión", estado: "Confirmado", color: "#10b981" },
          { hora: "15:30", paciente: "Joaquín Mendieta", motivo: "Tobillo · esguince", estado: "Confirmado", color: "#10b981" },
          { hora: "16:30", paciente: "Lucía Vidal", motivo: "Lumbar · evolución", estado: "Cancelado", color: "#94a3b8" },
          { hora: "17:30", paciente: "Diego Saavedra", motivo: "Codo · tendinitis", estado: "Confirmado", color: "#10b981" },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ backgroundColor: "#f8fafc" }}
            className="grid grid-cols-12 px-5 py-3 items-center text-sm"
            style={{ borderBottom: i < 7 ? "1px solid #f1f5f9" : "none" }}
          >
            <div className="col-span-2 font-semibold tabular-nums" style={{ color: "#0ea5e9" }}>{t.hora}</div>
            <div className="col-span-7 min-w-0">
              <p className="font-medium truncate" style={{ color: "#0f172a" }}>{t.paciente}</p>
              <p className="text-xs truncate" style={{ color: "#64748b" }}>{t.motivo}</p>
            </div>
            <div className="col-span-3 flex items-center justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.color }} />
              <span className="text-xs hidden sm:inline" style={{ color: "#475569" }}>{t.estado}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const PacientesView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#0ea5e9" }}>42 pacientes · 38 activos</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Pacientes</h2>
        </div>
        <input
          placeholder="Buscar paciente..."
          className="px-4 py-2 text-sm rounded-full bg-white outline-none"
          style={{ border: "1px solid #cbd5e1", color: "#0f172a", minWidth: "240px" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { nombre: "Mariana Soto", edad: 38, iniciales: "MS", proximo: "Hoy 08:30", motivo: "Lumbalgia crónica", estado: "Activo", color: "#10b981", colorBg: "#d1fae5" },
          { nombre: "Tomás Brizuela", edad: 27, iniciales: "TB", proximo: "Hoy 09:15", motivo: "Post-op rodilla derecha", estado: "Activo", color: "#10b981", colorBg: "#d1fae5" },
          { nombre: "Cecilia Pereyra", edad: 45, iniciales: "CP", proximo: "Hoy 10:00", motivo: "Hombro · primera vez", estado: "Activo", color: "#10b981", colorBg: "#d1fae5" },
          { nombre: "Federico Lacroix", edad: 52, iniciales: "FL", proximo: "Hoy 11:00", motivo: "Cervical", estado: "Pausa", color: "#f59e0b", colorBg: "#fef3c7" },
          { nombre: "Pilar Otermín", edad: 33, iniciales: "PO", proximo: "Hoy 14:30", motivo: "Plan ejercicios", estado: "Activo", color: "#10b981", colorBg: "#d1fae5" },
          { nombre: "Lucía Vidal", edad: 41, iniciales: "LV", proximo: "—", motivo: "Lumbar", estado: "Alta", color: "#0ea5e9", colorBg: "#dbeafe" },
        ].map((p, i) => (
          <motion.div
            key={p.nombre}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3, boxShadow: "0 12px 24px -10px rgba(14,165,233,0.18)" }}
            className="bg-white rounded-2xl p-5 cursor-pointer"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: "#0ea5e9" }}>
                {p.iniciales}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate" style={{ color: "#0f172a" }}>{p.nombre}</p>
                <p className="text-xs" style={{ color: "#64748b" }}>{p.edad} años · {p.motivo}</p>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: p.colorBg, color: p.color }}>
                {p.estado}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs pt-2" style={{ borderTop: "1px solid #f1f5f9", color: "#64748b" }}>
              <span>Próximo turno</span>
              <span className="font-semibold" style={{ color: "#0f172a" }}>{p.proximo}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const PlanesView = (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#0ea5e9" }}>14 planes activos</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Planes de ejercicio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { paciente: "Mariana Soto", plan: "Lumbar fase 2", ejercicios: 8, semanas: 6, adherencia: 92 },
          { paciente: "Tomás Brizuela", plan: "Post-op rodilla S5-S8", ejercicios: 12, semanas: 4, adherencia: 78 },
          { paciente: "Pilar Otermín", plan: "Core + glúteo medio", ejercicios: 6, semanas: 8, adherencia: 85 },
          { paciente: "Diego Saavedra", plan: "Codo · excéntricos", ejercicios: 5, semanas: 4, adherencia: 65 },
          { paciente: "Joaquín Mendieta", plan: "Tobillo · proprio", ejercicios: 7, semanas: 3, adherencia: 88 },
          { paciente: "Cecilia Pereyra", plan: "Hombro · cuff", ejercicios: 9, semanas: 6, adherencia: 70 },
        ].map((p, i) => (
          <motion.div
            key={p.paciente}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl p-5"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <div className="mb-3">
              <p className="font-semibold" style={{ color: "#0f172a" }}>{p.paciente}</p>
              <p className="text-sm" style={{ color: "#0ea5e9" }}>{p.plan}</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-center">
              <div>
                <p className="text-lg font-semibold" style={{ color: "#0f172a" }}>{p.ejercicios}</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>Ejercicios</p>
              </div>
              <div>
                <p className="text-lg font-semibold" style={{ color: "#0f172a" }}>{p.semanas}</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>Semanas</p>
              </div>
              <div>
                <p className="text-lg font-semibold" style={{ color: p.adherencia > 75 ? "#10b981" : "#f59e0b" }}>{p.adherencia}%</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>Adherencia</p>
              </div>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#f1f5f9" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.adherencia}%` }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                className="h-full rounded-full"
                style={{ backgroundColor: p.adherencia > 75 ? "#10b981" : "#f59e0b" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MensajesView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#0ea5e9" }}>4 mensajes sin leer</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Mensajes</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #e2e8f0" }}>
        {[
          { sender: "Mariana Soto", iniciales: "MS", preview: "Buenas! Confirmo el turno de hoy. ¿Llevo los ejercicios anotados?", hora: "08:12", unread: 2, color: "#0ea5e9" },
          { sender: "Tomás Brizuela", iniciales: "TB", preview: "Vi el video del puente. Se siente bien, sin dolor en la rodilla.", hora: "07:48", unread: 1, color: "#10b981" },
          { sender: "Federico Lacroix", iniciales: "FL", preview: "Quería preguntarte si conviene posponer hasta la semana que viene...", hora: "Ayer", unread: 1, color: "#f59e0b" },
          { sender: "Cecilia Pereyra", iniciales: "CP", preview: "Gracias por la recomendación de la postura. Me ayudó mucho!", hora: "Ayer", unread: 0, color: "#0ea5e9" },
          { sender: "Pilar Otermín", iniciales: "PO", preview: "¿Podemos cambiar el turno de mañana al jueves?", hora: "2 días", unread: 0, color: "#0ea5e9" },
          { sender: "Diego Saavedra", iniciales: "DS", preview: "Adjunto la receta del traumatólogo.", hora: "3 días", unread: 0, color: "#10b981" },
        ].map((m, i) => (
          <motion.div
            key={m.sender}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ backgroundColor: "#f8fafc" }}
            className="px-5 py-4 flex items-center gap-3 cursor-pointer"
            style={{ borderBottom: i < 5 ? "1px solid #f1f5f9" : "none" }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0" style={{ backgroundColor: m.color }}>
              {m.iniciales}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <p className={`truncate ${m.unread > 0 ? "font-semibold" : "font-medium"}`} style={{ color: "#0f172a" }}>{m.sender}</p>
                <span className="text-[11px] shrink-0" style={{ color: "#94a3b8" }}>{m.hora}</span>
              </div>
              <p className="text-xs truncate" style={{ color: m.unread > 0 ? "#475569" : "#94a3b8" }}>{m.preview}</p>
            </div>
            {m.unread > 0 && (
              <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold text-white shrink-0" style={{ backgroundColor: "#0ea5e9" }}>
                {m.unread}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ReportesView = (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.18em] mb-1 font-semibold" style={{ color: "#0ea5e9" }}>Mes en curso · mayo</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Reportes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { label: "Sesiones del mes", val: "142", sub: "+18 vs abril" },
          { label: "Pacientes nuevos", val: "8", sub: "+2 vs abril" },
          { label: "Sesiones / paciente", val: "3.4", sub: "+0.2" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white rounded-2xl p-5"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <p className="text-xs mb-2" style={{ color: "#64748b" }}>{m.label}</p>
            <p className="text-3xl font-semibold tracking-tight mb-1" style={{ color: "#0f172a" }}>{m.val}</p>
            <p className="text-xs" style={{ color: "#0ea5e9" }}>{m.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #e2e8f0" }}>
        <p className="font-semibold text-sm mb-4" style={{ color: "#0f172a" }}>Por motivo de consulta</p>
        <div className="space-y-3">
          {[
            { motivo: "Lumbalgia", val: 42, pct: 100 },
            { motivo: "Hombro", val: 28, pct: 67 },
            { motivo: "Rodilla", val: 24, pct: 57 },
            { motivo: "Cervical", val: 21, pct: 50 },
            { motivo: "Tobillo", val: 14, pct: 33 },
            { motivo: "Otros", val: 13, pct: 31 },
          ].map((c, i) => (
            <div key={c.motivo}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium" style={{ color: "#0f172a" }}>{c.motivo}</span>
                <span className="tabular-nums" style={{ color: "#64748b" }}>{c.val} sesiones</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#f1f5f9" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${c.pct}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: "#0ea5e9" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    agenda: AgendaView,
    pacientes: PacientesView,
    planes: PlanesView,
    mensajes: MensajesView,
    reportes: ReportesView,
  };

  /* ============== TAB 2 — WORKSPACE ============== */
  const workspace = (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: "16px", minHeight: "660px", backgroundColor: "#ffffff", overflow: "hidden" }}>
      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "agenda", label: "Agenda", icon: "◇" },
          { id: "pacientes", label: "Pacientes", icon: "◆" },
          { id: "planes", label: "Planes", icon: "≡" },
          { id: "mensajes", label: "Mensajes", icon: "↗", badge: 4 },
          { id: "reportes", label: "Reportes", icon: "ƒ" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#0ea5e9"
        bgContainer="#f8fafc"
        bgActive="#e0f2fe"
        textActive="#0f172a"
        textInactive="#64748b"
        borderColor="#e2e8f0"
        workspaceLabel="Kine Galland"
        workspaceInitial="K"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f8fafc", color: "#0f172a", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e2e8f0" navColor="#64748b" />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent="#0ea5e9"
          textActive="#ffffff"
          textInactive="#64748b"
          bgContainer="#ffffff"
          borderColor="#e2e8f0"
          tabsClassName="mb-10"
          tabs={[
            { id: "landing", label: "Servicio", content: landing },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor="#cbd5e1"
          textColor="#0ea5e9"
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.22em] font-semibold"
        >
          Cuidado profesional
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#64748b" borderColor="#e2e8f0" />
      </main>
    </div>
  );
}
