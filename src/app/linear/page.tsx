"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LinearPage() {
  return (
    <div style={{ backgroundColor: "#08090a", color: "#f7f8f8", minHeight: "100vh", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      {/* Top nav bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ borderBottom: "1px solid #1a1b1d" }}
        className="px-4 py-2 flex items-center justify-between text-xs"
      >
        <Link href="/" style={{ color: "#8a8f98" }} className="hover:text-white transition-colors">
          ← Volver al index
        </Link>
        <div style={{ color: "#8a8f98" }}>Linear (real) · midnight command center · refero</div>
      </motion.div>

      <div className="flex" style={{ minHeight: "calc(100vh - 33px)" }}>
        {/* Sidebar */}
        <aside style={{ borderRight: "1px solid #1a1b1d", width: 240 }} className="hidden md:block px-3 py-4">
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: "#e4f222", color: "#08090a" }}>
              A
            </div>
            <span className="font-semibold text-sm">Acme Workspace</span>
          </div>

          <nav className="space-y-0.5 mb-6">
            {[
              { label: "Inbox", count: "12", active: false },
              { label: "My issues", count: "3", active: true },
              { label: "Active", count: "47", active: false },
              { label: "Backlog", count: "128", active: false },
            ].map((it) => (
              <motion.div
                key={it.label}
                whileHover={{ x: 2 }}
                className="flex items-center justify-between px-2 py-1.5 text-sm rounded cursor-pointer transition-colors"
                style={{
                  backgroundColor: it.active ? "#0f1011" : "transparent",
                  color: it.active ? "#fff" : "#a4a5ad",
                }}
              >
                <span>{it.label}</span>
                <span className="text-xs" style={{ color: "#62666d", fontFamily: "var(--font-geist-mono)" }}>{it.count}</span>
              </motion.div>
            ))}
          </nav>

          <div className="text-[11px] uppercase tracking-wider mb-2 px-2" style={{ color: "#62666d" }}>Projects</div>
          <nav className="space-y-0.5">
            {["Mobile redesign", "API v2", "Onboarding flow", "Auth migration"].map((p) => (
              <motion.div
                key={p}
                whileHover={{ x: 2 }}
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded cursor-pointer"
                style={{ color: "#a4a5ad" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#e4f222" }} />
                <span>{p}</span>
              </motion.div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-between mb-8 gap-3 flex-wrap"
          >
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold tracking-tight">My issues</h1>
              <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#0f1011", color: "#a4a5ad", border: "1px solid #1a1b1d" }}>
                3 open
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ borderColor: "#e4f222" }}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded transition-colors"
                style={{ backgroundColor: "#0f1011", color: "#8a8f98", border: "1px solid #1a1b1d" }}
              >
                <span style={{ fontFamily: "var(--font-geist-mono)" }} className="text-xs">⌘ K</span>
                <span>Search...</span>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 py-1.5 text-sm rounded font-semibold transition-colors"
                style={{ backgroundColor: "#e4f222", color: "#08090a" }}
              >
                + New issue
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Open", value: "24", delta: "+3" },
              { label: "In progress", value: "8", delta: "+1" },
              { label: "Done this week", value: "31", delta: "+12" },
              { label: "Velocity", value: "2.4d", delta: "−0.3" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                whileHover={{ borderColor: "#2a2b2e" }}
                className="rounded-lg p-4 transition-colors"
                style={{ backgroundColor: "#0f1011", border: "1px solid #1a1b1d" }}
              >
                <div className="text-xs mb-1" style={{ color: "#8a8f98" }}>{s.label}</div>
                <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "#e4f222", fontFamily: "var(--font-geist-mono)" }}>
                  {s.delta}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Issues list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #1a1b1d" }}
          >
            <div className="px-4 py-3 text-xs uppercase tracking-wider grid grid-cols-12 gap-3" style={{ backgroundColor: "#0f1011", color: "#62666d" }}>
              <div className="col-span-1">ID</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Updated</div>
            </div>
            {[
              { id: "ENG-142", title: "Mobile drawer animation feels janky on Android", status: "In Progress", color: "#eab308", priority: "High", updated: "2h" },
              { id: "ENG-141", title: "Auth: refresh token rotation breaks SSE stream", status: "Todo", color: "#e4f222", priority: "Urgent", updated: "5h" },
              { id: "ENG-138", title: "Settings page: avatar upload returns 500 on retry", status: "Review", color: "#a855f7", priority: "Med", updated: "1d" },
              { id: "ENG-135", title: "Dashboard query >2s when org has 10k+ rows", status: "Backlog", color: "#62666d", priority: "Med", updated: "3d" },
              { id: "ENG-130", title: "Tooltip: cursor jumps to top on first hover", status: "Done", color: "#22c55e", priority: "Low", updated: "1w" },
            ].map((i, idx) => (
              <motion.div
                key={i.id}
                whileHover={{ backgroundColor: "#0c0d0e" }}
                className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center cursor-pointer transition-colors"
                style={{ borderTop: idx === 0 ? "none" : "1px solid #1a1b1d" }}
              >
                <div className="col-span-1 text-xs" style={{ fontFamily: "var(--font-geist-mono)", color: "#8a8f98" }}>
                  {i.id}
                </div>
                <div className="col-span-5">{i.title}</div>
                <div className="col-span-2">
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: i.color }} />
                    {i.status}
                  </span>
                </div>
                <div className="col-span-2 text-xs" style={{ color: "#a4a5ad" }}>{i.priority}</div>
                <div className="col-span-2 text-xs" style={{ color: "#8a8f98", fontFamily: "var(--font-geist-mono)" }}>
                  {i.updated}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Meta info */}
          <div className="mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs" style={{ borderTop: "1px solid #1a1b1d", color: "#8a8f98" }}>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Paleta REAL (refero.design)</div>
              <div className="space-y-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                <div><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ backgroundColor: "#08090a", outline: "1px solid #333" }} />Pitch Black: #08090a</div>
                <div><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ backgroundColor: "#0f1011" }} />Graphite: #0f1011</div>
                <div><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ backgroundColor: "#e4f222" }} />Neon Lime: #e4f222</div>
                <div><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ backgroundColor: "#f7f8f8" }} />Porcelain: #f7f8f8</div>
                <div><span className="inline-block w-2.5 h-2.5 rounded-sm mr-2 align-middle" style={{ backgroundColor: "#8a8f98" }} />Storm Cloud: #8a8f98</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Tipografía</div>
              <div className="space-y-1">
                <div>Inter Variable (300, 400, 510, 590)</div>
                <div>Berkeley Mono (data, IDs)</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Cuándo usar</div>
              <p className="leading-relaxed">
                Apps de uso diario, herramientas para power users, dashboards técnicos. Exo dashboard, organizadores internos.
              </p>
              <p className="mt-2 text-[10px] opacity-70">DESIGN.md extraído de styles.refero.design/style/90ce5883</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
