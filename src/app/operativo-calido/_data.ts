/**
 * operativo-calido — datos del dominio + tipos.
 *
 * Estilo interno-first (panel para no técnicos, tipo "Tienda de Fátima").
 * Única fuente de datos; swap del mock por backend = tocar este archivo.
 */

export const palette = {
  verde: "#16a34a",
  verdeSoft: "#dcfce7",
  naranja: "#f97316",
  naranjaSoft: "#fed7aa",
  rojo: "#dc2626",
  rojoSoft: "#fee2e2",
  text: "#171717",
  muted: "#737373",
  border: "#e5e5e5",
  surface: "#fafafa",
} as const;

export const pesos = (n: number) => "$" + n.toLocaleString("es-AR");

/* ---------- Pedidos ---------- */

export type Estado = "pendiente" | "preparando" | "entregado" | "cancelado";

export const estadoColor: Record<Estado, { bg: string; fg: string }> = {
  pendiente: { bg: "#fef3c7", fg: "#92400e" },
  preparando: { bg: "#fed7aa", fg: "#9a3412" },
  entregado: { bg: "#dcfce7", fg: "#166534" },
  cancelado: { bg: "#fee2e2", fg: "#991b1b" },
};

// pendiente → preparando → entregado. cancelado/entregado terminales.
export const flujo: Partial<Record<Estado, Estado>> = {
  pendiente: "preparando",
  preparando: "entregado",
};

export type Pedido = {
  id: string;
  cli: string;
  total: number;
  estado: Estado;
  hora: string;
  items: string;
};

export const PEDIDOS_INICIALES: Pedido[] = [
  { id: "#10487", cli: "Juan Pérez", total: 8420, estado: "pendiente", hora: "14:32", items: "Pan casero ×2 · Mermelada ×1" },
  { id: "#10486", cli: "María Soledad Aguirre", total: 3150, estado: "preparando", hora: "13:58", items: "Empanadas docena ×1" },
  { id: "#10483", cli: "Comercio La Esquina", total: 24300, estado: "preparando", hora: "11:30", items: "Pan casero ×6 · Yerba ×4" },
  { id: "#10485", cli: "Ramiro Suárez", total: 12700, estado: "entregado", hora: "13:12", items: "Yerba premium ×3 · Café ×1" },
  { id: "#10484", cli: "Lucía Martínez", total: 2890, estado: "entregado", hora: "12:48", items: "Alfajores caja ×1" },
  { id: "#10482", cli: "Gabriel R.", total: 1450, estado: "cancelado", hora: "10:15", items: "Mermelada ×1" },
];

export type FiltroPedido = "todos" | Estado;
export const FILTROS_PEDIDO: { id: FiltroPedido; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "pendiente", label: "Pendientes" },
  { id: "preparando", label: "Preparando" },
  { id: "entregado", label: "Entregados" },
];

/* ---------- Cobros ---------- */

export type Cobro = {
  id: string;
  quien: string;
  monto: string;
  metodo: string;
  estado: "Acreditado" | "Pendiente";
  hora: string;
};

export const COBROS: Cobro[] = [
  { id: "co-1", quien: "María Soledad Aguirre", monto: "$3.150", metodo: "MP — Tarjeta", estado: "Acreditado", hora: "14:02" },
  { id: "co-2", quien: "Ramiro Suárez", monto: "$12.700", metodo: "MP — Saldo en cuenta", estado: "Acreditado", hora: "13:18" },
  { id: "co-3", quien: "Lucía Martínez", monto: "$2.890", metodo: "MP — QR", estado: "Acreditado", hora: "12:50" },
  { id: "co-4", quien: "Comercio La Esquina", monto: "$24.300", metodo: "Transferencia", estado: "Pendiente", hora: "11:30" },
  { id: "co-5", quien: "Juan Pérez", monto: "$8.420", metodo: "MP — Tarjeta", estado: "Pendiente", hora: "14:32" },
];

export type CobroResumen = { valor: string; label: string; color: string; bg: string };
export const COBROS_FIJOS: CobroResumen[] = [
  { valor: "$48.270", label: "Cobrado hoy", color: palette.verde, bg: palette.verdeSoft },
  { valor: "$1.284.500", label: "Mes en curso", color: palette.naranja, bg: palette.naranjaSoft },
];

/* ---------- Clientes ---------- */

export type ClienteOp = {
  id: string;
  nombre: string;
  wpp: string;
  ultimo: string;
  total: string;
  frecuente: boolean;
};

export const CLIENTES: ClienteOp[] = [
  { id: "cl-1", nombre: "María Soledad Aguirre", wpp: "11 5512-4480", ultimo: "Hoy 13:58", total: "$48.230", frecuente: true },
  { id: "cl-2", nombre: "Comercio La Esquina", wpp: "11 4467-9021", ultimo: "Hoy 11:30", total: "$184.700", frecuente: true },
  { id: "cl-3", nombre: "Juan Pérez", wpp: "11 6690-1187", ultimo: "Hoy 14:32", total: "$12.840", frecuente: false },
  { id: "cl-4", nombre: "Lucía Martínez", wpp: "11 3308-7754", ultimo: "Hoy 12:48", total: "$23.460", frecuente: true },
  { id: "cl-5", nombre: "Ramiro Suárez", wpp: "11 5829-3340", ultimo: "Hoy 13:12", total: "$36.900", frecuente: true },
  { id: "cl-6", nombre: "Pedro Quiroga", wpp: "11 4471-2266", ultimo: "Lun 03/05", total: "$54.120", frecuente: true },
  { id: "cl-7", nombre: "Estela Romero", wpp: "11 6033-5519", ultimo: "Sáb 27/04", total: "$9.300", frecuente: false },
];

/* ---------- Landing (externo, pitch mínimo) ---------- */

export type PreviewKPI = { valor: string; label: string; color: string; bg: string };
export type PreviewRow = { id: string; cli: string; total: string; estado: Estado };
export type Beneficio = { num: string; titulo: string; desc: string; color: string };

export const PREVIEW_KPIS: PreviewKPI[] = [
  { valor: "6", label: "Pedidos hoy", color: palette.verde, bg: palette.verdeSoft },
  { valor: "$35.870", label: "A cobrar", color: palette.naranja, bg: palette.naranjaSoft },
  { valor: "3", label: "Entregas pendientes", color: palette.rojo, bg: palette.rojoSoft },
];

export const PREVIEW_ROWS: PreviewRow[] = [
  { id: "#10487", cli: "Juan Pérez", total: "$8.420", estado: "pendiente" },
  { id: "#10486", cli: "María Soledad", total: "$3.150", estado: "preparando" },
  { id: "#10485", cli: "Ramiro Suárez", total: "$12.700", estado: "entregado" },
];

export const BENEFICIOS: Beneficio[] = [
  { num: "01", titulo: "Mirá los pedidos del día", desc: "Quién compró, qué falta entregar y qué ya cerró. Cambiás el estado con un toque, sin perderte en menúes.", color: palette.verde },
  { num: "02", titulo: "Cobrá y facturá fácil", desc: "Conectado con Mercado Pago. Ves lo que entró hoy, lo del mes y lo que todavía falta cobrar.", color: palette.naranja },
  { num: "03", titulo: "Sin instalar nada", desc: "Entrás desde el celular o la compu y ya está. No hace falta ser técnico ni configurar servidores.", color: palette.verde },
];

export type SocialAvatar = { letra: string; bg: string };
export const SOCIAL_AVATARES: SocialAvatar[] = [
  { letra: "F", bg: palette.verdeSoft },
  { letra: "P", bg: palette.naranjaSoft },
  { letra: "M", bg: "#dbeafe" },
  { letra: "L", bg: "#fce7f3" },
];
