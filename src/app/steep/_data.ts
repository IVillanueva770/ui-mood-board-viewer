/**
 * steep — tokens refero EXACTOS + tipos del dominio + mock.
 *
 * Tokens extraídos de refero.design (NO inventar, NO "mejorar a ojo"):
 *   White canvas #ffffff · warm mist #fbe1d1 · ink #17191c.
 * Signifier es propietaria (Klim) y no se puede cargar desde Google Fonts;
 * la convención del proyecto la sustituye por Cormorant Garamond (serif con
 * gravitas, var(--font-cormorant)) y Sohne por Inter. Eso queda igual que el
 * resto del cluster (ver stripe-real: Sohne→Inter).
 *
 * Única fuente de datos: enchufar un backend = tocar este archivo. Cada pieza
 * recibe lo suyo por props; ninguna importa este mock directo. Negocio: BI /
 * analytics que combina rigor con calidez — el serif da gravitas, el mist
 * suaviza. Diferenciable de stripe-dashboard (sans/amigable/violeta).
 */

/* ---------- Tokens refero (literal) ---------- */

export const tokens = {
  canvas: "#ffffff",
  surface: "#f7f7f8",
  mist: "#fbe1d1",
  terracotta: "#5d2a1a",
  rust: "#a04a32",
  clay: "#c97c5d",
  ink: "#17191c",
  slate: "#52545a",
  border: "#e8e8e8",
} as const;

/** Elevación sutil — la firma de steep es la contención + el mist cálido. */
export const elevation = {
  rest: "0 1px 3px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.04)",
  hover: "0 12px 28px -6px rgba(23,25,28,0.1)",
} as const;

/* ---------- Tipos del dominio ---------- */

export type DeltaTone = "up" | "down" | "flat";

export type Capability = { num: string; titulo: string; desc: string };

export type ShowcaseChart = {
  id: string;
  titulo: string;
  tipo: "area" | "bars" | "big" | "ring";
  caption: string;
  /** serie para area/bars; para "big" se usa points como sparkline; para "ring" pct 0..100 */
  points: number[];
  big?: string;
  pct?: number;
};

export type TrustStat = { val: string; label: string };

export type Kpi = {
  id: string;
  name: string;
  val: string;
  delta: string;
  tone: DeltaTone;
  tipo: "line" | "bars" | "big";
  points: number[];
  color: string;
};

export type QueryRow = { dim: string; val: string; pct: number };

export type SavedReport = {
  name: string;
  owner: string;
  scope: "Equipo" | "Privado" | "Público";
  charts: number;
  views: number;
  updated: string;
  shared: string[];
};

export type SeriePoint = { label: string; v: number };

export type Breakdown = { k: string; val: string; pct: number };

export type MetricDrill = {
  name: string;
  formula: string;
  owner: string;
  total: string;
  delta: string;
  tone: DeltaTone;
  serie: SeriePoint[];
  breakdown: Breakdown[];
};

export type SteepData = {
  // Externo
  capabilities: Capability[];
  showcase: ShowcaseChart[];
  trustStats: TrustStat[];
  quote: { texto: string; autor: string; rol: string };
  // Interno
  rangos: string[];
  segmentos: string[];
  kpis: Kpi[];
  queryMetrics: string[];
  queryDims: string[];
  queryResult: Record<string, QueryRow[]>;
  reports: SavedReport[];
  drill: MetricDrill;
};

/* ---------- Mock (swap por backend acá) ---------- */

export const steepData: SteepData = {
  capabilities: [
    {
      num: "01",
      titulo: "Explorá sin SQL",
      desc: "Armá una consulta visual: métrica, dimensión y filtro. El resultado se ve como tabla o gráfico al instante.",
    },
    {
      num: "02",
      titulo: "Dashboards que viajan",
      desc: "Compartí un tablero o un solo gráfico. Quien lo recibe ve exactamente los mismos números que vos, sin drift.",
    },
    {
      num: "03",
      titulo: "Alertas con contexto",
      desc: "Definí un umbral una vez. Cuando una métrica se mueve, te avisa con la serie y el segmento que cambió.",
    },
  ],

  showcase: [
    {
      id: "ingresos",
      titulo: "Ingresos · 30 días",
      tipo: "area",
      caption: "$ 184,2k · +22,4%",
      points: [50, 55, 65, 62, 78, 82, 88, 95, 102, 118, 124, 138],
    },
    {
      id: "canal",
      titulo: "Adquisición por canal",
      tipo: "bars",
      caption: "Orgánico lidera (38%)",
      points: [38, 26, 18, 12, 6],
    },
    {
      id: "dau",
      titulo: "Usuarios activos",
      tipo: "big",
      caption: "+8,2% vs semana previa",
      big: "12.481",
      points: [40, 52, 48, 60, 55, 72, 80, 85, 78, 92],
    },
    {
      id: "retencion",
      titulo: "Retención 30d",
      tipo: "ring",
      caption: "Cohorte abril",
      points: [],
      pct: 62,
    },
  ],

  trustStats: [
    { val: "99,98%", label: "Uptime de la API de métricas" },
    { val: "4,2 B", label: "Filas escaneadas por día" },
    { val: "120 ms", label: "Latencia p95 de una query" },
    { val: "12", label: "Warehouses conectados" },
  ],

  quote: {
    texto:
      "Definimos «ingresos» una sola vez y dejó de haber tres números distintos en tres reuniones. Eso solo ya pagó la herramienta.",
    autor: "Ana Méndez",
    rol: "Head of Data · ACME",
  },

  rangos: ["7 días", "30 días", "Trimestre", "Año"],
  segmentos: ["Todos", "Nuevos", "Recurrentes", "Enterprise"],

  kpis: [
    {
      id: "dau",
      name: "Usuarios activos diarios",
      val: "12.481",
      delta: "+8,2%",
      tone: "up",
      tipo: "line",
      points: [40, 52, 48, 60, 55, 72, 80, 85, 78, 92],
      color: "#5d2a1a",
    },
    {
      id: "conv",
      name: "Tasa de conversión",
      val: "3,41%",
      delta: "+0,6 pp",
      tone: "up",
      tipo: "line",
      points: [30, 32, 35, 33, 38, 40, 42, 41, 44, 47],
      color: "#a04a32",
    },
    {
      id: "rev",
      name: "Ingresos del mes",
      val: "$ 184,2k",
      delta: "+22,4%",
      tone: "up",
      tipo: "bars",
      points: [50, 58, 64, 60, 78, 86, 92, 104],
      color: "#5d2a1a",
    },
    {
      id: "ret",
      name: "Retención 30 días",
      val: "62,0%",
      delta: "−1,8 pp",
      tone: "down",
      tipo: "line",
      points: [70, 68, 66, 64, 62, 63, 60, 62, 61, 62],
      color: "#c97c5d",
    },
    {
      id: "ticket",
      name: "Ticket promedio",
      val: "$ 9.840",
      delta: "estable",
      tone: "flat",
      tipo: "big",
      points: [],
      color: "#5d2a1a",
    },
    {
      id: "ses",
      name: "Sesiones / usuario",
      val: "4,7",
      delta: "+0,3",
      tone: "up",
      tipo: "bars",
      points: [38, 42, 40, 46, 44, 50, 48, 54],
      color: "#a04a32",
    },
  ],

  queryMetrics: ["Ingresos", "Usuarios activos", "Conversión", "Retención"],
  queryDims: ["Canal", "País", "Plan", "Dispositivo"],
  queryResult: {
    Canal: [
      { dim: "Orgánico", val: "$ 70.1k", pct: 38 },
      { dim: "Paid Search", val: "$ 48.0k", pct: 26 },
      { dim: "Referido", val: "$ 33.2k", pct: 18 },
      { dim: "Email", val: "$ 22.1k", pct: 12 },
      { dim: "Directo", val: "$ 10.8k", pct: 6 },
    ],
    País: [
      { dim: "Argentina", val: "$ 82.9k", pct: 45 },
      { dim: "México", val: "$ 40.5k", pct: 22 },
      { dim: "Chile", val: "$ 25.8k", pct: 14 },
      { dim: "Colombia", val: "$ 20.3k", pct: 11 },
      { dim: "Otros", val: "$ 14.7k", pct: 8 },
    ],
    Plan: [
      { dim: "Team", val: "$ 96.8k", pct: 53 },
      { dim: "Pro", val: "$ 51.6k", pct: 28 },
      { dim: "Enterprise", val: "$ 27.6k", pct: 15 },
      { dim: "Free → trial", val: "$ 8.2k", pct: 4 },
    ],
    Dispositivo: [
      { dim: "Desktop", val: "$ 116.0k", pct: 63 },
      { dim: "Mobile", val: "$ 53.4k", pct: 29 },
      { dim: "Tablet", val: "$ 14.8k", pct: 8 },
    ],
  },

  reports: [
    {
      name: "Executive Weekly",
      owner: "Ana Méndez",
      scope: "Equipo",
      charts: 8,
      views: 184,
      updated: "hace 2 h",
      shared: ["AM", "TR", "SL"],
    },
    {
      name: "Growth — funnel",
      owner: "Tomás Ríos",
      scope: "Equipo",
      charts: 6,
      views: 92,
      updated: "ayer",
      shared: ["TR", "SL"],
    },
    {
      name: "Cierre financiero",
      owner: "Luca Karp",
      scope: "Privado",
      charts: 5,
      views: 41,
      updated: "hace 3 d",
      shared: ["LK"],
    },
    {
      name: "Activación de producto",
      owner: "Sofía López",
      scope: "Público",
      charts: 7,
      views: 156,
      updated: "hace 5 h",
      shared: ["SL", "AM", "DC"],
    },
    {
      name: "Atribución de marketing",
      owner: "Ana Méndez",
      scope: "Equipo",
      charts: 4,
      views: 78,
      updated: "hace 1 d",
      shared: ["AM", "TR"],
    },
  ],

  drill: {
    name: "Ingresos",
    formula: "sum(orders.amount) where status = 'paid'",
    owner: "Finanzas",
    total: "$ 184.240",
    delta: "+22,4% vs mes previo",
    tone: "up",
    serie: [
      { label: "Jun", v: 96 },
      { label: "Jul", v: 102 },
      { label: "Ago", v: 99 },
      { label: "Sep", v: 114 },
      { label: "Oct", v: 121 },
      { label: "Nov", v: 118 },
      { label: "Dic", v: 142 },
      { label: "Ene", v: 138 },
      { label: "Feb", v: 150 },
      { label: "Mar", v: 162 },
      { label: "Abr", v: 171 },
      { label: "May", v: 184 },
    ],
    breakdown: [
      { k: "Suscripciones", val: "$ 121.6k", pct: 66 },
      { k: "Uso medido", val: "$ 38.7k", pct: 21 },
      { k: "Servicios", val: "$ 16.5k", pct: 9 },
      { k: "Add-ons", val: "$ 7.4k", pct: 4 },
    ],
  },
};
