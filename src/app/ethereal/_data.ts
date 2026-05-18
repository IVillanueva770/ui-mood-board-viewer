/**
 * ethereal — datos del dominio + tipos.
 *
 * Única fuente de datos de la página (estudio creativo de autor, AR).
 * Cambiar el mock por un `fetch`/server real = tocar este archivo y nada
 * más; las piezas reciben todo por props y no saben de dónde vino el dato.
 */

export const palette = {
  bg: "#0a0a0a",
  panel: "#0d0d0d",
  fg: "#fafaf7",
  accent: "#ff3b00",
  border: "#222222",
  rule: "#333333",
  muted: "#888888",
  soft: "#aaaaaa",
  faint: "#666666",
} as const;

/* ---------- Tipos del dominio ---------- */

export type EstadoProyecto = "en curso" | "entregado";

/** Pieza del showcase (grid asimétrico): tamaño + tono propios. */
export type Proyecto = {
  id: string;
  num: string;
  titulo: string;
  cliente: string;
  tipo: string;
  year: string;
  formato: string;
  /** clases de columna para el grid asimétrico */
  span: string;
  /** offset opcional para romper la grilla */
  offset?: string;
  /** ratio del bloque visual */
  ratio: string;
  /** fondo del bloque (gradiente / sólido roto) */
  tono: string;
};

export type EntradaIndice = {
  num: string;
  titulo: string;
  tipo: string;
  year: string;
};

export type Manifiesto = {
  vol: string;
  periodo: string;
  lead: string;
  cuerpo: string;
  firma: string;
};

export type Contacto = {
  frase: string;
  email: string;
  ubicacion: string;
  detalle: string;
};

export type ObraTaller = {
  id: string;
  num: string;
  titulo: string;
  etapa: string;
  fecha: string;
  autor: string;
  progreso: number; // 0..100
  offset: string;
};

export type CapacidadStat = { v: string; l: string };

export type EstadoBrief = "abierto" | "en revisión" | "aprobado";

export type Brief = {
  id: string;
  codigo: string;
  cliente: string;
  pedido: string;
  mood: string[];
  deadline: string;
  estado: EstadoBrief;
  nota: string;
};

export type Asset = {
  id: string;
  codigo: string;
  titulo: string;
  tipo: string;
  autor: string;
  span: string;
  tono: string;
};

export type TipoHito = "inicio" | "review" | "entrega";

export type Hito = {
  id: string;
  fecha: string;
  titulo: string;
  proyecto: string;
  tipo: TipoHito;
  hecho: boolean;
};

/* ---------- Mock ---------- */

export const etherealData = {
  manifiesto: {
    vol: "vol.04",
    periodo: "2026 / mayo",
    lead: "No diseñamos para gustar. Diseñamos para que algo cambie en quien lo ve. Si pasa desapercibido, fallamos.",
    cuerpo:
      "Cada proyecto es una conversación entre lo que el cliente cree que necesita y lo que realmente le va a servir. Empezamos por escuchar, después rompemos la grilla.",
    firma: "— Estudio en Construcción Permanente",
  } satisfies Manifiesto,

  proyectos: [
    {
      id: "p1",
      num: "01",
      titulo: "Aurora Botanical",
      cliente: "Aurora",
      tipo: "Identidad visual",
      year: "26",
      formato: "Sistema + packaging",
      span: "md:col-span-7",
      ratio: "aspect-[16/10]",
      tono: "linear-gradient(135deg, #1a1208 0%, #3a1c00 60%, #ff3b00 140%)",
    },
    {
      id: "p2",
      num: "02",
      titulo: "Cien Soles",
      cliente: "Cien Soles",
      tipo: "Web · editorial",
      year: "26",
      formato: "Sitio + arte",
      span: "md:col-span-5",
      offset: "md:mt-24",
      ratio: "aspect-[4/5]",
      tono: "linear-gradient(160deg, #0d0d0d 0%, #2a2a28 100%)",
    },
    {
      id: "p3",
      num: "03",
      titulo: "Matria Records",
      cliente: "Matria",
      tipo: "Branding · motion",
      year: "25",
      formato: "Identidad sonora",
      span: "md:col-span-5",
      ratio: "aspect-square",
      tono: "linear-gradient(135deg, #14110a 0%, #ff3b00 220%)",
    },
    {
      id: "p4",
      num: "04",
      titulo: "Tabacal",
      cliente: "Tabacal",
      tipo: "Packaging · web",
      year: "25",
      formato: "Etiquetas + tienda",
      span: "md:col-span-7",
      offset: "md:-mt-12",
      ratio: "aspect-[16/9]",
      tono: "linear-gradient(120deg, #0a0a0a 0%, #332a14 100%)",
    },
  ] satisfies Proyecto[],

  indice: {
    titulo: "Selección",
    rango: "2024–2026",
    total: "17 proyectos",
    entradas: [
      { num: "05", titulo: "Norte Estudio", tipo: "Identidad · print", year: "24" },
      { num: "06", titulo: "Cooperativa La Fina", tipo: "Marca · sistema", year: "24" },
      { num: "07", titulo: "Pampa Húmeda", tipo: "Editorial · foto", year: "23" },
      { num: "08", titulo: "Tertulia", tipo: "Naming · web", year: "23" },
      { num: "09", titulo: "Subtropical", tipo: "Motion · campaña", year: "22" },
    ] satisfies EntradaIndice[],
  },

  contacto: {
    frase: "Si tenés algo que todavía no sabés nombrar, probablemente sea para nosotros.",
    email: "hola@ecp.studio",
    ubicacion: "Buenos Aires · trabajamos remoto",
    detalle: "Tomamos 4 proyectos por trimestre. Q3·26 con cupo.",
  } satisfies Contacto,

  obras: [
    { id: "o1", num: "01", titulo: "Aurora Botanical", etapa: "Presentación final", fecha: "14 may", autor: "Macarena R.", progreso: 88, offset: "" },
    { id: "o2", num: "02", titulo: "Cien Soles", etapa: "Maquetas v3", fecha: "22 may", autor: "Joaco G.", progreso: 54, offset: "md:ml-16" },
    { id: "o3", num: "03", titulo: "Matria Records", etapa: "Storyboard motion", fecha: "30 may", autor: "Tomi M.", progreso: 32, offset: "md:ml-32" },
    { id: "o4", num: "04", titulo: "Tabacal", etapa: "Discovery / etiquetas", fecha: "12 jun", autor: "Macarena R.", progreso: 12, offset: "md:ml-8" },
  ] satisfies ObraTaller[],

  capacidad: [
    { v: "04", l: "Manos en obra" },
    { v: "12 / 17", l: "Sem. comprometidas" },
    { v: "Q3·26", l: "Próximo libre" },
    { v: "≈ 6 sem", l: "Cola estimada" },
  ] satisfies CapacidadStat[],

  briefs: [
    {
      id: "b1",
      codigo: "BR/01",
      cliente: "Aurora Botanical",
      pedido: "Rediseño de línea cosmética natural",
      mood: ["orgánico", "cálido", "terroso"],
      deadline: "18 may",
      estado: "en revisión",
      nota: "Pidió 3 cambios. Ninguno toca el problema real — hay que volver a sentarse.",
    },
    {
      id: "b2",
      codigo: "BR/02",
      cliente: "Cien Soles",
      pedido: "Sitio editorial + arte de tapa",
      mood: ["luminoso", "tipográfico", "roto"],
      deadline: "26 may",
      estado: "abierto",
      nota: "Quiere que ‘se sienta hecho a mano’. Explorar trazos reales escaneados.",
    },
    {
      id: "b3",
      codigo: "BR/03",
      cliente: "Matria Records",
      pedido: "Identidad sonora + visual de sello",
      mood: ["nocturno", "vibrante", "analógico"],
      deadline: "04 jun",
      estado: "aprobado",
      nota: "Brief cerrado. Avanza a storyboard de motion la semana que viene.",
    },
  ] satisfies Brief[],

  assets: [
    { id: "a1", codigo: "S/01", titulo: "Tipo variable — eje peso × óptico", tipo: "Tipo", autor: "Tomi M.", span: "md:col-span-7", tono: "linear-gradient(135deg,#14110a,#3a1c00)" },
    { id: "a2", codigo: "S/02", titulo: "Sistema cromático botánico", tipo: "Color", autor: "Joaco G.", span: "md:col-span-5", tono: "linear-gradient(160deg,#0d0d0d,#2a2a28)" },
    { id: "a3", codigo: "S/03", titulo: "Grid asimétrico de 24 columnas", tipo: "Layout", autor: "Macarena R.", span: "md:col-span-5", tono: "linear-gradient(135deg,#0a0a0a,#332a14)" },
    { id: "a4", codigo: "S/04", titulo: "Easing botánico — motion principles", tipo: "Motion", autor: "Tomi M.", span: "md:col-span-7", tono: "linear-gradient(120deg,#1a1208,#ff3b00 240%)" },
  ] satisfies Asset[],

  agenda: [
    { id: "h1", fecha: "14 may", titulo: "Entrega final — Aurora Botanical", proyecto: "Aurora", tipo: "entrega", hecho: false },
    { id: "h2", fecha: "19 may", titulo: "Review interno de maquetas", proyecto: "Cien Soles", tipo: "review", hecho: false },
    { id: "h3", fecha: "26 may", titulo: "Kickoff visual — Cien Soles", proyecto: "Cien Soles", tipo: "inicio", hecho: false },
    { id: "h4", fecha: "30 may", titulo: "Storyboard motion — Matria", proyecto: "Matria", tipo: "review", hecho: false },
    { id: "h5", fecha: "06 jun", titulo: "Discovery — Tabacal etiquetas", proyecto: "Tabacal", tipo: "inicio", hecho: false },
  ] satisfies Hito[],
} as const;

export type EtherealData = typeof etherealData;
