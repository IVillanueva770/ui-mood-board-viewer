/**
 * airbnb-friendly — datos del dominio + tipos.
 *
 * Única fuente de datos de la página. Cambiar el mock por un `fetch`/server
 * real = tocar este archivo y nada más; las piezas reciben todo por props y
 * no saben de dónde vino el dato.
 */

export const palette = {
  rausch: "#ff5a5f",
  text: "#222222",
  muted: "#717171",
  border: "#ebebeb",
  surface: "#fafafa",
  softPink: "#ffe4e6",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Categoria = "Montaña" | "Playa" | "Ciudad" | "Campo";

export type Listing = {
  id: string;
  lugar: string;
  ciudad: string;
  anfitrion: string;
  rating: number;
  reviews: number;
  precio: string; // formateado AR, ej "$48.500"
  superAnfitrion: boolean;
  gradient: string;
  emoji: string;
  categoria: Categoria;
  favorito: boolean;
};

export type Paso = { n: number; icon: string; titulo: string; desc: string };

export type Testimonio = {
  id: string;
  inicial: string;
  color: string;
  nombre: string;
  ciudad: string;
  texto: string;
};

export type ItemConfianza = { icon: string; titulo: string; desc: string };

export type Badge = { label: string; bg: string; fg: string };

export type Perfil = {
  nombre: string;
  inicial: string;
  desde: number;
  viajes: number;
  badges: Badge[];
};

export type PasoTimeline = {
  label: string;
  estado: "hecho" | "activo" | "pendiente";
};

export type ProximoViaje = {
  emoji: string;
  titulo: string;
  detalle: string;
  diasRestantes: number;
  timeline: PasoTimeline[];
};

export type Viaje = {
  id: string;
  lugar: string;
  ciudad: string;
  fechas: string;
  anfitrion: string;
  total: string;
  noches: number;
  emoji: string;
};

export type Mensaje = {
  id: string;
  inicial: string;
  color: string;
  nombre: string;
  lugar: string;
  preview: string;
  hora: string;
  unread: number;
  typing: boolean;
};

export type ItemWishlist = {
  id: string;
  lugar: string;
  ciudad: string;
  precio: string;
  gradient: string;
  superAnfitrion: boolean;
  emoji: string;
};

export type SeccionCuenta = { icon: string; titulo: string; desc: string };

export type AirbnbData = {
  destinos: string[];
  listings: Listing[];
  pasos: Paso[];
  testimonios: Testimonio[];
  confianza: ItemConfianza[];
  perfil: Perfil;
  proximoViaje: ProximoViaje;
  viajes: Viaje[];
  mensajes: Mensaje[];
  wishlist: ItemWishlist[];
  cuenta: SeccionCuenta[];
};

export const CATEGORIAS = ["Todos", "Montaña", "Playa", "Ciudad", "Campo"] as const;
export type FiltroCategoria = (typeof CATEGORIAS)[number];

/* ---------- Mock (swap por backend acá) ---------- */

export const airbnbData: AirbnbData = {
  destinos: ["Bariloche", "Mar del Plata", "Mendoza", "Salta", "El Bolsón", "Villa La Angostura"],

  listings: [
    { id: "llao-llao", lugar: "Cabaña en Llao Llao", ciudad: "Bariloche, Río Negro", anfitrion: "Mariela", rating: 4.97, reviews: 128, precio: "$48.500", superAnfitrion: true, gradient: "linear-gradient(135deg,#dbeafe,#a7f3d0)", emoji: "🏔️", categoria: "Montaña", favorito: true },
    { id: "loft-mardel", lugar: "Loft frente al mar", ciudad: "Punta Mogotes, Mar del Plata", anfitrion: "Diego", rating: 4.89, reviews: 94, precio: "$31.200", superAnfitrion: false, gradient: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🌊", categoria: "Playa", favorito: false },
    { id: "parrilla-mendoza", lugar: "Casa con parrilla", ciudad: "Chacras de Coria, Mendoza", anfitrion: "Carolina", rating: 4.92, reviews: 76, precio: "$39.800", superAnfitrion: true, gradient: "linear-gradient(135deg,#fce7f3,#fbcfe8)", emoji: "🍇", categoria: "Campo", favorito: false },
    { id: "domo-bolson", lugar: "Domo geodésico en el bosque", ciudad: "El Bolsón, Río Negro", anfitrion: "Lourdes", rating: 4.99, reviews: 203, precio: "$54.200", superAnfitrion: true, gradient: "linear-gradient(135deg,#a7f3d0,#6ee7b7)", emoji: "🌲", categoria: "Montaña", favorito: true },
    { id: "adobe-tafi", lugar: "Casa de adobe con vista", ciudad: "Tafí del Valle, Tucumán", anfitrion: "Ramiro", rating: 4.85, reviews: 51, precio: "$28.900", superAnfitrion: false, gradient: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🏞️", categoria: "Campo", favorito: false },
    { id: "jacuzzi-angostura", lugar: "Cabaña con jacuzzi", ciudad: "Villa La Angostura, Neuquén", anfitrion: "Sofía", rating: 4.94, reviews: 167, precio: "$71.800", superAnfitrion: true, gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "♨️", categoria: "Montaña", favorito: false },
    { id: "loft-palermo", lugar: "Loft minimalista", ciudad: "Palermo, CABA", anfitrion: "Tomás", rating: 4.88, reviews: 142, precio: "$42.000", superAnfitrion: false, gradient: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", emoji: "🏙️", categoria: "Ciudad", favorito: false },
    { id: "balcon-cordoba", lugar: "Departamento con balcón", ciudad: "Nueva Córdoba, Córdoba", anfitrion: "Brenda", rating: 4.90, reviews: 88, precio: "$26.700", superAnfitrion: true, gradient: "linear-gradient(135deg,#ede9fe,#ddd6fe)", emoji: "🌆", categoria: "Ciudad", favorito: false },
  ],

  pasos: [
    { n: 1, icon: "🔎", titulo: "Buscás", desc: "Escribí a dónde querés ir y cuándo. Te mostramos lugares reales, con fotos de verdad y el precio final — sin sorpresas al pagar." },
    { n: 2, icon: "📅", titulo: "Reservás", desc: "Elegís el que más te gustó y reservás en dos toques. El anfitrión te confirma y te escribe para coordinar la llegada." },
    { n: 3, icon: "🧳", titulo: "Disfrutás", desc: "Llegás, te instalás y a descansar. Si algo no sale como esperabas, te damos una mano: personas reales, no un bot." },
  ],

  testimonios: [
    { id: "carla", inicial: "C", color: "#ffe4e6", nombre: "Carla González", ciudad: "La Plata", texto: "Reservamos una cabaña en Bariloche para toda la familia y fue tal cual las fotos. Mariela nos dejó hasta la heladera llena. Repetimos seguro." },
    { id: "roberto", inicial: "R", color: "#dbeafe", nombre: "Roberto Méndez", ciudad: "Córdoba", texto: "Nunca había usado una app así y me daba cosa. Terminó siendo tan fácil que reservé desde el celu arriba del colectivo." },
    { id: "vanesa", inicial: "V", color: "#dcfce7", nombre: "Vanesa Torres", ciudad: "Rosario", texto: "Tuvimos un problema con el agua caliente y en media hora lo resolvieron. Te atiende una persona, no un robot. Eso se valora un montón." },
  ],

  confianza: [
    { icon: "🏠", titulo: "2.300+ alojamientos", desc: "En toda Argentina, de norte a sur" },
    { icon: "🔄", titulo: "Cancelación flexible", desc: "Cambiá de planes sin drama" },
    { icon: "🤝", titulo: "Soporte humano 24 h", desc: "Te atiende una persona, no un bot" },
  ],

  perfil: {
    nombre: "Carla González",
    inicial: "C",
    desde: 2019,
    viajes: 14,
    badges: [
      { label: "✓ Identidad verificada", bg: "#dcfce7", fg: "#166534" },
      { label: "⭐ Huésped confiable", bg: "#ffe4e6", fg: "#ff5a5f" },
    ],
  },

  proximoViaje: {
    emoji: "🏔️",
    titulo: "Cabaña en Llao Llao, Bariloche",
    detalle: "14 al 21 de julio · 7 noches · Anfitriona: Mariela",
    diasRestantes: 9,
    timeline: [
      { label: "Reserva confirmada", estado: "hecho" },
      { label: "Pago realizado", estado: "hecho" },
      { label: "Faltan 9 días", estado: "activo" },
      { label: "Check-in · 14 jul", estado: "pendiente" },
    ],
  },

  viajes: [
    { id: "v-llao", lugar: "Cabaña en Llao Llao", ciudad: "Bariloche, Río Negro", fechas: "14 — 21 jul", anfitrion: "Mariela", total: "$339.500", noches: 7, emoji: "🏔️" },
    { id: "v-mardel", lugar: "Loft frente al mar", ciudad: "Punta Mogotes, Mar del Plata", fechas: "12 — 15 ago", anfitrion: "Diego", total: "$93.600", noches: 3, emoji: "🌊" },
    { id: "v-mendoza", lugar: "Casa con parrilla", ciudad: "Chacras de Coria, Mendoza", fechas: "3 — 6 oct", anfitrion: "Carolina", total: "$119.400", noches: 3, emoji: "🍇" },
  ],

  mensajes: [
    { id: "m-mariela", inicial: "M", color: "#ffe4e6", nombre: "Mariela", lugar: "Cabaña Llao Llao", preview: "Hola Carla! Te esperamos el 14, llevá pilchas de abrigo que acá hace frío 🥶", hora: "10:42", unread: 2, typing: true },
    { id: "m-diego", inicial: "D", color: "#dbeafe", nombre: "Diego", lugar: "Loft Mar del Plata", preview: "Confirmado el check-in a las 15hs. Cualquier cosa me escribís", hora: "Ayer", unread: 0, typing: false },
    { id: "m-carolina", inicial: "C", color: "#dcfce7", nombre: "Carolina", lugar: "Casa con parrilla", preview: "Te mando la dirección por acá una semana antes así no te perdés", hora: "Lun", unread: 0, typing: false },
    { id: "m-fernando", inicial: "F", color: "#fef3c7", nombre: "Fernando", lugar: "Estudio en Salta", preview: "Buenísimo. La reserva quedó confirmada, te llega el mail con detalles", hora: "Sáb", unread: 0, typing: false },
    { id: "m-lourdes", inicial: "L", color: "#e9d5ff", nombre: "Lourdes", lugar: "Domo El Bolsón", preview: "Sí hay wifi pero anda lento. Si necesitás trabajar te paso el del vecino 😅", hora: "29/4", unread: 1, typing: false },
  ],

  wishlist: [
    { id: "w-domo", lugar: "Domo geodésico en el bosque", ciudad: "El Bolsón", precio: "$54.200", gradient: "linear-gradient(135deg,#a7f3d0,#6ee7b7)", superAnfitrion: true, emoji: "🌲" },
    { id: "w-adobe", lugar: "Casa de adobe con vista", ciudad: "Tafí del Valle", precio: "$28.900", gradient: "linear-gradient(135deg,#fed7aa,#fdba74)", superAnfitrion: true, emoji: "🏞️" },
    { id: "w-palermo", lugar: "Loft minimalista", ciudad: "Palermo, CABA", precio: "$42.000", gradient: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", superAnfitrion: false, emoji: "🏙️" },
    { id: "w-jacuzzi", lugar: "Cabaña con jacuzzi", ciudad: "Villa La Angostura", precio: "$71.800", gradient: "linear-gradient(135deg,#dbeafe,#bfdbfe)", superAnfitrion: true, emoji: "♨️" },
  ],

  cuenta: [
    { icon: "👤", titulo: "Información personal", desc: "Nombre, foto, fecha de cumpleaños y datos de contacto" },
    { icon: "💳", titulo: "Pagos y cobros", desc: "Visa terminada en •• 4421 · 2 métodos guardados" },
    { icon: "✅", titulo: "Verificaciones", desc: "Email, teléfono e identidad verificados — falta documento" },
    { icon: "🔒", titulo: "Seguridad y acceso", desc: "Contraseña, sesiones activas y autenticación en dos pasos" },
    { icon: "🌍", titulo: "Idioma y región", desc: "Español (Argentina) · Pesos argentinos (ARS)" },
  ],
};
