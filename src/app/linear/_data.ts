/**
 * linear — tokens refero EXACTOS + tipos del dominio + mock.
 *
 * Valores reales extraídos de styles.refero.design/style/90ce5883 — NO
 * "mejorados a ojo" (mandato del plan: refero exact). Única fuente de datos:
 * swap a backend = tocar este archivo; cada pieza recibe lo suyo por props.
 * El workspace espeja el propio Exo (viewer / vault / diplomatura) para que el
 * candidato a dashboard del Exo se sienta real, no lorem.
 */

/* ---------- Tokens REALES (refero.design) ---------- */

export const tokens = {
  bg: "#08090a", // Pitch Black
  surface: "#0f1011", // Graphite
  elevated: "#0c0d0e", // fila/hover
  line: "#1a1b1d",
  lineStrong: "#2a2b2e",
  lime: "#e4f222", // Neon Lime (accent — aparece poco, golpea fuerte)
  limeDim: "#a3c40d", // gradiente del lime
  fg: "#f7f8f8", // Porcelain
  fg2: "#a4a5ad",
  muted: "#8a8f98", // Storm Cloud
  faint: "#62666d",
} as const;

export const mono = "var(--font-geist-mono)";

/* ---------- Tipos del dominio ---------- */

export type IssueStatus = "Backlog" | "Todo" | "In Progress" | "In Review" | "Done";
export type Priority = "Urgent" | "High" | "Med" | "Low" | "Sin prioridad";

export type Person = { initials: string; name: string };

export type ActivityEntry = { who: string; action: string; when: string };

export type Issue = {
  id: string;
  title: string;
  status: IssueStatus;
  priority: Priority;
  assignee: Person;
  project: string;
  updated: string;
  description: string;
  labels: string[];
  activity: ActivityEntry[];
};

export type Metric = { label: string; value: string; delta: string };

export type Cycle = {
  name: string;
  range: string;
  progress: number; // 0-100
  daysLeft: number;
  scoped: number;
  done: number;
  remaining: number;
  burndown: string; // path SVG (viewBox 0 0 400 100)
};

export type Feature = { icon: "bolt" | "keyboard" | "layers" | "plug"; title: string; body: string };

export type Stat = { value: string; label: string };

export type Command = { id: string; label: string; group: "Acciones" | "Navegación" | "Issue"; shortcut?: string };

export type LinearData = {
  // Externo
  features: Feature[];
  stats: Stat[];
  logos: string[];
  // Interno
  issues: Issue[];
  cycle: Cycle;
  metrics: Metric[];
  commands: Command[];
  team: Person[];
};

/* ---------- Mapas de color (status / prioridad) ---------- */
/* lime se reserva para Urgent: identidad refero = el accent es raro y duro. */

export const statusColor: Record<IssueStatus, string> = {
  Backlog: "#62666d",
  Todo: "#8a8f98",
  "In Progress": "#eab308",
  "In Review": "#a855f7",
  Done: "#22c55e",
};

export const priorityColor: Record<Priority, string> = {
  Urgent: "#e4f222",
  High: "#eab308",
  Med: "#8a8f98",
  Low: "#62666d",
  "Sin prioridad": "#3a3b3e",
};

export const STATUS_ORDER: IssueStatus[] = ["Backlog", "Todo", "In Progress", "In Review", "Done"];

/* ---------- Mock (swap por backend acá) ---------- */

const IV: Person = { initials: "IV", name: "Ignacio V." };
const AI: Person = { initials: "AI", name: "Agente" };
const MR: Person = { initials: "MR", name: "Mar R." };

export const linearData: LinearData = {
  features: [
    {
      icon: "bolt",
      title: "Sin esperas",
      body: "Cada acción responde al instante. UI optimista por defecto: no esperás al servidor para ver el cambio.",
    },
    {
      icon: "keyboard",
      title: "Keyboard-first",
      body: "Todo tiene atajo. ⌘K abre el command palette; nunca despegás las manos del teclado.",
    },
    {
      icon: "layers",
      title: "Cycles inteligentes",
      body: "El trabajo se ordena solo en ciclos. Scope, burndown y velocidad sin armar un reporte a mano.",
    },
    {
      icon: "plug",
      title: "Todo en un lugar",
      body: "GitHub, Slack y tu vault sincronizados. El estado vive en una sola fuente de verdad.",
    },
  ],

  stats: [
    { value: "<50ms", label: "interacción" },
    { value: "10.000+", label: "equipos" },
    { value: "99.99%", label: "uptime" },
    { value: "0", label: "spinners" },
  ],

  logos: ["Vercel", "Ramp", "Cash App", "Mercury", "Scale"],

  issues: [
    {
      id: "EXO-142",
      title: "Retrofit tanda 1 a estructura SOLID por estilo",
      status: "In Progress",
      priority: "High",
      assignee: IV,
      project: "UI Viewer",
      updated: "2h",
      description:
        "airbnb / comercio / operativo siguen siendo monolitos del re-skin. Descomponer a page.tsx delgado + _components/ tipados + _data.ts (swap a backend = 1 archivo). Bar: hero + 3-4 piezas visibles por lado.",
      labels: ["viewer", "refactor"],
      activity: [
        { who: "IV", action: "movió a In Progress", when: "2h" },
        { who: "AI", action: "comentó: dimes es el benchmark del cluster", when: "5h" },
        { who: "IV", action: "creó la issue", when: "1d" },
      ],
    },
    {
      id: "EXO-141",
      title: "Destilar sesiones recientes a CONTEXT.md",
      status: "Todo",
      priority: "Urgent",
      assignee: IV,
      project: "Exo vault",
      updated: "5h",
      description:
        "El bloque de sesiones recientes pesa al iniciar el Exo. Pasar lo estable a Estado/Decisiones y archivar el resto. Disparador del próximo /exo-mantenimiento.",
      labels: ["exo", "mantenimiento"],
      activity: [
        { who: "AI", action: "marcó Urgent desde triage", when: "5h" },
        { who: "IV", action: "creó la issue", when: "1d" },
      ],
    },
    {
      id: "EXO-138",
      title: "/api/buscar devuelve falsos positivos en el matching",
      status: "In Review",
      priority: "Med",
      assignee: MR,
      project: "Diplomatura red",
      updated: "1d",
      description:
        "El embedding matchea perfiles por sector aunque el rubro no coincida. Revisar el umbral de similitud y el peso de los campos del CV enriquecido.",
      labels: ["api", "bug"],
      activity: [
        { who: "MR", action: "pidió re-review · PR #218", when: "1d" },
        { who: "AI", action: "adjuntó eval batch (12 casos)", when: "1d" },
      ],
    },
    {
      id: "EXO-135",
      title: "linear: command palette ⌘K + focus rings keyboard-first",
      status: "In Progress",
      priority: "High",
      assignee: AI,
      project: "UI Viewer",
      updated: "3h",
      description:
        "Consolidar la firma de ola 1 (focus ring neon-lime + dimming de siblings) y sumar el ⌘K palette con fade+scale. Es el candidato a dashboard del Exo: tiene que dar ganas de usarlo.",
      labels: ["viewer", "motion"],
      activity: [
        { who: "AI", action: "abrió PR · descomposición SOLID", when: "3h" },
        { who: "IV", action: "asignó a Agente", when: "6h" },
      ],
    },
    {
      id: "EXO-130",
      title: "Índice del viewer: filtro por categoría sticky (menos vertical)",
      status: "Done",
      priority: "Med",
      assignee: IV,
      project: "UI Viewer",
      updated: "1sem",
      description:
        "El index era un muro vertical: las del final no las veía nadie. Grid denso + filtro por categoría + descripción en hover. Cerrado.",
      labels: ["viewer"],
      activity: [{ who: "IV", action: "cerró vía deploy 2026.05.10", when: "1sem" }],
    },
    {
      id: "EXO-128",
      title: "skill exo-mantenimiento: archive sweep + rotación de log",
      status: "Done",
      priority: "Low",
      assignee: AI,
      project: "Exo vault",
      updated: "1sem",
      description: "Pase orquestado de housekeeping: stale scan, procesar sesiones, lint wikis, métricas. Cerrado.",
      labels: ["exo", "skill"],
      activity: [{ who: "AI", action: "cerró la issue", when: "1sem" }],
    },
    {
      id: "EXO-127",
      title: "Scan semanal de Twitter a raw/inbox",
      status: "Backlog",
      priority: "Low",
      assignee: AI,
      project: "Exo vault",
      updated: "2sem",
      description: "Escanear bookmarks/RTs propios, filtrar y dejar inbox limpio. Automatizable con /loop semanal.",
      labels: ["exo", "scan"],
      activity: [{ who: "IV", action: "creó la issue", when: "2sem" }],
    },
    {
      id: "EXO-125",
      title: "Deploy people.json + eval batch del matching",
      status: "Todo",
      priority: "Med",
      assignee: MR,
      project: "Diplomatura red",
      updated: "4d",
      description: "Procesar el batch del Form, enriquecer perfiles con Opus y dejar data/people.json listo para deploy.",
      labels: ["diplomatura", "deploy"],
      activity: [{ who: "MR", action: "tomó la issue del backlog", when: "4d" }],
    },
  ],

  cycle: {
    name: "Cycle 47",
    range: "5 may — 19 may · 2 semanas",
    progress: 61,
    daysLeft: 9,
    scoped: 23,
    done: 14,
    remaining: 9,
    burndown: "M0,4 L48,10 L96,18 L144,30 L192,34 L240,46 L288,54 L336,60 L384,62",
  },

  metrics: [
    { label: "Abiertas", value: "24", delta: "+3" },
    { label: "En progreso", value: "8", delta: "+1" },
    { label: "Hechas (semana)", value: "31", delta: "+12" },
    { label: "Velocidad", value: "2,4d", delta: "−0,3" },
  ],

  commands: [
    { id: "new", label: "Crear issue nueva", group: "Acciones", shortcut: "C" },
    { id: "assign", label: "Asignármela a mí", group: "Acciones", shortcut: "I" },
    { id: "status", label: "Cambiar estado…", group: "Acciones", shortcut: "S" },
    { id: "priority", label: "Cambiar prioridad…", group: "Acciones", shortcut: "P" },
    { id: "go-issues", label: "Ir a Mis issues", group: "Navegación", shortcut: "G I" },
    { id: "go-cycle", label: "Ir al Cycle actual", group: "Navegación", shortcut: "G C" },
    { id: "go-board", label: "Ir al Board", group: "Navegación", shortcut: "G B" },
    { id: "copy-id", label: "Copiar ID de la issue", group: "Issue", shortcut: "⌘ ." },
    { id: "open-vault", label: "Abrir en el vault del Exo", group: "Issue" },
    { id: "mark-done", label: "Marcar como Done", group: "Issue", shortcut: "⌘ ⏎" },
  ],

  team: [IV, AI, MR],
};
