import type { FaltaItem } from "../_data";

/**
 * Checklist de decisiones de diseño pendientes. Lista cruda, sin checkboxes
 * estilizados, sin color. CERO motion.
 */
export function FaltaDecidir({ items }: { items: FaltaItem[] }) {
  return (
    <section>
      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ FALTA DECIDIR ]
      </div>
      <div className="p-4" style={{ border: "1px solid #000000", borderRadius: 0 }}>
        <ul className="text-xs leading-loose space-y-1">
          {items.map((f) => (
            <li key={f.n}>
              [{f.n}] {f.texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
