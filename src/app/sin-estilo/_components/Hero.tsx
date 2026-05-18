/**
 * Hero placeholder. Aviso crudo + título + sub + 2 CTA de borde fino.
 * CERO motion (control negativo). Botones sin hover: la quietud es el mensaje.
 */
export function Hero() {
  return (
    <section>
      <div
        className="p-4 mb-12 text-xs leading-relaxed"
        style={{ border: "1px solid #000000", borderRadius: 0 }}
      >
        [AVISO] Esta pantalla NO es un estilo terminado. Es el default que se usa
        cuando NO hay mood board elegido.
      </div>

      <h1 className="text-3xl sm:text-5xl mb-6 leading-tight" style={{ borderRadius: 0 }}>
        [ NO STYLE DECISIONS YET ]
      </h1>
      <p className="text-sm mb-10 leading-relaxed max-w-2xl" style={{ color: "#666666" }}>
        Default placeholder — visible para evitar confundir un mockup con un
        producto terminado. Sirve también para forzar la conversación: si esto se
        ve crudo, es porque falta decidir algo.
      </p>

      <div className="flex gap-3 flex-wrap">
        <button
          type="button"
          className="px-4 py-2 text-xs"
          style={{ border: "1px solid #000000", backgroundColor: "#000000", color: "#ffffff", borderRadius: 0 }}
        >
          [ HACER UN MOOD BOARD ]
        </button>
        <button
          type="button"
          className="px-4 py-2 text-xs"
          style={{ border: "1px solid #000000", backgroundColor: "#ffffff", color: "#000000", borderRadius: 0 }}
        >
          [ VER ESTILOS ]
        </button>
      </div>
    </section>
  );
}
