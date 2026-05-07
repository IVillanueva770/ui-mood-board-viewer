import Link from "next/link";

export default function CalmPage() {
  return (
    <div style={{ backgroundColor: "#f7f3ee", color: "#2c2925", minHeight: "100vh" }} className="font-inter">
      {/* Top nav */}
      <div className="px-6 py-4 flex items-center justify-between text-xs" style={{ borderBottom: "1px solid #e8ddd0" }}>
        <Link href="/" style={{ color: "#7d7468" }} className="hover:text-current">
          ← Volver al index
        </Link>
        <div style={{ color: "#7d7468" }}>Calm · wellness premium</div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        {/* ====== HERO COMERCIAL — landing del producto wellness ====== */}
        <section className="mb-24 sm:mb-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] mb-7" style={{ color: "#7d8471" }}>
            wellness · pacientes · kinesiología
          </p>
          <h1 className="font-cormorant text-5xl sm:text-8xl font-light leading-[1.02] mb-8 max-w-4xl mx-auto" style={{ letterSpacing: "-0.015em" }}>
            La pausa que <em className="italic">tu cuerpo</em><br />
            estaba pidiendo.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "#5a5147" }}>
            Reposo es la app que tu kinesiólogo usa para acompañarte entre sesión y sesión. Movilidad guiada, ritmo propio, sin gritos motivacionales.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
            <button
              className="px-9 py-4 text-sm font-medium tracking-wide"
              style={{ backgroundColor: "#2c2925", color: "#fff", borderRadius: 9999 }}
            >
              Empezar 14 días gratis
            </button>
            <button
              className="px-9 py-4 text-sm font-medium tracking-wide"
              style={{ color: "#2c2925", borderRadius: 9999, border: "1px solid #2c2925" }}
            >
              Hablar con un kine →
            </button>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              { tit: "Tu kine te arma la rutina", desc: "No es genérica. La ajusta a lo que vio en tu última sesión." },
              { tit: "10 minutos al día alcanza", desc: "El plan no es heroico. Es sostenible. Por eso funciona." },
              { tit: "Sin culpa los días que no", desc: "Si saltás un día, te recibimos igual. Sin barras llenas ni notifs." },
            ].map((p) => (
              <div key={p.tit} className="p-7" style={{ backgroundColor: "#fff9f0", borderRadius: 20, border: "1px solid #ece4d6" }}>
                <div className="w-9 h-9 rounded-full mb-5" style={{ backgroundColor: "#7d8471", opacity: 0.85 }} />
                <h3 className="font-cormorant text-2xl mb-2" style={{ color: "#2c2925" }}>{p.tit}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5147" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider de cambio de modo */}
        <div className="flex items-center gap-5 mb-16 max-w-3xl mx-auto">
          <div className="flex-1 h-px" style={{ backgroundColor: "#e8ddd0" }} />
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#7d8471" }}>
            así se ve adentro
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#e8ddd0" }} />
        </div>

        {/* Hero del usuario logueado (operativo) */}
        <section className="mb-20 sm:mb-28">
          <p className="text-xs uppercase tracking-[0.25em] mb-6" style={{ color: "#7d8471" }}>
            Tu programa de hoy
          </p>
          <h2 className="font-cormorant text-5xl sm:text-7xl font-medium leading-[1.05] mb-8 max-w-3xl" style={{ letterSpacing: "-0.01em" }}>
            Pequeños pasos diarios que tu cuerpo va a agradecer.
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#5a5147" }}>
            Cinco minutos de movilidad guiada para empezar. Tu kine ajustó la rutina según lo que viste la última sesión.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <button
              className="px-7 py-3.5 text-sm font-medium tracking-wide"
              style={{ backgroundColor: "#2c2925", color: "#fff", borderRadius: 9999 }}
            >
              Empezar sesión
            </button>
            <button
              className="px-7 py-3.5 text-sm font-medium tracking-wide"
              style={{ color: "#2c2925", borderRadius: 9999, border: "1px solid #2c2925" }}
            >
              Ver más tarde
            </button>
          </div>
        </section>

        {/* Progress section */}
        <section className="mb-20 sm:mb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "#7d8471" }}>Tu progreso</p>
              <h2 className="font-cormorant text-3xl sm:text-4xl">12 días seguidos</h2>
            </div>
            <p className="text-sm" style={{ color: "#7d7468" }}>Esta semana: 4 de 5</p>
          </div>

          <div className="space-y-4">
            {[
              { dia: "Lunes", titulo: "Movilidad lumbar", min: "8 min", done: true },
              { dia: "Martes", titulo: "Cadenas posteriores", min: "12 min", done: true },
              { dia: "Miércoles", titulo: "Caminata consciente", min: "20 min", done: true },
              { dia: "Jueves", titulo: "Movilidad lumbar", min: "8 min", done: true },
              { dia: "Viernes", titulo: "Respiración + estiramientos", min: "10 min", done: false },
            ].map((s) => (
              <div
                key={s.dia}
                className="flex items-center justify-between py-4 px-6"
                style={{
                  backgroundColor: "#fff9f0",
                  border: "1px solid #ece4d6",
                  borderRadius: 16,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-sm"
                    style={{
                      backgroundColor: s.done ? "#7d8471" : "transparent",
                      border: s.done ? "none" : "1px solid #c9bdaa",
                      borderRadius: 9999,
                      color: s.done ? "#fff" : "#a89e8a",
                    }}
                  >
                    {s.done ? "✓" : ""}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "#7d7468" }}>{s.dia}</div>
                    <div className="font-medium" style={{ color: "#2c2925" }}>{s.titulo}</div>
                  </div>
                </div>
                <div className="text-sm" style={{ color: "#7d7468" }}>{s.min}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Programs grid */}
        <section className="mb-20 sm:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "#7d8471" }}>Otros programas</p>
          <h2 className="font-cormorant text-3xl sm:text-4xl mb-10">Para cuando quieras explorar</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { nombre: "Postura escritorio", min: "5 min/día", desc: "Para días largos sentado", color: "#c97c5d" },
              { nombre: "Sueño profundo", min: "Antes de dormir", desc: "Respiración + estiramientos", color: "#7d8471" },
              { nombre: "Reactivar la cadera", min: "12 min", desc: "Movilidad guiada por video", color: "#a89776" },
            ].map((p) => (
              <div
                key={p.nombre}
                className="p-6"
                style={{ backgroundColor: "#fff9f0", borderRadius: 20, border: "1px solid #ece4d6" }}
              >
                <div className="w-10 h-10 mb-5 rounded-full" style={{ backgroundColor: p.color, opacity: 0.85 }} />
                <h3 className="font-cormorant text-2xl mb-1" style={{ color: "#2c2925" }}>{p.nombre}</h3>
                <p className="text-xs mb-3" style={{ color: "#7d7468" }}>{p.min}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5147" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meta info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 text-sm" style={{ borderTop: "1px solid #e8ddd0", color: "#5a5147" }}>
          <div>
            <div className="font-semibold mb-2" style={{ color: "#2c2925" }}>Paleta</div>
            <div className="space-y-1 text-xs font-mono">
              <div>--bg: #f7f3ee</div>
              <div>--card: #fff9f0</div>
              <div>--accent-sage: #7d8471</div>
              <div>--accent-warm: #c97c5d</div>
              <div>--fg: #2c2925</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2" style={{ color: "#2c2925" }}>Tipografía</div>
            <div className="space-y-1 text-xs">
              <div>Cormorant Garamond (headings)</div>
              <div>Inter (body)</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2" style={{ color: "#2c2925" }}>Cuándo usar</div>
            <p className="text-xs leading-relaxed">
              Apps de wellness, programas online de ejercicios, tracking de salud, experiencias relajadas para clientes. Kine app pacientes, meditación.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
