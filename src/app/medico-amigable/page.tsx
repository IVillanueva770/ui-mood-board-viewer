"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";

export default function MedicoAmigablePage() {
  const e = getEstilo("medico-amigable")!;

  return (
    <div style={{ backgroundColor: "#f8fafc", color: "#0f172a", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e2e8f0" navColor="#64748b" />

      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* ====== HERO COMERCIAL — landing app de salud ====== */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 text-center py-8 sm:py-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: "#dbeafe", color: "#1e40af" }}>
            <span>✦</span>
            <span className="text-xs font-semibold tracking-wide">Salud · Pacientes · Profesionales</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
            Tu recuperación,<br />
            <span style={{ color: "#3b82f6" }}>siempre con vos.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#475569" }}>
            Vital es la app que tu médico, kinesiólogo o terapeuta te asigna. Tu plan, tu progreso, mensajes con tu profesional. Sin papeles, sin grupos de WhatsApp.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
            >
              Buscar mi profesional
            </button>
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ border: "1px solid #e2e8f0", color: "#0f172a" }}
            >
              Soy profesional →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            {[
              { icon: "🩺", tit: "Tu plan, claro", desc: "Sabés qué hacer hoy. Y cuánto te falta para volver a estar bien." },
              { icon: "💬", tit: "Mensaje directo", desc: "Si algo te duele, le escribís. Te responde el profesional, no un bot." },
              { icon: "📊", tit: "Tu progreso a la vista", desc: "Ves cómo avanzás semana a semana. Tu kine también lo ve." },
            ].map((p) => (
              <motion.div
                key={p.tit}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="font-semibold mb-1.5">{p.tit}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex-1 h-px" style={{ backgroundColor: "#e2e8f0" }} />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: "#64748b" }}>
            Así se ve siendo paciente
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e2e8f0" }} />
        </div>

        {/* ====== VISTA OPERATIVA ====== */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "#3b82f6" }}>
            ✦ Tu programa de recuperación
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-3 max-w-2xl">
            Estás a <span style={{ color: "#3b82f6" }}>4 semanas</span> de volver a tu rutina, Nacho.
          </h1>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: "#475569" }}>
            Hicimos un plan progresivo con tu kine. Acá vas a ver lo que tenés que hacer hoy y cómo viene tu progreso semanal.
          </p>
        </motion.section>

        {/* Progress hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-7 mb-6"
          style={{ border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}
        >
          <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
            <div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#64748b" }}>Semana 4 de 8</p>
              <p className="text-3xl font-semibold tracking-tight">Recuperación lumbar</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-semibold tracking-tight" style={{ color: "#3b82f6" }}>52%</p>
              <p className="text-xs" style={{ color: "#64748b" }}>Completado</p>
            </div>
          </div>

          <div className="h-2.5 rounded-full overflow-hidden mb-2" style={{ backgroundColor: "#e2e8f0" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "52%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}
            />
          </div>
          <div className="flex items-center justify-between text-xs" style={{ color: "#64748b" }}>
            <span>Inicio: 8 abr</span>
            <span>Próximo control: 14 may</span>
            <span>Alta estimada: 3 jun</span>
          </div>
        </motion.section>

        {/* Today plan */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 mb-6"
          style={{ border: "1px solid #e2e8f0" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#64748b" }}>Hoy · Lunes 6 de mayo</p>
              <h2 className="text-xl font-semibold">Tu plan de hoy</h2>
            </div>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: "#dbeafe", color: "#1e40af" }}
            >
              25 min total
            </span>
          </div>

          <div className="space-y-3">
            {[
              { icono: "🧘", titulo: "Movilidad lumbar", duracion: "8 min", reps: "3 series", done: true },
              { icono: "💪", titulo: "Core estabilidad", duracion: "10 min", reps: "4 series", done: true },
              { icono: "🤸", titulo: "Estiramiento isquios", duracion: "7 min", reps: "2 series", done: false },
            ].map((t, i) => (
              <motion.div
                key={t.titulo}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-slate-50"
                style={{ backgroundColor: t.done ? "#f1f5f9" : "#ffffff", border: "1px solid #e2e8f0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ backgroundColor: t.done ? "#dcfce7" : "#dbeafe" }}
                >
                  {t.done ? "✓" : t.icono}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm" style={{ textDecoration: t.done ? "line-through" : "none", color: t.done ? "#64748b" : "#0f172a" }}>
                    {t.titulo}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>{t.duracion} · {t.reps}</p>
                </div>
                {!t.done && (
                  <button
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    Empezar
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Two-up: doctor + next appointment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6"
            style={{ border: "1px solid #e2e8f0" }}
          >
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>Tu kinesiólogo</p>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white text-lg"
                style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}
              >
                NG
              </div>
              <div>
                <p className="font-semibold">Nacho Galland</p>
                <p className="text-xs" style={{ color: "#64748b" }}>Kinesiología deportiva · Mat. 2418</p>
              </div>
            </div>
            <button
              className="w-full py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100"
              style={{ border: "1px solid #e2e8f0", color: "#0f172a" }}
            >
              💬 Enviar mensaje
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl p-6 text-white"
            style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
          >
            <p className="text-xs uppercase tracking-wider mb-3 opacity-90">Próxima cita</p>
            <p className="text-2xl font-semibold mb-1">Jueves 9 · 16:30</p>
            <p className="text-sm opacity-90 mb-4">Control de mitad de programa · 45 min · Online</p>
            <div className="flex gap-2">
              <button
                className="flex-1 py-2 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#1e40af" }}
              >
                Ver detalles
              </button>
              <button
                className="flex-1 py-2 rounded-lg text-xs font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Reagendar
              </button>
            </div>
          </motion.div>
        </div>

        {/* Reassurance footer */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-5 mb-10 flex items-start gap-3"
          style={{ backgroundColor: "#fef3c7", border: "1px solid #fde68a" }}
        >
          <span className="text-xl shrink-0">⚠️</span>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#78350f" }}>Sentís dolor mientras hacés un ejercicio?</p>
            <p className="text-xs leading-relaxed" style={{ color: "#92400e" }}>
              Pará. No es debilidad: es información. Mandale un mensaje a Nacho con qué movimiento te molestó y dónde lo sentiste. Va a ajustar el plan.
            </p>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#64748b" borderColor="#e2e8f0" />
      </main>
    </div>
  );
}
