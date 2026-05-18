/**
 * medico-amigable — datos del dominio + tipos.
 *
 * Única fuente de datos de la página (app de salud para el PACIENTE).
 * Cambiar el mock por un `fetch`/server real = tocar este archivo y nada
 * más: cada pieza recibe lo suyo por props y no sabe de dónde vino el dato.
 */

export const palette = {
  accent: "#3b82f6", // azul confianza
  accentSoft: "#dbeafe",
  accentDeep: "#1e40af",
  text: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  surface: "#f1f5f9",
  card: "#ffffff",
  amber: "#f59e0b",
  amberSoft: "#fef3c7",
  green: "#10b981",
  greenSoft: "#dcfce7",
  greenText: "#166534",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Paso = { n: number; icon: string; titulo: string; desc: string };

export type Metrica = { valor: string; label: string };

export type Aval = { icon: string; titulo: string; desc: string };

export type Testimonio = {
  id: string;
  inicial: string;
  color: string;
  nombre: string;
  lugar: string;
  edad: number;
  motivo: string;
  texto: string;
};

export type Faq = { q: string; a: string };

export type Perfil = {
  nombre: string;
  inicial: string;
  programa: string;
  semana: number;
  totalSemanas: number;
  racha: number;
  kine: string;
};

export type Turno = {
  fecha: string;
  hora: string;
  prof: string;
  modalidad: "Videollamada" | "Presencial";
  motivo: string;
};

export type EjercicioHoy = {
  id: string;
  icon: string;
  nombre: string;
  detalle: string;
  duracion: string;
  hecho: boolean;
};

export type ZonaEjercicio = "Lumbar" | "Rodilla" | "Hombro" | "Movilidad";

export type EjercicioBiblioteca = {
  id: string;
  zona: ZonaEjercicio;
  nombre: string;
  dificultad: "Suave" | "Moderado" | "Exigente";
  duracion: string;
  hecho: boolean;
};

export type PuntoEvolucion = { semana: string; dolor: number; movilidad: number };

export type Logro = { icon: string; titulo: string; desc: string; fecha: string };

export type MensajeChat = { from: "kine" | "yo"; texto: string; hora: string };

export type NotaPlan = { titulo: string; detalle: string };

export type MedicoData = {
  // Externo (landing del programa)
  pasos: Paso[];
  metricas: Metrica[];
  avales: Aval[];
  testimonios: Testimonio[];
  faq: Faq[];
  // Interno (app del paciente)
  perfil: Perfil;
  proximoTurno: Turno;
  ejerciciosHoy: EjercicioHoy[];
  biblioteca: EjercicioBiblioteca[];
  evolucion: PuntoEvolucion[];
  logros: Logro[];
  chat: MensajeChat[];
  notasPlan: NotaPlan[];
};

export const ZONAS = ["Todas", "Lumbar", "Rodilla", "Hombro", "Movilidad"] as const;
export type FiltroZona = (typeof ZONAS)[number];

/* ---------- Mock (swap por backend acá) ---------- */

export const medicoData: MedicoData = {
  pasos: [
    { n: 1, icon: "🩺", titulo: "Evaluación inicial", desc: "Una videollamada sin apuro con un kinesiólogo matriculado para entender qué te pasa y desde dónde partís." },
    { n: 2, icon: "📋", titulo: "Plan personalizado", desc: "Armamos una rutina pensada para vos: ejercicios con video, repeticiones claras y tiempos realistas." },
    { n: 3, icon: "🏠", titulo: "Ejercicios guiados", desc: "Los hacés desde casa, cuando puedas. Cada ejercicio con explicación en criollo, no en jerga médica." },
    { n: 4, icon: "🤝", titulo: "Seguimiento con tu kine", desc: "Tu profesional ve tu progreso, te responde por chat y ajusta el plan según cómo te vas sintiendo." },
  ],

  metricas: [
    { valor: "87%", label: "mejora del dolor en 6 semanas" },
    { valor: "12.400", label: "pacientes acompañados" },
    { valor: "320", label: "kinesiólogos matriculados" },
    { valor: "4.8 ★", label: "valoración promedio" },
  ],

  avales: [
    { icon: "🪪", titulo: "Profesionales matriculados", desc: "Todos con matrícula nacional vigente y especialización en rehabilitación." },
    { icon: "🔒", titulo: "Tus datos protegidos", desc: "Historia clínica cifrada y bajo Ley 25.326 de datos personales." },
    { icon: "🏥", titulo: "Respaldo médico", desc: "Convenios con OSDE, Swiss Medical, IOMA y obras sociales sindicales." },
  ],

  testimonios: [
    { id: "t-sole", inicial: "S", color: "#dbeafe", nombre: "Soledad Aguirre", lugar: "Rosario", edad: 44, motivo: "Lumbalgia crónica", texto: "Llevaba dos años con dolor lumbar y resignada. En seis semanas pasé de no poder atarme los cordones a caminar 40 minutos sin molestia. Y Romina me responde siempre." },
    { id: "t-mart", inicial: "M", color: "#dcfce7", nombre: "Martín Sosa", lugar: "Córdoba", edad: 31, motivo: "Post-operatorio rodilla", texto: "Después de la operación de menisco tenía miedo de moverme. El plan iba de a poco y con videos clarísimos. Volví a jugar al fútbol 5." },
    { id: "t-clau", inicial: "C", color: "#fef3c7", nombre: "Claudia Ferrari", lugar: "La Plata", edad: 58, motivo: "Hombro congelado", texto: "Pensé que era para gente joven. Me equivoqué: todo explicado tranquilo, sin sentirme apurada. Recuperé movilidad que creía perdida." },
  ],

  faq: [
    { q: "¿Lo cubre mi obra social?", a: "Trabajamos con OSDE, Swiss Medical, IOMA y varias obras sociales sindicales. Si la tuya no está, podés acceder con reintegro o de forma particular." },
    { q: "¿Cuánto dura el programa?", a: "Depende de cada caso. La mayoría de los planes son de 6 a 12 semanas, con un control mensual y ajustes según tu evolución." },
    { q: "¿Es virtual o presencial?", a: "El seguimiento y los ejercicios son virtuales (desde casa). Si tu caso necesita evaluación presencial, te derivamos a un profesional de la red en tu ciudad." },
    { q: "¿Tengo que pagar para empezar?", a: "No. La primera evaluación es gratis y sin tarjeta. Recién si decidís seguir, armás el plan con tu kinesiólogo." },
  ],

  perfil: {
    nombre: "Lucas Ferreyra",
    inicial: "L",
    programa: "Rehabilitación lumbar",
    semana: 4,
    totalSemanas: 8,
    racha: 12,
    kine: "Lic. Romina Vázquez",
  },

  proximoTurno: {
    fecha: "Jueves 22 de mayo",
    hora: "17:30",
    prof: "Lic. Romina Vázquez",
    modalidad: "Videollamada",
    motivo: "Control mensual · semana 4",
  },

  ejerciciosHoy: [
    { id: "e-1", icon: "🦵", nombre: "Sentadilla isométrica", detalle: "3 series · 30 seg de sostén", duracion: "6 min", hecho: false },
    { id: "e-2", icon: "🧘", nombre: "Estiramiento de isquiotibiales", detalle: "2 series · 45 seg por lado", duracion: "4 min", hecho: false },
    { id: "e-3", icon: "🌉", nombre: "Puente de glúteos", detalle: "3 series · 12 repeticiones", duracion: "7 min", hecho: false },
    { id: "e-4", icon: "🤸", nombre: "Movilidad de cadera con banda", detalle: "3 series · 10 por lado", duracion: "5 min", hecho: false },
  ],

  biblioteca: [
    { id: "b-1", zona: "Lumbar", nombre: "Gato-camello", dificultad: "Suave", duracion: "3 min", hecho: true },
    { id: "b-2", zona: "Lumbar", nombre: "Bird-dog", dificultad: "Moderado", duracion: "5 min", hecho: false },
    { id: "b-3", zona: "Rodilla", nombre: "Cuádriceps en cadena cerrada", dificultad: "Moderado", duracion: "6 min", hecho: false },
    { id: "b-4", zona: "Rodilla", nombre: "Step-down controlado", dificultad: "Exigente", duracion: "7 min", hecho: false },
    { id: "b-5", zona: "Hombro", nombre: "Rotación externa con elástico", dificultad: "Suave", duracion: "4 min", hecho: true },
    { id: "b-6", zona: "Hombro", nombre: "Péndulo de Codman", dificultad: "Suave", duracion: "3 min", hecho: false },
    { id: "b-7", zona: "Movilidad", nombre: "Movilidad torácica en cuadrupedia", dificultad: "Moderado", duracion: "5 min", hecho: false },
    { id: "b-8", zona: "Movilidad", nombre: "Apertura de cadera 90/90", dificultad: "Moderado", duracion: "4 min", hecho: false },
  ],

  evolucion: [
    { semana: "S1", dolor: 7, movilidad: 35 },
    { semana: "S2", dolor: 6, movilidad: 48 },
    { semana: "S3", dolor: 5, movilidad: 58 },
    { semana: "S4", dolor: 4, movilidad: 66 },
    { semana: "S5", dolor: 3, movilidad: 74 },
    { semana: "HOY", dolor: 2, movilidad: 82 },
  ],

  logros: [
    { icon: "🏅", titulo: "Primera semana completa", desc: "Hiciste el 100% de los ejercicios de la semana 1.", fecha: "26 abr" },
    { icon: "🎯", titulo: "Constancia de 30 días", desc: "Mantuviste el plan por encima del 90% durante un mes.", fecha: "10 may" },
    { icon: "🚀", titulo: "Cambio de fase", desc: "Pasaste de la fase introductoria a fortalecimiento.", fecha: "17 may" },
  ],

  chat: [
    { from: "kine", texto: "Hola Lucas! Vi que terminaste toda la semana pasada, muy bien 👏 ¿Cómo venís con el dolor a la mañana?", hora: "Mar 14:22" },
    { from: "yo", texto: "Hola Romina! Mucho mejor, ya me levanto sin esa rigidez de antes. El puente de glúteos al principio me costaba.", hora: "Mar 18:40" },
    { from: "kine", texto: "Es normal, se va soltando. Te dejo cargado uno de movilidad de cadera antes del puente para que entres más suelto.", hora: "Mar 19:05" },
    { from: "kine", texto: "Si en algún momento el dolor pasa de 3/10, pará y avisame. No queremos forzar, vamos tranquilos.", hora: "Mar 19:06" },
    { from: "yo", texto: "Dale, lo sumo mañana y te cuento cómo voy 💪", hora: "Mar 19:30" },
  ],

  notasPlan: [
    { titulo: "Objetivo de esta fase", detalle: "Fortalecer core y glúteo medio para descargar la zona lumbar. Sin cargas altas todavía." },
    { titulo: "Señales para parar", detalle: "Dolor por encima de 3/10, hormigueo en la pierna o dolor que no baja al terminar." },
    { titulo: "Próximo control", detalle: "Reevaluamos fuerza y rango el jueves 22. Si todo va bien, avanzamos a fase de carga." },
  ],
};
