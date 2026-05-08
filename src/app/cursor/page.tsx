"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const SOFT_SHADOW = "0 1px 0 rgba(38,37,16,0.04), 0 4px 14px -4px rgba(38,37,16,0.08)";

export default function CursorPage() {
  const e = getEstilo("cursor")!;
  const [activeView, setActiveView] = useState("files");

  /* ============== TAB 1 — MARKETING ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-20 sm:pt-16 sm:pb-24 overflow-hidden"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: "#f54e00" }}>
        cursor.studio · v0.42
      </p>
      <h1 className="text-5xl sm:text-7xl font-semibold tracking-[-0.025em] leading-[0.95] mb-6 max-w-3xl" style={{ color: "#262510" }}>
        The AI-first<br />
        <span style={{ color: "#f54e00" }}>IDE.</span>
      </h1>
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-9" style={{ color: "#5d5c52" }}>
        Un editor que entiende tu codebase entero. Predice el próximo paso, refactoriza con contexto, y te deja pensar en el problema, no en el archivo.
      </p>

      <div className="flex items-center gap-3 flex-wrap mb-14">
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 12px 24px -6px rgba(38,37,16,0.18)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
          style={{ backgroundColor: "#262510", color: "#f7f7f4", borderRadius: "6px", boxShadow: SOFT_SHADOW }}
        >
          <span className="font-mono text-xs opacity-70">↓</span> Download
        </motion.button>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
          style={{ border: "1px solid #d6d4ce", color: "#262510", backgroundColor: "#ffffff", borderRadius: "6px", boxShadow: SOFT_SHADOW }}
        >
          <span className="font-mono text-xs opacity-70">≡</span> GitHub
        </motion.button>
        <span className="font-mono text-xs ml-2" style={{ color: "#7a7974" }}>↑ free for individuals</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {[
          { tit: "Tab predictions", desc: "Acepta sugerencias multi-línea con un solo tab. Aprende del proyecto.", chip: "⌘TAB" },
          { tit: "Codebase context", desc: "Indexa todo el repo. Pregunta sobre archivos que ni abriste todavía.", chip: "@codebase" },
          { tit: "Inline edits", desc: "Refactor con prompt directo en el editor. Sin salir del flow.", chip: "⌘K" },
        ].map((f, i) => (
          <motion.div
            key={f.tit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            whileHover={{ y: -3 }}
            className="p-5 bg-white"
            style={{ border: "1px solid #e6e5e0", borderRadius: "8px", boxShadow: SOFT_SHADOW }}
          >
            <span className="inline-block font-mono text-[10px] px-2 py-0.5 mb-3" style={{ backgroundColor: "#f7f7f4", color: "#f54e00", border: "1px solid #e6e5e0", borderRadius: "4px" }}>
              {f.chip}
            </span>
            <h4 className="font-semibold mb-1.5" style={{ color: "#262510" }}>{f.tit}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#5d5c52" }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="p-4 font-mono text-xs leading-relaxed" style={{ backgroundColor: "#262510", color: "#f7f7f4", borderRadius: "8px", boxShadow: SOFT_SHADOW }}>
        <p className="opacity-50 mb-1">$ curl -fsSL cursor.studio/install.sh | sh</p>
        <p>installing cursor v0.42 ··· <span style={{ color: "#f54e00" }}>done</span></p>
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS IDE ============== */

  const FilesView = (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-4 p-4 bg-white font-mono text-xs leading-relaxed" style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW, color: "#262510" }}>
        <p className="text-[10px] uppercase tracking-[0.18em] mb-3 font-semibold" style={{ color: "#7a7974" }}>EXPLORER</p>
        <div className="space-y-0.5">
          <p>▾ acme-app</p>
          <p className="pl-3">▾ src</p>
          <p className="pl-6">▾ app</p>
          <p className="pl-9">├ <span style={{ color: "#f54e00" }}>page.tsx</span></p>
          <p className="pl-9">├ layout.tsx</p>
          <p className="pl-9">└ globals.css</p>
          <p className="pl-6">▾ components</p>
          <p className="pl-9">├ button.tsx</p>
          <p className="pl-9">├ card.tsx</p>
          <p className="pl-9">└ nav.tsx</p>
          <p className="pl-6">▸ lib</p>
          <p className="pl-3">▸ public</p>
          <p className="pl-3">─ package.json</p>
          <p className="pl-3">─ tsconfig.json</p>
          <p className="pl-3">─ next.config.ts</p>
          <p>▸ node_modules</p>
          <p>─ .gitignore</p>
          <p>─ README.md</p>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8 bg-white" style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW, overflow: "hidden" }}>
        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs" style={{ borderBottom: "1px solid #e6e5e0", backgroundColor: "#f7f7f4" }}>
          <span className="px-2 py-0.5" style={{ backgroundColor: "#ffffff", border: "1px solid #e6e5e0", borderRadius: "4px", color: "#f54e00" }}>page.tsx</span>
          <span style={{ color: "#7a7974" }}>layout.tsx</span>
          <span style={{ color: "#7a7974" }}>nav.tsx</span>
        </div>
        <div className="p-4 font-mono text-xs leading-relaxed" style={{ color: "#262510" }}>
          {[
            { n: 1, c: <><span style={{color:"#7a7974"}}>{"// "}page.tsx</span></> },
            { n: 2, c: <><span style={{color:"#9d4edd"}}>import</span> {"{ "}<span style={{color:"#f54e00"}}>useState</span>{" }"} <span style={{color:"#9d4edd"}}>from</span> <span style={{color:"#5d2a1a"}}>{"\"react\""}</span></> },
            { n: 3, c: "" },
            { n: 4, c: <><span style={{color:"#9d4edd"}}>export default function</span> <span style={{color:"#f54e00"}}>HomePage</span>() {"{"}</> },
            { n: 5, c: <>  <span style={{color:"#9d4edd"}}>const</span> [count, setCount] = <span style={{color:"#f54e00"}}>useState</span>(0)</> },
            { n: 6, c: "" },
            { n: 7, c: <>  <span style={{color:"#9d4edd"}}>return</span> (</> },
            { n: 8, c: <>    {"<"}<span style={{color:"#f54e00"}}>main</span> className=<span style={{color:"#5d2a1a"}}>{"\"p-8\""}</span>{">"}</> },
            { n: 9, c: <>      {"<"}<span style={{color:"#f54e00"}}>h1</span>{">"}Hello {"{"}count{"}"}{"<"}/<span style={{color:"#f54e00"}}>h1</span>{">"}</> },
            { n: 10, c: <>    {"<"}/<span style={{color:"#f54e00"}}>main</span>{">"}</> },
            { n: 11, c: "  )" },
            { n: 12, c: "}" },
          ].map((l) => (
            <div key={l.n} className="flex gap-3">
              <span className="select-none" style={{ color: "#bcbab2", width: "20px", textAlign: "right" }}>{l.n}</span>
              <span>{l.c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SearchView = (
    <div>
      <div className="mb-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "#7a7974" }}>SEARCH ACROSS WORKSPACE</p>
        <div className="flex items-center gap-2 px-3 py-2 bg-white font-mono text-xs" style={{ border: "1px solid #d6d4ce", borderRadius: "6px", boxShadow: SOFT_SHADOW }}>
          <span style={{ color: "#7a7974" }}>›</span>
          <span style={{ color: "#262510" }}>useState</span>
          <span className="ml-auto px-1.5 py-0.5" style={{ backgroundColor: "#f7f7f4", color: "#7a7974", border: "1px solid #e6e5e0", borderRadius: "3px" }}>aA</span>
          <span className="px-1.5 py-0.5" style={{ backgroundColor: "#f7f7f4", color: "#7a7974", border: "1px solid #e6e5e0", borderRadius: "3px" }}>.*</span>
        </div>
        <p className="text-xs mt-2" style={{ color: "#7a7974" }}>34 resultados en 12 archivos</p>
      </div>

      <div className="bg-white font-mono text-xs" style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW }}>
        {[
          { file: "src/app/page.tsx", line: 5, code: "const [count, setCount] = useState(0)" },
          { file: "src/app/page.tsx", line: 12, code: "const [open, setOpen] = useState(false)" },
          { file: "src/components/nav.tsx", line: 8, code: "const [active, setActive] = useState(\"home\")" },
          { file: "src/components/card.tsx", line: 14, code: "const [hovered, setHovered] = useState<string | null>(null)" },
          { file: "src/lib/use-toast.ts", line: 22, code: "const [toasts, setToasts] = useState<Toast[]>([])" },
          { file: "src/lib/use-toast.ts", line: 41, code: "useState // re-export" },
          { file: "src/components/button.tsx", line: 11, code: "const [loading, setLoading] = useState(false)" },
        ].map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ backgroundColor: "#f7f7f4" }}
            className="px-4 py-2 flex items-baseline gap-3 leading-relaxed"
            style={{ borderBottom: i < 6 ? "1px solid #f0eee9" : "none" }}
          >
            <span style={{ color: "#7a7974" }}>{r.file}:{r.line}</span>
            <span className="truncate" style={{ color: "#262510" }}>
              {r.code.split("useState").map((part, j, arr) => (
                <span key={j}>
                  {part}
                  {j < arr.length - 1 && <span style={{ color: "#f54e00", backgroundColor: "rgba(245,78,0,0.1)", padding: "0 2px" }}>useState</span>}
                </span>
              ))}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const GitView = (
    <div>
      <div className="flex items-center gap-2 mb-4 font-mono text-xs">
        <span className="px-2 py-0.5" style={{ backgroundColor: "#262510", color: "#f7f7f4", borderRadius: "4px" }}>● feature/tabs-rework</span>
        <span style={{ color: "#7a7974" }}>↑ 3</span>
        <span style={{ color: "#7a7974" }}>↓ 0</span>
        <span style={{ color: "#7a7974" }}>· clean</span>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-7 bg-white font-mono text-xs" style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW }}>
          <p className="px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ borderBottom: "1px solid #e6e5e0", color: "#7a7974" }}>
            COMMITS · LAST 6
          </p>
          {[
            { sha: "a8f3c21", msg: "feat: tabs + internal-nav pattern", autor: "ignacio", time: "12 min" },
            { sha: "c1d2e90", msg: "fix: hover state on card", autor: "ignacio", time: "1 h" },
            { sha: "9b4e7a5", msg: "chore: bump motion to v12", autor: "claude", time: "3 h" },
            { sha: "5e2f0c4", msg: "refactor: extract DividerReveal", autor: "ignacio", time: "yesterday" },
            { sha: "7d8b3a1", msg: "docs: AGENTS notes", autor: "ignacio", time: "yesterday" },
            { sha: "2a1c4e8", msg: "init: project skeleton", autor: "ignacio", time: "2 days" },
          ].map((c, i) => (
            <motion.div
              key={c.sha}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 flex items-baseline gap-3 leading-relaxed"
              style={{ borderBottom: i < 5 ? "1px solid #f0eee9" : "none", color: "#262510" }}
            >
              <span style={{ color: "#f54e00" }}>{c.sha}</span>
              <span className="flex-1 truncate">{c.msg}</span>
              <span style={{ color: "#7a7974" }}>{c.autor}</span>
              <span style={{ color: "#bcbab2" }}>{c.time}</span>
            </motion.div>
          ))}
        </div>

        <div className="col-span-12 md:col-span-5 bg-white font-mono text-xs" style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW }}>
          <p className="px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ borderBottom: "1px solid #e6e5e0", color: "#7a7974" }}>
            CHANGES
          </p>
          <div className="px-4 py-2">
            <p className="text-[10px] mb-1" style={{ color: "#7a7974" }}>Staged</p>
            {[
              { mod: "M", file: "src/app/cursor/page.tsx", color: "#a87b00" },
              { mod: "M", file: "src/app/clinico-calmado/page.tsx", color: "#a87b00" },
              { mod: "A", file: "src/components/internal-nav.tsx", color: "#3a7a3a" },
            ].map((f, i) => (
              <p key={i} className="leading-relaxed">
                <span style={{ color: f.color, marginRight: "6px" }}>{f.mod}</span>
                <span style={{ color: "#262510" }}>{f.file}</span>
              </p>
            ))}
          </div>
          <div className="px-4 py-2" style={{ borderTop: "1px solid #f0eee9" }}>
            <p className="text-[10px] mb-1" style={{ color: "#7a7974" }}>Unstaged</p>
            <p className="leading-relaxed">
              <span style={{ color: "#a87b00", marginRight: "6px" }}>M</span>
              <span style={{ color: "#262510" }}>DEVLOG.md</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const TerminalView = (
    <div>
      <div className="flex items-center gap-2 mb-3 font-mono text-xs" style={{ color: "#7a7974" }}>
        <span>zsh · acme-app</span>
        <span className="ml-auto px-2 py-0.5" style={{ backgroundColor: "#f7f7f4", border: "1px solid #e6e5e0", borderRadius: "4px", color: "#262510" }}>+</span>
        <span className="px-2 py-0.5" style={{ backgroundColor: "#f7f7f4", border: "1px solid #e6e5e0", borderRadius: "4px", color: "#262510" }}>×</span>
      </div>

      <div className="p-5 font-mono text-xs leading-relaxed" style={{ backgroundColor: "#262510", color: "#f7f7f4", borderRadius: "6px", boxShadow: SOFT_SHADOW, minHeight: "320px" }}>
        {[
          { c: <><span style={{color:"#7a7974"}}>~/acme-app</span> <span style={{color:"#f54e00"}}>$</span> npm run dev</> },
          { c: "" },
          { c: <><span style={{color:"#bcbab2"}}>{"> acme-app@0.1.0 dev"}</span></> },
          { c: <><span style={{color:"#bcbab2"}}>{"> next dev --turbopack"}</span></> },
          { c: "" },
          { c: <>  <span style={{color:"#f54e00"}}>▲</span> Next.js 16.0.0 (turbopack)</> },
          { c: <>  - Local:   http://localhost:3000</> },
          { c: <>  - Network: http://192.168.1.42:3000</> },
          { c: "" },
          { c: <> <span style={{color:"#7d9c54"}}>✓</span> Starting...</> },
          { c: <> <span style={{color:"#7d9c54"}}>✓</span> Ready in 1.2s</> },
          { c: <> <span style={{color:"#7d9c54"}}>✓</span> Compiled / in 380ms</> },
          { c: "" },
          { c: <><span style={{color:"#7a7974"}}>~/acme-app</span> <span style={{color:"#f54e00"}}>$</span> <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>▌</motion.span></> },
        ].map((l, i) => (
          <p key={i}>{l.c || " "}</p>
        ))}
      </div>
    </div>
  );

  const SettingsView = (
    <div>
      <div className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2" style={{ color: "#7a7974" }}>WORKSPACE PREFERENCES</p>
        <h2 className="text-2xl font-semibold tracking-tight" style={{ color: "#262510" }}>Settings</h2>
      </div>

      <div className="space-y-3">
        {[
          {
            sec: "Editor",
            chip: "⌘,",
            items: [
              { label: "Font family", val: "Berkeley Mono", on: true },
              { label: "Font size", val: "13px", on: true },
              { label: "Line height", val: "1.6", on: true },
              { label: "Word wrap", val: "off", on: false },
              { label: "Format on save", val: "on", on: true },
            ],
          },
          {
            sec: "AI",
            chip: "⌘L",
            items: [
              { label: "Tab predictions", val: "enabled", on: true },
              { label: "Index entire codebase", val: "enabled", on: true },
              { label: "Privacy mode", val: "off", on: false },
              { label: "Default model", val: "claude-opus-4.7", on: true },
            ],
          },
          {
            sec: "Theme",
            chip: "⌘P",
            items: [
              { label: "Color scheme", val: "Parchment", on: true },
              { label: "Accent", val: "#f54e00", on: true },
              { label: "Reduced motion", val: "off", on: false },
            ],
          },
          {
            sec: "Keybindings",
            chip: "⌘K ⌘S",
            items: [
              { label: "Open file", val: "⌘P", on: true },
              { label: "Open settings", val: "⌘,", on: true },
              { label: "Open AI chat", val: "⌘L", on: true },
              { label: "Toggle terminal", val: "⌘`", on: true },
            ],
          },
        ].map((s, i) => (
          <motion.div
            key={s.sec}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-white"
            style={{ border: "1px solid #e6e5e0", borderRadius: "6px", boxShadow: SOFT_SHADOW }}
          >
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid #f0eee9" }}>
              <p className="font-semibold" style={{ color: "#262510" }}>{s.sec}</p>
              <span className="font-mono text-[10px] px-2 py-0.5" style={{ backgroundColor: "#f7f7f4", border: "1px solid #e6e5e0", borderRadius: "3px", color: "#7a7974" }}>{s.chip}</span>
            </div>
            <div className="divide-y" style={{ borderColor: "#f0eee9" }}>
              {s.items.map((it) => (
                <div key={it.label} className="flex items-center justify-between px-4 py-2 text-sm">
                  <span style={{ color: "#262510" }}>{it.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs" style={{ color: "#7a7974" }}>{it.val}</span>
                    <span
                      className="w-8 h-4 rounded-full flex items-center px-0.5 transition-all"
                      style={{ backgroundColor: it.on ? "#f54e00" : "#d6d4ce", justifyContent: it.on ? "flex-end" : "flex-start" }}
                    >
                      <span className="w-3 h-3 rounded-full bg-white" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    files: FilesView,
    search: SearchView,
    git: GitView,
    terminal: TerminalView,
    settings: SettingsView,
  };

  /* ============== TAB 2 — IDE ============== */
  const workspace = (
    <div style={{ border: "1px solid #e6e5e0", borderRadius: "8px", minHeight: "660px", backgroundColor: "#ffffff", padding: "1rem", boxShadow: SOFT_SHADOW }}>
      <InternalNav
        variant="ascii-list"
        items={[
          { id: "files", label: "Files", shortcut: "⌘E" },
          { id: "search", label: "Search", shortcut: "⌘F" },
          { id: "git", label: "Git", shortcut: "⌃G" },
          { id: "terminal", label: "Terminal", shortcut: "⌘`" },
          { id: "settings", label: "Settings", shortcut: "⌘," },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#f54e00"
        textActive="#f54e00"
        textInactive="#7a7974"
        borderColor="#e6e5e0"
        workspaceLabel="acme-app"
        workspaceInitial="A"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#f7f7f4", color: "#262510", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e6e5e0" navColor="#7a7974" />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="ascii-bracket"
          accent="#f54e00"
          textActive="#f7f7f4"
          textInactive="#7a7974"
          bgContainer="#ffffff"
          borderColor="#d6d4ce"
          tabsClassName="mb-8"
          tabs={[
            { id: "landing", label: "Marketing", content: landing },
            { id: "workspace", label: "IDE", content: workspace },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor="#d6d4ce"
          textColor="#f54e00"
          accentColor="#f54e00"
          className="mt-16 mb-10"
          textClassName="font-mono text-[10px] uppercase tracking-[0.3em] font-semibold"
        >
          _artifact
        </DividerReveal>

        <StyleFooter estilo={e} textColor="#7a7974" borderColor="#e6e5e0" monoFont="var(--font-roboto-mono)" />
      </main>
    </div>
  );
}
