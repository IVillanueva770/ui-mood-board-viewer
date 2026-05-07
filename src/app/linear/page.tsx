"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const ISSUES = [
  { id: "ENG-142", title: "Mobile drawer animation feels janky on Android", status: "In Progress", color: "#eab308", priority: "High", updated: "2h" },
  { id: "ENG-141", title: "Auth: refresh token rotation breaks SSE stream", status: "Todo", color: "#e4f222", priority: "Urgent", updated: "5h" },
  { id: "ENG-138", title: "Settings page: avatar upload returns 500 on retry", status: "Review", color: "#a855f7", priority: "Med", updated: "1d" },
  { id: "ENG-135", title: "Dashboard query >2s when org has 10k+ rows", status: "Backlog", color: "#62666d", priority: "Med", updated: "3d" },
  { id: "ENG-130", title: "Tooltip: cursor jumps to top on first hover", status: "Done", color: "#22c55e", priority: "Low", updated: "1w" },
];

export default function LinearPage() {
  const [hoveredIssue, setHoveredIssue] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<string>("my-issues");

  const heroComercial = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 h-64 -z-0 opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 100%, #e4f222 0%, transparent 60%)" }}
      />
      <div className="relative max-w-5xl mx-auto py-20 sm:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold" style={{ color: "#e4f222", fontFamily: "var(--font-geist-mono)" }}>
          v2026.05 · ahora con cycles inteligentes
        </p>
        <h1 className="text-4xl sm:text-7xl font-semibold tracking-[-0.025em] leading-[1.02] mb-6">
          Linear is built for<br />
          <span style={{ color: "#e4f222" }}>those who move fast.</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "#a4a5ad" }}>
          La forma moderna de construir productos: keyboard-first, sin esperar segundos en cada acción, con un equipo entero alineado por defecto.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 0 4px rgba(228,242,34,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 text-sm font-semibold rounded"
            style={{ backgroundColor: "#e4f222", color: "#08090a" }}
          >
            Get started — free
          </motion.button>
          <motion.button
            whileHover={{ borderColor: "#e4f222" }}
            className="px-5 py-2.5 text-sm font-semibold rounded transition-colors"
            style={{ backgroundColor: "transparent", color: "#f7f8f8", border: "1px solid #2a2b2e" }}
          >
            Talk to sales →
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap text-xs" style={{ color: "#62666d" }}>
          <span className="uppercase tracking-wider">10.000+ teams</span>
          <span style={{ color: "#2a2b2e" }}>·</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>Vercel</span>
          <span style={{ color: "#2a2b2e" }}>·</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>Ramp</span>
          <span style={{ color: "#2a2b2e" }}>·</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>Cash App</span>
          <span style={{ color: "#2a2b2e" }}>·</span>
          <span style={{ fontFamily: "var(--font-geist-mono)" }}>Mercury</span>
        </div>
      </div>
    </motion.section>
  );

  /* ====== SUB-VISTAS DEL WORKSPACE ====== */

  const MyIssuesView = (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between mb-8 gap-3 flex-wrap"
      >
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold tracking-tight">My issues</h1>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#0f1011", color: "#a4a5ad", border: "1px solid #1a1b1d" }}>
            3 open
          </span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ borderColor: "#e4f222" }}
            className="flex items-center gap-2 px-3 py-1.5 text-sm rounded transition-colors"
            style={{ backgroundColor: "#0f1011", color: "#8a8f98", border: "1px solid #1a1b1d" }}
          >
            <span style={{ fontFamily: "var(--font-geist-mono)" }} className="text-xs">⌘ K</span>
            <span>Search...</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(228, 242, 34, 0.25)" }}
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
            transition={{ duration: 0.3, delay: 0.05 + i * 0.04 }}
            whileHover={{ borderColor: "#2a2b2e", y: -2 }}
            className="rounded-lg p-4 transition-colors cursor-pointer"
            style={{ backgroundColor: "#0f1011", border: "1px solid #1a1b1d" }}
          >
            <div className="text-xs mb-1" style={{ color: "#8a8f98" }}>{s.label}</div>
            <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
            <div className="text-xs mt-1" style={{ color: "#e4f222", fontFamily: "var(--font-geist-mono)" }}>{s.delta}</div>
          </motion.div>
        ))}
      </div>

      {/* Issues list with sibling-dim */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="rounded-lg overflow-hidden"
        style={{ border: "1px solid #1a1b1d" }}
        onMouseLeave={() => setHoveredIssue(null)}
      >
        <div className="px-4 py-3 text-xs uppercase tracking-wider grid grid-cols-12 gap-3" style={{ backgroundColor: "#0f1011", color: "#62666d" }}>
          <div className="col-span-1">ID</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-2">Updated</div>
        </div>
        {ISSUES.map((i, idx) => {
          const dim = hoveredIssue !== null && hoveredIssue !== i.id;
          const focused = hoveredIssue === i.id;
          return (
            <motion.div
              key={i.id}
              tabIndex={0}
              onMouseEnter={() => setHoveredIssue(i.id)}
              onFocus={() => setHoveredIssue(i.id)}
              onBlur={() => setHoveredIssue(null)}
              animate={{ backgroundColor: focused ? "#0c0d0e" : "transparent", opacity: dim ? 0.45 : 1 }}
              transition={{ duration: 0.15 }}
              className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center cursor-pointer focus-visible:outline-none"
              style={{ borderTop: idx === 0 ? "none" : "1px solid #1a1b1d" }}
            >
              <div className="col-span-1 text-xs" style={{ fontFamily: "var(--font-geist-mono)", color: "#8a8f98" }}>{i.id}</div>
              <div className="col-span-5">{i.title}</div>
              <div className="col-span-2">
                <span className="inline-flex items-center gap-1.5 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: i.color }} />
                  {i.status}
                </span>
              </div>
              <div className="col-span-2 text-xs" style={{ color: "#a4a5ad" }}>{i.priority}</div>
              <div className="col-span-2 text-xs" style={{ color: "#8a8f98", fontFamily: "var(--font-geist-mono)" }}>{i.updated}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );

  const InboxView = (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8 gap-3 flex-wrap"
      >
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold tracking-tight">Inbox</h1>
          <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#0f1011", color: "#e4f222", border: "1px solid #1a1b1d" }}>
            12 unread
          </span>
        </div>
        <motion.button
          whileHover={{ borderColor: "#e4f222" }}
          className="px-3 py-1.5 text-xs rounded"
          style={{ backgroundColor: "#0f1011", color: "#8a8f98", border: "1px solid #1a1b1d" }}
        >
          Mark all read
        </motion.button>
      </motion.div>

      <div className="space-y-2">
        {[
          { type: "mention", from: "Lila C.", action: "mentioned you in", target: "ENG-142", body: "@you can you take a look at the easing on the drawer? Feels off above 60fps.", time: "4m", unread: true },
          { type: "review", from: "Marco P.", action: "requested review on", target: "ENG-138", body: "PR #2381 ready for re-review after the validation refactor.", time: "1h", unread: true },
          { type: "assigned", from: "Karen W.", action: "assigned to you", target: "ENG-141", body: "Picked up by you from triage. Marked Urgent.", time: "3h", unread: true },
          { type: "comment", from: "Tomás R.", action: "commented on", target: "ENG-130", body: "Same repro on macOS Safari. Adding video.", time: "1d", unread: false },
          { type: "completed", from: "Jonas L.", action: "completed", target: "ENG-128", body: "Closed via deploy 2026.05.07-prod.", time: "2d", unread: false },
        ].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ x: 3, borderColor: "#2a2b2e" }}
            className="p-4 rounded-lg cursor-pointer flex gap-4 items-start"
            style={{ border: "1px solid #1a1b1d", backgroundColor: n.unread ? "#0f1011" : "transparent" }}
          >
            {n.unread && (
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#e4f222" }} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap text-sm">
                <span className="font-semibold">{n.from}</span>
                <span style={{ color: "#8a8f98" }}>{n.action}</span>
                <span className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "#1a1b1d", color: "#a4a5ad" }}>{n.target}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#a4a5ad" }}>{n.body}</p>
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: "#62666d", fontFamily: "var(--font-geist-mono)" }}>{n.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ActiveView = (
    <div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight mb-2">Active issues</h1>
        <p className="text-sm" style={{ color: "#8a8f98" }}>47 issues activos en los 4 proyectos del cycle actual.</p>
      </div>

      <div className="space-y-2">
        {[
          { id: "ENG-142", title: "Mobile drawer animation feels janky on Android", project: "Mobile redesign", assignee: "MR", status: "In Progress", color: "#eab308" },
          { id: "ENG-141", title: "Auth: refresh token rotation breaks SSE stream", project: "Auth migration", assignee: "JG", status: "Todo", color: "#e4f222" },
          { id: "ENG-140", title: "Onboarding: skip step 3 on returning user flow", project: "Onboarding flow", assignee: "MR", status: "In Progress", color: "#eab308" },
          { id: "ENG-139", title: "API v2: rate limit headers missing on 429", project: "API v2", assignee: "TR", status: "In Review", color: "#a855f7" },
          { id: "ENG-138", title: "Settings page: avatar upload returns 500 on retry", project: "Mobile redesign", assignee: "JG", status: "In Review", color: "#a855f7" },
          { id: "ENG-137", title: "Optimize images endpoint cold-start", project: "API v2", assignee: "KW", status: "Todo", color: "#e4f222" },
        ].map((it, i) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            whileHover={{ x: 2, backgroundColor: "#0c0d0e", borderColor: "#2a2b2e" }}
            className="px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer"
            style={{ border: "1px solid #1a1b1d" }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: it.color }} />
            <span className="font-mono text-xs flex-shrink-0" style={{ color: "#62666d" }}>{it.id}</span>
            <span className="flex-1 text-sm truncate">{it.title}</span>
            <span className="text-xs hidden md:block" style={{ color: "#8a8f98" }}>{it.project}</span>
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
              style={{ backgroundColor: "#1a1b1d", color: "#e4f222" }}
            >
              {it.assignee}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const CyclesView = (
    <div>
      <div className="mb-8 flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-semibold tracking-tight mb-1">Cycle 47</h1>
          <p className="text-sm" style={{ color: "#8a8f98" }}>May 5 — May 19 · 2 weeks</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded font-semibold" style={{ backgroundColor: "#e4f222", color: "#08090a" }}>
          Active
        </span>
      </div>

      {/* Progress card */}
      <motion.div
        whileHover={{ borderColor: "#2a2b2e" }}
        className="p-5 rounded-lg mb-6"
        style={{ backgroundColor: "#0f1011", border: "1px solid #1a1b1d" }}
      >
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-sm font-semibold">Cycle progress</p>
          <p className="text-xs" style={{ color: "#8a8f98", fontFamily: "var(--font-geist-mono)" }}>61% · 9d left</p>
        </div>
        <div className="h-2 rounded-full overflow-hidden mb-4" style={{ backgroundColor: "#1a1b1d" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "61%" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #e4f222, #a3c40d)" }}
          />
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { val: "23", label: "Scoped" },
            { val: "14", label: "Done" },
            { val: "9", label: "Remaining" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold tracking-tight">{s.val}</div>
              <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "#62666d" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Burndown chart */}
      <div className="p-5 rounded-lg" style={{ backgroundColor: "#0f1011", border: "1px solid #1a1b1d" }}>
        <p className="text-sm font-semibold mb-4">Burndown</p>
        <svg viewBox="0 0 400 100" className="w-full">
          <line x1="0" y1="0" x2="400" y2="100" stroke="#2a2b2e" strokeWidth="1" strokeDasharray="3 3" />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            d="M0,0 L40,8 L80,16 L120,28 L160,32 L200,42 L240,52 L280,58"
            fill="none"
            stroke="#e4f222"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-between text-xs mt-2" style={{ color: "#62666d", fontFamily: "var(--font-geist-mono)" }}>
          <span>D1</span>
          <span>D5</span>
          <span>D10</span>
          <span>D14</span>
        </div>
      </div>
    </div>
  );

  const ProjectsView = (
    <div>
      <div className="mb-8 flex items-end justify-between flex-wrap gap-3">
        <h1 className="text-xl font-semibold tracking-tight">Projects</h1>
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(228, 242, 34, 0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="px-3 py-1.5 text-sm rounded font-semibold"
          style={{ backgroundColor: "#e4f222", color: "#08090a" }}
        >
          + New project
        </motion.button>
      </div>

      <div className="space-y-3">
        {[
          { name: "Mobile redesign", lead: "MR", health: "On track", color: "#22c55e", progress: 72, deadline: "Jun 1", issues: "12/16" },
          { name: "API v2", lead: "TR", health: "At risk", color: "#eab308", progress: 48, deadline: "Jul 15", issues: "8/22" },
          { name: "Onboarding flow", lead: "MR", health: "On track", color: "#22c55e", progress: 91, deadline: "May 28", issues: "10/11" },
          { name: "Auth migration", lead: "JG", health: "Off track", color: "#ef4444", progress: 23, deadline: "Aug 1", issues: "3/14" },
        ].map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ y: -2, borderColor: "#2a2b2e" }}
            className="p-5 rounded-lg cursor-pointer"
            style={{ backgroundColor: "#0f1011", border: "1px solid #1a1b1d" }}
          >
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <h3 className="font-semibold mb-1">{p.name}</h3>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#8a8f98" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                  <span>{p.health}</span>
                  <span style={{ color: "#2a2b2e" }}>·</span>
                  <span style={{ fontFamily: "var(--font-geist-mono)" }}>Due {p.deadline}</span>
                  <span style={{ color: "#2a2b2e" }}>·</span>
                  <span style={{ fontFamily: "var(--font-geist-mono)" }}>{p.issues} issues</span>
                </div>
              </div>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ backgroundColor: "#1a1b1d", color: "#e4f222" }}
              >
                {p.lead}
              </span>
            </div>

            <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "#1a1b1d" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.progress}%` }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="h-full"
                style={{ backgroundColor: p.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    inbox: InboxView,
    "my-issues": MyIssuesView,
    active: ActiveView,
    cycles: CyclesView,
    projects: ProjectsView,
  };

  const workspace = (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #1a1b1d", minHeight: "600px" }}>
      <InternalNav
        variant="tech-sidebar"
        items={[
          { id: "inbox", label: "Inbox", icon: "✉", badge: "12" },
          { id: "my-issues", label: "My issues", badge: "3" },
          { id: "active", label: "Active", badge: "47" },
          { id: "cycles", label: "Cycles" },
          { id: "projects", label: "Projects", badge: "4" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#e4f222"
        bgContainer="#0a0b0c"
        bgActive="#0f1011"
        textActive="#ffffff"
        textInactive="#a4a5ad"
        borderColor="#1a1b1d"
        workspaceLabel="Acme"
        workspaceInitial="A"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

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
        <Link href="/" transitionTypes={["nav-back"]} style={{ color: "#8a8f98" }} className="hover:text-white transition-colors">
          ← Volver al index
        </Link>
        <div style={{ color: "#8a8f98" }}>Linear (real) · midnight command center · refero</div>
      </motion.div>

      <main className="px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <StyleTabs
            variant="glass-line"
            accent="#e4f222"
            textActive="#f7f8f8"
            textInactive="#62666d"
            borderColor="#1a1b1d"
            tabsClassName="mb-10"
            tabs={[
              { id: "marketing", label: "Marketing", content: heroComercial },
              { id: "workspace", label: "Workspace", content: workspace },
            ]}
          />

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
        </div>
      </main>
    </div>
  );
}
