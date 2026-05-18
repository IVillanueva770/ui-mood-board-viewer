/**
 * Divider estático. REEMPLAZA a `DividerReveal` (componente compartido animado:
 * scaleX draw-in + reveal de texto). En el control negativo el motion
 * decorativo se quita donde lo controla la composición — el plan es explícito:
 * "Si la página hoy tiene motion decorativo, quitarlo". Misma posición que el
 * resto de la tanda para que el esqueleto siga siendo comparable, pero crudo y
 * quieto. CERO motion.
 */
export function PlaceholderDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px" style={{ backgroundColor: "#000000" }} />
      <span className="text-xs" style={{ color: "#000000" }}>
        _END_
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: "#000000" }} />
    </div>
  );
}
