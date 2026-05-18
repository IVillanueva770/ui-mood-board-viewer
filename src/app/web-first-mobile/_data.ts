/**
 * web-first-mobile — datos del dominio + tipos.
 *
 * Estilo genérico-utilitario: una landing web responsive + un feed tipo red
 * social. Única fuente de datos: swap a backend = tocar este archivo.
 */

export const palette = {
  accent: "#1d9bf0", // azul web
  accentDark: "#1a8cd8",
  text: "#0f1419",
  muted: "#536471",
  border: "#eff3f4",
  borderStrong: "#cfd9de",
  surface: "#f7f9fa",
  card: "#ffffff",
  like: "#f91880",
  repost: "#00ba7c",
} as const;

/* ---------- Tipos del dominio ---------- */

export type NavLink = { label: string; href: string };

export type Feature = { dot: string; titulo: string; desc: string };

export type Stat = { valor: string; label: string };

export type FooterCol = { titulo: string; links: string[] };

export type Post = {
  id: string;
  autor: string;
  handle: string;
  time: string;
  texto: string;
  media: boolean;
  mediaGradient?: string;
  avatar: string;
  replies: number;
  reposts: number;
  likes: number;
  views: string;
  liked: boolean;
};

export type Trend = { cat: string; tag: string; posts: string };

export type Sugerido = { nombre: string; handle: string; bio: string; avatar: string };

export type Notif = {
  tipo: "like" | "repost" | "follow" | "reply";
  icon: string;
  autor: string;
  texto: string;
  extracto: string;
  time: string;
};

export type PostPerfil = { texto: string; time: string; likes: string };

export type PerfilUsuario = {
  nombre: string;
  handle: string;
  bio: string;
  ubicacion: string;
  desde: string;
  siguiendo: string;
  seguidores: string;
  posts: string;
  cover: string;
  avatar: string;
  iniciales: string;
  destacados: PostPerfil[];
  respuestas: PostPerfil[];
};

export type WebData = {
  navLinks: NavLink[];
  features: Feature[];
  stats: Stat[];
  footer: FooterCol[];
  feed: Post[];
  trends: Trend[];
  sugeridos: Sugerido[];
  notifs: Notif[];
  perfil: PerfilUsuario;
};

/* ---------- Mock (swap por backend acá) ---------- */

export const webData: WebData = {
  navLinks: [
    { label: "Producto", href: "#" },
    { label: "Cómo funciona", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Blog", href: "#" },
  ],

  features: [
    { dot: "#1d9bf0", titulo: "Cronológico siempre", desc: "Ves lo que escribieron quienes seguís, en el orden en que lo escribieron. Sin reranking ni algoritmo que decida por vos." },
    { dot: "#00ba7c", titulo: "Sin anuncios en el feed", desc: "El feed es de la gente, no del marketing. Si hay sponsors, viven en una sección aparte, marcada y evitable." },
    { dot: "#f91880", titulo: "Tu data, tu decisión", desc: "Exportás todo cuando quieras y borrás todo cuando quieras. Sin fricción artificial ni laberintos de cancelación." },
  ],

  stats: [
    { valor: "240k", label: "cuentas activas" },
    { valor: "0", label: "anuncios en el feed" },
    { valor: "100%", label: "cronológico real" },
    { valor: "4.7★", label: "en las tiendas" },
  ],

  footer: [
    { titulo: "Producto", links: ["Novedades", "Cómo funciona", "Precios", "Estado del servicio"] },
    { titulo: "Empresa", links: ["Sobre nosotros", "Blog", "Trabajá con nosotros", "Prensa"] },
    { titulo: "Recursos", links: ["Centro de ayuda", "Comunidad", "Desarrolladores", "API"] },
    { titulo: "Legal", links: ["Términos", "Privacidad", "Cookies", "Datos personales"] },
  ],

  feed: [
    { id: "p1", autor: "Guadalupe Alanís", handle: "@guada_inmob", time: "2h", texto: "Lanzamos el sitio nuevo con catálogo en vivo y blog de barrio. La idea: que cada propiedad cuente algo del lugar, no solo metros cuadrados.", media: true, mediaGradient: "linear-gradient(135deg,#1d9bf0,#8b5cf6)", avatar: "linear-gradient(135deg,#1d9bf0,#8b5cf6)", replies: 12, reposts: 23, likes: 184, views: "4.2k", liked: false },
    { id: "p2", autor: "Nacho Galland", handle: "@kine_galland", time: "5h", texto: "Si el dolor lumbar baja con movimiento y sube en reposo, no es debilidad: es información. Empezá por ahí antes de tirarte a hacer fuerza.", media: false, avatar: "linear-gradient(135deg,#00ba7c,#1d9bf0)", replies: 7, reposts: 18, likes: 92, views: "2.1k", liked: false },
    { id: "p3", autor: "TECHO Salta", handle: "@techo_salta", time: "1d", texto: "Cuadrillas para mayo: 4 jornadas de construcción + 2 colectas. Si querés sumarte, link en bio. Ningún voluntario sobra.", media: true, mediaGradient: "linear-gradient(135deg,#f91880,#ff7a00)", avatar: "linear-gradient(135deg,#f91880,#ff7a00)", replies: 34, reposts: 98, likes: 412, views: "9.8k", liked: true },
    { id: "p4", autor: "Sofía Domínguez", handle: "@sofi_dom", time: "2d", texto: "Tres reglas que estoy probando esta semana: una sola pestaña a la vez, leer antes de escribir, dormir antes de responder.", media: false, avatar: "linear-gradient(135deg,#5856d6,#007aff)", replies: 21, reposts: 44, likes: 298, views: "6.4k", liked: false },
    { id: "p5", autor: "Buen Boy", handle: "@buenboy_arg", time: "3d", texto: "Probamos el sistema nuevo de turnos online. Primera semana sin overbooking en mucho tiempo. Lo dejamos.", media: false, avatar: "linear-gradient(135deg,#94a3b8,#64748b)", replies: 9, reposts: 4, likes: 56, views: "1.4k", liked: false },
  ],

  trends: [
    { cat: "Deportes · trending", tag: "#Boca", posts: "184k posts" },
    { cat: "Política · trending", tag: "Inflación abril", posts: "92k posts" },
    { cat: "Ciencia · trending", tag: "Eclipse del 14", posts: "41k posts" },
    { cat: "Cine · trending", tag: "Argentina 1985", posts: "28k posts" },
    { cat: "Economía · trending", tag: "#YPF", posts: "22k posts" },
  ],

  sugeridos: [
    { nombre: "Ana Méndez", handle: "@ana_mendez", bio: "Diseñadora UX · Buenos Aires", avatar: "linear-gradient(135deg,#1d9bf0,#8b5cf6)" },
    { nombre: "Diego Cabrera", handle: "@diego_cabrera", bio: "Periodista económico", avatar: "linear-gradient(135deg,#00ba7c,#1d9bf0)" },
    { nombre: "Cecilia Ortega", handle: "@ceci_ort", bio: "Psicóloga · escritora", avatar: "linear-gradient(135deg,#f91880,#ff7a00)" },
  ],

  notifs: [
    { tipo: "like", icon: "♥", autor: "Joaco G.", texto: "le gustó tu post", extracto: "Tres reglas que estoy probando esta semana…", time: "5m" },
    { tipo: "repost", icon: "🔁", autor: "Macarena R.", texto: "reposteó tu post", extracto: "El feed que controlás vos.", time: "32m" },
    { tipo: "follow", icon: "👤", autor: "Ana Méndez", texto: "te empezó a seguir", extracto: "", time: "1h" },
    { tipo: "reply", icon: "💬", autor: "Nacho G.", texto: "respondió a tu post", extracto: "Eso me pasó la semana pasada — la pelvis…", time: "2h" },
    { tipo: "like", icon: "♥", autor: "Cecilia O. y 12 más", texto: "le gustaron tu post", extracto: "Si el dolor lumbar baja con movimiento…", time: "4h" },
    { tipo: "follow", icon: "👤", autor: "Diego Cabrera", texto: "te empezó a seguir", extracto: "", time: "1d" },
  ],

  perfil: {
    nombre: "Nacho Villanueva",
    handle: "@choc_o_",
    bio: "Construyo cosas. Escribo poco, pruebo mucho. Las opiniones acá son mías y no las del lunes próximo.",
    ubicacion: "Buenos Aires",
    desde: "Se unió en may 2024",
    siguiendo: "412",
    seguidores: "2.4k",
    posts: "184",
    cover: "linear-gradient(120deg,#1d9bf0,#8b5cf6,#f91880)",
    avatar: "linear-gradient(135deg,#1d9bf0,#8b5cf6)",
    iniciales: "NV",
    destacados: [
      { texto: "Tres reglas que estoy probando: una sola pestaña a la vez, leer antes de escribir, dormir antes de responder.", time: "3d", likes: "298" },
      { texto: "El feed que controlás vos. Sin algoritmo predatorio. Eso es lo que estamos intentando construir.", time: "1 sem", likes: "152" },
      { texto: "Si el dolor lumbar baja con movimiento y sube en reposo, no es debilidad: es información.", time: "2 sem", likes: "92" },
    ],
    respuestas: [
      { texto: "En respuesta a @sofi_dom — lo de dormir antes de responder me cambió el timeline entero.", time: "2d", likes: "41" },
      { texto: "En respuesta a @techo_salta — anotado para la jornada del 18, llevo dos personas más.", time: "4d", likes: "27" },
    ],
  },
};
