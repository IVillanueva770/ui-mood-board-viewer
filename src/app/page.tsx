import Link from "next/link";

const estilos = [
  {
    slug: "linear",
    nombre: "Linear",
    tagline: "Productivity dark / minimal",
    descripcion: "Sidebar denso, dark mode, monospace para datos, accent purple. Para apps de uso diario, dashboards internos, herramientas para power users.",
    cuandoUsar: "Exo dashboard, organizadores internos, gestión de tareas, panels técnicos.",
    paleta: ["#0e0e10", "#181820", "#5e6ad2", "#f7f8f8", "#8d8f97"],
    tipografia: "Geist Sans + Geist Mono",
    bgPreview: "#0e0e10",
    fgPreview: "#f7f8f8",
    accentPreview: "#5e6ad2",
  },
  {
    slug: "calm",
    nombre: "Calm",
    tagline: "Wellness premium minimal",
    descripcion: "Tonos tierra suaves, mucho aire, ritmo lento, serif elegante. Comunica calma, cuidado, espacio.",
    cuandoUsar: "Apps de wellness, tracking de salud, programas online de ejercicios, experiencias relajadas.",
    paleta: ["#f7f3ee", "#fff9f0", "#7d8471", "#c97c5d", "#2c2925"],
    tipografia: "Cormorant Garamond + Inter",
    bgPreview: "#f7f3ee",
    fgPreview: "#2c2925",
    accentPreview: "#7d8471",
  },
  {
    slug: "dimes",
    nombre: "Dimes Studio",
    tagline: "Brutalist juvenil crudo",
    descripcion: "Bordes negros gruesos, sombras duras (no blur), color flat saturado, tipografía bold gigante. Memorabilidad alta, polariza.",
    cuandoUsar: "Marcas alternativas, productos creativos, estudios de diseño, branding que necesita personalidad fuerte.",
    paleta: ["#fffbed", "#ff6b35", "#004e89", "#0a0a0a", "#dfff00"],
    tipografia: "Bebas Neue + Inter",
    bgPreview: "#fffbed",
    fgPreview: "#0a0a0a",
    accentPreview: "#ff6b35",
  },
  {
    slug: "sin-estilo",
    nombre: "Sin estilo",
    tagline: "Default placeholder — no decisions yet",
    descripcion: "Línea fina B/N, Roboto Mono, border-radius 0, cero acentos. Comunica claramente que falta decisión de diseño.",
    cuandoUsar: "Default cuando NO se eligió estilo del mood board todavía. Evita que un mockup con shadcn-default se confunda con producto terminado.",
    paleta: ["#ffffff", "#000000", "#666666", "#000000", "#000000"],
    tipografia: "Roboto Mono",
    bgPreview: "#ffffff",
    fgPreview: "#000000",
    accentPreview: "#000000",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Mood Board · Viewer</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Estilos aprobados
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Cada uno con un layout sample aplicando paleta y tipografía reales. Click en uno para verlo en pantalla completa.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {estilos.map((e) => (
            <Link
              key={e.slug}
              href={`/${e.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-neutral-400 hover:shadow-lg"
            >
              <div
                className="h-48 flex items-center justify-center relative"
                style={{ backgroundColor: e.bgPreview, color: e.fgPreview }}
              >
                <div className="text-center">
                  <div className="text-[11px] uppercase tracking-[0.18em] opacity-60 mb-2">
                    {e.tagline}
                  </div>
                  <div
                    className={
                      e.slug === "linear" ? "text-3xl font-semibold tracking-tight"
                      : e.slug === "calm" ? "text-4xl font-cormorant"
                      : e.slug === "dimes" ? "text-5xl font-bebas tracking-wide"
                      : "text-2xl font-roboto-mono"
                    }
                  >
                    {e.nombre}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {e.paleta.map((c, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <div
                  className="absolute top-3 right-3 px-2 py-1 text-[10px] uppercase tracking-wider rounded-full text-white"
                  style={{ backgroundColor: e.accentPreview }}
                >
                  Preview
                </div>
              </div>

              <div className="p-5 sm:p-6 border-t border-neutral-100">
                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                  {e.descripcion}
                </p>
                <p className="text-xs text-neutral-500 mb-4">
                  <span className="font-medium text-neutral-700">Cuándo:</span> {e.cuandoUsar}
                </p>
                <p className="text-[11px] text-neutral-400 font-mono">
                  {e.tipografia}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-16 sm:mt-20 text-xs text-neutral-400">
          <p>Mood Board Viewer · vive en Karpathy/ui-mood-board-viewer · iterá a gusto.</p>
        </footer>
      </div>
    </main>
  );
}
