/**
 * monopo — datos del dominio + tokens refero.
 *
 * Estudio de diseño (monopo.vn). Única fuente de datos: swap a backend = tocar
 * este archivo; cada pieza recibe lo suyo por props. Estilo `refero`: los
 * valores de `frost` salieron de tokens reales de refero.design — NO se
 * "mejoran a ojo" (radius 75.024px, frosted 0.02/blur, accents violeta/azul).
 */

/* ---------- Tokens refero (exactos, no tunear) ---------- */

export const frost = {
  bg: "#000000",
  text: "#ffffff",
  textSoft: "#aaaaaa",
  textMute: "#888888",
  textFaint: "#666666",
  /** Ghost / frosted glass surface (valor exacto refero). */
  surface: "rgba(255,255,255,0.02)",
  surfaceHover: "rgba(255,255,255,0.06)",
  blur: "blur(20px)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  /** Gradiente orgánico: violeta + azul son LA identidad monopo.vn. */
  violet: "#a78bfa",
  blue: "#60a5fa",
  danger: "#f87171",
  /** Detalle de marca: ghost buttons con este radius exacto. No redondear. */
  radius: "75.024px",
  mono: "var(--font-geist-mono)",
} as const;

/* ---------- Tipos del dominio ---------- */

export type WorkProject = {
  id: string;
  cliente: string;
  tipo: string;
  year: string;
  accent: string;
};

export type Capability = {
  num: string;
  titulo: string;
  desc: string;
  items: string[];
};

export type ActiveProject = {
  num: string;
  cliente: string;
  tipo: string;
  etapa: string;
  deadline: string;
  asignado: string;
  /** Tono del chip: violet = hot, blue = en curso, mute = hold. */
  tone: "violet" | "blue" | "mute";
};

export type StudioStat = { val: string; label: string; sub: string };

export type ClientAccount = {
  nombre: string;
  sector: string;
  deals: number;
  total: string;
  year: string;
  glow: string;
};

export type InvoiceStat = { label: string; val: string; glow: string };

export type Invoice = {
  num: string;
  cliente: string;
  monto: string;
  vence: string;
  estado: string;
  chip: string;
};

export type TeamMember = {
  ini: string;
  nombre: string;
  rol: string;
  glow: string;
  capacity: number;
  area: string;
  proyectos: number;
  since: string;
};

export type MonopoData = {
  // Externo (sitio de estudio)
  featured: WorkProject & { titulo: string; alcance: string };
  trabajos: WorkProject[];
  capabilities: Capability[];
  // Interno (workspace del estudio)
  proyectos: ActiveProject[];
  studioStats: StudioStat[];
  clientes: ClientAccount[];
  invoiceStats: InvoiceStat[];
  facturas: Invoice[];
  equipo: TeamMember[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const monopoData: MonopoData = {
  featured: {
    id: "f01",
    titulo: "Aurora Botanical",
    cliente: "Aurora Botanical",
    tipo: "Brand identity · Web · Packaging",
    alcance: "Full rebrand — 2026",
    year: "2026",
    accent: frost.violet,
  },

  trabajos: [
    { id: "w1", cliente: "Cien Soles", tipo: "Editorial · Web", year: "2026", accent: frost.blue },
    { id: "w2", cliente: "Matria Records", tipo: "Branding · Motion", year: "2025", accent: frost.violet },
    { id: "w3", cliente: "Tabacal", tipo: "Packaging · Web", year: "2025", accent: frost.blue },
    { id: "w4", cliente: "Norte Estudio", tipo: "Identity · Print", year: "2024", accent: frost.violet },
    { id: "w5", cliente: "Casa Verde", tipo: "Identity", year: "2024", accent: frost.blue },
    { id: "w6", cliente: "Bruma", tipo: "Naming · Brand", year: "2023", accent: frost.violet },
  ],

  capabilities: [
    {
      num: "01",
      titulo: "Brand identity",
      desc: "Naming, systems, and visual language for brands that refuse to blend in.",
      items: ["Strategy", "Naming", "Identity systems", "Guidelines"],
    },
    {
      num: "02",
      titulo: "Digital",
      desc: "Sites and products with motion as a first-class material, not an afterthought.",
      items: ["Web design", "Product UI", "Motion", "Prototyping"],
    },
    {
      num: "03",
      titulo: "Editorial & print",
      desc: "Books, packaging and print that hold up in the hand, not just on screen.",
      items: ["Art direction", "Packaging", "Editorial", "Typography"],
    },
  ],

  proyectos: [
    { num: "01", cliente: "Aurora Botanical", tipo: "Brand identity", etapa: "Final review", deadline: "May 14", asignado: "MR · TM", tone: "violet" },
    { num: "02", cliente: "Cien Soles", tipo: "Web · editorial", etapa: "Design phase", deadline: "May 22", asignado: "JG", tone: "blue" },
    { num: "03", cliente: "Matria Records", tipo: "Branding · motion", etapa: "Design phase", deadline: "May 30", asignado: "TM · KS", tone: "blue" },
    { num: "04", cliente: "Tabacal", tipo: "Packaging · web", etapa: "Discovery", deadline: "Jun 12", asignado: "MR", tone: "blue" },
    { num: "05", cliente: "Norte Estudio", tipo: "Identity · print", etapa: "Brief", deadline: "Jun 28", asignado: "TBD", tone: "blue" },
    { num: "06", cliente: "Casa Verde", tipo: "Identity", etapa: "Hold", deadline: "—", asignado: "—", tone: "mute" },
  ],

  studioStats: [
    { val: "82%", label: "Team capacity", sub: "spring 2026" },
    { val: "$ 47.2k", label: "MRR projects", sub: "+12% q/q" },
    { val: "14d", label: "Avg discovery", sub: "down from 21d" },
    { val: "0.94", label: "On-time delivery", sub: "last 12 months" },
  ],

  clientes: [
    { nombre: "Aurora Botanical", sector: "Wellness · Skincare", deals: 4, total: "$ 86k", year: "since 2024", glow: frost.violet },
    { nombre: "Cien Soles", sector: "Editorial", deals: 7, total: "$ 142k", year: "since 2022", glow: frost.blue },
    { nombre: "Matria Records", sector: "Music label", deals: 3, total: "$ 58k", year: "since 2025", glow: frost.violet },
    { nombre: "Tabacal", sector: "Beverages", deals: 2, total: "$ 24k", year: "new — 2026", glow: frost.blue },
    { nombre: "Norte Estudio", sector: "Architecture", deals: 5, total: "$ 96k", year: "since 2023", glow: frost.violet },
    { nombre: "Casa Verde", sector: "Hospitality", deals: 1, total: "$ 18k", year: "paused", glow: frost.textFaint },
  ],

  invoiceStats: [
    { label: "Pending", val: "$ 32.4k", glow: frost.violet },
    { label: "Overdue", val: "$ 8.1k", glow: frost.danger },
    { label: "This month", val: "$ 47.2k", glow: frost.blue },
    { label: "Year to date", val: "$ 412k", glow: frost.text },
  ],

  facturas: [
    { num: "0042", cliente: "Cien Soles", monto: "$ 18.500", vence: "May 12", estado: "PENDING", chip: frost.violet },
    { num: "0041", cliente: "Aurora Botanical", monto: "$ 24.000", vence: "May 8", estado: "OVERDUE", chip: frost.danger },
    { num: "0040", cliente: "Norte Estudio", monto: "$ 11.200", vence: "May 10", estado: "PENDING", chip: frost.violet },
    { num: "0039", cliente: "Matria Records", monto: "$ 9.800", vence: "May 1", estado: "PAID", chip: frost.textFaint },
    { num: "0038", cliente: "Tabacal", monto: "$ 5.400", vence: "Apr 28", estado: "PAID", chip: frost.textFaint },
  ],

  equipo: [
    { ini: "MR", nombre: "Macarena Ríos", rol: "Lead designer", glow: frost.violet, capacity: 92, area: "Brand · Identity", proyectos: 3, since: "2022" },
    { ini: "JG", nombre: "Joaquín Garza", rol: "Designer · Web", glow: frost.blue, capacity: 78, area: "Web · Editorial", proyectos: 2, since: "2024" },
    { ini: "TM", nombre: "Tomás Müller", rol: "Designer · Motion", glow: frost.violet, capacity: 85, area: "Motion · Brand", proyectos: 2, since: "2023" },
    { ini: "KS", nombre: "Karina Sosa", rol: "Project manager", glow: frost.blue, capacity: 72, area: "Operations", proyectos: 6, since: "2022" },
  ],
};
