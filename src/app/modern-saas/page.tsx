"use client";

import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";

export default function ModernSaasPage() {
  const e = getEstilo("modern-saas")!;
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#111827", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e5e7eb" navColor="#6b7280" />

      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero gradient */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-10 h-72 -z-10 opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle at 30% 30%, #c7d2fe, transparent 60%), radial-gradient(circle at 70% 60%, #fbcfe8, transparent 60%)" }}
          />
          <p className="text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "#5e6ad2" }}>
            Plataforma · Beta abierta
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] mb-7 max-w-4xl" style={{ color: "#0f172a" }}>
            Construí <span style={{ background: "linear-gradient(90deg, #5e6ad2, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>menos infraestructura</span>, lanzá más producto.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: "#475569" }}>
            La plataforma que reemplaza tu stack de seis pestañas con una sola API. Setup en segundos, sin tarjeta de crédito.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -1, boxShadow: "0 10px 30px rgba(94,106,210,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 text-sm font-medium rounded-lg"
              style={{ backgroundColor: "#0f172a", color: "#fff" }}
            >
              Empezar gratis
            </motion.button>
            <motion.button
              whileHover={{ borderColor: "#0f172a" }}
              className="px-6 py-3 text-sm font-medium rounded-lg border"
              style={{ borderColor: "#cbd5e1", color: "#0f172a" }}
            >
              Ver demo →
            </motion.button>
          </div>

          {/* Logos strip */}
          <div className="mt-16 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#94a3b8" }}>Confían en nosotros</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              {["Acme Co", "Globex", "Initech", "Soylent", "Hooli"].map((n) => (
                <div key={n} className="text-sm font-medium tracking-tight" style={{ color: "#475569" }}>{n}</div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features grid */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "#5e6ad2" }}>Funcionalidad</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12" style={{ color: "#0f172a" }}>
            Todo lo que necesitás. Nada más.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { titulo: "Auth en 1 línea", desc: "Email magic links, OAuth, y SSO sin configurar nada." },
              { titulo: "Database serverless", desc: "Postgres con autoscale. Pagás solo lo que usás." },
              { titulo: "Edge functions", desc: "Tu código en 30 regiones. <50ms en cualquier parte." },
            ].map((f, i) => (
              <motion.div
                key={f.titulo}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: "#5e6ad2" }}
                className="p-6 rounded-xl border bg-white transition-colors"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #5e6ad2, #8b5cf6)" }}>
                  <span className="text-white text-lg">◆</span>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider firma — tech line draw SaaS */}
        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e5e7eb"
          textColor="#5e6ad2"
          className="mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Dashboard del producto
        </DividerReveal>

        {/* ====== VISTA OPERATIVA — dashboard del SaaS ====== */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: "#0f172a" }}>
              Lo que ves después del signup.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#475569" }}>
              Sin tutorial pesado, sin tour de 7 pasos. La consola con tus métricas, tus deployments, y un terminal listo para tu primer push.
            </p>
          </div>

          {/* Console mock */}
          <div
            className="rounded-2xl overflow-hidden bg-white"
            style={{ border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 12px 32px rgba(94,106,210,0.08)" }}
          >
            {/* App bar */}
            <div className="px-5 py-3 flex items-center justify-between text-sm" style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#fafbff" }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #5e6ad2, #8b5cf6)" }}>◆</div>
                <span className="font-semibold">acme-prod</span>
                <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>● healthy</span>
              </div>
              <div className="hidden md:flex items-center gap-3 text-xs" style={{ color: "#6b7280" }}>
                <span>Production</span>
                <span>·</span>
                <span style={{ fontFamily: "var(--font-geist-mono)" }}>v0.42.1</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-0">
              {/* Sidebar */}
              <aside className="col-span-3 hidden md:block p-4 text-sm" style={{ borderRight: "1px solid #e5e7eb" }}>
                <p className="text-[10px] uppercase tracking-wider mb-3 font-semibold" style={{ color: "#94a3b8" }}>WORKSPACE</p>
                {[
                  { l: "Overview", active: true },
                  { l: "Deployments" },
                  { l: "Functions" },
                  { l: "Database" },
                  { l: "Auth" },
                  { l: "Logs" },
                  { l: "Settings" },
                ].map((it) => (
                  <motion.button
                    key={it.l}
                    whileHover={{ x: 2, backgroundColor: it.active ? "#eef2ff" : "#f8fafc" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="w-full text-left px-2 py-1.5 rounded-md mb-0.5"
                    style={{ backgroundColor: it.active ? "#eef2ff" : "transparent", color: it.active ? "#3730a3" : "#475569", fontWeight: it.active ? 600 : 400 }}
                  >
                    {it.l}
                  </motion.button>
                ))}
              </aside>

              {/* Main */}
              <div className="col-span-12 md:col-span-9 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { val: "1.24M", label: "Requests / 24h", delta: "+18%", positive: true },
                    { val: "p95 84ms", label: "Latency", delta: "-3ms", positive: true },
                    { val: "0.02%", label: "Error rate", delta: "+0.01%", positive: false },
                    { val: "$ 142", label: "Mes a la fecha", delta: "+$ 24", positive: false },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg p-3" style={{ border: "1px solid #e5e7eb" }}>
                      <p className="text-[11px] mb-1" style={{ color: "#64748b" }}>{s.label}</p>
                      <p className="text-xl font-semibold tracking-tight tabular-nums">{s.val}</p>
                      <p className="text-[11px] mt-1 font-mono" style={{ color: s.positive ? "#16a34a" : "#dc2626" }}>{s.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart placeholder */}
                <div className="rounded-lg p-4 mb-5" style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafbff" }}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold">Requests por hora</p>
                    <div className="flex gap-1 text-xs">
                      {["1h", "24h", "7d", "30d"].map((r, i) => (
                        <span key={r} className="px-2 py-0.5 rounded" style={{ backgroundColor: i === 1 ? "#5e6ad2" : "transparent", color: i === 1 ? "#fff" : "#64748b" }}>{r}</span>
                      ))}
                    </div>
                  </div>
                  <svg viewBox="0 0 400 80" className="w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="saas-chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5e6ad2" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#5e6ad2" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 L20,55 L40,40 L60,48 L80,32 L100,38 L120,28 L140,22 L160,30 L180,18 L200,24 L220,12 L240,18 L260,8 L280,16 L300,6 L320,12 L340,4 L360,10 L380,2 L400,8 L400,80 L0,80 Z" fill="url(#saas-chart-grad)" />
                    <path d="M0,60 L20,55 L40,40 L60,48 L80,32 L100,38 L120,28 L140,22 L160,30 L180,18 L200,24 L220,12 L240,18 L260,8 L280,16 L300,6 L320,12 L340,4 L360,10 L380,2 L400,8" fill="none" stroke="#5e6ad2" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Recent deployments */}
                <div className="rounded-lg" style={{ border: "1px solid #e5e7eb" }}>
                  <div className="px-4 py-2.5 text-sm font-semibold" style={{ borderBottom: "1px solid #e5e7eb" }}>Deployments recientes</div>
                  {[
                    { sha: "a3f2c81", msg: "fix(auth): magic link expiration", branch: "main", time: "12 min", status: "Ready", color: "#16a34a" },
                    { sha: "1b8e2d4", msg: "feat(db): connection pool tuning", branch: "main", time: "1h", status: "Ready", color: "#16a34a" },
                    { sha: "9c4f1ab", msg: "wip: queue consumer retry", branch: "feat/queue", time: "3h", status: "Building", color: "#eab308" },
                  ].map((d, i) => (
                    <div key={d.sha} className="px-4 py-2.5 flex items-center justify-between text-sm" style={{ borderTop: i > 0 ? "1px solid #f1f5f9" : "none" }}>
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="text-xs font-mono shrink-0" style={{ color: "#64748b" }}>{d.sha}</span>
                        <span className="truncate">{d.msg}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs shrink-0" style={{ color: "#64748b" }}>
                        <span style={{ fontFamily: "var(--font-geist-mono)" }}>{d.branch}</span>
                        <span>{d.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <StyleFooter estilo={e} textColor="#475569" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
