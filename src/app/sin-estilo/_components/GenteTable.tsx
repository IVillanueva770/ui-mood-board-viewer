import type { Persona } from "../_data";

/**
 * Lista de personas como tabla. Sin avatares, sin colores de rol, sin estados
 * visuales. CERO motion (control negativo).
 */
export function GenteTable({ gente }: { gente: Persona[] }) {
  return (
    <section id="gente">
      <h2 className="text-base mb-4">[ GENTE ]</h2>
      <p className="text-xs mb-6" style={{ color: "#666666" }}>
        Lista de personas. Sin avatares, sin colores de rol, sin estados visuales.
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
            <th className="px-3 py-2 text-left">ROL</th>
          </tr>
        </thead>
        <tbody>
          {gente.map((row, i) => (
            <tr key={row.id} style={{ borderBottom: i < gente.length - 1 ? "1px solid #000000" : "none" }}>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.id}
              </td>
              <td className="px-3 py-2" style={{ borderRight: "1px solid #000000" }}>
                {row.nombre}
              </td>
              <td className="px-3 py-2" style={{ color: "#666666" }}>
                {row.rol}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
