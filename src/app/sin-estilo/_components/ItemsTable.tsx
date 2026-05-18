import type { Item } from "../_data";

/**
 * Tabla pelada. Sin sorting visual, sin paginación bonita, sin cards. Tabla.
 * CERO motion, sin hover de fila (control negativo).
 */
export function ItemsTable({ items }: { items: Item[] }) {
  return (
    <section id="items">
      <h2 className="text-base mb-4">[ ITEMS ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Tabla pelada. Sin sorting visual, sin paginación bonita, sin cards. Tabla.
      </p>
      <table className="w-full text-xs" style={{ border: "1px solid #000000", borderRadius: 0 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #000000" }}>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              ID
            </th>
            <th className="px-3 py-2 text-left" style={{ borderRight: "1px solid #000000" }}>
              NOMBRE
            </th>
            <th className="px-3 py-2 text-left">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr key={row.id} style={{ borderBottom: i < items.length - 1 ? "1px solid #000000" : "none" }}>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.id}
              </td>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.nombre}
              </td>
              <td className="px-3 py-2" style={{ color: "#666666" }}>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
