/**
 * comercio-popular — datos del dominio + tipos.
 *
 * Única fuente de datos. Swap del mock por `fetch`/backend = tocar este
 * archivo; las piezas reciben todo por props y no saben de dónde vino.
 */

export const palette = {
  verde: "#16a34a",
  verdeSoft: "#dcfce7",
  text: "#171717",
  muted: "#737373",
  border: "#e5e5e5",
  surface: "#f8f9fa",
} as const;

export const ENVIO = 650;
export const ENVIO_GRATIS_DESDE = 15000;

export const PAGOS = ["Mercado Pago", "Efectivo", "Transferencia"] as const;
export type Pago = (typeof PAGOS)[number];

export const CATEGORIAS = ["Todo", "Almacén", "Bebidas", "Limpieza", "Lácteos", "Panadería"] as const;
export type Categoria = (typeof CATEGORIAS)[number];
export type CategoriaProducto = Exclude<Categoria, "Todo">;

export const fmt = (n: number) => "$" + n.toLocaleString("es-AR");

/* ---------- Tipos del dominio ---------- */

export type Producto = {
  id: string;
  nombre: string;
  precio: number;
  emoji: string;
  gradient: string;
  categoria: CategoriaProducto;
};

export type EstadoPedido = "Preparando" | "Listo" | "Entregado";
export type Pedido = {
  id: string;
  cliente: string;
  total: string;
  pago: string;
  estado: EstadoPedido;
  hora: string;
};

export type ProductoAdmin = {
  id: string;
  nombre: string;
  categoria: string;
  precio: string;
  stock: number;
  activo: boolean;
  gradient: string;
  emoji: string;
};

export type Cliente = {
  id: string;
  nombre: string;
  telefono: string;
  compras: number;
  total: string;
  frecuente: boolean;
};

export type SeccionTienda = {
  icon: string;
  titulo: string;
  campos: [string, string][];
};

export type KPI = { valor: string; label: string; trend: string; up: boolean };
export type BarraVenta = { dia: string; valor: number };
export type ItemConfianza = { icon: string; titulo: string; desc: string };
export type Comercio = { nombre: string; direccion: string; estado: string };

export type ComercioData = {
  comercio: Comercio;
  productos: Producto[];
  confianza: ItemConfianza[];
  pedidos: Pedido[];
  productosAdmin: ProductoAdmin[];
  clientes: Cliente[];
  tienda: SeccionTienda[];
  kpis: KPI[];
  ventasSemana: BarraVenta[];
  ventasSemanaTotal: string;
};

/* ---------- Mock (swap por backend acá) ---------- */

export const comercioData: ComercioData = {
  comercio: {
    nombre: "Almacén Don Pedro",
    direccion: "Av. Belgrano 1242 · Abierto hasta 21hs · Envíos al barrio",
    estado: "Abierto ahora",
  },

  productos: [
    { id: "yerba", nombre: "Yerba Playadito 1kg", precio: 3200, emoji: "🌿", categoria: "Almacén", gradient: "linear-gradient(135deg,#dcfce7,#bbf7d0)" },
    { id: "leche", nombre: "Leche La Serenísima 1L", precio: 1450, emoji: "🥛", categoria: "Lácteos", gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)" },
    { id: "fideos", nombre: "Fideos Matarazzo 500g", precio: 890, emoji: "🍝", categoria: "Almacén", gradient: "linear-gradient(135deg,#fef3c7,#fde68a)" },
    { id: "aceite", nombre: "Aceite Cocinero 900ml", precio: 2700, emoji: "🫒", categoria: "Almacén", gradient: "linear-gradient(135deg,#fef3c7,#fcd34d)" },
    { id: "pan", nombre: "Pan francés 1kg", precio: 1200, emoji: "🍞", categoria: "Panadería", gradient: "linear-gradient(135deg,#fed7aa,#fdba74)" },
    { id: "coca", nombre: "Coca Cola 2.25L", precio: 2490, emoji: "🥤", categoria: "Bebidas", gradient: "linear-gradient(135deg,#fee2e2,#fecaca)" },
    { id: "manteca", nombre: "Manteca Sancor 200g", precio: 1380, emoji: "🧈", categoria: "Lácteos", gradient: "linear-gradient(135deg,#fef9c3,#fef08a)" },
    { id: "arroz", nombre: "Arroz Gallo 1kg", precio: 1650, emoji: "🍚", categoria: "Almacén", gradient: "linear-gradient(135deg,#f5f5f4,#e7e5e4)" },
    { id: "lavandina", nombre: "Lavandina Ayudín 1L", precio: 990, emoji: "🧴", categoria: "Limpieza", gradient: "linear-gradient(135deg,#cffafe,#a5f3fc)" },
  ],

  confianza: [
    { icon: "🚚", titulo: "Envío en el día", desc: "Belgrano, Recoleta y Palermo · gratis desde $15.000" },
    { icon: "💳", titulo: "Medios de pago", desc: "Mercado Pago, efectivo o transferencia" },
    { icon: "📲", titulo: "Atención directa", desc: "Pedidos y consultas por WhatsApp al instante" },
  ],

  pedidos: [
    { id: "#5217", cliente: "Vecina del 4°B", total: "$4.320", pago: "Efectivo", estado: "Listo", hora: "14:42" },
    { id: "#5216", cliente: "Don Eduardo", total: "$2.890", pago: "MP", estado: "Preparando", hora: "14:18" },
    { id: "#5215", cliente: "Sra. González", total: "$8.150", pago: "Transferencia", estado: "Listo", hora: "13:50" },
    { id: "#5214", cliente: "Joven del kiosco", total: "$1.450", pago: "MP", estado: "Entregado", hora: "13:32" },
    { id: "#5213", cliente: "Roxana B.", total: "$12.780", pago: "Efectivo", estado: "Entregado", hora: "12:48" },
    { id: "#5212", cliente: "Familia Pérez", total: "$3.620", pago: "MP", estado: "Entregado", hora: "11:55" },
    { id: "#5211", cliente: "Marta del 2°", total: "$5.100", pago: "Transferencia", estado: "Entregado", hora: "10:30" },
  ],

  productosAdmin: [
    { id: "a-yerba", nombre: "Yerba Playadito 1kg", categoria: "Almacén", precio: "$3.200", stock: 24, activo: true, gradient: "linear-gradient(135deg,#dcfce7,#bbf7d0)", emoji: "🌿" },
    { id: "a-leche", nombre: "Leche La Serenísima 1L", categoria: "Lácteos", precio: "$1.450", stock: 36, activo: true, gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "🥛" },
    { id: "a-fideos", nombre: "Fideos Matarazzo 500g", categoria: "Almacén", precio: "$890", stock: 4, activo: true, gradient: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🍝" },
    { id: "a-pan", nombre: "Pan francés 1kg", categoria: "Panadería", precio: "$1.200", stock: 0, activo: false, gradient: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🍞" },
    { id: "a-coca", nombre: "Coca Cola 2.25L", categoria: "Bebidas", precio: "$2.490", stock: 18, activo: true, gradient: "linear-gradient(135deg,#fee2e2,#fecaca)", emoji: "🥤" },
    { id: "a-manteca", nombre: "Manteca Sancor 200g", categoria: "Lácteos", precio: "$1.380", stock: 9, activo: true, gradient: "linear-gradient(135deg,#fef9c3,#fef08a)", emoji: "🧈" },
    { id: "a-arroz", nombre: "Arroz Gallo 1kg", categoria: "Almacén", precio: "$1.650", stock: 3, activo: true, gradient: "linear-gradient(135deg,#f5f5f4,#e7e5e4)", emoji: "🍚" },
  ],

  clientes: [
    { id: "c-roxana", nombre: "Roxana Blanco", telefono: "11 5841-2204", compras: 23, total: "$184.300", frecuente: true },
    { id: "c-eduardo", nombre: "Don Eduardo Pereyra", telefono: "11 4429-7733", compras: 41, total: "$298.400", frecuente: true },
    { id: "c-gonzalez", nombre: "Sra. González (4°B)", telefono: "11 6234-1182", compras: 18, total: "$132.700", frecuente: true },
    { id: "c-perez", nombre: "Familia Pérez", telefono: "11 3387-9921", compras: 9, total: "$74.220", frecuente: true },
    { id: "c-marta", nombre: "Marta del 2°A", telefono: "11 5500-2310", compras: 7, total: "$48.900", frecuente: true },
    { id: "c-vecina", nombre: "Vecina del 4°B", telefono: "11 6177-3490", compras: 2, total: "$8.640", frecuente: false },
    { id: "c-joven", nombre: "Joven del kiosco", telefono: "11 4711-0028", compras: 1, total: "$1.450", frecuente: false },
  ],

  tienda: [
    { icon: "🏪", titulo: "Datos del comercio", campos: [["Nombre", "Almacén Don Pedro"], ["Dirección", "Av. Belgrano 1242, CABA"], ["CUIT", "20-12345678-9"]] },
    { icon: "💳", titulo: "Métodos de pago", campos: [["Efectivo", "Habilitado"], ["Mercado Pago", "Conectado ✓"], ["Transferencia", "CBU configurado"]] },
    { icon: "🚚", titulo: "Envíos", campos: [["Zona", "Belgrano, Recoleta, Palermo"], ["Costo base", "$650"], ["Tiempo", "30 a 90 minutos"]] },
    { icon: "🕐", titulo: "Horario", campos: [["Lun a Vie", "8:00 — 21:00"], ["Sábados", "8:00 — 14:00"], ["Domingos", "Cerrado"]] },
  ],

  kpis: [
    { valor: "$86.450", label: "Ventas hoy", trend: "+12%", up: true },
    { valor: "12", label: "Pedidos hoy", trend: "+3", up: true },
    { valor: "$7.204", label: "Ticket promedio", trend: "—", up: false },
    { valor: "67", label: "Clientes únicos / mes", trend: "+8", up: true },
  ],

  ventasSemana: [
    { dia: "L", valor: 65 }, { dia: "M", valor: 78 }, { dia: "X", valor: 52 },
    { dia: "J", valor: 88 }, { dia: "V", valor: 95 }, { dia: "S", valor: 100 }, { dia: "D", valor: 30 },
  ],
  ventasSemanaTotal: "$487.300",
};
