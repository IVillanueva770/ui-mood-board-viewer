/**
 * Helpers de chart SVG para steep (sin libs, dentro del estilo).
 * Paths derivados de los datos — nunca hardcodeados, para que cambiar el mock
 * cambie el dibujo.
 */

/** Path de línea suave (polilínea) normalizado a un viewBox w×h. */
export function linePath(vals: number[], w: number, h: number, pad = 4) {
  if (vals.length === 0) return "";
  const max = Math.max(...vals);
  const min = Math.min(...vals);
  const span = max - min || 1;
  return vals
    .map((v, i) => {
      const x = (i / (vals.length - 1)) * w;
      const y = h - ((v - min) / span) * (h - pad * 2) - pad;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/** Path de área cerrada (línea + base) para el degradé bajo la serie. */
export function areaPath(vals: number[], w: number, h: number, pad = 4) {
  const line = linePath(vals, w, h, pad);
  if (!line) return "";
  return `${line} L${w},${h} L0,${h} Z`;
}

/** Altura porcentual de cada barra respecto del máximo de la serie. */
export function barHeights(vals: number[]) {
  const max = Math.max(...vals, 1);
  return vals.map((v) => Math.round((v / max) * 100));
}

/** Geometría de un ring/donut de progreso (stroke-dasharray). */
export function ring(pct: number, r = 34) {
  const c = 2 * Math.PI * r;
  return { c, filled: (pct / 100) * c, r };
}
