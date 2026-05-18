import type { Nota } from "../_data";

/**
 * Notas crudas, monoespaciadas, sin estilos de markdown renderizado.
 * CERO motion (control negativo).
 */
export function NotasList({ notas }: { notas: Nota[] }) {
  return (
    <section id="notas">
      <h2 className="text-base mb-4">[ NOTAS ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Notas crudas, monoespaciadas, sin estilos de markdown renderizado.
      </p>
      <div className="space-y-3 text-xs">
        {notas.map((n, i) => (
          <div
            key={i}
            className="px-3 py-2 leading-relaxed"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            <span className="mr-3" style={{ color: "#666666" }}>
              [{n.fecha}]
            </span>
            {n.texto}
          </div>
        ))}
      </div>
    </section>
  );
}
