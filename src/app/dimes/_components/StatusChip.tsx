import { inkOn } from "../_data";

/**
 * Chip de estado brutalist — borde duro + tinta legible derivada del relleno
 * (`inkOn`, WCAG 2.2). Centralizado: el patrón se repetía en 5 sub-vistas.
 */
export function StatusChip({
  label,
  fill,
  className = "",
}: {
  label: string;
  fill: string;
  className?: string;
}) {
  return (
    <span
      className={`font-bebas text-xs tracking-widest px-2.5 py-1 ${className}`}
      style={{ backgroundColor: fill, color: inkOn(fill), border: "1.5px solid #0a0a0a" }}
    >
      {label}
    </span>
  );
}
