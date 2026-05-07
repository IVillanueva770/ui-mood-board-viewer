"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { StyleTabs } from "@/components/style-tabs";

const HABITS_INITIAL = [
  { id: "h1", titulo: "Movilidad lumbar", duracion: "8 min", done: true, emoji: "🧘" },
  { id: "h2", titulo: "Caminata", duracion: "20 min", done: true, emoji: "🚶" },
  { id: "h3", titulo: "Tomar agua", duracion: "2 vasos", done: false, emoji: "💧" },
  { id: "h4", titulo: "Estiramientos", duracion: "5 min", done: false, emoji: "🤸" },
];

const NAV_TABS = [
  { id: "hoy", icon: "🏠", label: "Hoy" },
  { id: "stats", icon: "📊", label: "Stats" },
  { id: "team", icon: "👥", label: "Equipo" },
  { id: "settings", icon: "⚙️", label: "Ajustes" },
];

export default function IOSPage() {
  const e = getEstilo("ios-native")!;
  const [habits, setHabits] = useState(HABITS_INITIAL);
  const [activeView, setActiveView] = useState("hoy");

  const toggle = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, done: !h.done } : h))
    );
  };

  const heroComercial = (
    <div className="text-center pt-8 pb-12">
      <p className="text-xs uppercase tracking-[0.18em] mb-5 font-semibold" style={{ color: "#007aff" }}>
        disponible en App Store · gratis
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.03em] leading-[0.95] mb-6" style={{ color: "#000" }}>
        Hábitos buenos,<br />
        <span style={{ color: "#007aff" }}>sin culpa.</span>
      </h1>
      <p className="text-base sm:text-xl leading-snug max-w-xl mx-auto mb-9" style={{ color: "#3a3a3c" }}>
        La app que tu kine/médico recomienda para construir rutinas que duren. Diseñada con la fluidez nativa de iOS.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="px-6 py-3 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
          style={{ backgroundColor: "#000" }}
        >
          <span className="text-xl"></span>
          <div className="text-left leading-none">
            <div className="text-[10px] opacity-80">Descargar en</div>
            <div className="font-bold">App Store</div>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="px-6 py-3 rounded-full text-sm font-semibold"
          style={{ backgroundColor: "#fff", color: "#007aff", border: "1.5px solid #007aff" }}
        >
          Cómo funciona →
        </motion.button>
      </div>

      <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-500">★★★★★</span>
          <span className="font-semibold">4.9</span>
          <span style={{ color: "#8e8e93" }}>· 12.4k reseñas</span>
        </div>
        <div className="font-semibold">
          420k <span className="font-normal" style={{ color: "#8e8e93" }}>descargas</span>
        </div>
        <div className="font-semibold">
          #2 <span className="font-normal" style={{ color: "#8e8e93" }}>en Salud y Forma física</span>
        </div>
      </div>

      {/* Carousel de capturas — preview de las 4 sub-vistas */}
      <div className="mt-16 flex items-center justify-center gap-4 overflow-x-auto pb-4">
        {NAV_TABS.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ y: -6, rotateZ: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="rounded-2xl flex-shrink-0 px-6 py-8 flex flex-col items-center gap-2 cursor-pointer"
            style={{
              width: "140px",
              backgroundColor: "#fff",
              border: "1px solid #d1d1d6",
              boxShadow: "0 8px 24px -6px rgba(0,0,0,0.1)",
            }}
            onClick={() => setActiveView(t.id)}
          >
            <span className="text-3xl">{t.icon}</span>
            <span className="text-xs font-semibold" style={{ color: "#3a3a3c" }}>{t.label}</span>
            <span className="text-[10px] uppercase tracking-wider" style={{ color: "#8e8e93" }}>Vista</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  /* ====== SUB-VISTAS DEL PHONE ====== */

  const HoyView = (
    <div className="p-5">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Hola, Nacho</h1>
      <p className="text-sm mb-7" style={{ color: "#8e8e93" }}>Hoy tenés 3 hábitos pendientes</p>

      {/* Stats card */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        className="rounded-2xl p-5 mb-5 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #007aff, #5856d6)", color: "#fff" }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Racha actual</p>
        <p className="text-4xl font-bold tracking-tight mb-1">12 días</p>
        <p className="text-xs opacity-80">Tu mejor racha: 28 días</p>
      </motion.div>

      <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Hoy</p>
      <div className="space-y-3">
        {habits.map((h, i) => (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => toggle(h.id)}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer"
            style={{ backgroundColor: "#f2f2f7" }}
          >
            <motion.div
              animate={{
                backgroundColor: h.done ? "#34c759" : "#ffffff",
                scale: h.done ? [1, 1.18, 1] : 1,
              }}
              transition={{
                backgroundColor: { duration: 0.18 },
                scale: { type: "spring", stiffness: 500, damping: 14 },
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
              style={{
                color: h.done ? "#fff" : "inherit",
                border: h.done ? "none" : "1px solid #d1d1d6",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={h.done ? "check" : "emoji"}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 600, damping: 20 }}
                >
                  {h.done ? "✓" : h.emoji}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <div className="flex-1">
              <motion.div
                animate={{
                  textDecorationLine: h.done ? "line-through" : "none",
                  color: h.done ? "#8e8e93" : "#000",
                }}
                transition={{ duration: 0.2 }}
                className="font-medium text-sm"
              >
                {h.titulo}
              </motion.div>
              <div className="text-xs" style={{ color: "#8e8e93" }}>{h.duracion}</div>
            </div>
            {!h.done && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(ev) => {
                  ev.stopPropagation();
                  toggle(h.id);
                }}
                className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "#007aff" }}
              >
                Marcar
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const StatsView = (
    <div className="p-5">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Tu progreso</h1>
      <p className="text-sm mb-7" style={{ color: "#8e8e93" }}>Mes de mayo · 18 días</p>

      {/* Big number */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg, #34c759, #30b556)", color: "#fff" }}
      >
        <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Asistencia</p>
        <p className="text-5xl font-bold tracking-tight mb-1">87%</p>
        <p className="text-xs opacity-80">Mejor mes desde febrero</p>
      </motion.div>

      {/* Weekly bars */}
      <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Esta semana</p>
      <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: "#f2f2f7" }}>
        <div className="flex items-end justify-between gap-2 h-32 mb-2">
          {[
            { d: "L", v: 100, done: true },
            { d: "M", v: 75, done: true },
            { d: "Mi", v: 100, done: true },
            { d: "J", v: 50, done: true },
            { d: "V", v: 100, done: true },
            { d: "S", v: 25, done: true },
            { d: "D", v: 60, done: false },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${b.v}%` }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="flex-1 rounded-md"
              style={{ backgroundColor: b.done ? "#007aff" : "#d1d1d6", minHeight: "8px" }}
            />
          ))}
        </div>
        <div className="flex items-end justify-between gap-2">
          {["L", "M", "Mi", "J", "V", "S", "D"].map((d) => (
            <div key={d} className="flex-1 text-center text-[10px] font-medium" style={{ color: "#8e8e93" }}>{d}</div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Datos</p>
      <div className="space-y-3">
        {[
          { icon: "🔥", label: "Racha más larga", val: "28 días", date: "feb '26" },
          { icon: "🧘", label: "Hábito favorito", val: "Movilidad lumbar", date: "47 sesiones" },
          { icon: "⏱", label: "Tiempo total", val: "8h 24m", date: "este mes" },
          { icon: "📈", label: "Promedio diario", val: "3.2 hábitos", date: "+0.4 vs abril" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.04 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer"
            style={{ backgroundColor: "#f2f2f7" }}
          >
            <span className="text-xl flex-shrink-0">{s.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-tight">{s.label}</p>
              <p className="text-xs mt-0.5" style={{ color: "#8e8e93" }}>{s.date}</p>
            </div>
            <p className="text-sm font-semibold tabular-nums">{s.val}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const TeamView = (
    <div className="p-5">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Tu equipo</h1>
      <p className="text-sm mb-7" style={{ color: "#8e8e93" }}>3 personas haciendo lo mismo que vos</p>

      {/* Featured friend */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="rounded-2xl p-5 mb-5"
        style={{ background: "linear-gradient(135deg, #ff9500, #ff5e3a)", color: "#fff" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
            style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          >
            JG
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider opacity-80 mb-0.5">En vivo</p>
            <p className="font-bold text-base">Joaquín está corriendo</p>
          </div>
        </div>
        <p className="text-xs opacity-90">Caminata 25 min · empezó hace 6 min · alentalo cuando termine</p>
      </motion.div>

      {/* Team list */}
      <p className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: "#8e8e93" }}>Equipo</p>
      <div className="space-y-3">
        {[
          { ini: "JG", nombre: "Joaquín G.", racha: 18, hoy: "3/4", color: "#ff9500", status: "Corriendo · ahora" },
          { ini: "MR", nombre: "Macarena R.", racha: 32, hoy: "4/4", color: "#34c759", status: "Día completo ✓" },
          { ini: "TM", nombre: "Tomás M.", racha: 7, hoy: "1/4", color: "#5ac8fa", status: "Empezando" },
        ].map((m, i) => (
          <motion.div
            key={m.ini}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer"
            style={{ backgroundColor: "#f2f2f7" }}
          >
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
              style={{ backgroundColor: m.color }}
            >
              {m.ini}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <p className="text-sm font-semibold">{m.nombre}</p>
                <span className="text-xs font-bold tabular-nums" style={{ color: "#8e8e93" }}>{m.hoy}</span>
              </div>
              <p className="text-xs" style={{ color: "#8e8e93" }}>{m.status}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Invitar */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        className="w-full mt-5 py-3 rounded-xl text-sm font-semibold text-white"
        style={{ backgroundColor: "#007aff" }}
      >
        + Invitar a alguien
      </motion.button>
    </div>
  );

  const SettingsView = (
    <div className="p-5">
      <h1 className="text-3xl font-bold tracking-tight mb-7">Ajustes</h1>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 p-4 rounded-2xl mb-5 cursor-pointer"
        style={{ backgroundColor: "#f2f2f7" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg text-white"
          style={{ background: "linear-gradient(135deg, #007aff, #5856d6)" }}
        >
          NV
        </div>
        <div className="flex-1">
          <p className="font-semibold">Nacho Villanueva</p>
          <p className="text-xs" style={{ color: "#8e8e93" }}>nacho@example.com · iCloud sincronizado</p>
        </div>
        <span style={{ color: "#8e8e93" }}>›</span>
      </motion.div>

      {/* Settings groups */}
      {[
        {
          title: "App",
          items: [
            { icon: "🔔", label: "Notificaciones", val: "Activadas" },
            { icon: "🌙", label: "Apariencia", val: "Sistema" },
            { icon: "🔊", label: "Sonidos", val: "Subtle" },
          ],
        },
        {
          title: "Datos",
          items: [
            { icon: "💚", label: "Apple Health", val: "Conectado" },
            { icon: "📤", label: "Exportar datos", val: "→" },
            { icon: "🔒", label: "Privacidad", val: "→" },
          ],
        },
        {
          title: "Soporte",
          items: [
            { icon: "❓", label: "Ayuda", val: "→" },
            { icon: "✉️", label: "Contactar", val: "→" },
            { icon: "ℹ️", label: "Acerca de", val: "v2.4.1" },
          ],
        },
      ].map((group, gi) => (
        <div key={group.title} className="mb-5">
          <p className="text-[11px] uppercase tracking-wider font-semibold mb-2 px-3" style={{ color: "#8e8e93" }}>{group.title}</p>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#f2f2f7" }}>
            {group.items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + gi * 0.05 + i * 0.03 }}
                whileTap={{ backgroundColor: "#e5e5ea" }}
                className="flex items-center gap-3 p-3 cursor-pointer"
                style={{ borderBottom: i < group.items.length - 1 ? "0.5px solid #d1d1d6" : "none" }}
              >
                <span className="text-lg flex-shrink-0">{it.icon}</span>
                <span className="flex-1 text-sm font-medium">{it.label}</span>
                <span className="text-sm" style={{ color: "#8e8e93" }}>{it.val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <motion.button
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-2xl text-sm font-semibold"
        style={{ backgroundColor: "#f2f2f7", color: "#ff3b30" }}
      >
        Cerrar sesión
      </motion.button>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    hoy: HoyView,
    stats: StatsView,
    team: TeamView,
    settings: SettingsView,
  };

  const phoneApp = (
    <div className="max-w-md mx-auto py-8">
      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[2rem] overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#ffffff", border: "1px solid #d1d1d6" }}
      >
        {/* Status bar */}
        <div className="px-6 py-3 flex items-center justify-between text-xs font-semibold" style={{ backgroundColor: "#f2f2f7" }}>
          <span>9:41</span>
          <span>📶 📡 🔋</span>
        </div>

        {/* App content scrollable */}
        <div className="pb-24 max-h-[640px] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            >
              {subViews[activeView]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab bar bottom — iOS native */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 py-3 flex items-center justify-around"
          style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderTop: "1px solid #d1d1d6" }}
        >
          {NAV_TABS.map((t) => {
            const a = activeView === t.id;
            return (
              <motion.button
                key={t.id}
                onClick={() => setActiveView(t.id)}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 600, damping: 18 }}
                className="flex flex-col items-center gap-0.5 relative px-3"
              >
                <motion.span
                  animate={{ scale: a ? 1.15 : 1, y: a ? -1 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="text-xl"
                >
                  {t.icon}
                </motion.span>
                <motion.span
                  animate={{ color: a ? "#007aff" : "#8e8e93" }}
                  className="text-[10px] font-medium"
                >
                  {t.label}
                </motion.span>
                {a && (
                  <motion.span
                    layoutId="ios-tab-dot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute -bottom-1 w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#007aff" }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f2f2f7", color: "#000000", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#d1d1d6" navColor="#8e8e93" />

      <main className="max-w-4xl mx-auto px-5 py-12">
        <StyleTabs
          variant="soft-pill"
          accent="#007aff"
          textActive="#ffffff"
          textInactive="#3a3a3c"
          bgContainer="rgba(255,255,255,0.6)"
          borderColor="#d1d1d6"
          tabsClassName="mb-8 flex justify-center"
          tabs={[
            { id: "appstore", label: "App Store", content: heroComercial },
            { id: "app", label: "Adentro", content: phoneApp },
          ]}
        />

        <div className="mt-12">
          <StyleFooter estilo={e} textColor="#3a3a3c" borderColor="#d1d1d6" />
        </div>
      </main>
    </div>
  );
}
