import type { CardPlaceholder } from "../_data";

/**
 * Grilla de cards crudas. Borde fino, sin fill, sin sombra, sin hover lift.
 * CERO motion (control negativo).
 */
export function CardsPlaceholder({ cards }: { cards: CardPlaceholder[] }) {
  return (
    <section>
      <div className="text-xs mb-3" style={{ color: "#666666" }}>
        [ CARDS PLACEHOLDER ]
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.n} className="p-5" style={{ border: "1px solid #000000", borderRadius: 0 }}>
            <div className="text-xs mb-3" style={{ color: "#666666" }}>
              [CARD {c.n}]
            </div>
            <div className="text-base mb-2">{c.titulo}</div>
            <div className="text-xs leading-relaxed mb-4" style={{ color: "#666666" }}>
              {c.desc}
            </div>
            <a href="#" className="text-xs underline">
              [VER MÁS]
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
