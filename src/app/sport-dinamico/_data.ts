/**
 * sport-dinamico — datos del dominio + tipos.
 *
 * Negocio: app de entrenamiento de alto compromiso (Nike Training / Strava),
 * atleta individual. Externo = landing deportiva agresiva; interno = la app
 * fitness (workout de hoy, progreso/PRs, plan, ranking comunidad).
 *
 * Única fuente de datos: swap a backend = tocar SOLO este archivo. Cada pieza
 * recibe lo suyo por props (no importa el mock). Datos argentinos, sin lorem.
 */

export const palette = {
  bg: "#0a0a0a",
  surface: "#141414",
  surfaceAlt: "#1a1a1a",
  border: "#2a2a2a",
  orange: "#ff5722",
  ink: "#fafafa",
  muted: "#a3a3a3",
  faint: "#666666",
  green: "#22c55e",
  yellow: "#eab308",
  red: "#ef4444",
} as const;

/* ---------- Tipos del dominio ---------- */

export type HeroStat = { val: number; suffix: string; label: string; decimals?: number };

export type Programa = {
  nombre: string;
  nivel: "PRINCIPIANTE" | "INTERMEDIO" | "AVANZADO";
  semanas: number;
  sesionesSem: number;
  intensidad: number; // 0-100, barra agresiva
  precio: string;
  foco: string;
  destacado?: boolean;
};

export type ResultadoStat = {
  val: number;
  decimals?: number;
  suffix: string;
  label: string;
};

export type Testimonio = {
  iniciales: string;
  nombre: string;
  edad: number;
  ciudad: string;
  logro: string;
  texto: string;
};

export type Ejercicio = {
  nombre: string;
  series: number;
  reps: string;
  carga: string;
  hecho: boolean;
};

export type WorkoutHoy = {
  dia: number;
  semana: number;
  fecha: string;
  titulo: string;
  foco: string;
  duracionMin: number;
  descansoSeg: number;
  serieActual: number;
  seriesTotal: number;
  ejercicios: Ejercicio[];
};

export type PR = { ejercicio: string; valor: number; unidad: string; deltaKg: number };

export type Racha = { dias: number; mejor: number; estaSemana: boolean[] };

export type VolumenSemana = { sem: string; ton: number };

export type DiaPlan = { label: string; estado: "done" | "today" | "rest" | "todo" };

export type SemanaPlan = { semana: number; foco: string; dias: DiaPlan[] };

export type RankingAtleta = {
  pos: number;
  iniciales: string;
  nombre: string;
  ciudad: string;
  puntos: number;
  delta: number; // posiciones ganadas/perdidas vs semana pasada
  vos?: boolean;
};

export type SportData = {
  // Externo
  heroStats: HeroStat[];
  programas: Programa[];
  resultados: ResultadoStat[];
  testimonios: Testimonio[];
  // Interno
  workout: WorkoutHoy;
  prs: PR[];
  racha: Racha;
  volumen: VolumenSemana[];
  planSemanas: SemanaPlan[];
  planProgreso: number; // % del plan completado
  ranking: RankingAtleta[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const sportData: SportData = {
  heroStats: [
    { val: 47, suffix: "K", label: "ENTRENAMIENTOS / MES" },
    { val: 12, suffix: "+", label: "ENTRENADORES REALES" },
    { val: 4.9, decimals: 1, suffix: "★", label: "APP STORE / PLAY" },
  ],

  programas: [
    {
      nombre: "FUERZA TOTAL",
      nivel: "INTERMEDIO",
      semanas: 8,
      sesionesSem: 4,
      intensidad: 82,
      precio: "$ 9.900 / mes",
      foco: "Hipertrofia · barra libre",
      destacado: true,
    },
    {
      nombre: "HIIT QUEMA",
      nivel: "PRINCIPIANTE",
      semanas: 6,
      sesionesSem: 5,
      intensidad: 70,
      precio: "$ 7.500 / mes",
      foco: "Cardio · pérdida de grasa",
    },
    {
      nombre: "RUNNING SUB-50",
      nivel: "AVANZADO",
      semanas: 12,
      sesionesSem: 5,
      intensidad: 91,
      precio: "$ 8.900 / mes",
      foco: "10K en menos de 50'",
    },
    {
      nombre: "MOVILIDAD + CORE",
      nivel: "PRINCIPIANTE",
      semanas: 4,
      sesionesSem: 3,
      intensidad: 48,
      precio: "$ 5.900 / mes",
      foco: "Prevención · base",
    },
  ],

  resultados: [
    { val: 8400000, suffix: " KG", label: "LEVANTADOS POR LA COMUNIDAD" },
    { val: 312000, suffix: " KM", label: "CORRIDOS ESTE AÑO" },
    { val: 23400, suffix: "", label: "ATLETAS ACTIVOS" },
    { val: 31, suffix: " DÍAS", label: "RACHA PROMEDIO" },
  ],

  testimonios: [
    {
      iniciales: "VR",
      nombre: "Valentina Ríos",
      edad: 28,
      ciudad: "Rosario",
      logro: "−9 KG EN 12 SEMANAS",
      texto: "Dejé de saltar de app en app. Plan claro, progresión real, sin gamificación de jardín de infantes.",
    },
    {
      iniciales: "MS",
      nombre: "Martín Sosa",
      edad: 34,
      ciudad: "Córdoba",
      logro: "SENTADILLA 90 → 140 KG",
      texto: "Entrené 4 años solo y nunca progresé así. La diferencia es tener un plan que se ajusta cada semana.",
    },
    {
      iniciales: "CF",
      nombre: "Camila Ferreyra",
      edad: 25,
      ciudad: "Mendoza",
      logro: "10K EN 47:30",
      texto: "Bajé 6 minutos mi mejor 10K. Sin lesionarme. Eso para mí es todo.",
    },
  ],

  workout: {
    dia: 12,
    semana: 3,
    fecha: "Lunes 12/05",
    titulo: "FUERZA — TREN INFERIOR",
    foco: "Sentadilla pesada + accesorios",
    duracionMin: 58,
    descansoSeg: 90,
    serieActual: 3,
    seriesTotal: 5,
    ejercicios: [
      { nombre: "Sentadilla con barra", series: 5, reps: "5", carga: "120 kg", hecho: true },
      { nombre: "Peso muerto rumano", series: 4, reps: "8", carga: "90 kg", hecho: true },
      { nombre: "Prensa 45°", series: 4, reps: "12", carga: "200 kg", hecho: false },
      { nombre: "Zancadas con mancuernas", series: 3, reps: "10 / pierna", carga: "22 kg", hecho: false },
      { nombre: "Gemelos de pie", series: 4, reps: "15", carga: "80 kg", hecho: false },
    ],
  },

  prs: [
    { ejercicio: "SENTADILLA", valor: 140, unidad: "kg", deltaKg: 5 },
    { ejercicio: "PESO MUERTO", valor: 180, unidad: "kg", deltaKg: 10 },
    { ejercicio: "BANCA PLANA", valor: 95, unidad: "kg", deltaKg: 2.5 },
    { ejercicio: "DOMINADAS", valor: 18, unidad: "reps", deltaKg: 2 },
  ],

  racha: {
    dias: 47,
    mejor: 63,
    estaSemana: [true, true, true, true, false, true, false],
  },

  volumen: [
    { sem: "S1", ton: 12.4 },
    { sem: "S2", ton: 14.1 },
    { sem: "S3", ton: 13.8 },
    { sem: "S4", ton: 16.2 },
    { sem: "S5", ton: 17.9 },
    { sem: "S6", ton: 18.6 },
    { sem: "S7", ton: 21.3 },
    { sem: "HOY", ton: 23.7 },
  ],

  planSemanas: [
    {
      semana: 1,
      foco: "Adaptación",
      dias: [
        { label: "L", estado: "done" },
        { label: "M", estado: "done" },
        { label: "M", estado: "rest" },
        { label: "J", estado: "done" },
        { label: "V", estado: "done" },
        { label: "S", estado: "done" },
        { label: "D", estado: "rest" },
      ],
    },
    {
      semana: 2,
      foco: "Volumen",
      dias: [
        { label: "L", estado: "done" },
        { label: "M", estado: "done" },
        { label: "M", estado: "rest" },
        { label: "J", estado: "done" },
        { label: "V", estado: "done" },
        { label: "S", estado: "done" },
        { label: "D", estado: "rest" },
      ],
    },
    {
      semana: 3,
      foco: "Intensidad",
      dias: [
        { label: "L", estado: "today" },
        { label: "M", estado: "todo" },
        { label: "M", estado: "rest" },
        { label: "J", estado: "todo" },
        { label: "V", estado: "todo" },
        { label: "S", estado: "todo" },
        { label: "D", estado: "rest" },
      ],
    },
    {
      semana: 4,
      foco: "Descarga",
      dias: [
        { label: "L", estado: "todo" },
        { label: "M", estado: "todo" },
        { label: "M", estado: "rest" },
        { label: "J", estado: "todo" },
        { label: "V", estado: "todo" },
        { label: "S", estado: "todo" },
        { label: "D", estado: "rest" },
      ],
    },
  ],
  planProgreso: 58,

  ranking: [
    { pos: 1, iniciales: "DF", nombre: "Diego Funes", ciudad: "La Plata", puntos: 9840, delta: 0 },
    { pos: 2, iniciales: "LP", nombre: "Lucía Paz", ciudad: "Rosario", puntos: 9210, delta: 2 },
    { pos: 3, iniciales: "TM", nombre: "Tomás Méndez", ciudad: "CABA", puntos: 8975, delta: -1 },
    { pos: 4, iniciales: "VOS", nombre: "Vos", ciudad: "Córdoba", puntos: 8640, delta: 3, vos: true },
    { pos: 5, iniciales: "RA", nombre: "Rocío Aguirre", ciudad: "Mendoza", puntos: 8120, delta: -2 },
    { pos: 6, iniciales: "NB", nombre: "Nahuel Bravo", ciudad: "Salta", puntos: 7890, delta: 1 },
  ],
};
