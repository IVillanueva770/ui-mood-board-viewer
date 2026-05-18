/**
 * stripe-dashboard — datos del dominio + tipos.
 *
 * Negocio: panel de cobros/métricas pensado para dueños de negocio NO técnicos
 * (Guadalupe, inmobiliaria · Fátima, comercio). Lenguaje de negocio, no
 * jerga de pasarela: nada de `ch_xxx` ni `price_xxx`. Plata en pesos.
 *
 * Única fuente de datos de la página. Cambiar el mock por un `fetch`/server
 * real = tocar este archivo y nada más; cada pieza recibe lo suyo por props
 * y no sabe de dónde vino el dato.
 */

export const palette = {
  accent: "#635bff",
  accentSoft: "#eef0fb",
  text: "#0a0a0a",
  muted: "#6b7280",
  border: "#e3e8ee",
  surface: "#f7f7f7",
  card: "#ffffff",
  grid: "#f0f1f3",
  // Estados (color a11y, contraste AA sobre su fondo claro)
  okBg: "#d1fae5",
  okFg: "#065f46",
  okDot: "#10b981",
  warnBg: "#fef3c7",
  warnFg: "#92400e",
  warnDot: "#f59e0b",
  errBg: "#fee2e2",
  errFg: "#991b1b",
  errDot: "#ef4444",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Beneficio = { icon: string; titulo: string; desc: string };

export type Plan = {
  id: string;
  nombre: string;
  precio: string;
  periodo: string;
  resumen: string;
  destacado: boolean;
  features: string[];
  cta: string;
};

export type Testimonio = {
  id: string;
  inicial: string;
  color: string;
  nombre: string;
  rubro: string;
  texto: string;
};

export type Sello = { icon: string; titulo: string; desc: string };

export type Kpi = {
  id: string;
  label: string;
  /** Valor numérico crudo — el count-up lo anima. */
  valor: number;
  prefijo: string;
  sufijo: string;
  decimales: number;
  deltaPct: number;
  up: boolean;
  /** Texto de comparación contra el período anterior. */
  comparativa: string;
};

export type SerieIngresos = {
  meses: string[];
  /** Mes a mes, este año. Mismo largo que `meses`. */
  actual: number[];
  /** Mismo período del año anterior — comparativa. */
  previo: number[];
  totalActual: string;
  totalPrevio: string;
  variacion: string;
};

export type EstadoMov = "Acreditado" | "Pendiente" | "Rechazado";

export type Movimiento = {
  id: string;
  fecha: string;
  concepto: string;
  cliente: string;
  medio: string;
  /** En pesos, crudo — la pieza lo formatea. */
  monto: number;
  estado: EstadoMov;
};

export type ClienteResumen = {
  id: string;
  inicial: string;
  color: string;
  nombre: string;
  rubro: string;
  total: number;
  operaciones: number;
  ultima: string;
  trend: string;
  up: boolean;
};

export type BarraReporte = { label: string; monto: number; pct: number };

export type SegmentoDonut = {
  label: string;
  pct: number;
  color: string;
};

export type StripeData = {
  beneficios: Beneficio[];
  planes: Plan[];
  testimonios: Testimonio[];
  sellos: Sello[];
  kpis: Kpi[];
  ingresos: SerieIngresos;
  movimientos: Movimiento[];
  clientes: ClienteResumen[];
  ingresosPorRubro: BarraReporte[];
  mediosDeCobro: SegmentoDonut[];
};

export const FILTROS_FECHA = ["Hoy", "7 días", "Este mes", "Todo"] as const;
export type FiltroFecha = (typeof FILTROS_FECHA)[number];

/* ---------- Helpers de formato (es-AR) ---------- */

const arsFmt = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 0,
});

/** $1.250.000 — formato pesos argentino, sin decimales. */
export function pesos(n: number): string {
  return `$${arsFmt.format(Math.round(n))}`;
}

/* ---------- Mock (swap por backend acá) ---------- */

export const stripeData: StripeData = {
  beneficios: [
    {
      icon: "◎",
      titulo: "Ves tu plata clara",
      desc: "Cuánto entró hoy, este mes y comparado con el anterior. Sin armar planillas aparte ni esperar al contador.",
    },
    {
      icon: "↻",
      titulo: "Cobrás online",
      desc: "Link de pago, transferencia o tarjeta. El cliente paga desde el celu y vos lo ves acreditado al toque.",
    },
    {
      icon: "▤",
      titulo: "Reportes que se entienden",
      desc: "Gráficos prolijos, etiquetados en castellano. Los exportás para tu contador en un clic.",
    },
    {
      icon: "♦",
      titulo: "Cada cliente, a mano",
      desc: "Cuánto te facturó cada uno, hace cuánto no paga y quién es tu mejor cuenta del mes.",
    },
  ],

  planes: [
    {
      id: "inicial",
      nombre: "Inicial",
      precio: "$0",
      periodo: "siempre",
      resumen: "Para empezar a cobrar hoy mismo.",
      destacado: false,
      features: [
        "Hasta 30 cobros por mes",
        "Link de pago y transferencia",
        "Panel de resumen",
        "1 usuario",
      ],
      cta: "Crear cuenta gratis",
    },
    {
      id: "negocio",
      nombre: "Negocio",
      precio: "$18.900",
      periodo: "por mes",
      resumen: "Para el que ya factura todos los días.",
      destacado: true,
      features: [
        "Cobros ilimitados",
        "Reportes y exportación contable",
        "Clientes y recordatorios",
        "Hasta 5 usuarios",
      ],
      cta: "Empezar 14 días gratis",
    },
    {
      id: "estudio",
      nombre: "Estudio",
      precio: "A medida",
      periodo: "anual",
      resumen: "Inmobiliarias y administraciones grandes.",
      destacado: false,
      features: [
        "Todo lo de Negocio",
        "Conciliación bancaria",
        "Soporte dedicado",
        "Usuarios ilimitados",
      ],
      cta: "Hablar con ventas",
    },
  ],

  testimonios: [
    {
      id: "guada",
      inicial: "G",
      color: "#eef0fb",
      nombre: "Guadalupe Ferreyra",
      rubro: "Inmobiliaria Norte · Córdoba",
      texto:
        "Administro 60 alquileres. Antes vivía en planillas. Ahora abro el panel a la mañana y sé en 10 segundos quién pagó y quién no. Mi contador me dejó de pedir cosas.",
    },
    {
      id: "fati",
      inicial: "F",
      color: "#d1fae5",
      nombre: "Fátima Ríos",
      rubro: "Kiosco El Sol · Rosario",
      texto:
        "No soy nada técnica y lo usé sin que nadie me explique. Le mando el link al cliente, paga, y me figura acreditado. Eso para mí es magia.",
    },
    {
      id: "lobo",
      inicial: "L",
      color: "#fef3c7",
      nombre: "Estudio Lobo",
      rubro: "Servicios profesionales · CABA",
      texto:
        "Lo que más uso es el reporte por cliente. Saber quién es mi mejor cuenta y a quién tengo que llamar me cambió la cobranza.",
    },
  ],

  sellos: [
    { icon: "🔒", titulo: "Datos cifrados", desc: "Tu información y la de tus clientes, protegida de punta a punta." },
    { icon: "🏦", titulo: "Acreditación real", desc: "La plata va a tu cuenta bancaria, no a una billetera intermedia." },
    { icon: "🤝", titulo: "Soporte humano", desc: "Te atiende una persona, no un bot. Lun a sáb." },
  ],

  kpis: [
    {
      id: "ingresos-mes",
      label: "Ingresos del mes",
      valor: 4820000,
      prefijo: "$",
      sufijo: "",
      decimales: 0,
      deltaPct: 12.4,
      up: true,
      comparativa: "vs $4.288.000 el mes pasado",
    },
    {
      id: "cobros",
      label: "Cobros acreditados",
      valor: 318,
      prefijo: "",
      sufijo: "",
      decimales: 0,
      deltaPct: 6.0,
      up: true,
      comparativa: "vs 300 el mes pasado",
    },
    {
      id: "ticket",
      label: "Ticket promedio",
      valor: 15160,
      prefijo: "$",
      sufijo: "",
      decimales: 0,
      deltaPct: 3.2,
      up: true,
      comparativa: "vs $14.690 el mes pasado",
    },
    {
      id: "tasa",
      label: "Tasa de cobro",
      valor: 96.4,
      prefijo: "",
      sufijo: "%",
      decimales: 1,
      deltaPct: 0.8,
      up: true,
      comparativa: "8 de cada 10 pagan a término",
    },
  ],

  ingresos: {
    meses: ["Ago", "Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar"],
    actual: [3120000, 3340000, 3580000, 3910000, 4460000, 4180000, 4520000, 4820000],
    previo: [2680000, 2810000, 2990000, 3210000, 3680000, 3340000, 3520000, 3760000],
    totalActual: "$31.930.000",
    totalPrevio: "$26.990.000",
    variacion: "+18,3% interanual",
  },

  movimientos: [
    { id: "mv-01", fecha: "Hoy · 12:04", concepto: "Alquiler depto Güemes 1240", cliente: "Inmobiliaria Norte", medio: "Transferencia", monto: 480000, estado: "Acreditado" },
    { id: "mv-02", fecha: "Hoy · 11:48", concepto: "Reposición mercadería", cliente: "Kiosco El Sol", medio: "Tarjeta ·· 4242", monto: 86500, estado: "Acreditado" },
    { id: "mv-03", fecha: "Hoy · 11:12", concepto: "Seña reserva local Av. San Martín", cliente: "Inmobiliaria Norte", medio: "Mercado Pago", monto: 250000, estado: "Pendiente" },
    { id: "mv-04", fecha: "Ayer · 18:30", concepto: "Honorarios marzo", cliente: "Estudio Lobo", medio: "Transferencia", monto: 340000, estado: "Acreditado" },
    { id: "mv-05", fecha: "Ayer · 16:02", concepto: "Expensas Torre I · 3ºB", cliente: "Consorcio Torre I", medio: "Débito automático", monto: 128000, estado: "Acreditado" },
    { id: "mv-06", fecha: "Ayer · 10:15", concepto: "Comisión venta casa B° Norte", cliente: "Inmobiliaria Norte", medio: "Transferencia", monto: 1250000, estado: "Acreditado" },
    { id: "mv-07", fecha: "2 mar · 19:44", concepto: "Cobro mensual mantenimiento", cliente: "Verdulería La Huerta", medio: "Efectivo", monto: 64000, estado: "Rechazado" },
    { id: "mv-08", fecha: "2 mar · 09:20", concepto: "Alquiler oficina Catamarca 540", cliente: "Estudio Lobo", medio: "Transferencia", monto: 395000, estado: "Acreditado" },
  ],

  clientes: [
    { id: "cl-norte", inicial: "G", color: "#eef0fb", nombre: "Inmobiliaria Norte", rubro: "Guadalupe Ferreyra", total: 8420000, operaciones: 47, ultima: "Hace 12 min", trend: "+18%", up: true },
    { id: "cl-lobo", inicial: "L", color: "#fef3c7", nombre: "Estudio Lobo", rubro: "Servicios profesionales", total: 5210000, operaciones: 28, ultima: "Ayer", trend: "+22%", up: true },
    { id: "cl-torre", inicial: "T", color: "#dbeafe", nombre: "Consorcio Torre I", rubro: "Administración", total: 3150000, operaciones: 36, ultima: "Ayer", trend: "+5%", up: true },
    { id: "cl-sol", inicial: "F", color: "#d1fae5", nombre: "Kiosco El Sol", rubro: "Fátima Ríos · Comercio", total: 1890000, operaciones: 19, ultima: "Hace 1 h", trend: "−3%", up: false },
    { id: "cl-huerta", inicial: "V", color: "#fee2e2", nombre: "Verdulería La Huerta", rubro: "Comercio", total: 980000, operaciones: 11, ultima: "Hace 2 días", trend: "+9%", up: true },
  ],

  ingresosPorRubro: [
    { label: "Alquileres", monto: 2180000, pct: 100 },
    { label: "Comisiones", monto: 1490000, pct: 68 },
    { label: "Servicios", monto: 720000, pct: 33 },
    { label: "Comercio", monto: 430000, pct: 20 },
  ],

  mediosDeCobro: [
    { label: "Transferencia", pct: 52, color: "#635bff" },
    { label: "Tarjeta", pct: 24, color: "#a78bfa" },
    { label: "Mercado Pago", pct: 16, color: "#c4b5fd" },
    { label: "Efectivo", pct: 8, color: "#e3e8ee" },
  ],
};
