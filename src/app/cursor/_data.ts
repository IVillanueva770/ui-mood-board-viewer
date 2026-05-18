/**
 * cursor — datos del dominio + tipos. Estética "estudio de software cálido".
 *
 * Tokens REALES refero (DESIGN.md de cursor.com), NO tocar a ojo:
 *   Canvas Parchment #f7f7f4 · Inkwell #262510 · accent #f54e00.
 *
 * Única fuente de datos: enchufar un backend = tocar este archivo. Cada pieza
 * recibe lo suyo por props y no sabe si vino de mock o de un fetch.
 */

export const palette = {
  bg: "#f7f7f4", // Canvas Parchment
  ink: "#262510", // Inkwell
  muted: "#7a7974",
  accent: "#f54e00", // Cursor orange
  border: "#e6e5e0",
  borderStrong: "#d6d4ce",
  hair: "#f0eee9",
  faint: "#bcbab2",
  card: "#ffffff",
} as const;

/**
 * Sombra multi-capa cálida en reposo (la firma del "warm studio": nunca flat,
 * tinte Inkwell). El hover la profundiza vía `useStudioMotion`.
 */
export const REST_SHADOW =
  "0 1px 2px rgba(38,37,16,0.04), 0 2px 6px -2px rgba(38,37,16,0.06), 0 6px 16px -7px rgba(38,37,16,0.09)";

/** Paleta de sintaxis cálida sobre parchment (WCAG: todo ≥ 4.5:1 sobre #fff). */
export const syn = {
  kw: "#a23b2d",
  fn: "#f54e00",
  str: "#5d2a1a",
  com: "#a8a59a",
  num: "#9d6b1f",
  var: "#3a5f8a",
  pun: "#262510",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Feature = { tit: string; desc: string; chip: string };

export type Plan = {
  nombre: string;
  precio: string;
  periodo: string;
  desc: string;
  features: string[];
  cta: string;
  destacado?: boolean;
};

export type ChangelogEntry = {
  ver: string;
  fecha: string;
  tag: "feature" | "fix" | "perf";
  titulo: string;
  detalle: string;
};

export type Seg = { x: string; k?: keyof typeof syn };
export type CodeLine = { n: number; segs: Seg[]; mark?: "add" };

export type FileNode =
  | { kind: "file"; id: string; name: string; active?: boolean; status?: "M" | "A" }
  | { kind: "dir"; id: string; name: string; defaultOpen?: boolean; children: FileNode[] };

export type EditorTab = { name: string; active?: boolean; dirty?: boolean };

export type ChatMsg = { from: "user" | "ai"; text: string };
export type DiffLine = { sign: "+" | "-" | " "; text: string };

export type SettingsItem = { label: string; val: string; on: boolean };
export type SettingsSection = { sec: string; chip: string; items: SettingsItem[] };

export type PaletteCmd = { icon: string; label: string; hint: string; group: string };

/* ---------- Datos ---------- */

export const cursorData = {
  /* Externo */
  features: [
    { tit: "Tab predictions", desc: "Acepta sugerencias multi-línea con un tab. Aprende del proyecto, no de internet.", chip: "⌘TAB" },
    { tit: "Codebase context", desc: "Indexa el repo entero. Preguntá sobre archivos que ni abriste todavía.", chip: "@codebase" },
    { tit: "Inline edits", desc: "Refactor con un prompt directo en el editor, sin salir del flow.", chip: "⌘K" },
    { tit: "Privacy mode", desc: "Tu código nunca se guarda ni entrena modelos. SOC 2 Type II.", chip: "🔒" },
  ] satisfies Feature[],

  planes: [
    {
      nombre: "Hobby",
      precio: "$0",
      periodo: "/siempre",
      desc: "Para arrancar y proyectos personales.",
      features: ["2.000 completions / mes", "50 requests lentos", "Editor completo"],
      cta: "Descargar",
    },
    {
      nombre: "Pro",
      precio: "$20",
      periodo: "/mes",
      desc: "Para el que vive en el editor.",
      features: ["Completions ilimitadas", "500 requests rápidos", "Codebase index", "Privacy mode"],
      cta: "Probar 14 días",
      destacado: true,
    },
    {
      nombre: "Business",
      precio: "$40",
      periodo: "/usuario",
      desc: "Para equipos con SSO y control.",
      features: ["Todo lo de Pro", "SSO / SAML", "Admin & analytics", "Zero data retention"],
      cta: "Contactar",
    },
  ] satisfies Plan[],

  changelog: [
    { ver: "0.42", fecha: "Hoy", tag: "feature", titulo: "Codebase-wide refactors", detalle: "⌘K ahora razona sobre todo el repo indexado, no solo el archivo abierto." },
    { ver: "0.41", fecha: "Hace 6 días", tag: "perf", titulo: "Indexado 3× más rápido", detalle: "Repos de 100k archivos indexan en < 40s en frío." },
    { ver: "0.40", fecha: "Hace 2 semanas", tag: "feature", titulo: "Panel de AI inline", detalle: "Diffs sugeridos con apply / reject por hunk." },
    { ver: "0.39", fecha: "Hace 3 semanas", tag: "fix", titulo: "Tab predictions en JSX", detalle: "Ya no rompe el cursor al aceptar dentro de atributos." },
  ] satisfies ChangelogEntry[],

  /* Interno — IDE */
  workspace: { repo: "acme-app", branch: "feature/ai-panel", ahead: 3, file: "src/app/dashboard/page.tsx" },

  fileTree: [
    {
      kind: "dir",
      id: "src",
      name: "src",
      defaultOpen: true,
      children: [
        {
          kind: "dir",
          id: "app",
          name: "app",
          defaultOpen: true,
          children: [
            {
              kind: "dir",
              id: "dashboard",
              name: "dashboard",
              defaultOpen: true,
              children: [
                { kind: "file", id: "f-dash", name: "page.tsx", active: true, status: "M" },
                { kind: "file", id: "f-loading", name: "loading.tsx" },
              ],
            },
            { kind: "file", id: "f-layout", name: "layout.tsx" },
            { kind: "file", id: "f-globals", name: "globals.css" },
          ],
        },
        {
          kind: "dir",
          id: "lib",
          name: "lib",
          children: [
            { kind: "file", id: "f-fetch", name: "fetch-metrics.ts", status: "A" },
            { kind: "file", id: "f-format", name: "format.ts" },
          ],
        },
        {
          kind: "dir",
          id: "components",
          name: "components",
          children: [
            { kind: "file", id: "f-card", name: "metric-card.tsx" },
            { kind: "file", id: "f-chart", name: "chart.tsx" },
          ],
        },
      ],
    },
    { kind: "file", id: "f-pkg", name: "package.json" },
    { kind: "file", id: "f-ts", name: "tsconfig.json" },
  ] satisfies FileNode[],

  editorTabs: [
    { name: "page.tsx", active: true, dirty: true },
    { name: "fetch-metrics.ts" },
    { name: "format.ts" },
  ] satisfies EditorTab[],

  code: [
    { n: 1, segs: [{ x: "// src/app/dashboard/page.tsx", k: "com" }] },
    { n: 2, segs: [{ x: "import", k: "kw" }, { x: " { useEffect, useState } " }, { x: "from", k: "kw" }, { x: " ", }, { x: '"react"', k: "str" }] },
    { n: 3, segs: [{ x: "import", k: "kw" }, { x: " { MetricCard } " }, { x: "from", k: "kw" }, { x: " ", }, { x: '"@/components/metric-card"', k: "str" }] },
    { n: 4, segs: [{ x: "" }] },
    { n: 5, segs: [{ x: "export default function", k: "kw" }, { x: " " }, { x: "Dashboard", k: "fn" }, { x: "() {", k: "pun" }] },
    { n: 6, segs: [{ x: "  const", k: "kw" }, { x: " [data, setData] = " }, { x: "useState", k: "fn" }, { x: "(", k: "pun" }, { x: "null", k: "kw" }, { x: ")", k: "pun" }] },
    { n: 7, segs: [{ x: "  useEffect", k: "fn" }, { x: "(() => {", k: "pun" }] },
    { n: 8, segs: [{ x: "    fetch", k: "fn" }, { x: "(", k: "pun" }, { x: '"/api/metrics"', k: "str" }, { x: ").", k: "pun" }, { x: "then", k: "fn" }, { x: "(r => r.", k: "pun" }, { x: "json", k: "fn" }, { x: "())" }] },
    { n: 9, segs: [{ x: "      .", k: "pun" }, { x: "then", k: "fn" }, { x: "(setData)" }], },
    { n: 10, segs: [{ x: "  }, [])", k: "pun" }] },
    { n: 11, segs: [{ x: "" }] },
    { n: 12, segs: [{ x: "  return", k: "kw" }, { x: " (" }] },
    { n: 13, segs: [{ x: "    <main className=", k: "pun" }, { x: '"grid gap-4"', k: "str" }, { x: ">" }] },
    { n: 14, segs: [{ x: "      {data?.metrics.", k: "pun" }, { x: "map", k: "fn" }, { x: "(m => <" }, { x: "MetricCard", k: "fn" }, { x: " key={m.id} {...m} />)}" }] },
    { n: 15, segs: [{ x: "    </main>", k: "pun" }] },
    { n: 16, segs: [{ x: "  )" }] },
    { n: 17, segs: [{ x: "}", k: "pun" }] },
  ] satisfies CodeLine[],

  chat: [
    { from: "user", text: "El fetch en page.tsx no cachea y se re-pega en cada navegación. Pasalo a un hook con SWR-style cache." },
    { from: "ai", text: "Extraje la lógica a `useMetrics()` en lib/fetch-metrics.ts con cache en memoria y revalidación. El componente queda declarativo:" },
  ] satisfies ChatMsg[],

  diff: {
    file: "src/app/dashboard/page.tsx",
    lines: [
      { sign: " ", text: "export default function Dashboard() {" },
      { sign: "-", text: "  const [data, setData] = useState(null)" },
      { sign: "-", text: "  useEffect(() => {" },
      { sign: "-", text: '    fetch("/api/metrics").then(r => r.json())' },
      { sign: "-", text: "      .then(setData)" },
      { sign: "-", text: "  }, [])" },
      { sign: "+", text: "  const { data } = useMetrics()" },
      { sign: " ", text: "  return (" },
    ] satisfies DiffLine[],
  },

  settings: [
    {
      sec: "Editor",
      chip: "⌘,",
      items: [
        { label: "Font family", val: "Berkeley Mono", on: true },
        { label: "Font size", val: "13px", on: true },
        { label: "Line height", val: "1.6", on: true },
        { label: "Format on save", val: "on", on: true },
        { label: "Word wrap", val: "off", on: false },
      ],
    },
    {
      sec: "AI",
      chip: "⌘L",
      items: [
        { label: "Tab predictions", val: "enabled", on: true },
        { label: "Index entire codebase", val: "enabled", on: true },
        { label: "Default model", val: "claude-opus-4.7", on: true },
        { label: "Privacy mode", val: "off", on: false },
      ],
    },
    {
      sec: "Theme",
      chip: "⌘P",
      items: [
        { label: "Color scheme", val: "Parchment", on: true },
        { label: "Accent", val: "#f54e00", on: true },
        { label: "Reduced motion", val: "system", on: true },
      ],
    },
  ] satisfies SettingsSection[],

  commands: [
    { icon: "→", label: "Go to File…", hint: "⌘P", group: "Navegación" },
    { icon: "#", label: "Go to Symbol…", hint: "⌘⇧O", group: "Navegación" },
    { icon: ":", label: "Go to Line…", hint: "⌃G", group: "Navegación" },
    { icon: "✦", label: "AI: Edit Selection", hint: "⌘K", group: "AI" },
    { icon: "✦", label: "AI: New Chat", hint: "⌘L", group: "AI" },
    { icon: "↻", label: "AI: Reindex Codebase", hint: "", group: "AI" },
    { icon: "▶", label: "Tasks: Run Build", hint: "", group: "Tareas" },
    { icon: "⎇", label: "Git: Commit", hint: "", group: "Git" },
    { icon: "⎇", label: "Git: Checkout Branch…", hint: "", group: "Git" },
    { icon: "⌗", label: "Toggle Terminal", hint: "⌘`", group: "Vista" },
    { icon: "⚙", label: "Preferences: Open Settings", hint: "⌘,", group: "Vista" },
  ] satisfies PaletteCmd[],
};

export type CursorData = typeof cursorData;
