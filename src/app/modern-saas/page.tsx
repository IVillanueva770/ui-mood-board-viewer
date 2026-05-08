"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function ModernSaasPage() {
  const e = getEstilo("modern-saas")!;
  const [activeView, setActiveView] = useState("overview");

  /* ============== TAB 1 — LANDING ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pt-2 pb-20"
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
      <div className="flex flex-wrap items-center gap-3 mb-16">
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

      <div className="pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
        <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#94a3b8" }}>Confían en nosotros</p>
        <div className="flex flex-wrap gap-8 items-center opacity-60">
          {["Acme Co", "Globex", "Initech", "Soylent", "Hooli"].map((n) => (
            <div key={n} className="text-sm font-medium tracking-tight" style={{ color: "#475569" }}>{n}</div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
  );

  /* ============== SUB-VISTAS WORKSPACE ============== */
  const OverviewView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: "#5e6ad2" }}>acme-prod · production</p>
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Overview</h2>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>● healthy · v0.42.1</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { val: "1.24M", label: "Requests / 24h", delta: "+18%", positive: true },
          { val: "p95 84ms", label: "Latency", delta: "-3ms", positive: true },
          { val: "0.02%", label: "Error rate", delta: "+0.01%", positive: false },
          { val: "$ 142", label: "Mes a la fecha", delta: "+$ 24", positive: false },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-lg p-4 bg-white"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <p className="text-[11px] mb-1" style={{ color: "#64748b" }}>{s.label}</p>
            <p className="text-xl font-semibold tracking-tight tabular-nums" style={{ color: "#0f172a" }}>{s.val}</p>
            <p className="text-[11px] mt-1" style={{ color: s.positive ? "#16a34a" : "#dc2626", fontFamily: "var(--font-geist-mono)" }}>{s.delta}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-lg p-4 mb-5" style={{ border: "1px solid #e5e7eb", backgroundColor: "#fafbff" }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold" style={{ color: "#0f172a" }}>Requests por hora</p>
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
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            d="M0,60 L20,55 L40,40 L60,48 L80,32 L100,38 L120,28 L140,22 L160,30 L180,18 L200,24 L220,12 L240,18 L260,8 L280,16 L300,6 L320,12 L340,4 L360,10 L380,2 L400,8"
            fill="none"
            stroke="#5e6ad2"
            strokeWidth="1.5"
          />
          <path d="M0,60 L20,55 L40,40 L60,48 L80,32 L100,38 L120,28 L140,22 L160,30 L180,18 L200,24 L220,12 L240,18 L260,8 L280,16 L300,6 L320,12 L340,4 L360,10 L380,2 L400,8 L400,80 L0,80 Z" fill="url(#saas-chart-grad)" />
        </svg>
      </div>

      <div className="rounded-lg" style={{ border: "1px solid #e5e7eb" }}>
        <div className="px-4 py-2.5 text-sm font-semibold bg-white" style={{ borderBottom: "1px solid #e5e7eb", color: "#0f172a", borderRadius: "0.5rem 0.5rem 0 0" }}>Eventos recientes</div>
        {[
          { sha: "a3f2c81", msg: "deploy: fix(auth) magic link expiration", branch: "main", time: "12 min", color: "#16a34a" },
          { sha: "1b8e2d4", msg: "deploy: feat(db) connection pool tuning", branch: "main", time: "1h", color: "#16a34a" },
          { sha: "9c4f1ab", msg: "build: queue consumer retry", branch: "feat/queue", time: "3h", color: "#eab308" },
        ].map((d, i) => (
          <div key={d.sha} className="px-4 py-3 flex items-center justify-between text-sm bg-white" style={{ borderTop: i > 0 ? "1px solid #f1f5f9" : "none" }}>
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
              <span className="text-xs font-mono shrink-0" style={{ color: "#64748b" }}>{d.sha}</span>
              <span className="truncate" style={{ color: "#0f172a" }}>{d.msg}</span>
            </div>
            <div className="flex items-center gap-3 text-xs shrink-0" style={{ color: "#64748b" }}>
              <span style={{ fontFamily: "var(--font-geist-mono)" }}>{d.branch}</span>
              <span>{d.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DeploymentsView = (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: "#5e6ad2" }}>main · production</p>
          <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Deployments</h2>
        </div>
        <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="text-xs font-medium px-3 py-2 rounded-lg" style={{ backgroundColor: "#0f172a", color: "#fff" }}>+ Nuevo deploy</motion.button>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
        {[
          { sha: "a3f2c81", msg: "fix(auth): magic link expiration", branch: "main", time: "12 min", env: "Production", status: "Ready", color: "#16a34a" },
          { sha: "1b8e2d4", msg: "feat(db): connection pool tuning", branch: "main", time: "1h", env: "Production", status: "Ready", color: "#16a34a" },
          { sha: "9c4f1ab", msg: "wip: queue consumer retry", branch: "feat/queue", time: "3h", env: "Preview", status: "Building", color: "#eab308" },
          { sha: "f1a2b3c", msg: "chore: bump deps minor", branch: "main", time: "1d", env: "Production", status: "Ready", color: "#16a34a" },
          { sha: "7e9d2c1", msg: "feat(api): batch endpoint", branch: "feat/batch", time: "2d", env: "Preview", status: "Ready", color: "#16a34a" },
        ].map((d, i) => (
          <motion.div
            key={d.sha}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            whileHover={{ backgroundColor: "#fafbff" }}
            className="px-4 py-3 grid grid-cols-12 gap-3 items-center text-sm bg-white cursor-pointer"
            style={{ borderTop: i > 0 ? "1px solid #f1f5f9" : "none" }}
          >
            <div className="col-span-1 flex justify-center"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} /></div>
            <span className="col-span-2 text-xs font-mono" style={{ color: "#64748b" }}>{d.sha}</span>
            <span className="col-span-5 truncate" style={{ color: "#0f172a" }}>{d.msg}</span>
            <span className="col-span-2 text-xs" style={{ color: "#64748b", fontFamily: "var(--font-geist-mono)" }}>{d.branch}</span>
            <span className="col-span-1 text-xs" style={{ color: "#64748b" }}>{d.env}</span>
            <span className="col-span-1 text-xs text-right" style={{ color: "#64748b" }}>{d.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const FunctionsView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: "#5e6ad2" }}>30 regions · edge runtime</p>
        <h2 className="text-3xl font-semibold tracking-tight mb-2" style={{ color: "#0f172a" }}>Functions</h2>
        <p className="text-sm" style={{ color: "#64748b" }}>12 funciones edge desplegadas. p95 latency global &lt;80ms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { nombre: "/api/auth", inv: "412k", p95: "62ms", err: "0.01%", region: "global" },
          { nombre: "/api/users", inv: "184k", p95: "78ms", err: "0.02%", region: "global" },
          { nombre: "/api/billing", inv: "22k", p95: "94ms", err: "0.04%", region: "us-east" },
          { nombre: "/api/webhook", inv: "8.4k", p95: "120ms", err: "0.21%", region: "us-east" },
        ].map((f, i) => (
          <motion.div
            key={f.nombre}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ y: -2, borderColor: "#5e6ad2" }}
            className="rounded-lg p-4 bg-white"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm" style={{ color: "#0f172a" }}>{f.nombre}</span>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded" style={{ backgroundColor: "#eef2ff", color: "#3730a3" }}>{f.region}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div><p style={{ color: "#94a3b8" }}>Inv 24h</p><p className="font-semibold tabular-nums" style={{ color: "#0f172a" }}>{f.inv}</p></div>
              <div><p style={{ color: "#94a3b8" }}>p95</p><p className="font-semibold tabular-nums" style={{ color: "#0f172a" }}>{f.p95}</p></div>
              <div><p style={{ color: "#94a3b8" }}>Err</p><p className="font-semibold tabular-nums" style={{ color: parseFloat(f.err) > 0.1 ? "#dc2626" : "#16a34a" }}>{f.err}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DatabaseView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: "#5e6ad2" }}>postgres 16 · serverless</p>
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Database</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { v: "12.4 GB", l: "Storage" },
          { v: "342", l: "Conexiones / hora" },
          { v: "78ms", l: "Query p95" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg p-4 bg-white" style={{ border: "1px solid #e5e7eb" }}>
            <p className="text-[11px] mb-1" style={{ color: "#64748b" }}>{s.l}</p>
            <p className="text-2xl font-semibold tracking-tight tabular-nums" style={{ color: "#0f172a" }}>{s.v}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg overflow-hidden bg-white" style={{ border: "1px solid #e5e7eb" }}>
        <div className="px-4 py-2.5 text-sm font-semibold flex items-center justify-between" style={{ borderBottom: "1px solid #e5e7eb", color: "#0f172a" }}>
          <span>Tablas</span>
          <span className="text-xs font-mono" style={{ color: "#64748b" }}>schema: public</span>
        </div>
        {[
          { nombre: "users", rows: "184,221", size: "412 MB", inserts: "+1.2k/d" },
          { nombre: "sessions", rows: "1.4M", size: "8.2 GB", inserts: "+42k/d" },
          { nombre: "orgs", rows: "8,402", size: "12 MB", inserts: "+22/d" },
          { nombre: "events", rows: "12.8M", size: "3.6 GB", inserts: "+180k/d" },
        ].map((t, i) => (
          <div key={t.nombre} className="px-4 py-3 grid grid-cols-12 gap-3 items-center text-sm" style={{ borderTop: i > 0 ? "1px solid #f1f5f9" : "none" }}>
            <span className="col-span-4 font-mono" style={{ color: "#0f172a" }}>{t.nombre}</span>
            <span className="col-span-3 tabular-nums" style={{ color: "#64748b" }}>{t.rows} rows</span>
            <span className="col-span-3 tabular-nums" style={{ color: "#64748b" }}>{t.size}</span>
            <span className="col-span-2 text-right text-xs font-mono" style={{ color: "#16a34a" }}>{t.inserts}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const LogsView = (
    <div>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: "#5e6ad2" }}>last 5 min · live tail</p>
        <h2 className="text-3xl font-semibold tracking-tight" style={{ color: "#0f172a" }}>Logs</h2>
      </div>

      <div className="rounded-lg overflow-hidden font-mono text-xs" style={{ border: "1px solid #e5e7eb", backgroundColor: "#0f172a" }}>
        {[
          { t: "12:42:08", lvl: "INFO", msg: "auth.magic_link.sent { user: u_4f2 } 84ms", color: "#a5b4fc" },
          { t: "12:42:09", lvl: "INFO", msg: "db.query SELECT users WHERE org=8a2 12ms", color: "#a5b4fc" },
          { t: "12:42:11", lvl: "WARN", msg: "rate_limit.near_threshold ip=200.* 18/20", color: "#fcd34d" },
          { t: "12:42:14", lvl: "INFO", msg: "fn.users invoked region=gru-1 78ms", color: "#a5b4fc" },
          { t: "12:42:15", lvl: "ERROR", msg: "webhook.delivery.failed url=stripe.com 504", color: "#fca5a5" },
          { t: "12:42:17", lvl: "INFO", msg: "auth.session.refresh user=u_8c1 42ms", color: "#a5b4fc" },
        ].map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04 }}
            className="px-4 py-1.5 flex items-center gap-3"
            style={{ borderTop: i > 0 ? "1px solid #1e293b" : "none" }}
          >
            <span style={{ color: "#64748b" }}>{l.t}</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider" style={{ backgroundColor: l.color + "22", color: l.color }}>{l.lvl}</span>
            <span style={{ color: "#cbd5e1" }} className="truncate">{l.msg}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    overview: OverviewView,
    deployments: DeploymentsView,
    functions: FunctionsView,
    database: DatabaseView,
    logs: LogsView,
  };

  /* ============== TAB 2 — WORKSPACE ============== */
  const workspace = (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 12px 32px rgba(94,106,210,0.08)", minHeight: "640px" }}>
      <div className="px-5 py-3 flex items-center justify-between text-sm bg-white" style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#fafbff" }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #5e6ad2, #8b5cf6)" }}>◆</div>
          <span className="font-semibold" style={{ color: "#0f172a" }}>acme-prod</span>
          <span className="text-xs px-2 py-0.5 rounded font-medium" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>● healthy</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-xs" style={{ color: "#6b7280" }}>
          <span>Production</span>
          <span>·</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>v0.42.1</span>
        </div>
      </div>

      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "overview", label: "Overview", icon: "◇" },
          { id: "deployments", label: "Deployments", icon: "↗" },
          { id: "functions", label: "Functions", icon: "ƒ" },
          { id: "database", label: "Database", icon: "⌘" },
          { id: "logs", label: "Logs", icon: "≡" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#5e6ad2"
        bgContainer="#ffffff"
        bgActive="#eef2ff"
        textActive="#3730a3"
        textInactive="#475569"
        borderColor="#e5e7eb"
        workspaceLabel="Workspace"
        workspaceInitial="A"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#111827", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e5e7eb" navColor="#6b7280" />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <StyleTabs
          variant="tech-pill"
          accent="#5e6ad2"
          textActive="#ffffff"
          textInactive="#475569"
          bgContainer="#fafbff"
          borderColor="#e5e7eb"
          tabsClassName="mb-10"
          tabs={[
            { id: "marketing", label: "Marketing", content: landing },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor="#e5e7eb"
          textColor="#5e6ad2"
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Built with confidence
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#475569" borderColor="#e5e7eb" />
      </main>
    </div>
  );
}
