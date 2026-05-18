/**
 * modern-saas — datos del dominio + tipos.
 *
 * Estilo "landing SaaS canónica" (Stripe / Linear / Vercel minimal). Externo =
 * landing de producto; interno = dashboard de la plataforma. Única fuente de
 * datos: enchufar un backend = tocar SOLO este archivo (las piezas reciben todo
 * por props, no importan el mock).
 */

export const palette = {
  accent: "#5e6ad2", // indigo (Linear-ish)
  accentDark: "#4f46e5",
  violet: "#8b5cf6",
  pink: "#ec4899",
  text: "#0f172a",
  muted: "#64748b",
  mutedSoft: "#94a3b8",
  border: "#e5e7eb",
  borderSoft: "#f1f5f9",
  surface: "#fafbff",
  card: "#ffffff",
  bg: "#ffffff",
  ok: "#16a34a",
  warn: "#d97706",
  bad: "#dc2626",
  gradient: "linear-gradient(90deg,#5e6ad2,#8b5cf6,#ec4899)",
  gradientSoft:
    "radial-gradient(circle at 25% 25%,#c7d2fe,transparent 60%),radial-gradient(circle at 75% 60%,#fbcfe8,transparent 60%)",
} as const;

/* ---------- Tipos del dominio ---------- */

export type IconKey = "auth" | "db" | "edge" | "obs";

export type Feature = {
  icon: IconKey;
  titulo: string;
  desc: string;
};

export type Logo = { nombre: string; rubro: string };

export type Plan = {
  id: string;
  nombre: string;
  precioMensual: number; // USD/mes, 0 = gratis, -1 = a medida
  desc: string;
  destacado: boolean;
  cta: string;
  features: string[];
};

export type FooterCol = { titulo: string; links: string[] };

export type Kpi = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  positive: boolean;
};

export type ChartPoint = { mes: string; mrr: number };

export type ClienteEstado = "activo" | "trial" | "en riesgo" | "pausado";

export type ClienteActividad = { fecha: string; evento: string };

export type Cliente = {
  id: string;
  empresa: string;
  contacto: string;
  email: string;
  plan: string;
  mrr: number; // USD/mes
  asientos: number;
  estado: ClienteEstado;
  desde: string;
  region: string;
  usoApi: number; // % del límite del plan
  actividad: ClienteActividad[];
};

export type Miembro = {
  nombre: string;
  rol: "Owner" | "Admin" | "Developer" | "Billing";
  email: string;
  avatar: string;
};

export type UsoRecurso = {
  label: string;
  usado: number;
  limite: number;
  unidad: string;
};

export type SaasData = {
  features: Feature[];
  logos: Logo[];
  proofStat: { valor: string; label: string };
  planes: Plan[];
  footer: FooterCol[];
  workspace: { nombre: string; plan: string; version: string };
  kpis: Kpi[];
  mrrSerie: ChartPoint[];
  clientes: Cliente[];
  equipo: Miembro[];
  uso: UsoRecurso[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const saasData: SaasData = {
  features: [
    {
      icon: "auth",
      titulo: "Auth en una línea",
      desc: "Magic links, OAuth y SSO sin configurar nada. Sesiones, refresh y multi-org resueltos del lado nuestro.",
    },
    {
      icon: "db",
      titulo: "Base de datos serverless",
      desc: "Postgres con autoscale real. Branching por feature, backups automáticos y vos pagás solo lo que usás.",
    },
    {
      icon: "edge",
      titulo: "Funciones en el edge",
      desc: "Tu código en 30 regiones, frío cero. Menos de 50 ms en cualquier parte del mundo sin que toques infra.",
    },
    {
      icon: "obs",
      titulo: "Observabilidad incluida",
      desc: "Logs, trazas y métricas en vivo desde el primer deploy. Sin agregar un SDK ni pagar tres herramientas más.",
    },
  ],

  logos: [
    { nombre: "Naventa", rubro: "fintech" },
    { nombre: "Pulpo Logística", rubro: "logística" },
    { nombre: "Lumina", rubro: "edtech" },
    { nombre: "Delta Health", rubro: "salud" },
    { nombre: "Tienda Norte", rubro: "retail" },
    { nombre: "Corteza", rubro: "agtech" },
  ],

  proofStat: { valor: "1.240", label: "equipos en producción" },

  planes: [
    {
      id: "hobby",
      nombre: "Hobby",
      precioMensual: 0,
      desc: "Para proyectos personales y prototipos. Sin tarjeta.",
      destacado: false,
      cta: "Empezar gratis",
      features: [
        "1 proyecto activo",
        "100k requests / mes",
        "1 GB de base de datos",
        "Comunidad en Discord",
      ],
    },
    {
      id: "pro",
      nombre: "Pro",
      precioMensual: 20,
      desc: "Para equipos que ya están en producción y necesitan escalar.",
      destacado: true,
      cta: "Probar 14 días",
      features: [
        "Proyectos ilimitados",
        "5M requests / mes incluidos",
        "Autoscale + branching por feature",
        "Observabilidad y alertas",
        "Soporte prioritario < 4 h",
      ],
    },
    {
      id: "empresa",
      nombre: "Empresa",
      precioMensual: -1,
      desc: "Para organizaciones con SSO, SLA y cumplimiento.",
      destacado: false,
      cta: "Hablar con ventas",
      features: [
        "Todo lo de Pro",
        "SSO/SAML + auditoría",
        "SLA 99.99% + soporte dedicado",
        "Aislamiento de cómputo",
        "Onboarding asistido",
      ],
    },
  ],

  footer: [
    { titulo: "Producto", links: ["Plataforma", "Precios", "Changelog", "Estado del servicio"] },
    { titulo: "Desarrolladores", links: ["Documentación", "Referencia de API", "Guías", "SDKs"] },
    { titulo: "Empresa", links: ["Nosotros", "Blog", "Clientes", "Trabajá con nosotros"] },
    { titulo: "Legal", links: ["Términos", "Privacidad", "Seguridad", "DPA"] },
  ],

  workspace: { nombre: "acme-prod", plan: "Pro", version: "v0.42.1" },

  kpis: [
    { id: "mrr", label: "MRR", value: 48250, prefix: "$ ", delta: "+12,4%", positive: true },
    { id: "users", label: "Usuarios activos", value: 8420, delta: "+6,1%", positive: true },
    { id: "churn", label: "Churn mensual", value: 1.8, suffix: "%", decimals: 1, delta: "-0,3 pts", positive: true },
    { id: "nrr", label: "Net revenue retention", value: 118, suffix: "%", delta: "+4 pts", positive: true },
  ],

  mrrSerie: [
    { mes: "Jun", mrr: 24800 },
    { mes: "Jul", mrr: 26900 },
    { mes: "Ago", mrr: 28400 },
    { mes: "Sep", mrr: 31200 },
    { mes: "Oct", mrr: 33800 },
    { mes: "Nov", mrr: 36100 },
    { mes: "Dic", mrr: 38400 },
    { mes: "Ene", mrr: 40200 },
    { mes: "Feb", mrr: 42600 },
    { mes: "Mar", mrr: 44900 },
    { mes: "Abr", mrr: 46500 },
    { mes: "May", mrr: 48250 },
  ],

  clientes: [
    {
      id: "c1",
      empresa: "Naventa",
      contacto: "Sofía Domínguez",
      email: "sofia@naventa.io",
      plan: "Empresa",
      mrr: 1840,
      asientos: 42,
      estado: "activo",
      desde: "mar 2024",
      region: "AR · Buenos Aires",
      usoApi: 68,
      actividad: [
        { fecha: "hace 2 h", evento: "Deploy a producción · v3.12" },
        { fecha: "ayer", evento: "Sumó 4 asientos al workspace" },
        { fecha: "hace 3 d", evento: "Upgrade a plan Empresa" },
      ],
    },
    {
      id: "c2",
      empresa: "Pulpo Logística",
      contacto: "Martín Acuña",
      email: "martin@pulpo.com",
      plan: "Pro",
      mrr: 480,
      asientos: 18,
      estado: "activo",
      desde: "jul 2024",
      region: "AR · Córdoba",
      usoApi: 54,
      actividad: [
        { fecha: "hace 5 h", evento: "Pico de tráfico · 1,2M requests" },
        { fecha: "hace 2 d", evento: "Conectó base de datos de réplica" },
      ],
    },
    {
      id: "c3",
      empresa: "Lumina",
      contacto: "Carolina Ferreyra",
      email: "caro@lumina.edu",
      plan: "Pro",
      mrr: 320,
      asientos: 12,
      estado: "trial",
      desde: "abr 2026",
      region: "UY · Montevideo",
      usoApi: 22,
      actividad: [
        { fecha: "hace 1 h", evento: "Invitó a 3 desarrolladores" },
        { fecha: "ayer", evento: "Primer deploy del trial" },
      ],
    },
    {
      id: "c4",
      empresa: "Delta Health",
      contacto: "Dr. Pablo Reyna",
      email: "preyna@deltahealth.io",
      plan: "Empresa",
      mrr: 2260,
      asientos: 60,
      estado: "activo",
      desde: "nov 2023",
      region: "AR · Rosario",
      usoApi: 81,
      actividad: [
        { fecha: "hace 30 min", evento: "Auditoría de accesos exportada" },
        { fecha: "hace 4 d", evento: "Renovó contrato anual" },
      ],
    },
    {
      id: "c5",
      empresa: "Tienda Norte",
      contacto: "Lucía Paz",
      email: "lucia@tiendanorte.com.ar",
      plan: "Pro",
      mrr: 240,
      asientos: 8,
      estado: "en riesgo",
      desde: "feb 2025",
      region: "AR · Salta",
      usoApi: 12,
      actividad: [
        { fecha: "hace 6 d", evento: "Sin deploys en 14 días" },
        { fecha: "hace 12 d", evento: "Bajó de Empresa a Pro" },
      ],
    },
    {
      id: "c6",
      empresa: "Corteza",
      contacto: "Javier Sosa",
      email: "javier@corteza.ag",
      plan: "Hobby",
      mrr: 0,
      asientos: 2,
      estado: "trial",
      desde: "may 2026",
      region: "AR · Mendoza",
      usoApi: 7,
      actividad: [{ fecha: "hace 3 h", evento: "Creó el workspace" }],
    },
    {
      id: "c7",
      empresa: "Clearbit AR",
      contacto: "Renata Vidal",
      email: "renata@clearbit.ar",
      plan: "Pro",
      mrr: 560,
      asientos: 24,
      estado: "pausado",
      desde: "sep 2024",
      region: "AR · La Plata",
      usoApi: 0,
      actividad: [
        { fecha: "hace 9 d", evento: "Pausó la suscripción · motivo: estacional" },
      ],
    },
  ],

  equipo: [
    { nombre: "Nacho Villanueva", rol: "Owner", email: "nacho@acme.io", avatar: "linear-gradient(135deg,#5e6ad2,#8b5cf6)" },
    { nombre: "Sofía Domínguez", rol: "Admin", email: "sofia@acme.io", avatar: "linear-gradient(135deg,#8b5cf6,#ec4899)" },
    { nombre: "Tomás Iglesias", rol: "Developer", email: "tomas@acme.io", avatar: "linear-gradient(135deg,#06b6d4,#5e6ad2)" },
    { nombre: "Inés Marotta", rol: "Billing", email: "ines@acme.io", avatar: "linear-gradient(135deg,#ec4899,#f97316)" },
  ],

  uso: [
    { label: "Requests del mes", usado: 3.2, limite: 5, unidad: "M" },
    { label: "Almacenamiento", usado: 12.4, limite: 50, unidad: "GB" },
    { label: "Miembros del equipo", usado: 4, limite: 10, unidad: "" },
    { label: "Proyectos activos", usado: 6, limite: 999, unidad: "" },
  ],
};
