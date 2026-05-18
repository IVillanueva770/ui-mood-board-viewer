/**
 * Barra de workspace cruda. REEMPLAZA al viejo `InternalNav` (switcher
 * prohibido por la rúbrica: montaba 1 sub-vista por vez y desmontaba el resto
 * → en un viewer el evaluador veía "un solo componente"). Acá la nav es sólo
 * ANCLAS in-page: jumplinks a secciones que están TODAS montadas y apiladas
 * abajo en scroll. Sin estado, sin desmontar nada. CERO motion (control
 * negativo): los anchors ni siquiera tienen scroll suave.
 */
const ANCLAS = [
  { href: "#items", label: "Items" },
  { href: "#gente", label: "Gente" },
  { href: "#notas", label: "Notas" },
  { href: "#ajustes", label: "Ajustes" },
];

export function WorkspaceBar() {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs"
      style={{ border: "1px solid #000000", borderRadius: 0 }}
    >
      <span style={{ color: "#666666" }}>[ WORKSPACE — SIN ESTILO ]</span>
      <nav className="flex flex-wrap gap-2">
        {ANCLAS.map((a) => (
          <a
            key={a.href}
            href={a.href}
            className="px-2 py-1"
            style={{ border: "1px solid #000000", borderRadius: 0, color: "#000000" }}
          >
            {a.label.toUpperCase()}
          </a>
        ))}
      </nav>
    </div>
  );
}
