/**
 * calm — datos del dominio + tipos.
 *
 * App de wellness premium minimal (estilos.ts: tracking de salud, programas
 * online, experiencias relajadas — comunica calma, cuidado, espacio). Única
 * fuente de datos: swap a backend = tocar este archivo; cada pieza recibe lo
 * suyo por props. Voz cálida en español + labels de marca en inglés (Calm/
 * Headspace) — consistente con la identidad del estilo. Sin lorem ipsum.
 */

export const palette = {
  bg: "#f7f3ee",
  surface: "#fff9f0",
  sage: "#7d8471",
  clay: "#c97c5d",
  sand: "#a89776",
  ink: "#2c2925",
  muted: "#5f5b54",
  line: "#ece4d6",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Programa = { tit: string; desc: string; color: string; n: string };

export type Paso = { n: string; tit: string; desc: string };

export type Testimonio = { texto: string; autor: string; contexto: string };

export type Plan = {
  nombre: string;
  precio: string;
  periodo: string;
  desc: string;
  features: string[];
  cta: string;
  destacado?: boolean;
};

export type Mood = { id: string; emoji: string; label: string };

export type SesionHoy = {
  fecha: string;
  nombre: string;
  invitacion: string;
  programa: {
    etiqueta: string;
    titulo: string;
    enfasis: string;
    desc: string;
    duracion: string;
    voz: string;
  };
  semana: {
    minutos: string;
    detalle: string;
    delta: string;
    path: string;
    dias: string[];
  };
};

export type CategoriaMeditacion = {
  cat: string;
  color: string;
  items: { t: string; min: string }[];
};

export type SleepStory = { tit: string; narrador: string; min: string; color: string };

export type MoodEntry = {
  dia: string;
  emoji: string;
  label: string;
  nota: string;
  barra: number;
  hora: string;
};

export type SettingsGroup = {
  titulo: string;
  items: { k: string; v: string }[];
};

export type CalmData = {
  // Externo (Library)
  programas: Programa[];
  pasos: Paso[];
  testimonios: Testimonio[];
  planes: Plan[];
  // Interno (Today)
  moods: Mood[];
  sesion: SesionHoy;
  meditaciones: CategoriaMeditacion[];
  sleep: SleepStory[];
  mood: MoodEntry[];
  settings: SettingsGroup[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const calmData: CalmData = {
  programas: [
    {
      n: "01",
      tit: "Sleep stories",
      desc: "Voces lentas que te llevan al sueño, sin promesas mágicas.",
      color: palette.sage,
    },
    {
      n: "02",
      tit: "Meditation",
      desc: "Sesiones cortas que se acomodan al día que tenés.",
      color: palette.clay,
    },
    {
      n: "03",
      tit: "Daily calm",
      desc: "Diez minutos por la mañana. Acumular sin presión.",
      color: palette.sand,
    },
    {
      n: "04",
      tit: "Respiración",
      desc: "Ejercicios guiados para bajar el pulso en cualquier momento.",
      color: palette.sage,
    },
  ],

  pasos: [
    {
      n: "01",
      tit: "Elegí un momento",
      desc: "El que tengas. La mañana, el colectivo, antes de dormir. No hace falta un lugar especial.",
    },
    {
      n: "02",
      tit: "Diez minutos, sin apuro",
      desc: "Una voz lenta te acompaña. Si te distraés, está bien. Volver es parte de la práctica.",
    },
    {
      n: "03",
      tit: "Volvé mañana, o no",
      desc: "Sin rachas que se rompen ni culpa los días que no. La constancia llega sola.",
    },
  ],

  testimonios: [
    {
      texto: "No me prometieron cambiarme la vida. Solo me dieron diez minutos donde nadie me pedía nada.",
      autor: "Laura M.",
      contexto: "usa Calm hace 8 meses",
    },
    {
      texto: "Lo que más me gustó es que los días que no medito no aparece ninguna notificación con culpa.",
      autor: "Diego P.",
      contexto: "programa Daily calm",
    },
    {
      texto: "Las sleep stories son lo único que me funcionó para cortar el ruido mental de la noche.",
      autor: "Cecilia R.",
      contexto: "usa Sleep stories",
    },
  ],

  planes: [
    {
      nombre: "Prueba",
      precio: "$0",
      periodo: "7 días",
      desc: "Acceso completo, sin tarjeta. Para ver si te hace bien antes de decidir.",
      features: ["Todas las meditaciones", "3 sleep stories", "Sin recordatorios insistentes"],
      cta: "Empezar la prueba",
    },
    {
      nombre: "Premium",
      precio: "$3.900",
      periodo: "por mes",
      desc: "La biblioteca completa, a tu ritmo. Cancelás cuando quieras, sin vueltas.",
      features: [
        "Biblioteca completa",
        "Sleep stories nuevas cada semana",
        "Programas guiados largos",
        "Descarga offline",
      ],
      cta: "Pasar a Premium",
      destacado: true,
    },
    {
      nombre: "Anual",
      precio: "$32.900",
      periodo: "por año",
      desc: "Lo mismo que Premium, dos meses sin cargo. Para los que ya saben que se quedan.",
      features: ["Todo lo de Premium", "Dos meses sin cargo", "Acceso anticipado a programas"],
      cta: "Elegir Anual",
    },
  ],

  moods: [
    { id: "tranquila", emoji: "🌿", label: "Tranquila" },
    { id: "suave", emoji: "🌸", label: "Suave" },
    { id: "liviana", emoji: "☀️", label: "Liviana" },
    { id: "atenta", emoji: "🌼", label: "Atenta" },
    { id: "espesa", emoji: "🌧", label: "Espesa" },
    { id: "confusa", emoji: "🌫", label: "Confusa" },
    { id: "cansada", emoji: "🌾", label: "Cansada" },
  ],

  sesion: {
    fecha: "miércoles, 8 de mayo",
    nombre: "Sofía",
    invitacion: "Algo breve, antes de empezar.",
    programa: {
      etiqueta: "Programa de hoy",
      titulo: "Respiración del",
      enfasis: "amanecer",
      desc: "Diez minutos lentos, con la voz de Marta. Día 12 de tu programa Daily calm.",
      duracion: "10 min",
      voz: "sage voice",
    },
    semana: {
      minutos: "48 minutos meditados",
      detalle: "4 de 7 días, ritmo propio.",
      delta: "+ 14 vs semana pasada",
      path: "M0,55 C60,50 90,38 140,42 C200,46 230,30 280,28 C320,27 360,18 400,20",
      dias: ["L", "M", "X", "J", "V", "S", "D"],
    },
  },

  meditaciones: [
    {
      cat: "Stress",
      color: palette.clay,
      items: [
        { t: "Respiración 4-7-8", min: "6 min" },
        { t: "Body scan corto", min: "12 min" },
        { t: "Salir del bucle mental", min: "8 min" },
      ],
    },
    {
      cat: "Focus",
      color: palette.sage,
      items: [
        { t: "Foco para empezar", min: "5 min" },
        { t: "Volver al cuerpo", min: "10 min" },
        { t: "Antes de algo difícil", min: "7 min" },
      ],
    },
    {
      cat: "Anxiety",
      color: palette.sand,
      items: [
        { t: "Bajar el pulso", min: "9 min" },
        { t: "Aceptar la ansiedad", min: "14 min" },
      ],
    },
    {
      cat: "Beginner",
      color: palette.sage,
      items: [
        { t: "Tu primera sesión", min: "5 min" },
        { t: "Qué es meditar", min: "11 min" },
        { t: "Postura sin culpa", min: "6 min" },
      ],
    },
  ],

  sleep: [
    { tit: "El bosque dormido", narrador: "Marta R.", min: "32 min", color: palette.sage },
    { tit: "Lluvia en Pampa", narrador: "Joaquín G.", min: "45 min", color: palette.sand },
    { tit: "El faro de la costa", narrador: "Cecilia O.", min: "28 min", color: palette.clay },
    { tit: "Habitación de la abuela", narrador: "Tomás M.", min: "38 min", color: palette.sage },
    { tit: "El río que no apura", narrador: "Marta R.", min: "52 min", color: palette.sand },
    { tit: "Madrugadas largas", narrador: "Cecilia O.", min: "26 min", color: palette.clay },
  ],

  mood: [
    { dia: "Hoy · 8 may", emoji: "🌿", label: "Tranquila", nota: "Empecé el día sin redes. Salió bien.", barra: 75, hora: "Mañana" },
    { dia: "Mar · 7 may", emoji: "🌸", label: "Suave", nota: "Almuerzo solo. Caminata de 20 min.", barra: 65, hora: "Tarde" },
    { dia: "Lun · 6 may", emoji: "🌧", label: "Espesa", nota: "Día denso. La sesión de noche ayudó.", barra: 35, hora: "Noche" },
    { dia: "Dom · 5 may", emoji: "☀️", label: "Liviana", nota: "Domingo familiar. Nada urgente.", barra: 88, hora: "Tarde" },
    { dia: "Sáb · 4 may", emoji: "🌫", label: "Confusa", nota: "Difícil dormirme. Probé sleep story.", barra: 42, hora: "Noche" },
    { dia: "Vie · 3 may", emoji: "🌾", label: "Cansada", nota: "Semana larga. Cierre con respiración.", barra: 50, hora: "Noche" },
    { dia: "Jue · 2 may", emoji: "🌼", label: "Atenta", nota: "Buena reunión. Pude mantenerme.", barra: 70, hora: "Mañana" },
  ],

  settings: [
    {
      titulo: "Cuenta",
      items: [
        { k: "Nombre", v: "Sofía Domínguez" },
        { k: "Email", v: "sofi@example.com" },
        { k: "Idioma", v: "Español" },
      ],
    },
    {
      titulo: "Notificaciones",
      items: [
        { k: "Recordatorio diario", v: "08:00" },
        { k: "Sleep story", v: "23:00" },
        { k: "Resumen semanal", v: "Domingos" },
      ],
    },
    {
      titulo: "Suscripción",
      items: [
        { k: "Plan", v: "Calm Premium" },
        { k: "Renueva", v: "12 jun 2026" },
        { k: "Pago", v: "···· 4421" },
      ],
    },
    {
      titulo: "Sobre Calm",
      items: [
        { k: "Versión", v: "v3.4.1" },
        { k: "Privacidad", v: "→" },
        { k: "Soporte", v: "→" },
      ],
    },
  ],
};
