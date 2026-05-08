"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const ACCENT = "#3b82f6";
const ACCENT_SOFT = "#dbeafe";
const TEXT = "#0f172a";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";
const SURFACE = "#f1f5f9";
const AMBER = "#f59e0b";
const AMBER_SOFT = "#fef3c7";

export default function MedicoAmigablePage() {
  const e = getEstilo("medico-amigable")!;
  const [activeView, setActiveView] = useState("inicio");

  /* ============== TAB 1 — LANDING (servicio) ============== */
  const landing = (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-5xl mx-auto px-2 sm:px-4 pt-8 pb-14 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: ACCENT_SOFT, color: "#1e40af" }}>
        <span>✦</span>
        <span className="text-xs font-semibold tracking-wide">Profesionales · Pacientes · Continuidad</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
        Cuidado de salud<br /><span style={{ color: ACCENT }}>que te acompaña.</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: MUTED }}>
        Conectá con kinesiólogos y profesionales que diseñan un plan a tu medida. Hacé tus ejercicios desde casa, con seguimiento real.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
        <motion.button whileHover={{ y: -2, boxShadow: "0 12px 28px -10px rgba(59,130,246,0.45)" }} whileTap={{ scale: 0.97 }} className="px-6 py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>Empezar evaluación gratis</motion.button>
        <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="px-5 py-3 rounded-xl text-sm font-semibold" style={{ backgroundColor: "#ffffff", color: TEXT, border: `1px solid ${BORDER}` }}>Hablar con un profesional →</motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        {[
          { icon: "🩺", titulo: "Evaluación inicial", desc: "Videollamada con un kinesiólogo matriculado para entender qué necesitás. Sin apuro, sin diagnóstico apresurado." },
          { icon: "📋", titulo: "Plan personalizado", desc: "Ejercicios diseñados para vos, con video y explicación clara. Adaptable según cómo te vas sintiendo." },
          { icon: "🤝", titulo: "Apoyo profesional", desc: "Un profesional asignado que ve tu progreso, responde dudas por chat y ajusta el plan cuando hace falta." },
        ].map((f, i) => (
          <motion.div key={f.titulo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }} whileHover={{ y: -3 }} className="bg-white rounded-2xl p-5" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3" style={{ backgroundColor: ACCENT_SOFT }}>{f.icon}</div>
            <p className="font-semibold mb-1.5">{f.titulo}</p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-sm mt-12" style={{ color: MUTED }}>
        <span style={{ color: TEXT, fontWeight: 600 }}>4.700 pacientes</span> en tratamiento activo · <span style={{ color: TEXT, fontWeight: 600 }}>92% adherencia</span>
      </p>
    </motion.section>
  );

  /* ============== SUB-VISTAS PACIENTE ============== */

  const InicioView = (
    <div>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl p-5 mb-6 flex items-center gap-4" style={{ backgroundColor: AMBER_SOFT, border: `1px solid #fde68a` }}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: "#ffffff" }}>🗓️</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: AMBER }}>Tu próximo turno · jueves 15</p>
          <p className="font-semibold text-base mt-0.5">Control con Lic. Romina Vázquez · 17:30</p>
          <p className="text-xs" style={{ color: MUTED }}>Videollamada · agenda automática 10 min antes</p>
        </div>
        <motion.button whileHover={{ y: -1 }} className="text-xs font-semibold px-3 py-2 rounded-lg shrink-0" style={{ backgroundColor: "#ffffff", border: `1px solid #fde68a` }}>Reagendar</motion.button>
      </motion.div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { v: "18", l: "Sesiones completadas", color: ACCENT },
          { v: "94%", l: "Adherencia al plan", color: "#10b981" },
          { v: "32", l: "Días activos", color: "#8b5cf6" },
        ].map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }} className="bg-white rounded-2xl p-4 text-center" style={{ border: `1px solid ${BORDER}` }}>
            <p className="text-3xl font-semibold tracking-tight mb-1" style={{ color: s.color }}>{s.v}</p>
            <p className="text-xs" style={{ color: MUTED }}>{s.l}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-5" style={{ border: `1px solid ${BORDER}` }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold">Ejercicios de hoy</p>
          <span className="text-xs" style={{ color: MUTED }}>3 pendientes · ~22 min</span>
        </div>
        <div className="space-y-2">
          {[
            { icon: "🦵", nombre: "Sentadilla isométrica", reps: "3 × 30 seg", min: "6 min" },
            { icon: "🧘", nombre: "Estiramiento isquios", reps: "2 × 45 seg c/lado", min: "4 min" },
            { icon: "🤸", nombre: "Movilidad cadera con banda", reps: "3 × 12 reps", min: "12 min" },
          ].map((ej, i) => (
            <motion.div key={ej.nombre} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.06 }} whileHover={{ x: 3 }} className="rounded-xl p-3 flex items-center gap-3 cursor-pointer" style={{ backgroundColor: SURFACE }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: "#ffffff" }}>{ej.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{ej.nombre}</p>
                <p className="text-xs" style={{ color: MUTED }}>{ej.reps}</p>
              </div>
              <span className="text-xs font-mono" style={{ color: MUTED }}>{ej.min}</span>
            </motion.div>
          ))}
        </div>
        <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>Empezar rutina →</motion.button>
      </div>
    </div>
  );

  const PlanView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
          Plan semanal · Semana 4 de 8
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-1">Ejercicios de la semana</h2>
        <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: SURFACE }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "62%" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
        </div>
        <p className="text-xs mt-2" style={{ color: MUTED }}>
          14 de 22 ejercicios completados · seguís así
        </p>
      </div>

      <div className="space-y-2">
        {[
          { icon: "🦵", nombre: "Sentadilla isométrica", reps: "3 × 30 seg", dia: "Lunes", done: true },
          { icon: "🧘", nombre: "Estiramiento isquios", reps: "2 × 45 seg", dia: "Lunes", done: true },
          { icon: "🤸", nombre: "Movilidad cadera con banda", reps: "3 × 12 reps", dia: "Miércoles", done: true },
          { icon: "🦶", nombre: "Equilibrio unipodal", reps: "3 × 30 seg", dia: "Miércoles", done: false },
          { icon: "💪", nombre: "Press hombro con elástico", reps: "3 × 12 reps", dia: "Viernes", done: false },
          { icon: "🩹", nombre: "Liberación con foam roller", reps: "5 min", dia: "Viernes", done: false },
        ].map((ej, i) => (
          <motion.div key={ej.nombre} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32, delay: i * 0.04 }} whileHover={{ x: 2 }} className="bg-white rounded-xl p-3 flex items-center gap-3 cursor-pointer" style={{ border: `1px solid ${BORDER}` }}>
            <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: ej.done ? "#dcfce7" : SURFACE, color: ej.done ? "#166534" : MUTED, border: ej.done ? "1px solid #86efac" : `1px solid ${BORDER}` }}>{ej.done ? "✓" : "○"}</span>
            <span className="text-lg">{ej.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">{ej.nombre}</p>
              <p className="text-xs" style={{ color: MUTED }}>{ej.reps} · {ej.dia}</p>
            </div>
            {ej.done && <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>Hecho</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const TurnosView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>Calendario clínico</p>
          <h2 className="text-2xl font-semibold tracking-tight mt-1">Tus turnos</h2>
        </div>
        <motion.button whileHover={{ y: -1 }} className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: ACCENT }}>+ Pedir turno</motion.button>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: MUTED }}>Próximos</p>
      <div className="space-y-2 mb-6">
        {[
          { fecha: "JUE 15/05", hora: "17:30", prof: "Lic. Romina Vázquez", motivo: "Control mensual", estado: "Confirmado", color: "#10b981", bg: "#dcfce7" },
          { fecha: "MIÉ 28/05", hora: "10:00", prof: "Dr. Mariano Levy", motivo: "Evaluación postural", estado: "Pendiente", color: AMBER, bg: AMBER_SOFT },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.32, delay: i * 0.06 }} className="bg-white rounded-2xl p-4 flex items-center gap-4" style={{ border: `1px solid ${BORDER}` }}>
            <div className="text-center shrink-0 w-20">
              <p className="text-xs font-semibold" style={{ color: ACCENT }}>{t.fecha}</p>
              <p className="text-xl font-semibold tracking-tight mt-0.5">{t.hora}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{t.prof}</p>
              <p className="text-sm" style={{ color: MUTED }}>{t.motivo}</p>
            </div>
            <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: t.bg, color: t.color }}>{t.estado}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: MUTED }}>Anteriores</p>
      <div className="space-y-2">
        {[
          { fecha: "MAR 22/04", hora: "16:00", prof: "Lic. Romina Vázquez", motivo: "Control mensual" },
          { fecha: "VIE 04/04", hora: "11:30", prof: "Dr. Mariano Levy", motivo: "Evaluación inicial" },
          { fecha: "JUE 27/03", hora: "18:15", prof: "Lic. Romina Vázquez", motivo: "Sesión de seguimiento" },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-xl p-3 flex items-center gap-4 opacity-80" style={{ backgroundColor: SURFACE }}>
            <div className="text-center shrink-0 w-20">
              <p className="text-[11px] font-semibold" style={{ color: MUTED }}>{t.fecha}</p>
              <p className="text-base font-semibold mt-0.5">{t.hora}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold">{t.prof}</p>
              <p className="text-xs" style={{ color: MUTED }}>{t.motivo}</p>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full shrink-0" style={{ backgroundColor: BORDER, color: MUTED }}>Realizado</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MensajesView = (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shrink-0" style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}>R</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">Lic. Romina Vázquez</p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: "#10b981" }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#10b981" }} />
            En línea · responde en ~2h
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        {[
          { from: "prof", text: "Hola Lucas! Vi que terminaste todos los ejercicios de la semana pasada. ¿Cómo te sentiste con el de movilidad de cadera?", hora: "Mar 14:22" },
          { from: "yo", text: "Hola! Bien, ya lo hago tranquilo. Después del de equilibrio me molestaba un poco la rodilla.", hora: "Mar 18:45" },
          { from: "prof", text: "Perfecto que avises. Cambio el de equilibrio por uno asistido con apoyo en pared, te lo dejo cargado. Probalo y me contás.", hora: "Mar 19:10" },
          { from: "prof", text: "Si la molestia es <3/10 está bien, si pasa de eso pará y avisame. No queremos forzar.", hora: "Mar 19:11" },
          { from: "yo", text: "Dale, lo pruebo mañana y te aviso cómo voy 💪", hora: "Mar 19:32" },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className={`flex ${m.from === "yo" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl ${m.from === "yo" ? "rounded-br-sm" : "rounded-bl-sm"}`} style={{ backgroundColor: m.from === "yo" ? ACCENT : "#ffffff", color: m.from === "yo" ? "#ffffff" : TEXT, border: m.from === "yo" ? "none" : `1px solid ${BORDER}` }}>
              <p className="text-sm leading-relaxed">{m.text}</p>
              <p className="text-[10px] mt-1 opacity-70">{m.hora}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-2xl p-3 flex items-center gap-2" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}` }}>
        <input className="flex-1 bg-transparent outline-none text-sm px-2" placeholder="Escribí un mensaje a Romina…" readOnly />
        <motion.button whileTap={{ scale: 0.94 }} className="w-9 h-9 rounded-full text-white text-sm flex items-center justify-center" style={{ backgroundColor: ACCENT }}>↑</motion.button>
      </div>
    </div>
  );

  const ProgresoView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
          Tu evolución · últimos 30 días
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-1">Adherencia y progreso</h2>
      </div>

      <div className="bg-white rounded-2xl p-5 mb-6" style={{ border: `1px solid ${BORDER}` }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold">Adherencia diaria</p>
          <span className="text-xs font-semibold" style={{ color: "#10b981" }}>+12% vs mes pasado</span>
        </div>
        <svg viewBox="0 0 400 120" className="w-full">
          <line x1="0" y1="80" x2="400" y2="80" stroke={BORDER} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="40" x2="400" y2="40" stroke={BORDER} strokeWidth="1" strokeDasharray="3 3" />
          <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.2 }} d="M0,90 L40,72 L80,68 L120,55 L160,62 L200,42 L240,35 L280,40 L320,28 L360,22 L400,18" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }} cx="400" cy="18" r="5" fill={ACCENT} />
        </svg>
        <div className="flex justify-between text-[10px] mt-2" style={{ color: MUTED }}>
          <span>S1</span><span>S2</span><span>S3</span><span>S4</span><span>HOY</span>
        </div>
      </div>

      <p className="font-semibold mb-3">Logros alcanzados</p>
      <div className="space-y-2">
        {[
          { icon: "🏆", titulo: "Primera semana completa", desc: "Completaste el 100% de los ejercicios de la semana 1", fecha: "13/4" },
          { icon: "🎯", titulo: "Constancia de 30 días", desc: "Mantuviste tu plan al 90%+ durante 30 días seguidos", fecha: "29/4" },
          { icon: "🚀", titulo: "Avance de fase", desc: "Pasaste de fase introductoria a fase de fortalecimiento", fecha: "5/5" },
        ].map((m, i) => (
          <motion.div key={m.titulo} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.07 }} whileHover={{ y: -2 }} className="bg-white rounded-2xl p-4 flex items-center gap-4" style={{ border: `1px solid ${BORDER}` }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: AMBER_SOFT }}>{m.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold">{m.titulo}</p>
              <p className="text-sm" style={{ color: MUTED }}>{m.desc}</p>
            </div>
            <span className="text-xs font-mono shrink-0" style={{ color: MUTED }}>{m.fecha}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    inicio: InicioView,
    plan: PlanView,
    turnos: TurnosView,
    mensajes: MensajesView,
    progreso: ProgresoView,
  };

  const workspace = (
    <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}`, minHeight: "640px" }}>
      <InternalNav
        variant="soft-sidebar"
        items={[
          { id: "inicio", label: "Inicio", icon: "🏠" },
          { id: "plan", label: "Mi plan", icon: "📋" },
          { id: "turnos", label: "Turnos", icon: "🗓️", badge: 2 },
          { id: "mensajes", label: "Mensajes", icon: "💬", badge: 1 },
          { id: "progreso", label: "Progreso", icon: "📈" },
        ]}
        active={activeView} onChange={setActiveView} accent={ACCENT} bgContainer="#ffffff" bgActive={ACCENT_SOFT} textActive={TEXT} textInactive={MUTED} borderColor={BORDER}
        workspaceLabel="Hola, Lucas"
        workspaceInitial="L"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: SURFACE, color: TEXT, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={BORDER} navColor={MUTED} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs variant="soft-pill" accent={ACCENT} bgContainer="#ffffff" textActive="#ffffff" textInactive={MUTED} borderColor={BORDER} tabsClassName="mb-8" tabs={[{ id: "servicio", label: "Servicio", content: landing }, { id: "cuenta", label: "Mi cuenta", content: workspace }]} />
        <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-10">Salud sin complicaciones</DividerReveal>
        <StyleFooter estilo={e} textColor={MUTED} borderColor={BORDER} />
      </main>
    </div>
  );
}
