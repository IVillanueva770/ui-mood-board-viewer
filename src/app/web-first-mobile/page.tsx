"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function WebFirstMobilePage() {
  const e = getEstilo("web-first-mobile")!;
  const [activeView, setActiveView] = useState("home");

  /* ============== TAB 1 — WEB (landing responsive) ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="max-w-4xl mx-auto px-5 pt-12 pb-16 sm:pt-20 sm:pb-24 text-center"
    >
      <div className="inline-flex items-center gap-2 mb-7">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-base text-white"
          style={{ background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)" }}
        >
          N
        </div>
        <span className="font-bold text-xl">Nube</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5 max-w-3xl mx-auto">
        El feed que <span style={{ color: "#1d9bf0" }}>controlás vos.</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: "#536471" }}>
        Sin algoritmo predatorio, sin sugerencias forzadas, sin anuncios disfrazados de posts. Cronológico de verdad.
      </p>

      <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 10px 24px -8px rgba(29,155,240,0.5)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          className="px-6 py-3 rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: "#1d9bf0" }}
        >
          Crear cuenta
        </motion.button>
        <motion.button
          whileHover={{ borderColor: "#1d9bf0", color: "#1d9bf0" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          className="px-6 py-3 rounded-full text-sm font-bold"
          style={{ border: "1px solid #cfd9de", color: "#0f1419" }}
        >
          Ya tengo cuenta
        </motion.button>
      </div>

      {/* Logo strip / trust */}
      <div
        className="flex items-center justify-center gap-6 flex-wrap pt-6 mb-14"
        style={{ borderTop: "1px solid #eff3f4" }}
      >
        {["Wired", "TechCrunch", "La Nación", "Página/12", "BAE"].map((l) => (
          <span key={l} className="text-xs uppercase tracking-[0.2em]" style={{ color: "#536471" }}>
            {l}
          </span>
        ))}
      </div>

      {/* 3 features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
        {[
          {
            tit: "Cronológico siempre",
            desc: "Ves lo que escribieron quienes seguís, en el orden en el que lo escribieron. Sin reranking.",
            color: "#1d9bf0",
          },
          {
            tit: "Sin anuncios en el feed",
            desc: "El feed es de la gente, no del marketing. Si hay sponsors, viven en sección aparte.",
            color: "#00ba7c",
          },
          {
            tit: "Tu data, tu decisión",
            desc: "Exportás todo cuando quieras. Borrás todo cuando quieras. Sin fricción artificial.",
            color: "#f91880",
          },
        ].map((f, i) => (
          <motion.div
            key={f.tit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, delay: 0.15 + i * 0.06 }}
            className="p-6"
            style={{ backgroundColor: "#f7f9fa", borderRadius: 16, border: "1px solid #eff3f4" }}
          >
            <div className="w-9 h-9 rounded-full mb-4" style={{ backgroundColor: f.color, opacity: 0.85 }} />
            <h3 className="font-bold text-lg mb-2" style={{ color: "#0f1419" }}>
              {f.tit}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#536471" }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS DEL APP MOBILE ============== */

  const HomeView = (
    <div className="px-4 pt-4">
      <div
        className="sticky top-0 z-10 -mx-4 px-4 py-3 backdrop-blur-md mb-3"
        style={{ backgroundColor: "rgba(255,255,255,0.85)", borderBottom: "1px solid #eff3f4" }}
      >
        <h2 className="font-bold text-lg">Para vos</h2>
      </div>

      <div>
        {[
          {
            autor: "Guadalupe Alanís",
            user: "@guada_inmob",
            time: "2h",
            texto: "Lanzamos sitio nuevo con catálogo en vivo y blog de barrio. Idea: que cada propiedad cuente algo del lugar, no solo metros cuadrados.",
            replies: "12",
            rt: "23",
            likes: "184",
            views: "4.2k",
            color: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
          },
          {
            autor: "Nacho Galland",
            user: "@kine_galland",
            time: "5h",
            texto: "Si el dolor lumbar baja con movimiento y sube en reposo, no es debilidad, es información. Empezá por ahí.",
            replies: "7",
            rt: "18",
            likes: "92",
            views: "2.1k",
            color: "linear-gradient(135deg, #00ba7c, #1d9bf0)",
          },
          {
            autor: "TECHO Salta",
            user: "@techo_salta",
            time: "1d",
            texto: "Cuadrillas para mayo: 4 jornadas de construcción + 2 colectas. Si querés sumarte, link en bio. Ningún voluntario sobra.",
            replies: "34",
            rt: "98",
            likes: "412",
            views: "9.8k",
            color: "linear-gradient(135deg, #f91880, #ff7a00)",
          },
          {
            autor: "Buen Boy",
            user: "@buenboy_arg",
            time: "2d",
            texto: "Probamos el sistema nuevo de turnos online. Primera semana sin overbooking en mucho tiempo. Recomiendo.",
            replies: "9",
            rt: "4",
            likes: "56",
            views: "1.4k",
            color: "linear-gradient(135deg, #94a3b8, #64748b)",
          },
          {
            autor: "Sofía Domínguez",
            user: "@sofi_dom",
            time: "3d",
            texto: "Tres reglas que estoy probando: una sola pestaña a la vez, leer antes de escribir, dormir antes de responder.",
            replies: "21",
            rt: "44",
            likes: "298",
            views: "6.4k",
            color: "linear-gradient(135deg, #5856d6, #007aff)",
          },
        ].map((p, i) => (
          <motion.article
            key={p.user + p.time}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, delay: i * 0.05 }}
            whileHover={{ backgroundColor: "rgba(15,20,25,0.02)" }}
            className="-mx-4 px-4 py-4 flex gap-3 cursor-pointer"
            style={{ borderBottom: "1px solid #eff3f4" }}
          >
            <div
              className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-semibold text-sm"
              style={{ background: p.color, color: "#fff" }}
            >
              {p.autor
                .split(" ")
                .map((s) => s[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[13px] mb-0.5 flex-wrap">
                <span className="font-bold">{p.autor}</span>
                <span style={{ color: "#536471" }}>
                  {p.user} · {p.time}
                </span>
              </div>
              <p className="text-[15px] leading-snug mb-3">{p.texto}</p>
              <div className="flex items-center justify-between text-xs max-w-[320px]" style={{ color: "#536471" }}>
                <span className="flex items-center gap-1">💬 {p.replies}</span>
                <span className="flex items-center gap-1">🔁 {p.rt}</span>
                <span className="flex items-center gap-1">♡ {p.likes}</span>
                <span className="flex items-center gap-1">👁 {p.views}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const SearchView = (
    <div className="px-4 pt-4">
      <div className="mb-5">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full px-4 py-3 rounded-full text-sm outline-none"
          style={{ backgroundColor: "#f7f9fa", border: "1px solid #eff3f4" }}
          readOnly
        />
      </div>

      <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#536471" }}>
        Tendencias en Argentina
      </p>
      <div className="space-y-1 mb-7">
        {[
          { t: "#Boca", n: "184k posts", cat: "Deportes" },
          { t: "Inflación abril", n: "92k posts", cat: "Política" },
          { t: "Eclipse del 14", n: "41k posts", cat: "Ciencia" },
          { t: "Argentina 1985", n: "28k posts", cat: "Cine" },
          { t: "#YPF", n: "22k posts", cat: "Economía" },
        ].map((tr, i) => (
          <motion.div
            key={tr.t}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26, delay: i * 0.04 }}
            whileHover={{ backgroundColor: "rgba(15,20,25,0.03)" }}
            className="-mx-4 px-4 py-3 cursor-pointer"
          >
            <p className="text-[11px] uppercase tracking-wider mb-0.5" style={{ color: "#536471" }}>
              {tr.cat} · trending
            </p>
            <p className="font-bold text-base">{tr.t}</p>
            <p className="text-xs" style={{ color: "#536471" }}>
              {tr.n}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: "#536471" }}>
        Sugeridos para seguir
      </p>
      <div className="grid grid-cols-1 gap-3">
        {[
          { autor: "Ana Méndez", user: "@ana_mendez", bio: "Diseñadora UX · Buenos Aires" },
          { autor: "Diego Cabrera", user: "@diego_cabrera", bio: "Periodista económico" },
          { autor: "Cecilia Ortega", user: "@ceci_ort", bio: "Psicóloga · escritora" },
        ].map((s, i) => (
          <motion.div
            key={s.user}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.1 + i * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ backgroundColor: "#f7f9fa", border: "1px solid #eff3f4" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm text-white shrink-0"
              style={{ background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)" }}
            >
              {s.autor.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm">{s.autor}</p>
              <p className="text-xs truncate" style={{ color: "#536471" }}>
                {s.user} · {s.bio}
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-white shrink-0"
              style={{ backgroundColor: "#0f1419" }}
            >
              Seguir
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const NotifView = (
    <div className="px-4 pt-4">
      <div
        className="sticky top-0 z-10 -mx-4 px-4 py-3 backdrop-blur-md mb-3"
        style={{ backgroundColor: "rgba(255,255,255,0.85)", borderBottom: "1px solid #eff3f4" }}
      >
        <h2 className="font-bold text-lg">Notificaciones</h2>
      </div>
      <div>
        {[
          { tipo: "❤", autor: "Joaco G.", txt: "le gustó tu post", ext: "Tres reglas que estoy probando…", time: "5m", color: "#f91880" },
          { tipo: "🔁", autor: "Macarena R.", txt: "reposteó", ext: "El feed que controlás vos.", time: "32m", color: "#00ba7c" },
          { tipo: "👤", autor: "Ana Méndez", txt: "te empezó a seguir", ext: "", time: "1h", color: "#1d9bf0" },
          { tipo: "💬", autor: "Nacho G.", txt: "respondió a tu post", ext: "Eso me pasó la semana pasada — la pelvis…", time: "2h", color: "#1d9bf0" },
          { tipo: "❤", autor: "+12 más", txt: "le gustó tu post", ext: "Si el dolor lumbar baja con movimiento…", time: "4h", color: "#f91880" },
          { tipo: "👤", autor: "Diego C.", txt: "te empezó a seguir", ext: "", time: "1d", color: "#1d9bf0" },
          { tipo: "🔁", autor: "TECHO Salta", txt: "reposteó", ext: "Cronológico siempre.", time: "2d", color: "#00ba7c" },
        ].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, delay: i * 0.04 }}
            className="-mx-4 px-4 py-3 flex gap-3 items-start"
            style={{ borderBottom: "1px solid #eff3f4" }}
          >
            <span className="text-xl mt-0.5" style={{ color: n.color }}>
              {n.tipo}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-bold">{n.autor}</span>
                <span style={{ color: "#536471" }}> {n.txt}</span>
              </p>
              {n.ext && (
                <p className="text-xs mt-1 truncate" style={{ color: "#536471" }}>
                  {n.ext}
                </p>
              )}
            </div>
            <span className="text-xs shrink-0" style={{ color: "#536471" }}>
              {n.time}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DmView = (
    <div className="px-4 pt-4">
      <div
        className="sticky top-0 z-10 -mx-4 px-4 py-3 backdrop-blur-md mb-3"
        style={{ backgroundColor: "rgba(255,255,255,0.85)", borderBottom: "1px solid #eff3f4" }}
      >
        <h2 className="font-bold text-lg">Mensajes</h2>
      </div>
      <div>
        {[
          { ini: "GA", nombre: "Guadalupe Alanís", preview: "Listo, lo vimos. Nos cierra el lunes a las 10.", time: "5m", unread: 2, color: "linear-gradient(135deg, #1d9bf0, #8b5cf6)" },
          { ini: "JG", nombre: "Joaquín G.", preview: "Te paso el video del entrenamiento", time: "1h", unread: 1, color: "linear-gradient(135deg, #00ba7c, #1d9bf0)" },
          { ini: "MR", nombre: "Macarena R.", preview: "Gracias por la nota, la compartí", time: "3h", unread: 0, color: "linear-gradient(135deg, #f91880, #ff7a00)" },
          { ini: "AM", nombre: "Ana Méndez", preview: "Mañana revisamos los archivos finales?", time: "1d", unread: 0, color: "linear-gradient(135deg, #5856d6, #007aff)" },
          { ini: "DC", nombre: "Diego Cabrera", preview: "Gracias 🙏", time: "2d", unread: 0, color: "linear-gradient(135deg, #ff5e3a, #ff9500)" },
        ].map((c, i) => (
          <motion.div
            key={c.ini}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, delay: i * 0.04 }}
            whileHover={{ backgroundColor: "rgba(15,20,25,0.02)" }}
            className="-mx-4 px-4 py-3 flex items-center gap-3 cursor-pointer"
            style={{ borderBottom: "1px solid #eff3f4" }}
          >
            <div
              className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-semibold text-sm text-white"
              style={{ background: c.color }}
            >
              {c.ini}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <p className="font-bold text-sm">{c.nombre}</p>
                <span className="text-xs shrink-0" style={{ color: "#536471" }}>
                  {c.time}
                </span>
              </div>
              <p className="text-xs truncate" style={{ color: "#536471" }}>
                {c.preview}
              </p>
            </div>
            {c.unread > 0 && (
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                style={{ backgroundColor: "#1d9bf0" }}
              >
                {c.unread}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );

  const PerfilView = (
    <div>
      <div
        className="h-32 -mb-12 relative"
        style={{ background: "linear-gradient(135deg, #1d9bf0, #8b5cf6, #f91880)" }}
      />
      <div className="px-4 relative">
        <div className="flex items-end justify-between mb-3">
          <div
            className="w-24 h-24 rounded-full border-4 flex items-center justify-center font-bold text-2xl text-white"
            style={{
              background: "linear-gradient(135deg, #1d9bf0, #8b5cf6)",
              borderColor: "#ffffff",
            }}
          >
            NV
          </div>
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="px-4 py-1.5 rounded-full text-sm font-bold mt-12"
            style={{ border: "1px solid #cfd9de", color: "#0f1419" }}
          >
            Editar perfil
          </motion.button>
        </div>
        <h2 className="font-bold text-xl mb-0.5">Nacho Villanueva</h2>
        <p className="text-sm mb-3" style={{ color: "#536471" }}>
          @choc_o_
        </p>
        <p className="text-[15px] mb-3 leading-snug">
          Construyo cosas. Escribo poco, pruebo mucho. Las opiniones acá son mías y no las del lunes próximo.
        </p>
        <div className="flex items-center gap-4 text-xs flex-wrap mb-5" style={{ color: "#536471" }}>
          <span>📍 Buenos Aires</span>
          <span>📅 Se unió may 2024</span>
        </div>
        <div className="flex items-center gap-5 text-sm pb-4 mb-3" style={{ borderBottom: "1px solid #eff3f4" }}>
          <span>
            <span className="font-bold">412</span>{" "}
            <span style={{ color: "#536471" }}>siguiendo</span>
          </span>
          <span>
            <span className="font-bold">2.4k</span>{" "}
            <span style={{ color: "#536471" }}>seguidores</span>
          </span>
          <span>
            <span className="font-bold">184</span>{" "}
            <span style={{ color: "#536471" }}>posts</span>
          </span>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] font-bold mb-2" style={{ color: "#536471" }}>
          Últimos posts
        </p>
        {[
          { texto: "Tres reglas que estoy probando: una sola pestaña a la vez, leer antes de escribir, dormir antes de responder.", time: "3d", likes: "298" },
          { texto: "El feed que controlás vos. Sin algoritmo predatorio. Eso es lo que estamos intentando.", time: "1sem", likes: "152" },
          { texto: "Si el dolor lumbar baja con movimiento y sube en reposo, no es debilidad, es información.", time: "2sem", likes: "92" },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 26, delay: 0.1 + i * 0.05 }}
            className="-mx-4 px-4 py-3"
            style={{ borderBottom: "1px solid #eff3f4" }}
          >
            <p className="text-[15px] leading-snug mb-2">{p.texto}</p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "#536471" }}>
              <span>{p.time}</span>
              <span>♡ {p.likes}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    home: HomeView,
    search: SearchView,
    notif: NotifView,
    dm: DmView,
    perfil: PerfilView,
  };

  /* ============== TAB 2 — APP (mobile-first) ============== */
  const workspace = (
    <div
      className="max-w-md mx-auto"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #eff3f4",
        borderRadius: 24,
        minHeight: "720px",
        overflow: "hidden",
      }}
    >
      <InternalNav
        variant="ios-bottom"
        items={[
          { id: "home", label: "Home", icon: "🏠" },
          { id: "search", label: "Buscar", icon: "🔍" },
          { id: "notif", label: "Notif", icon: "🔔" },
          { id: "dm", label: "DMs", icon: "✉" },
          { id: "perfil", label: "Perfil", icon: "👤" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#1d9bf0"
        bgContainer="rgba(255,255,255,0.9)"
        textInactive="#536471"
        borderColor="#eff3f4"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#0f1419", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#eff3f4" navColor="#536471" />

      <main className="max-w-5xl mx-auto px-5 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent="#1d9bf0"
          textActive="#ffffff"
          textInactive="#536471"
          bgContainer="#f7f9fa"
          borderColor="#eff3f4"
          tabsClassName="mb-10 flex justify-center"
          tabs={[
            { id: "web", label: "Web", content: landing },
            { id: "app", label: "App", content: workspace },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor="#eff3f4"
          textColor="#536471"
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-bold"
        >
          El feed nuevo
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#536471" borderColor="#eff3f4" />
      </main>
    </div>
  );
}
