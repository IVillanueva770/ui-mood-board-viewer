import type { Ajuste } from "../_data";

/**
 * Settings sin switches, sin colores. Checkboxes ASCII deliberadamente crudos.
 * CERO motion, sin toggle animado (control negativo).
 */
export function AjustesList({ ajustes }: { ajustes: Ajuste[] }) {
  return (
    <section id="ajustes">
      <h2 className="text-base mb-4">[ AJUSTES ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Settings sin switches, sin colores. Checkboxes ASCII deliberadamente crudos.
      </p>
      <div className="space-y-2 text-xs">
        {ajustes.map((s, i) => (
          <div
            key={i}
            className="px-3 py-2"
            style={{ border: "1px solid #000000", borderRadius: 0 }}
          >
            [{s.activo ? "X" : " "}] {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}
