/**
 * clinico-calmado — datos del dominio + tipos.
 *
 * SaaS clínico, vista del PROFESIONAL (el kine que compra/usa el software).
 * Única fuente de datos: cambiar el mock por un `fetch`/server real = tocar
 * este archivo. Cada pieza recibe lo suyo por props.
 */

export const palette = {
  accent: "#0ea5e9", // celeste clínico
  accentSoft: "#e0f2fe",
  accentDeep: "#0369a1",
  text: "#0f172a",
  muted: "#64748b",
  faint: "#94a3b8",
  border: "#e2e8f0",
  hairline: "#f1f5f9",
  surface: "#f8fafc",
  card: "#ffffff",
  green: "#10b981",
  greenSoft: "#d1fae5",
  amber: "#f59e0b",
  amberSoft: "#fef3c7",
} as const;

/* ---------- Tipos del dominio ---------- */

export type Feature = { icon: string; titulo: string; desc: string };

export type Plan = {
  nombre: string;
  precio: string;
  periodo: string;
  resumen: string;
  destacado: boolean;
  features: string[];
  cta: string;
};

export type Metrica = { valor: string; label: string };

export type TestimonioPro = {
  inicial: string;
  color: string;
  nombre: string;
  rol: string;
  lugar: string;
  texto: string;
};

export type EstadoTurno = "Confirmado" | "Pendiente" | "Ausente" | "Atendido";

export type Turno = {
  hora: string;
  paciente: string;
  iniciales: string;
  motivo: string;
  estado: EstadoTurno;
};

export type Kpi = { label: string; valor: string; sub: string };

export type EstadoPaciente = "Activo" | "Pausa" | "Alta";

export type Paciente = {
  id: string;
  nombre: string;
  iniciales: string;
  edad: number;
  obra: string;
  plan: string;
  adherencia: number;
  ultima: string;
  estado: EstadoPaciente;
};

export type PlanTratamiento = {
  nombre: string;
  zona: string;
  ejercicios: number;
  semanas: number;
  asignados: number;
};

export type PuntoReporte = { mes: string; sesiones: number; ingresos: number };

export type MotivoConsulta = { motivo: string; val: number; pct: number };

export type ClinicoData = {
  features: Feature[];
  planes: Plan[];
  metricas: Metrica[];
  testimonios: TestimonioPro[];
  kpis: Kpi[];
  turnos: Turno[];
  pacientes: Paciente[];
  tratamientos: PlanTratamiento[];
  reporte: PuntoReporte[];
  motivos: MotivoConsulta[];
};

export const ESTADO_TURNO: Record<EstadoTurno, { fg: string; bg: string }> = {
  Confirmado: { fg: "#0369a1", bg: "#e0f2fe" },
  Atendido: { fg: "#166534", bg: "#d1fae5" },
  Pendiente: { fg: "#92400e", bg: "#fef3c7" },
  Ausente: { fg: "#64748b", bg: "#f1f5f9" },
};

/* ---------- Mock (swap por backend acá) ---------- */

export const clinicoData: ClinicoData = {
  features: [
    { icon: "🗓️", titulo: "Agenda inteligente", desc: "Turnos online, confirmación por WhatsApp y recordatorios automáticos. Menos ausentes, menos llamados." },
    { icon: "📄", titulo: "Ficha del paciente", desc: "Evoluciones SOAP, tests funcionales, fotos y antecedentes. Todo en un solo lugar y siempre a mano." },
    { icon: "🎯", titulo: "Planes de tratamiento", desc: "Armá plantillas por patología, asignalas en dos clics y seguí la adherencia real del paciente." },
    { icon: "💳", titulo: "Cobros y recordatorios", desc: "Recibos, monotributo, obras sociales y avisos de pago. La parte aburrida, resuelta." },
  ],

  planes: [
    {
      nombre: "Individual",
      precio: "$18.900",
      periodo: "/mes",
      resumen: "Para el profesional que trabaja solo.",
      destacado: false,
      features: ["1 profesional", "Agenda + ficha clínica", "Planes de ejercicio", "Cobros básicos", "Soporte por mail"],
      cta: "Probar gratis",
    },
    {
      nombre: "Consultorio",
      precio: "$34.900",
      periodo: "/mes",
      resumen: "Para equipos de 2 a 6 kinesiólogos.",
      destacado: true,
      features: ["Hasta 6 profesionales", "Todo lo de Individual", "Reportes y métricas", "Recordatorios WhatsApp", "Soporte prioritario"],
      cta: "Probar 14 días gratis",
    },
    {
      nombre: "Clínica",
      precio: "A medida",
      periodo: "",
      resumen: "Centros y clínicas con varios consultorios.",
      destacado: false,
      features: ["Profesionales ilimitados", "Multi-sede", "Integración con facturación", "Onboarding dedicado", "SLA y soporte 24/7"],
      cta: "Hablar con ventas",
    },
  ],

  metricas: [
    { valor: "1.200+", label: "profesionales lo usan a diario" },
    { valor: "98%", label: "de turnos confirmados sin llamar" },
    { valor: "−31%", label: "de pacientes ausentes" },
    { valor: "ISO 27001", label: "datos del paciente cifrados" },
  ],

  testimonios: [
    { inicial: "VG", color: "#e0f2fe", nombre: "Lic. Valeria Gómez", rol: "Kinesióloga", lugar: "Consultorio propio · Mendoza", texto: "Dejé las planillas de Excel y los cuadernos. La ficha del paciente y los planes en un solo lugar me devolvieron como una hora por día." },
    { inicial: "DR", color: "#d1fae5", nombre: "Dr. Damián Ríos", rol: "Traumatólogo", lugar: "Centro Kinésico Río · Córdoba", texto: "Lo que más valoro es la seguridad de los datos y los reportes. Cuando la obra social audita, tengo todo ordenado en dos minutos." },
    { inicial: "MP", color: "#fef3c7", nombre: "Lic. Mariela Paz", rol: "Coord. de kinesiología", lugar: "Clínica del Sur · La Plata", texto: "Coordino 8 profesionales. Ver la agenda de todos y la adherencia de los pacientes en una pantalla nos cambió la operación." },
  ],

  kpis: [
    { label: "Turnos hoy", valor: "9", sub: "1 ausente" },
    { label: "Pacientes activos", valor: "46", sub: "+3 este mes" },
    { label: "Pagos del mes", valor: "$312.500", sub: "84% cobrado" },
    { label: "Adherencia plan", valor: "81%", sub: "+4 pp" },
  ],

  turnos: [
    { hora: "08:30", paciente: "Mariana Soto", iniciales: "MS", motivo: "Lumbalgia · evolución", estado: "Atendido" },
    { hora: "09:15", paciente: "Tomás Brizuela", iniciales: "TB", motivo: "Rodilla · post-op S5", estado: "Atendido" },
    { hora: "10:00", paciente: "Cecilia Pereyra", iniciales: "CP", motivo: "Hombro · evaluación", estado: "Confirmado" },
    { hora: "11:00", paciente: "Federico Lacroix", iniciales: "FL", motivo: "Cervical · 1ª consulta", estado: "Pendiente" },
    { hora: "14:30", paciente: "Pilar Otermín", iniciales: "PO", motivo: "Plan ejercicios · revisión", estado: "Confirmado" },
    { hora: "15:30", paciente: "Joaquín Mendieta", iniciales: "JM", motivo: "Tobillo · esguince", estado: "Confirmado" },
    { hora: "16:30", paciente: "Lucía Vidal", iniciales: "LV", motivo: "Lumbar · evolución", estado: "Ausente" },
    { hora: "17:30", paciente: "Diego Saavedra", iniciales: "DS", motivo: "Codo · tendinitis", estado: "Confirmado" },
  ],

  pacientes: [
    { id: "p-soto", nombre: "Mariana Soto", iniciales: "MS", edad: 38, obra: "OSDE 210", plan: "Lumbar fase 2", adherencia: 92, ultima: "Hoy", estado: "Activo" },
    { id: "p-briz", nombre: "Tomás Brizuela", iniciales: "TB", edad: 27, obra: "Swiss Medical", plan: "Post-op rodilla S5-S8", adherencia: 78, ultima: "Hoy", estado: "Activo" },
    { id: "p-pere", nombre: "Cecilia Pereyra", iniciales: "CP", edad: 45, obra: "IOMA", plan: "Hombro · manguito", adherencia: 70, ultima: "Hace 3 días", estado: "Activo" },
    { id: "p-lacr", nombre: "Federico Lacroix", iniciales: "FL", edad: 52, obra: "Particular", plan: "Cervical · introductorio", adherencia: 54, ultima: "Hace 1 sem", estado: "Pausa" },
    { id: "p-oter", nombre: "Pilar Otermín", iniciales: "PO", edad: 33, obra: "OSDE 310", plan: "Core + glúteo medio", adherencia: 85, ultima: "Ayer", estado: "Activo" },
    { id: "p-vidal", nombre: "Lucía Vidal", iniciales: "LV", edad: 41, obra: "Galeno", plan: "Lumbar · cierre", adherencia: 96, ultima: "Hace 2 días", estado: "Alta" },
  ],

  tratamientos: [
    { nombre: "Lumbalgia mecánica", zona: "Columna lumbar", ejercicios: 8, semanas: 6, asignados: 12 },
    { nombre: "Post-op LCA", zona: "Rodilla", ejercicios: 14, semanas: 12, asignados: 7 },
    { nombre: "Manguito rotador", zona: "Hombro", ejercicios: 9, semanas: 8, asignados: 9 },
    { nombre: "Esguince de tobillo", zona: "Tobillo", ejercicios: 7, semanas: 4, asignados: 5 },
    { nombre: "Cervicalgia", zona: "Columna cervical", ejercicios: 6, semanas: 5, asignados: 8 },
    { nombre: "Core preventivo", zona: "Tronco", ejercicios: 10, semanas: 8, asignados: 6 },
  ],

  reporte: [
    { mes: "Dic", sesiones: 98, ingresos: 198 },
    { mes: "Ene", sesiones: 86, ingresos: 174 },
    { mes: "Feb", sesiones: 104, ingresos: 221 },
    { mes: "Mar", sesiones: 124, ingresos: 268 },
    { mes: "Abr", sesiones: 118, ingresos: 252 },
    { mes: "May", sesiones: 142, ingresos: 312 },
  ],

  motivos: [
    { motivo: "Lumbalgia", val: 42, pct: 100 },
    { motivo: "Hombro", val: 28, pct: 67 },
    { motivo: "Rodilla", val: 24, pct: 57 },
    { motivo: "Cervical", val: 21, pct: 50 },
    { motivo: "Tobillo", val: 14, pct: 33 },
    { motivo: "Otros", val: 13, pct: 31 },
  ],
};
