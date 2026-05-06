import Link from "next/link";

export default function LinearPage() {
  return (
    <div style={{ backgroundColor: "#0e0e10", color: "#f7f8f8", minHeight: "100vh" }} className="font-sans">
      {/* Top nav bar */}
      <div style={{ borderBottom: "1px solid #232328" }} className="px-4 py-2 flex items-center justify-between text-xs">
        <Link href="/" style={{ color: "#8d8f97" }} className="hover:text-white">
          ← Volver al index
        </Link>
        <div style={{ color: "#8d8f97" }}>Linear · productivity dark</div>
      </div>

      <div className="flex" style={{ minHeight: "calc(100vh - 33px)" }}>
        {/* Sidebar */}
        <aside style={{ borderRight: "1px solid #232328", width: 240 }} className="hidden md:block px-3 py-4">
          <div className="flex items-center gap-2 mb-6 px-2">
            <div className="w-6 h-6 rounded" style={{ background: "linear-gradient(135deg, #5e6ad2, #8b5cf6)" }} />
            <span className="font-semibold text-sm">Acme Workspace</span>
          </div>

          <nav className="space-y-0.5 mb-6">
            {[
              { label: "Inbox", count: "12", active: false },
              { label: "My issues", count: "3", active: true },
              { label: "Active", count: "47", active: false },
              { label: "Backlog", count: "128", active: false },
            ].map((it) => (
              <div
                key={it.label}
                className="flex items-center justify-between px-2 py-1.5 text-sm rounded cursor-pointer"
                style={{
                  backgroundColor: it.active ? "#1d1d22" : "transparent",
                  color: it.active ? "#fff" : "#a4a5ad",
                }}
              >
                <span>{it.label}</span>
                <span className="text-xs" style={{ color: "#6b6c75" }}>{it.count}</span>
              </div>
            ))}
          </nav>

          <div className="text-[11px] uppercase tracking-wider mb-2 px-2" style={{ color: "#6b6c75" }}>Projects</div>
          <nav className="space-y-0.5">
            {["Mobile redesign", "API v2", "Onboarding flow", "Auth migration"].map((p) => (
              <div key={p} className="flex items-center gap-2 px-2 py-1.5 text-sm rounded cursor-pointer" style={{ color: "#a4a5ad" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#5e6ad2" }} />
                <span>{p}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-8 gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold tracking-tight">My issues</h1>
              <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#1d1d22", color: "#a4a5ad" }}>
                3 open
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded"
                style={{ backgroundColor: "#1d1d22", color: "#8d8f97" }}
              >
                <span style={{ fontFamily: "var(--font-geist-mono)" }} className="text-xs">⌘ K</span>
                <span>Search...</span>
              </div>
              <button
                className="px-3 py-1.5 text-sm rounded font-medium"
                style={{ backgroundColor: "#5e6ad2", color: "#fff" }}
              >
                + New issue
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Open", value: "24", delta: "+3" },
              { label: "In progress", value: "8", delta: "+1" },
              { label: "Done this week", value: "31", delta: "+12" },
              { label: "Velocity", value: "2.4d", delta: "−0.3" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-4"
                style={{ backgroundColor: "#181820", border: "1px solid #232328" }}
              >
                <div className="text-xs mb-1" style={{ color: "#8d8f97" }}>{s.label}</div>
                <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "#22c55e", fontFamily: "var(--font-geist-mono)" }}>
                  {s.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Issues list */}
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #232328" }}>
            <div className="px-4 py-3 text-xs uppercase tracking-wider grid grid-cols-12 gap-3" style={{ backgroundColor: "#181820", color: "#6b6c75" }}>
              <div className="col-span-1">ID</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Updated</div>
            </div>
            {[
              { id: "ENG-142", title: "Mobile drawer animation feels janky on Android", status: "In Progress", color: "#eab308", priority: "High", updated: "2h" },
              { id: "ENG-141", title: "Auth: refresh token rotation breaks SSE stream", status: "Todo", color: "#5e6ad2", priority: "Urgent", updated: "5h" },
              { id: "ENG-138", title: "Settings page: avatar upload returns 500 on retry", status: "Review", color: "#a855f7", priority: "Med", updated: "1d" },
              { id: "ENG-135", title: "Dashboard query >2s when org has 10k+ rows", status: "Backlog", color: "#6b6c75", priority: "Med", updated: "3d" },
              { id: "ENG-130", title: "Tooltip: cursor jumps to top on first hover", status: "Done", color: "#22c55e", priority: "Low", updated: "1w" },
            ].map((i, idx) => (
              <div
                key={i.id}
                className="px-4 py-3 grid grid-cols-12 gap-3 text-sm items-center"
                style={{ borderTop: idx === 0 ? "none" : "1px solid #232328" }}
              >
                <div className="col-span-1 text-xs" style={{ fontFamily: "var(--font-geist-mono)", color: "#8d8f97" }}>
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
                <div className="col-span-2 text-xs" style={{ color: "#8d8f97", fontFamily: "var(--font-geist-mono)" }}>
                  {i.updated}
                </div>
              </div>
            ))}
          </div>

          {/* Meta info */}
          <div className="mt-12 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs" style={{ borderTop: "1px solid #232328", color: "#8d8f97" }}>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Paleta</div>
              <div className="space-y-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                <div>--bg: #0e0e10</div>
                <div>--bg-card: #181820</div>
                <div>--accent: #5e6ad2</div>
                <div>--fg: #f7f8f8</div>
                <div>--fg-muted: #8d8f97</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Tipografía</div>
              <div className="space-y-1">
                <div>Geist Sans (UI)</div>
                <div>Geist Mono (datos, IDs)</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2" style={{ color: "#f7f8f8" }}>Cuándo usar</div>
              <p className="leading-relaxed">
                Apps de uso diario, herramientas para power users, dashboards técnicos. Exo, organizadores internos, panels de gestión.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
