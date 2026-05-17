import { palette } from "../_data";

/** Rating compacto: ★ + nota + (reviews). */
export function Stars({ rating, count }: { rating: number; count?: number }) {
  return (
    <span className="inline-flex items-baseline gap-1 text-sm shrink-0">
      <span style={{ color: palette.rausch }}>★</span>
      <span style={{ fontWeight: 600 }}>{rating.toFixed(2)}</span>
      {count != null && <span style={{ color: palette.muted }}>({count})</span>}
    </span>
  );
}
