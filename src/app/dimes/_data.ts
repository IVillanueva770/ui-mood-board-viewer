/**
 * dimes — datos del dominio + tipos.
 *
 * Estudio de diseño brutalist. Única fuente de datos: swap a backend = tocar
 * este archivo; cada pieza recibe lo suyo por props. dimes es el BENCHMARK de
 * densidad/motion del cluster — los datos son crudos y argentinos, sin lorem.
 */

export const palette = {
  bg: "#fffbed",
  ink: "#0a0a0a",
  orange: "#ff6b35",
  blue: "#004e89",
  lime: "#dfff00",
} as const;

/**
 * Tinta legible sobre un relleno brutalist (WCAG 2.2): los rellenos oscuros
 * (ink, blue) llevan crema; los saturados claros (lime, orange) llevan ink.
 * Centralizado para que el contraste extremo NO rompa accesibilidad.
 */
export function inkOn(fill: string): string {
  return fill === palette.lime || fill === palette.orange ? palette.ink : palette.bg;
}

/* ---------- Tipos del dominio ---------- */

export type Stat = { num: string; label: string };

export type Proyecto = { titulo: string; tag: string; color: string };

export type ManifiestoLinea = { texto: string; resaltado?: boolean };

export type KanbanCard = { cliente: string; proyecto: string; deadline: string; avatar: string };

export type KanbanColumna = { col: string; accent: string; cards: KanbanCard[] };

export type HoraRow = {
  cliente: string;
  proyecto: string;
  hs: string;
  tarifa: string;
  estado: string;
  chip: string;
};

export type Actividad = {
  iniciales: string;
  color: string;
  texto: string;
  target: string;
  a: string;
  time: string;
};

export type Cliente = {
  nombre: string;
  sector: string;
  proyectos: number;
  monto: string;
  estado: string;
  chip: string;
};

export type FacturaStat = { label: string; val: string; color: string; fg: string };

export type Factura = {
  num: string;
  cliente: string;
  monto: string;
  vence: string;
  estado: string;
  chip: string;
};

export type DimesData = {
  // Externo
  stats: Stat[];
  proyectos: Proyecto[];
  manifiesto: ManifiestoLinea[];
  // Interno
  pipeline: KanbanColumna[];
  horas: HoraRow[];
  horasTotal: { hs: string; monto: string };
  actividad: Actividad[];
  nota: { texto: string; firma: string };
  clientes: Cliente[];
  facturaStats: FacturaStat[];
  facturas: Factura[];
};

/* ---------- Mock (swap por backend acá) ---------- */

export const dimesData: DimesData = {
  stats: [
    { num: "47", label: "Proyectos" },
    { num: "12", label: "Años" },
    { num: "∞", label: "Cafés" },
    { num: "0", label: "Templates" },
  ],

  proyectos: [
    { titulo: "Cervecería Bestia", tag: "Branding · Web", color: palette.orange },
    { titulo: "Studio Roma", tag: "Identidad · Print", color: palette.blue },
    { titulo: "Beat Records", tag: "Web · Motion", color: palette.ink },
    { titulo: "Calle 14", tag: "Branding", color: palette.lime },
  ],

  manifiesto: [
    { texto: "NO HACEMOS" },
    { texto: "DISEÑO LINDO.", resaltado: true },
    { texto: "HACEMOS DISEÑO" },
    { texto: "QUE INCOMODA,", resaltado: true },
    { texto: "QUE SE ACUERDAN," },
    { texto: "QUE VENDE." },
  ],

  pipeline: [
    {
      col: "BRIEF",
      accent: palette.lime,
      cards: [
        { cliente: "Vino Norte", proyecto: "Identidad + etiqueta", deadline: "12 MAY", avatar: "MR" },
        { cliente: "Café Tres Patas", proyecto: "Naming + logo", deadline: "18 MAY", avatar: "JG" },
      ],
    },
    {
      col: "EN DISEÑO",
      accent: palette.orange,
      cards: [
        { cliente: "Cervecería Bestia", proyecto: "Re-brand completo", deadline: "09 MAY", avatar: "TM" },
        { cliente: "Studio Roma", proyecto: "Sistema editorial", deadline: "14 MAY", avatar: "MR" },
        { cliente: "Beat Records", proyecto: "Web + motion", deadline: "20 MAY", avatar: "JG" },
      ],
    },
    {
      col: "REVISIÓN",
      accent: palette.blue,
      cards: [{ cliente: "Calle 14", proyecto: "Branding v3", deadline: "08 MAY", avatar: "TM" }],
    },
    {
      col: "ENTREGADO",
      accent: palette.ink,
      cards: [
        { cliente: "Bocha Bar", proyecto: "Identidad", deadline: "OK", avatar: "MR" },
        { cliente: "Río Salado", proyecto: "Print + web", deadline: "OK", avatar: "JG" },
      ],
    },
  ],

  horas: [
    { cliente: "CERVECERÍA BESTIA", proyecto: "Re-brand completo", hs: "12.0", tarifa: "$ 380.000", estado: "EN CURSO", chip: palette.lime },
    { cliente: "STUDIO ROMA", proyecto: "Sistema editorial", hs: "8.5", tarifa: "$ 295.000", estado: "EN CURSO", chip: palette.lime },
    { cliente: "CALLE 14", proyecto: "Branding v3", hs: "6.0", tarifa: "$ 180.000", estado: "REVISIÓN", chip: palette.blue },
    { cliente: "BEAT RECORDS", proyecto: "Web + motion", hs: "9.5", tarifa: "$ 420.000", estado: "EN CURSO", chip: palette.orange },
    { cliente: "BOCHA BAR", proyecto: "Identidad", hs: "4.5", tarifa: "$ 120.000", estado: "FACTURADO", chip: palette.ink },
    { cliente: "RÍO SALADO", proyecto: "Print + web", hs: "2.0", tarifa: "$ 80.000", estado: "FACTURADO", chip: palette.ink },
  ],
  horasTotal: { hs: "42.5", monto: "$ 1.475.000" },

  actividad: [
    { iniciales: "MR", color: palette.orange, texto: "facturó", target: "STUDIO ROMA", a: "$ 295.000", time: "12 min" },
    { iniciales: "JG", color: palette.lime, texto: "cargó horas", target: "BEAT RECORDS", a: "+3.5h", time: "1 h" },
    { iniciales: "TM", color: palette.blue, texto: "subió revisión", target: "CALLE 14", a: "v3", time: "2 h" },
    { iniciales: "MR", color: palette.orange, texto: "creó brief", target: "VINO NORTE", a: "etiqueta + label", time: "ayer" },
  ],
  nota: { texto: "CHEQUEAR REVISIÓN DE CALLE 14 ANTES DE LAS 18.", firma: "— TM" },

  clientes: [
    { nombre: "Cervecería Bestia", sector: "Bebidas artesanales", proyectos: 4, monto: "$ 1.4M", estado: "ACTIVO", chip: palette.lime },
    { nombre: "Studio Roma", sector: "Editorial", proyectos: 7, monto: "$ 2.1M", estado: "ACTIVO", chip: palette.lime },
    { nombre: "Beat Records", sector: "Música", proyectos: 3, monto: "$ 890k", estado: "ACTIVO", chip: palette.orange },
    { nombre: "Calle 14", sector: "Hospitalidad", proyectos: 2, monto: "$ 320k", estado: "ACTIVO", chip: palette.lime },
    { nombre: "Bocha Bar", sector: "Hospitalidad", proyectos: 1, monto: "$ 120k", estado: "DORMIDO", chip: palette.ink },
    { nombre: "Río Salado", sector: "Turismo", proyectos: 2, monto: "$ 280k", estado: "DORMIDO", chip: palette.ink },
    { nombre: "Vino Norte", sector: "Bebidas", proyectos: 1, monto: "$ 95k", estado: "BRIEF", chip: palette.blue },
    { nombre: "Café Tres Patas", sector: "Hospitalidad", proyectos: 1, monto: "$ 60k", estado: "BRIEF", chip: palette.blue },
  ],

  facturaStats: [
    { label: "POR COBRAR", val: "$ 845k", color: palette.bg, fg: palette.ink },
    { label: "ATRASADAS", val: "$ 180k", color: palette.orange, fg: palette.ink },
    { label: "ESTE MES", val: "$ 1.2M", color: palette.ink, fg: palette.bg },
    { label: "ANUAL", val: "$ 14.8M", color: palette.lime, fg: palette.ink },
  ],

  facturas: [
    { num: "0042", cliente: "Studio Roma", monto: "$ 295.000", vence: "12 may", estado: "PENDIENTE", chip: palette.lime },
    { num: "0041", cliente: "Cervecería Bestia", monto: "$ 380.000", vence: "08 may", estado: "ATRASADA", chip: palette.orange },
    { num: "0040", cliente: "Calle 14", monto: "$ 180.000", vence: "10 may", estado: "PENDIENTE", chip: palette.lime },
    { num: "0039", cliente: "Beat Records", monto: "$ 420.000", vence: "01 may", estado: "COBRADA", chip: palette.ink },
    { num: "0038", cliente: "Bocha Bar", monto: "$ 120.000", vence: "28 abr", estado: "COBRADA", chip: palette.ink },
    { num: "0037", cliente: "Río Salado", monto: "$ 80.000", vence: "20 abr", estado: "COBRADA", chip: palette.ink },
  ],
};
