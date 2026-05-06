import Link from "next/link";

export default function DimesPage() {
  return (
    <div style={{ backgroundColor: "#fffbed", color: "#0a0a0a", minHeight: "100vh" }} className="font-inter">
      {/* Top nav */}
      <div className="px-6 py-3 flex items-center justify-between text-xs uppercase tracking-wider" style={{ borderBottom: "2px solid #0a0a0a" }}>
        <Link href="/" className="hover:underline">← Volver al index</Link>
        <div>Dimes · brutalist</div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* Hero gigante */}
        <section className="mb-16 sm:mb-24">
          <div
            className="p-6 sm:p-10 mb-8"
            style={{ border: "3px solid #0a0a0a", boxShadow: "8px 8px 0 0 #0a0a0a" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] mb-4">Estudio · diseño · marca</p>
            <h1 className="font-bebas text-6xl sm:text-9xl leading-[0.9] tracking-wide mb-6">
              MARCAS <br />
              <span style={{ color: "#ff6b35" }}>QUE NO PASAN</span><br />
              DESAPERCIBIDAS.
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl leading-snug font-medium">
              Hacemos branding crudo, sin filtros y sin frases hechas. Si querés un sitio que parezca otro más, no llames.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              className="px-8 py-4 font-bebas text-2xl tracking-wide"
              style={{
                backgroundColor: "#0a0a0a",
                color: "#fffbed",
                border: "2px solid #0a0a0a",
                boxShadow: "5px 5px 0 0 #ff6b35",
              }}
            >
              VER PROYECTOS
            </button>
            <button
              className="px-8 py-4 font-bebas text-2xl tracking-wide"
              style={{ backgroundColor: "transparent", color: "#0a0a0a", border: "2px solid #0a0a0a" }}
            >
              ESCRIBINOS →
            </button>
          </div>
        </section>

        {/* Stats brutalist */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16" style={{ border: "3px solid #0a0a0a" }}>
          {[
            { num: "47", label: "Proyectos" },
            { num: "12", label: "Años" },
            { num: "∞", label: "Cafés" },
            { num: "0", label: "Templates" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="p-6 sm:p-8 text-center"
              style={{
                borderRight: i < 3 ? "3px solid #0a0a0a" : "none",
                backgroundColor: i % 2 === 0 ? "#fffbed" : "#0a0a0a",
                color: i % 2 === 0 ? "#0a0a0a" : "#fffbed",
              }}
            >
              <div className="font-bebas text-6xl sm:text-7xl leading-none mb-1">{s.num}</div>
              <div className="text-xs uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Projects grid */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide">PROYECTOS RECIENTES</h2>
            <a href="#" className="text-sm uppercase tracking-wider underline">Ver todos →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: "Cervecería Bestia", tag: "Branding · Web", color: "#ff6b35" },
              { titulo: "Studio Roma", tag: "Identidad · Print", color: "#004e89" },
              { titulo: "Beat Records", tag: "Web · Motion", color: "#0a0a0a" },
              { titulo: "Calle 14", tag: "Branding", color: "#dfff00" },
            ].map((p) => (
              <div
                key={p.titulo}
                className="overflow-hidden"
                style={{ border: "3px solid #0a0a0a", boxShadow: "6px 6px 0 0 #0a0a0a" }}
              >
                <div className="h-44 sm:h-56 flex items-center justify-center" style={{ backgroundColor: p.color }}>
                  <span
                    className="font-bebas text-5xl sm:text-7xl tracking-wider"
                    style={{ color: p.color === "#dfff00" || p.color === "#ff6b35" ? "#0a0a0a" : "#fffbed" }}
                  >
                    {p.titulo.split(" ")[0].toUpperCase()}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between" style={{ borderTop: "3px solid #0a0a0a", backgroundColor: "#fffbed" }}>
                  <div>
                    <div className="font-bebas text-2xl tracking-wide leading-none mb-1">{p.titulo.toUpperCase()}</div>
                    <div className="text-xs uppercase tracking-widest">{p.tag}</div>
                  </div>
                  <span className="font-bebas text-3xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section
          className="p-6 sm:p-10 mb-12 text-center"
          style={{ backgroundColor: "#0a0a0a", color: "#fffbed", border: "3px solid #0a0a0a" }}
        >
          <h3 className="font-bebas text-4xl sm:text-6xl mb-4 tracking-wide">¿TE TIRA?</h3>
          <p className="mb-6 max-w-xl mx-auto">Coordinamos una llamada de 20 minutos sin compromiso. Te decimos qué se puede y qué no.</p>
          <button
            className="px-8 py-4 font-bebas text-2xl tracking-wide"
            style={{ backgroundColor: "#dfff00", color: "#0a0a0a", border: "2px solid #dfff00" }}
          >
            AGENDAR LLAMADA
          </button>
        </section>

        {/* Meta info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-xs" style={{ borderTop: "2px solid #0a0a0a" }}>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">PALETA</div>
            <div className="space-y-1 font-mono">
              <div>--bg: #fffbed</div>
              <div>--fg: #0a0a0a</div>
              <div>--accent-1: #ff6b35</div>
              <div>--accent-2: #004e89</div>
              <div>--accent-3: #dfff00</div>
            </div>
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">TIPOGRAFÍA</div>
            <div className="space-y-1">
              <div>Bebas Neue (display)</div>
              <div>Inter (body)</div>
            </div>
          </div>
          <div>
            <div className="font-bebas text-2xl tracking-wide mb-2">CUÁNDO USAR</div>
            <p className="leading-relaxed">
              Marcas que quieren personalidad fuerte, productos creativos, estudios de diseño, branding alternativo. Polariza por diseño.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
