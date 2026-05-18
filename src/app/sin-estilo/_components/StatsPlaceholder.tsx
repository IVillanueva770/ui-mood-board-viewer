import type { Metrica } from "../_data";

/**
 * Grilla de métricas en cero. Sin count-up, sin color, sin sombra: el placeholder
 * no mide nada todavía. CERO motion (control negativo).
 */
export function StatsPlaceholder({ metricas }: { metricas: Metrica[] }) {
  return (
    <section>
      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ STATS DE PLACEHOLDER ]
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {metricas.map((m, i) => (
          <div
            key={m.label}
            className="p-4"
            style={{
              border: "1px solid #000000",
              borderLeft: i === 0 ? "1px solid #000000" : "none",
              borderRadius: 0,
            }}
          >
            <div className="text-xs mb-1" style={{ color: "#666666" }}>
              {m.label}
            </div>
            <div className="text-2xl">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
