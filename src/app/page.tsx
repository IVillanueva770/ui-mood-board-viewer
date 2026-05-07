"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ESTILOS, CATEGORIAS } from "@/lib/estilos";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">Mood Board · Viewer</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Estilos del usuario
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Cada estilo se ve aplicado a un layout sample con paleta y tipografía reales. Hovereá las cards y entrá a cada uno para sentir las microinteracciones firma del estilo.
          </p>

          <div className="flex flex-wrap gap-2 mt-6 text-xs">
            <Badge dot="#22c55e" label={`${ESTILOS.filter((e) => e.estado === "aprobado").length} aprobados`} />
            <Badge dot="#737373" label="Click para entrar" />
          </div>
        </motion.header>

        {CATEGORIAS.map((cat, catIdx) => {
          const estilosCat = ESTILOS.filter((e) => e.categoria === cat.id);
          if (estilosCat.length === 0) return null;

          return (
            <motion.section
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="mb-12 sm:mb-16"
            >
              <div className="mb-6 flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-1">
                    {cat.label}
                  </p>
                  <h2 className="text-lg font-semibold text-neutral-800">
                    {cat.descripcion}
                  </h2>
                </div>
                <span className="text-xs text-neutral-500">
                  {estilosCat.length} {estilosCat.length === 1 ? "estilo" : "estilos"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {estilosCat.map((e, idx) => (
                  <motion.div
                    key={e.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -3 }}
                  >
                    <Link
                      href={`/${e.slug}`}
                      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white block transition-all duration-200 hover:border-neutral-400 hover:shadow-xl"
                    >
                      <div
                        className="h-44 sm:h-48 flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: e.bgPreview, color: e.fgPreview }}
                      >
                        <motion.div
                          className="text-center"
                          initial={false}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                          <div className="text-[11px] uppercase tracking-[0.18em] opacity-60 mb-2">
                            {e.tagline}
                          </div>
                          <div
                            className={
                              e.slug === "linear" || e.slug === "modern-saas" ? "text-3xl font-semibold tracking-tight"
                              : e.slug === "calm" || e.slug === "medico-amigable" || e.slug === "clinico-calmado" ? "text-4xl font-cormorant"
                              : e.slug === "dimes" || e.slug === "sport-dinamico" || e.slug === "ethereal" ? "text-5xl font-bebas tracking-wide"
                              : e.slug === "sin-estilo" ? "text-2xl font-roboto-mono"
                              : "text-3xl font-semibold tracking-tight"
                            }
                          >
                            {e.nombre}
                          </div>
                        </motion.div>

                        <div className="absolute bottom-3 left-3 flex gap-1.5">
                          {e.paleta.map((c, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 rounded-full ring-1 ring-black/10"
                              style={{ backgroundColor: c }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 300 }}
                            />
                          ))}
                        </div>
                        <div
                          className="absolute top-3 right-3 px-2 py-1 text-[10px] uppercase tracking-wider rounded-full text-white"
                          style={{ backgroundColor: e.accentPreview }}
                        >
                          {e.estado === "aprobado" ? "✓ Aprobado" : e.estado === "descartado" ? "✗ Descartado" : "Preview"}
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 border-t border-neutral-100">
                        <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                          {e.descripcion}
                        </p>
                        <p className="text-xs text-neutral-500 mb-3">
                          <span className="font-medium text-neutral-700">Cuándo:</span> {e.cuandoUsar}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-[11px] text-neutral-400 font-mono">
                            {e.tipografia}
                          </p>
                          <span className="text-xs text-neutral-400 group-hover:text-neutral-700 transition-colors">
                            Ver →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 sm:mt-20 text-xs text-neutral-400 border-t border-neutral-200 pt-6"
        >
          <p>Mood Board Viewer · vive en <code className="text-neutral-600">Karpathy/ui-mood-board-viewer</code> · iterá a gusto.</p>
        </motion.footer>
      </div>
    </main>
  );
}

function Badge({ dot, label }: { dot: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
      {label}
    </span>
  );
}
