/**
 * material-3 — datos del dominio + tokens Material 3.
 *
 * Negocio: "Mango" — app de control de gastos personales (Android mainstream
 * argentino). Única fuente de datos: enchufar un backend = tocar este archivo;
 * cada pieza recibe lo suyo por props. Sin lorem: comercios/montos argentinos.
 *
 * `m3` = color roles de Material 3 (surface/primary/containers). `elevation()`
 * = tokens de sombra M3 (niveles 1–5). El page.tsx no define colores sueltos:
 * todo sale de acá para que la identidad Material sea consistente.
 */

/* ---------- Color roles Material 3 ---------- */

export const m3 = {
  bg: "#fef7ff",
  surface: "#fffbff",
  surfaceContainerLow: "#f7f2fa",
  surfaceContainer: "#f2ecf5",
  surfaceContainerHigh: "#ece6f0",
  surfaceVariant: "#e7e0ec",
  primary: "#6750a4",
  onPrimary: "#ffffff",
  primaryContainer: "#eaddff",
  onPrimaryContainer: "#21005d",
  secondary: "#625b71",
  secondaryContainer: "#e8def8",
  onSecondaryContainer: "#1d192b",
  tertiary: "#7d5260",
  tertiaryContainer: "#ffd8e4",
  onTertiaryContainer: "#31111d",
  success: "#386a20",
  successContainer: "#d7eac7",
  error: "#b3261e",
  errorContainer: "#f9dedc",
  onError: "#ffffff",
  onSurface: "#1d1b20",
  onSurfaceVariant: "#49454f",
  outline: "#79747e",
  outlineVariant: "#cac4d0",
} as const;

/** Sombras de elevación M3 (nivel 1–5). Tonal: par de capas key + ambient. */
const SHADOWS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "0 1px 2px rgba(0,0,0,0.26), 0 1px 3px 1px rgba(0,0,0,0.11)",
  2: "0 1px 2px rgba(0,0,0,0.26), 0 2px 6px 2px rgba(0,0,0,0.11)",
  3: "0 1px 3px rgba(0,0,0,0.26), 0 4px 8px 3px rgba(0,0,0,0.12)",
  4: "0 2px 3px rgba(0,0,0,0.26), 0 6px 10px 4px rgba(0,0,0,0.12)",
  5: "0 4px 4px rgba(0,0,0,0.26), 0 8px 12px 6px rgba(0,0,0,0.13)",
};
export const elevation = (lvl: 1 | 2 | 3 | 4 | 5) => SHADOWS[lvl];

/** Formato pesos argentino (separador de miles), sin decimales. */
export const pesos = (n: number) =>
  `${n < 0 ? "-" : ""}$ ${Math.abs(n).toLocaleString("es-AR")}`;

/* ---------- Tipos del dominio ---------- */

export type Resumen = {
  saldo: string;
  ingresoMes: string;
  gastoMes: string;
  presupuestoMes: number;
  gastadoMes: number;
};

export type Categoria = {
  id: string;
  nombre: string;
  icon: string;
  color: string;
  bg: string;
  gastado: number;
  presupuesto: number;
};

export type Movimiento = {
  id: string;
  comercio: string;
  categoria: string;
  monto: number; // negativo = gasto, positivo = ingreso
  grupo: string; // "Hoy" | "Ayer" | "Esta semana" ...
  hora: string;
  metodo: string;
  icon: string;
  color: string;
  bg: string;
};

export type SubGasto = { etiqueta: string; monto: number; pct: number; color: string };

export type DetalleCategoria = {
  nombre: string;
  icon: string;
  totalMes: string;
  variacion: string;
  subgastos: SubGasto[];
  insight: string;
};

export type Feature = { titulo: string; desc: string; icon: string; fg: string; bg: string };

export type ScreenSpec = {
  id: string;
  titulo: string;
  bullet: string;
  glyph: string;
  accent: string;
  accentBg: string;
};

export type Review = {
  autor: string;
  inicial: string;
  color: string;
  estrellas: number;
  fecha: string;
  texto: string;
  utiles: number;
};

export type RatingDist = { estrellas: number; pct: number };

export type Ajustes = {
  presupuesto: number;
  alertaGastos: boolean;
  resumenSemanal: boolean;
  modoOscuro: boolean;
  biometria: boolean;
  inicioMes: "1" | "15";
};

export type MangoData = {
  // Interno (app)
  resumen: Resumen;
  categorias: Categoria[];
  movimientos: Movimiento[];
  detalle: DetalleCategoria;
  ajustes: Ajustes;
  // Externo (Play Store)
  features: Feature[];
  capturas: ScreenSpec[];
  ratingScore: string;
  ratingTotal: string;
  ratingDist: RatingDist[];
  reviews: Review[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const mangoData: MangoData = {
  resumen: {
    saldo: "$ 184.350",
    ingresoMes: "$ 520.000",
    gastoMes: "$ 335.650",
    presupuestoMes: 400000,
    gastadoMes: 335650,
  },

  categorias: [
    { id: "super", nombre: "Súper", icon: "🛒", color: m3.primary, bg: m3.primaryContainer, gastado: 96400, presupuesto: 110000 },
    { id: "servicios", nombre: "Servicios", icon: "💡", color: m3.secondary, bg: m3.secondaryContainer, gastado: 78900, presupuesto: 80000 },
    { id: "comida", nombre: "Comida afuera", icon: "🍔", color: m3.tertiary, bg: m3.tertiaryContainer, gastado: 61200, presupuesto: 55000 },
    { id: "transporte", nombre: "Transporte", icon: "🚌", color: m3.primary, bg: m3.primaryContainer, gastado: 42300, presupuesto: 50000 },
    { id: "ocio", nombre: "Ocio", icon: "🎬", color: m3.secondary, bg: m3.secondaryContainer, gastado: 31850, presupuesto: 45000 },
    { id: "salud", nombre: "Salud", icon: "💊", color: m3.success, bg: m3.successContainer, gastado: 25000, presupuesto: 40000 },
  ],

  movimientos: [
    { id: "m1", comercio: "Carrefour Express", categoria: "Súper", monto: -18540, grupo: "Hoy", hora: "13:20", metodo: "Visa débito", icon: "🛒", color: m3.primary, bg: m3.primaryContainer },
    { id: "m2", comercio: "SUBE", categoria: "Transporte", monto: -2240, grupo: "Hoy", hora: "08:45", metodo: "Mercado Pago", icon: "🚌", color: m3.primary, bg: m3.primaryContainer },
    { id: "m3", comercio: "Café Martínez", categoria: "Comida afuera", monto: -4800, grupo: "Hoy", hora: "10:05", metodo: "Mercado Pago", icon: "☕", color: m3.tertiary, bg: m3.tertiaryContainer },
    { id: "m4", comercio: "Sueldo — Estudio", categoria: "Ingreso", monto: 520000, grupo: "Ayer", hora: "00:10", metodo: "Transferencia", icon: "💸", color: m3.success, bg: m3.successContainer },
    { id: "m5", comercio: "Spotify", categoria: "Ocio", monto: -3490, grupo: "Ayer", hora: "21:30", metodo: "Visa crédito", icon: "🎧", color: m3.secondary, bg: m3.secondaryContainer },
    { id: "m6", comercio: "Edenor", categoria: "Servicios", monto: -28760, grupo: "Ayer", hora: "16:00", metodo: "Débito automático", icon: "💡", color: m3.secondary, bg: m3.secondaryContainer },
    { id: "m7", comercio: "Rappi", categoria: "Comida afuera", monto: -12300, grupo: "Esta semana", hora: "Lun 22:15", metodo: "Visa crédito", icon: "🛵", color: m3.tertiary, bg: m3.tertiaryContainer },
    { id: "m8", comercio: "Farmacity", categoria: "Salud", monto: -9650, grupo: "Esta semana", hora: "Lun 19:40", metodo: "Visa débito", icon: "💊", color: m3.success, bg: m3.successContainer },
    { id: "m9", comercio: "YPF", categoria: "Transporte", monto: -22000, grupo: "Esta semana", hora: "Dom 11:20", metodo: "Visa crédito", icon: "⛽", color: m3.primary, bg: m3.primaryContainer },
    { id: "m10", comercio: "MercadoLibre", categoria: "Ocio", monto: -15990, grupo: "Esta semana", hora: "Sáb 15:55", metodo: "Mercado Pago", icon: "📦", color: m3.secondary, bg: m3.secondaryContainer },
  ],

  detalle: {
    nombre: "Comida afuera",
    icon: "🍔",
    totalMes: "$ 61.200",
    variacion: "+18% vs abril",
    subgastos: [
      { etiqueta: "Delivery", monto: 28600, pct: 47, color: m3.tertiary },
      { etiqueta: "Restaurantes", monto: 19400, pct: 32, color: m3.primary },
      { etiqueta: "Café", monto: 8700, pct: 14, color: m3.secondary },
      { etiqueta: "Kiosco", monto: 4500, pct: 7, color: m3.success },
    ],
    insight: "Gastaste 18% más que el mes pasado en comida afuera. El delivery se llevó casi la mitad.",
  },

  ajustes: {
    presupuesto: 400000,
    alertaGastos: true,
    resumenSemanal: true,
    modoOscuro: false,
    biometria: true,
    inicioMes: "1",
  },

  features: [
    { titulo: "Cargá en 2 toques", desc: "El FAB siempre a mano. Monto, categoría y listo — sin formularios eternos.", icon: "⚡", fg: m3.onPrimaryContainer, bg: m3.primaryContainer },
    { titulo: "Presupuestos que avisan", desc: "Te marca cuando una categoría se está yendo de mambo, antes de que sea tarde.", icon: "🎯", fg: m3.onSecondaryContainer, bg: m3.secondaryContainer },
    { titulo: "Tu mes, de un vistazo", desc: "Saldo, gastos por categoría y a dónde se fue la plata. Claro y al toque.", icon: "📊", fg: m3.onTertiaryContainer, bg: m3.tertiaryContainer },
    { titulo: "Sincronización segura", desc: "Tus datos cifrados, con biometría. Andan en todos tus dispositivos Android.", icon: "🔒", fg: m3.onPrimaryContainer, bg: m3.primaryContainer },
  ],

  capturas: [
    { id: "c1", titulo: "Inicio", bullet: "Saldo y presupuesto del mes", glyph: "🏠", accent: m3.primary, accentBg: m3.primaryContainer },
    { id: "c2", titulo: "Movimientos", bullet: "Deslizá para borrar o recategorizar", glyph: "📃", accent: m3.secondary, accentBg: m3.secondaryContainer },
    { id: "c3", titulo: "Categorías", bullet: "A dónde se va la plata", glyph: "🧁", accent: m3.tertiary, accentBg: m3.tertiaryContainer },
    { id: "c4", titulo: "Presupuesto", bullet: "Límites por categoría con alertas", glyph: "🎯", accent: m3.success, accentBg: m3.successContainer },
    { id: "c5", titulo: "Ajustes", bullet: "Material You a tu gusto", glyph: "⚙️", accent: m3.primary, accentBg: m3.primaryContainer },
  ],

  ratingScore: "4.8",
  ratingTotal: "12.430",
  ratingDist: [
    { estrellas: 5, pct: 79 },
    { estrellas: 4, pct: 13 },
    { estrellas: 3, pct: 5 },
    { estrellas: 2, pct: 2 },
    { estrellas: 1, pct: 1 },
  ],
  reviews: [
    { autor: "Maca R.", inicial: "M", color: m3.primary, estrellas: 5, fecha: "12 may 2026", texto: "Por fin una app de gastos que no es un Excel con onda. El FAB para cargar es comodísimo y los ripples se sienten re Android.", utiles: 142 },
    { autor: "Joaco G.", inicial: "J", color: m3.tertiary, estrellas: 5, fecha: "8 may 2026", texto: "La uso todos los días. Lo del aviso cuando me paso del presupuesto de delivery me salvó el mes, posta.", utiles: 89 },
    { autor: "Tomás M.", inicial: "T", color: m3.secondary, estrellas: 4, fecha: "2 may 2026", texto: "Muy buena y fluida. Le pondría 5 si dejara exportar a Excel, pero el equipo dijo que ya viene en camino.", utiles: 37 },
  ],
};
