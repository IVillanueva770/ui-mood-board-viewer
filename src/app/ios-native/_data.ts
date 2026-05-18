/**
 * ios-native — datos del dominio + tipos.
 *
 * Negocio: app diaria de hábitos/turnos recomendada por kine/médico (AR).
 * Externo = presentación tipo App Store (no landing web). Interno = la app
 * con tab bar abajo. Única fuente de datos: enchufar backend = tocar este
 * archivo (las piezas reciben todo por props, no importan el mock).
 */

export const palette = {
  accent: "#007aff", // system blue
  indigo: "#5856d6",
  green: "#34c759",
  orange: "#ff9500",
  red: "#ff3b30",
  teal: "#5ac8fa",
  text: "#000000",
  secondary: "#3a3a3c",
  muted: "#8e8e93",
  sep: "#d1d1d6",
  groupBg: "#f2f2f7",
  card: "#ffffff",
  bg: "#f2f2f7",
} as const;

/* ---------- Tipos del dominio ---------- */

export type AppMeta = {
  nombre: string;
  tagline: string;
  claim: string;
  sub: string;
  iconGradient: string;
  ratingProm: number;
  reviewsTexto: string;
  descargas: string;
  ranking: string;
};

export type OnbSlide = {
  id: string;
  emoji: string;
  titulo: string;
  desc: string;
  gradient: string;
};

export type FeatureItem = { icon: string; label: string; desc: string };
export type FeatureGroup = { titulo: string; items: FeatureItem[] };

export type Review = {
  id: string;
  autor: string;
  inicial: string;
  color: string;
  fecha: string;
  estrellas: number;
  titulo: string;
  texto: string;
};

export type Habito = {
  id: string;
  titulo: string;
  detalle: string;
  duracion: string;
  emoji: string;
  color: string;
  done: boolean;
  instrucciones: string[];
};

export type TurnoEstado = "hoy" | "confirmado" | "pendiente";

export type Turno = {
  id: string;
  profesional: string;
  especialidad: string;
  inicial: string;
  color: string;
  dia: string;
  hora: string;
  lugar: string;
  estado: TurnoEstado;
  nota?: string;
};

export type Ring = {
  id: string;
  label: string;
  valor: number; // 0-100
  metaTexto: string;
  color: string;
};

export type WeekDay = { d: string; pct: number; done: boolean };

export type Insight = { icon: string; label: string; val: string; sub: string };

export type SettingsItem = { icon: string; label: string; val: string };
export type SettingsGroup = { titulo: string; items: SettingsItem[] };

export type Perfil = { nombre: string; email: string; sync: string; inicial: string };

export type IosData = {
  app: AppMeta;
  onboarding: OnbSlide[];
  features: FeatureGroup[];
  reviews: Review[];
  habitos: Habito[];
  turnos: Turno[];
  rings: Ring[];
  semana: WeekDay[];
  insights: Insight[];
  ajustes: SettingsGroup[];
  perfil: Perfil;
};

/* ---------- Mock (swap por backend acá) ---------- */

export const iosData: IosData = {
  app: {
    nombre: "Constancia",
    tagline: "Salud y Forma física",
    claim: "Hábitos buenos, sin culpa.",
    sub: "La app que tu kine o médico recomienda para construir rutinas que duren. Con la fluidez nativa de iOS.",
    iconGradient: "linear-gradient(135deg,#007aff,#5856d6)",
    ratingProm: 4.9,
    reviewsTexto: "12,4 mil reseñas",
    descargas: "420 mil",
    ranking: "#2 en Salud y Forma física",
  },

  onboarding: [
    {
      id: "o1",
      emoji: "🎯",
      titulo: "Tu rutina, no la de un influencer",
      desc: "Hábitos pensados con tu kine. Sin culpa, sin grititos motivacionales.",
      gradient: "linear-gradient(135deg,#007aff,#5856d6)",
    },
    {
      id: "o2",
      emoji: "🔔",
      titulo: "Recordatorios que no molestan",
      desc: "Avisos suaves en el momento justo. Vos elegís cuándo y cómo.",
      gradient: "linear-gradient(135deg,#34c759,#30b556)",
    },
    {
      id: "o3",
      emoji: "📈",
      titulo: "Mirá cómo vas mejorando",
      desc: "Anillos, rachas y datos claros. El progreso se siente, no se adivina.",
      gradient: "linear-gradient(135deg,#ff9500,#ff5e3a)",
    },
  ],

  features: [
    {
      titulo: "Pensada para que la uses",
      items: [
        { icon: "🧘", label: "Rutinas guiadas", desc: "Cada ejercicio con instrucciones y duración." },
        { icon: "🔔", label: "Recordatorios suaves", desc: "Notificaciones que respetan tu día." },
        { icon: "👥", label: "Equipo", desc: "Sumá a quien te banca y sostené la racha juntos." },
      ],
    },
    {
      titulo: "Tus datos, tranquilos",
      items: [
        { icon: "💚", label: "Apple Health", desc: "Sincroniza sin que tengas que pensarlo." },
        { icon: "🔒", label: "Privacidad real", desc: "Tus datos no se venden. Nunca." },
        { icon: "📤", label: "Exportá cuando quieras", desc: "Todo tuyo, en un toque." },
      ],
    },
  ],

  reviews: [
    {
      id: "r1",
      autor: "Sofía D.",
      inicial: "SD",
      color: "#007aff",
      fecha: "hace 3 días",
      estrellas: 5,
      titulo: "Por fin una que no me hace sentir mal",
      texto: "Probé como diez apps de hábitos y todas te gritan. Esta es tranquila, clara, y el kine me sigue desde la suya. Bajó mi dolor lumbar de verdad.",
    },
    {
      id: "r2",
      autor: "Joaquín G.",
      inicial: "JG",
      color: "#ff9500",
      fecha: "hace 1 semana",
      estrellas: 5,
      titulo: "Me la recomendó el traumatólogo",
      texto: "La uso para la rehabilitación de rodilla. Los anillos me enganchan más de lo que quiero admitir. Llevo 28 días seguidos.",
    },
    {
      id: "r3",
      autor: "Macarena R.",
      inicial: "MR",
      color: "#34c759",
      fecha: "hace 2 semanas",
      estrellas: 4,
      titulo: "Muy buena, le falta un widget",
      texto: "Cumple perfecto. Le pondría 5 si tuviera widget en pantalla de inicio. Igual la recomiendo a todos.",
    },
  ],

  habitos: [
    {
      id: "h1",
      titulo: "Movilidad lumbar",
      detalle: "Rutina del kine",
      duracion: "8 min",
      emoji: "🧘",
      color: "#007aff",
      done: true,
      instrucciones: [
        "Gato-camello x10 repeticiones, sin forzar.",
        "Rotación de cadera acostado, 30s por lado.",
        "Puente de glúteos, 3 series de 12.",
      ],
    },
    {
      id: "h2",
      titulo: "Caminata",
      detalle: "Al aire libre si se puede",
      duracion: "20 min",
      emoji: "🚶",
      color: "#34c759",
      done: true,
      instrucciones: ["Paso sostenido, podés hablar pero no cantar.", "Sumá una cuesta si te sentís bien."],
    },
    {
      id: "h3",
      titulo: "Hidratación",
      detalle: "Repartido en el día",
      duracion: "6 vasos",
      emoji: "💧",
      color: "#5ac8fa",
      done: false,
      instrucciones: ["Un vaso al despertarte.", "Uno antes de cada comida.", "El último, lejos de dormir."],
    },
    {
      id: "h4",
      titulo: "Estiramiento de isquios",
      detalle: "Post caminata",
      duracion: "5 min",
      emoji: "🤸",
      color: "#ff9500",
      done: false,
      instrucciones: ["Sentado, pierna extendida, llevá el pecho sin redondear la espalda.", "30s por pierna, dos vueltas."],
    },
    {
      id: "h5",
      titulo: "Respiración 4-7-8",
      detalle: "Antes de dormir",
      duracion: "3 min",
      emoji: "🫁",
      color: "#5856d6",
      done: false,
      instrucciones: ["Inhalá 4s, sostené 7s, exhalá 8s.", "Cuatro ciclos, sin apurar."],
    },
  ],

  turnos: [
    {
      id: "t1",
      profesional: "Lic. Romina Vázquez",
      especialidad: "Kinesiología",
      inicial: "RV",
      color: "#007aff",
      dia: "Hoy",
      hora: "17:30",
      lugar: "Consultorio Belgrano",
      estado: "hoy",
      nota: "Traer la faja lumbar y ropa cómoda.",
    },
    {
      id: "t2",
      profesional: "Dr. Esteban Roldán",
      especialidad: "Traumatología",
      inicial: "ER",
      color: "#ff9500",
      dia: "Jue 22 may",
      hora: "10:00",
      lugar: "Sanatorio Norte",
      estado: "pendiente",
      nota: "Llevar la resonancia anterior.",
    },
    {
      id: "t3",
      profesional: "Lic. Romina Vázquez",
      especialidad: "Kinesiología",
      inicial: "RV",
      color: "#007aff",
      dia: "Mar 27 may",
      hora: "17:30",
      lugar: "Consultorio Belgrano",
      estado: "confirmado",
    },
    {
      id: "t4",
      profesional: "Nutr. Carla Méndez",
      especialidad: "Nutrición",
      inicial: "CM",
      color: "#34c759",
      dia: "Vie 30 may",
      hora: "09:00",
      lugar: "Videollamada",
      estado: "pendiente",
    },
  ],

  rings: [
    { id: "mov", label: "Movimiento", valor: 78, metaTexto: "390 / 500 kcal", color: "#ff3b30" },
    { id: "ejer", label: "Ejercicio", valor: 64, metaTexto: "19 / 30 min", color: "#34c759" },
    { id: "cons", label: "Constancia", valor: 92, metaTexto: "11 / 12 hábitos", color: "#5ac8fa" },
  ],

  semana: [
    { d: "L", pct: 100, done: true },
    { d: "M", pct: 75, done: true },
    { d: "Mi", pct: 100, done: true },
    { d: "J", pct: 50, done: true },
    { d: "V", pct: 100, done: true },
    { d: "S", pct: 25, done: true },
    { d: "D", pct: 60, done: false },
  ],

  insights: [
    { icon: "🔥", label: "Racha más larga", val: "28 días", sub: "feb '26" },
    { icon: "🧘", label: "Hábito favorito", val: "Movilidad lumbar", sub: "47 sesiones" },
    { icon: "⏱", label: "Tiempo total", val: "8 h 24 m", sub: "este mes" },
    { icon: "📈", label: "Promedio diario", val: "3,2 hábitos", sub: "+0,4 vs abril" },
  ],

  ajustes: [
    {
      titulo: "App",
      items: [
        { icon: "🔔", label: "Notificaciones", val: "Activadas" },
        { icon: "🌙", label: "Apariencia", val: "Sistema" },
        { icon: "🔊", label: "Sonidos", val: "Suave" },
      ],
    },
    {
      titulo: "Datos",
      items: [
        { icon: "💚", label: "Apple Health", val: "Conectado" },
        { icon: "📤", label: "Exportar datos", val: "›" },
        { icon: "🔒", label: "Privacidad", val: "›" },
      ],
    },
    {
      titulo: "Soporte",
      items: [
        { icon: "❓", label: "Ayuda", val: "›" },
        { icon: "✉️", label: "Contactar", val: "›" },
        { icon: "ℹ️", label: "Acerca de", val: "v2.4.1" },
      ],
    },
  ],

  perfil: {
    nombre: "Nacho Villanueva",
    email: "nacho@example.com",
    sync: "iCloud sincronizado",
    inicial: "NV",
  },
};
