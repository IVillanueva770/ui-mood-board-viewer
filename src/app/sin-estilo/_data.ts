/**
 * sin-estilo — datos del dominio + paleta. CONTROL NEGATIVO del viewer.
 *
 * Es el default deliberado cuando NO se eligió estilo (estilos.ts: línea fina
 * B/N, Roboto Mono, border-radius 0, cero acentos — comunica "falta decisión
 * de diseño"). Datos GENÉRICOS a propósito: acá SÍ va lorem-ish, el punto es
 * que se vea sin terminar. Única fuente de datos igual que el resto de la
 * tanda: swap a backend = tocar este archivo; cada pieza recibe lo suyo por
 * props. Tipos del dominio explícitos, nada de `any`.
 */

/* Paleta cruda: blanco / negro / gris. SIN acento, SIN sombra, SIN gradiente.
   border-radius 0 en todo. (estilos.ts paleta exacta del estilo.) */
export const palette = {
  bg: "#ffffff",
  ink: "#000000",
  muted: "#666666",
} as const;

/* ---------- Tipos del dominio ---------- */

export type FaltaItem = { n: string; texto: string };

export type Metrica = { label: string; value: string };

export type CardPlaceholder = { n: number; titulo: string; desc: string };

export type Item = { id: string; nombre: string; status: string };

export type Persona = { id: string; nombre: string; rol: string };

export type Nota = { fecha: string; texto: string };

export type Ajuste = { label: string; activo: boolean };

export type SinEstiloData = {
  faltaDecidir: FaltaItem[];
  metricas: Metrica[];
  cards: CardPlaceholder[];
  items: Item[];
  gente: Persona[];
  notas: Nota[];
  ajustes: Ajuste[];
};

/* ---------- Datos placeholder (genéricos a propósito) ---------- */

export const sinEstiloData: SinEstiloData = {
  faltaDecidir: [
    { n: "01", texto: "paleta — al menos bg / fg / accent" },
    { n: "02", texto: "tipografía — display + body" },
    { n: "03", texto: "tono — voz, registro, persona" },
    { n: "04", texto: "vocabulario — qué palabras sí, qué palabras no" },
    { n: "05", texto: "densidad — cuánta información por pantalla" },
    { n: "06", texto: "componentes base — botones, cards, tablas" },
  ],
  metricas: [
    { label: "MÉTRICA 1", value: "00" },
    { label: "MÉTRICA 2", value: "00" },
    { label: "MÉTRICA 3", value: "00" },
    { label: "MÉTRICA 4", value: "00" },
  ],
  cards: [
    { n: 1, titulo: "Título card.", desc: "Descripción placeholder. Cuando se elija estilo del mood board, esto va a tener tipografía, color y layout reales." },
    { n: 2, titulo: "Título card.", desc: "Descripción placeholder. Cuando se elija estilo del mood board, esto va a tener tipografía, color y layout reales." },
    { n: 3, titulo: "Título card.", desc: "Descripción placeholder. Cuando se elija estilo del mood board, esto va a tener tipografía, color y layout reales." },
  ],
  items: [
    { id: "I-0001", nombre: "Item alpha", status: "activo" },
    { id: "I-0002", nombre: "Item beta", status: "activo" },
    { id: "I-0003", nombre: "Item gamma", status: "borrador" },
    { id: "I-0004", nombre: "Item delta", status: "activo" },
    { id: "I-0005", nombre: "Item epsilon", status: "archivado" },
    { id: "I-0006", nombre: "Item zeta", status: "activo" },
    { id: "I-0007", nombre: "Item eta", status: "borrador" },
    { id: "I-0008", nombre: "Item theta", status: "activo" },
  ],
  gente: [
    { id: "U-0001", nombre: "Persona uno", rol: "admin" },
    { id: "U-0002", nombre: "Persona dos", rol: "editor" },
    { id: "U-0003", nombre: "Persona tres", rol: "editor" },
    { id: "U-0004", nombre: "Persona cuatro", rol: "viewer" },
    { id: "U-0005", nombre: "Persona cinco", rol: "viewer" },
    { id: "U-0006", nombre: "Persona seis", rol: "viewer" },
  ],
  notas: [
    { fecha: "2026-05-08", texto: "Definir paleta antes del jueves." },
    { fecha: "2026-05-07", texto: "Probar otra display font, esta no convence." },
    { fecha: "2026-05-05", texto: "Decisión: dos tabs por página, no tres." },
    { fecha: "2026-05-03", texto: "El usuario rechazó la opción A. Volver a basics." },
    { fecha: "2026-05-01", texto: "Empezar el mood board mañana sin falta." },
    { fecha: "2026-04-29", texto: "Brief inicial — mucho material crudo, poco filtro." },
  ],
  ajustes: [
    { label: "Mostrar avisos de placeholder", activo: false },
    { label: "Permitir compartir sin estilo aplicado", activo: false },
    { label: "Recordatorio diario para elegir paleta", activo: false },
    { label: "Bloquear export hasta tener mood board", activo: false },
    { label: "Mostrar marcas [TODO] en producción", activo: false },
    { label: "Activar modo strict — fail si falta estilo", activo: false },
    { label: "Loggear interacciones a archivo plano", activo: false },
    { label: "Notificar cuando alguien edite el placeholder", activo: false },
  ],
};
