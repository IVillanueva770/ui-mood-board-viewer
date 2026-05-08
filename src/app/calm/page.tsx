"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function CalmPage() {
  const e = getEstilo("calm")!;
  const [activeView, setActiveView] = useState("today");

  /* ============== TAB 1 — LIBRARY (catálogo del producto) ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-32 text-center"
    >
      <p className="text-xs uppercase tracking-[0.4em] mb-9" style={{ color: "#7d8471" }}>
        wellness · pacientes · respiración
      </p>
      <h1
        className="font-cormorant text-6xl sm:text-9xl font-light leading-[1.02] mb-9 max-w-4xl mx-auto"
        style={{ letterSpacing: "-0.015em" }}
      >
        Pause. Breathe. <em className="italic" style={{ color: "#7d8471" }}>Begin.</em>
      </h1>
      <p
        className="font-cormorant italic text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto mb-14"
        style={{ color: "#5f5b54" }}
      >
        Una pausa diaria, sostenida. Sin gritos motivacionales, sin culpa los días que no.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-20">
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 14px 28px -8px rgba(44,41,37,0.35)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="px-9 py-4 text-sm tracking-wide"
          style={{ backgroundColor: "#2c2925", color: "#fff9f0", borderRadius: 9999 }}
        >
          Comenzar — 7 días gratis
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#2c2925", color: "#fff9f0" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="px-9 py-4 text-sm tracking-wide"
          style={{ color: "#2c2925", borderRadius: 9999, border: "1px solid #2c2925" }}
        >
          Cómo funciona →
        </motion.button>
      </div>

      <p className="text-[11px] uppercase tracking-[0.35em] mb-8" style={{ color: "#7d8471" }}>
        Programas
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        {[
          {
            tit: "Sleep stories",
            desc: "Voces lentas que te llevan al sueño, sin promesas mágicas.",
            color: "#7d8471",
            n: "01",
          },
          {
            tit: "Meditation",
            desc: "Sesiones cortas que se acomodan al día que tenés.",
            color: "#c97c5d",
            n: "02",
          },
          {
            tit: "Daily calm",
            desc: "Diez minutos por la mañana. Acumular sin presión.",
            color: "#a89776",
            n: "03",
          },
        ].map((p, i) => (
          <motion.div
            key={p.tit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="p-8"
            style={{ backgroundColor: "#fff9f0", borderRadius: 22, border: "1px solid #ece4d6" }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] mb-5 font-mono" style={{ color: "#7d8471" }}>
              · {p.n}
            </p>
            <div className="w-10 h-10 rounded-full mb-6" style={{ backgroundColor: p.color, opacity: 0.85 }} />
            <h3 className="font-cormorant text-3xl mb-3" style={{ color: "#2c2925" }}>
              {p.tit}
            </h3>
            <p className="font-cormorant italic text-lg leading-relaxed" style={{ color: "#5f5b54" }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS DEL TODAY (workspace personal) ============== */

  const TodayView = (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#7d8471" }}>
        miércoles, 8 de mayo
      </p>
      <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-3" style={{ color: "#2c2925" }}>
        Buenos días, <em className="italic" style={{ color: "#7d8471" }}>Sofía.</em>
      </h2>
      <p className="font-cormorant italic text-xl mb-12" style={{ color: "#5f5b54" }}>
        Algo breve, antes de empezar.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        className="p-10 mb-10"
        style={{ backgroundColor: "#fff9f0", borderRadius: 24, border: "1px solid #ece4d6" }}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] mb-5" style={{ color: "#c97c5d" }}>
          Programa de hoy
        </p>
        <h3 className="font-cormorant text-4xl sm:text-5xl mb-4 leading-[1.05]" style={{ color: "#2c2925" }}>
          Respiración del <em className="italic">amanecer</em>
        </h3>
        <p className="font-cormorant italic text-lg mb-8" style={{ color: "#5f5b54" }}>
          Diez minutos lentos, con la voz de Marta. Día 12 de tu programa Daily calm.
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 12px 22px -6px rgba(44,41,37,0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="px-8 py-3.5 text-sm tracking-wide"
            style={{ backgroundColor: "#2c2925", color: "#fff9f0", borderRadius: 9999 }}
          >
            Continuar
          </motion.button>
          <p className="text-sm" style={{ color: "#7d8471" }}>10 min · sage voice</p>
        </div>
      </motion.div>

      <p className="text-[11px] uppercase tracking-[0.35em] mb-5" style={{ color: "#7d8471" }}>
        esta semana
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="p-8"
        style={{ backgroundColor: "#fff9f0", borderRadius: 24, border: "1px solid #ece4d6" }}
      >
        <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
          <div>
            <p className="font-cormorant text-3xl" style={{ color: "#2c2925" }}>
              48 minutos meditados
            </p>
            <p className="font-cormorant italic text-base mt-1" style={{ color: "#5f5b54" }}>
              4 de 7 días, ritmo propio.
            </p>
          </div>
          <p className="text-sm" style={{ color: "#7d8471" }}>+ 14 vs semana pasada</p>
        </div>
        <svg viewBox="0 0 400 80" className="w-full">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            d="M0,55 C60,50 90,38 140,42 C200,46 230,30 280,28 C320,27 360,18 400,20"
            fill="none"
            stroke="#7d8471"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-between text-[10px] mt-3" style={{ color: "#7d8471" }}>
          <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
        </div>
      </motion.div>
    </div>
  );

  const SleepView = (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#7d8471" }}>
        sleep stories
      </p>
      <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-3" style={{ color: "#2c2925" }}>
        Para cuando <em className="italic">no llega</em> el sueño.
      </h2>
      <p className="font-cormorant italic text-lg mb-12" style={{ color: "#5f5b54" }}>
        Voces lentas, narradas para que te dejes llevar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { tit: "El bosque dormido", narrador: "Marta R.", min: "32 min", color: "#7d8471" },
          { tit: "Lluvia en Pampa", narrador: "Joaquín G.", min: "45 min", color: "#a89776" },
          { tit: "El faro de la costa", narrador: "Cecilia O.", min: "28 min", color: "#c97c5d" },
          { tit: "Habitación de la abuela", narrador: "Tomás M.", min: "38 min", color: "#7d8471" },
          { tit: "El río que no apura", narrador: "Marta R.", min: "52 min", color: "#a89776" },
          { tit: "Madrugadas largas", narrador: "Cecilia O.", min: "26 min", color: "#c97c5d" },
        ].map((s, i) => (
          <motion.div
            key={s.tit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="p-7 cursor-pointer"
            style={{ backgroundColor: "#fff9f0", borderRadius: 22, border: "1px solid #ece4d6" }}
          >
            <div className="w-12 h-12 rounded-full mb-7" style={{ backgroundColor: s.color, opacity: 0.7 }} />
            <h3 className="font-cormorant italic text-2xl mb-2 leading-tight" style={{ color: "#2c2925" }}>
              {s.tit}
            </h3>
            <p className="text-sm mb-4" style={{ color: "#5f5b54" }}>
              {s.narrador}
            </p>
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "#7d8471" }}>
              {s.min}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MeditationView = (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#7d8471" }}>
        meditations
      </p>
      <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-12" style={{ color: "#2c2925" }}>
        Un ejercicio para <em className="italic">cada estado.</em>
      </h2>

      {[
        {
          cat: "Stress",
          color: "#c97c5d",
          items: [
            { t: "Respiración 4-7-8", min: "6 min" },
            { t: "Body scan corto", min: "12 min" },
            { t: "Salir del bucle mental", min: "8 min" },
          ],
        },
        {
          cat: "Focus",
          color: "#7d8471",
          items: [
            { t: "Foco para empezar", min: "5 min" },
            { t: "Volver al cuerpo", min: "10 min" },
            { t: "Antes de algo difícil", min: "7 min" },
          ],
        },
        {
          cat: "Anxiety",
          color: "#a89776",
          items: [
            { t: "Bajar el pulso", min: "9 min" },
            { t: "Aceptar la ansiedad", min: "14 min" },
          ],
        },
        {
          cat: "Beginner",
          color: "#7d8471",
          items: [
            { t: "Tu primera sesión", min: "5 min" },
            { t: "Qué es meditar", min: "11 min" },
            { t: "Postura sin culpa", min: "6 min" },
          ],
        },
      ].map((g, gi) => (
        <motion.div
          key={g.cat}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: gi * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-baseline gap-4 mb-5 pb-3" style={{ borderBottom: "1px solid #ece4d6" }}>
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: g.color }}
            />
            <p className="font-cormorant italic text-2xl" style={{ color: "#2c2925" }}>
              {g.cat}
            </p>
            <span className="text-xs ml-auto" style={{ color: "#7d8471" }}>
              {g.items.length} sesiones
            </span>
          </div>
          <div className="space-y-1">
            {g.items.map((it) => (
              <motion.div
                key={it.t}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex items-center justify-between py-3 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: g.color }} />
                  <p className="font-cormorant text-xl" style={{ color: "#2c2925" }}>
                    {it.t}
                  </p>
                </div>
                <p className="text-sm" style={{ color: "#5f5b54" }}>
                  {it.min}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const MoodView = (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#7d8471" }}>
        mood checkins
      </p>
      <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-3" style={{ color: "#2c2925" }}>
        Tu semana, <em className="italic">vista desde adentro.</em>
      </h2>
      <p className="font-cormorant italic text-lg mb-12" style={{ color: "#5f5b54" }}>
        Sin juzgar, sin métricas. Solo observar.
      </p>

      <div className="space-y-6">
        {[
          { dia: "Hoy · 8 may", emoji: "🌿", label: "Tranquila", nota: "Empecé el día sin redes. Salió bien.", barra: 75, hora: "Mañana" },
          { dia: "Mar · 7 may", emoji: "🌸", label: "Suave", nota: "Almuerzo solo. Caminata de 20 min.", barra: 65, hora: "Tarde" },
          { dia: "Lun · 6 may", emoji: "🌧", label: "Espesa", nota: "Día denso. La sesión de noche ayudó.", barra: 35, hora: "Noche" },
          { dia: "Dom · 5 may", emoji: "☀️", label: "Liviana", nota: "Domingo familiar. Nada urgente.", barra: 88, hora: "Tarde" },
          { dia: "Sáb · 4 may", emoji: "🌫", label: "Confusa", nota: "Difícil dormirme. Probé sleep story.", barra: 42, hora: "Noche" },
          { dia: "Vie · 3 may", emoji: "🌾", label: "Cansada", nota: "Semana larga. Cierre con respiración.", barra: 50, hora: "Noche" },
          { dia: "Jue · 2 may", emoji: "🌼", label: "Atenta", nota: "Buena reunión. Pude mantenerme.", barra: 70, hora: "Mañana" },
        ].map((m, i) => (
          <motion.div
            key={m.dia}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-12 gap-4 items-center pb-6"
            style={{ borderBottom: "1px solid #ece4d6" }}
          >
            <div className="col-span-3 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "#7d8471" }}>
                {m.dia}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-2xl">{m.emoji}</div>
            <div className="col-span-7 sm:col-span-6">
              <p className="font-cormorant italic text-2xl mb-1" style={{ color: "#2c2925" }}>
                {m.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#5f5b54" }}>
                {m.nota}
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3">
              <div className="h-1 rounded-full overflow-hidden mb-1" style={{ backgroundColor: "#ece4d6" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.barra}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
                  className="h-full"
                  style={{ backgroundColor: "#7d8471" }}
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#7d8471" }}>
                {m.hora}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const SettingsView = (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] mb-3" style={{ color: "#7d8471" }}>
        ajustes
      </p>
      <h2 className="font-cormorant text-5xl sm:text-6xl font-light leading-[1.05] mb-12" style={{ color: "#2c2925" }}>
        El detrás <em className="italic">de la app.</em>
      </h2>

      {[
        {
          titulo: "Cuenta",
          items: [
            { k: "Nombre", v: "Sofía Domínguez" },
            { k: "Email", v: "sofi@example.com" },
            { k: "Idioma", v: "Español" },
          ],
        },
        {
          titulo: "Notificaciones",
          items: [
            { k: "Recordatorio diario", v: "08:00" },
            { k: "Sleep story", v: "23:00" },
            { k: "Resumen semanal", v: "Domingos" },
          ],
        },
        {
          titulo: "Suscripción",
          items: [
            { k: "Plan", v: "Calm Premium" },
            { k: "Renueva", v: "12 jun 2026" },
            { k: "Pago", v: "···· 4421" },
          ],
        },
        {
          titulo: "Sobre Calm",
          items: [
            { k: "Versión", v: "v3.4.1" },
            { k: "Privacidad", v: "→" },
            { k: "Soporte", v: "→" },
          ],
        },
      ].map((g, gi) => (
        <motion.div
          key={g.titulo}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: gi * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-cormorant italic text-2xl mb-4 pb-2" style={{ color: "#2c2925", borderBottom: "1px solid #ece4d6" }}>
            {g.titulo}
          </p>
          <div className="space-y-3">
            {g.items.map((it) => (
              <div key={it.k} className="flex items-center justify-between py-2">
                <p className="font-cormorant text-lg" style={{ color: "#5f5b54" }}>
                  {it.k}
                </p>
                <p className="text-sm" style={{ color: "#2c2925" }}>
                  {it.v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    today: TodayView,
    sleep: SleepView,
    meditation: MeditationView,
    mood: MoodView,
    settings: SettingsView,
  };

  /* ============== TAB 2 — TODAY (workspace personal de Sofía) ============== */
  const workspace = (
    <div style={{ border: "1px solid #ece4d6", borderRadius: 24, minHeight: "720px", backgroundColor: "#fff9f0", overflow: "hidden" }}>
      <InternalNav
        variant="editorial-sidebar"
        items={[
          { id: "today", label: "Today" },
          { id: "sleep", label: "Sleep" },
          { id: "meditation", label: "Meditation" },
          { id: "mood", label: "Mood" },
          { id: "settings", label: "Settings" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#7d8471"
        bgContainer="#fff9f0"
        textActive="#2c2925"
        textInactive="#5f5b54"
        borderColor="#ece4d6"
        workspaceLabel="Hola, Sofía"
        workspaceInitial="S"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f7f3ee", color: "#2c2925", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#ece4d6" navColor="#5f5b54" />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <StyleTabs
          variant="editorial-underline"
          accent="#7d8471"
          textActive="#2c2925"
          textInactive="#5f5b54"
          tabsClassName="mb-12 sm:mb-16"
          textClassName="font-cormorant text-lg"
          tabs={[
            { id: "library", label: "Library", content: landing },
            { id: "today", label: "Today", content: workspace },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor="#ece4d6"
          textColor="#7d8471"
          accentColor="#c97c5d"
          className="mt-20 mb-14"
          textClassName="font-cormorant italic text-lg"
        >
          —
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor="#5f5b54"
          borderColor="#ece4d6"
          headingClass="font-cormorant italic text-base"
        />
      </main>
    </div>
  );
}
