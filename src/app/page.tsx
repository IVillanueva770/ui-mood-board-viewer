"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ESTILOS, CATEGORIAS, type Categoria, type Estilo } from "@/lib/estilos";

type Filtro = Categoria | "todos";

export default function Home() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const reduce = useReducedMotion();

  const chips = useMemo(
    () => [
      { id: "todos" as Filtro, label: "Todos", count: ESTILOS.length },
      ...CATEGORIAS.map((c) => ({
        id: c.id as Filtro,
        label: c.label,
        count: ESTILOS.filter((e) => e.categoria === c.id).length,
      })).filter((c) => c.count > 0),
    ],
    []
  );

  const visibles = useMemo(
    () => (filtro === "todos" ? ESTILOS : ESTILOS.filter((e) => e.categoria === filtro)),
    [filtro]
  );

  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="mx-auto max-w-7xl px-5 sm:px-8 pt-8 sm:pt-10 pb-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
          Mood Board · Viewer
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Estilos del usuario
          </h1>
          <p className="text-sm text-neutral-500 max-w-md">
            Cada card entra a un estilo aplicado con paleta y tipografía reales. Hovereá para ver para qué sirve.
          </p>
        </div>
      </header>

      {/* Filtro por categoría — sticky, convierte el muro vertical en visor */}
      <div className="sticky top-0 z-20 bg-neutral-50/90 backdrop-blur border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {chips.map((c) => {
            const activo = filtro === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFiltro(c.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activo
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {c.label}
                <span className={activo ? "ml-1.5 opacity-60" : "ml-1.5 text-neutral-400"}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-6 sm:py-8">
        <motion.div
          layout={!reduce}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibles.map((e, i) => (
              <StyleCard key={e.slug} estilo={e} index={i} reduce={!!reduce} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 sm:px-8 pb-10 text-xs text-neutral-400">
        <p>
          {ESTILOS.length} estilos · vive en{" "}
          <code className="text-neutral-500">Karpathy/ui-mood-board-viewer</code>
        </p>
      </footer>
    </main>
  );
}

function StyleCard({ estilo: e, index, reduce }: { estilo: Estilo; index: number; reduce: boolean }) {
  const nombreClass =
    e.slug === "linear" || e.slug === "modern-saas"
      ? "text-xl sm:text-2xl font-semibold tracking-tight"
      : e.slug === "calm" || e.slug === "medico-amigable" || e.slug === "clinico-calmado"
      ? "text-2xl sm:text-3xl font-cormorant"
      : e.slug === "dimes" || e.slug === "sport-dinamico" || e.slug === "ethereal"
      ? "text-3xl sm:text-4xl font-bebas tracking-wide"
      : e.slug === "sin-estilo"
      ? "text-lg font-roboto-mono"
      : "text-xl sm:text-2xl font-semibold tracking-tight";

  return (
    <motion.div
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: reduce ? 0 : Math.min(index * 0.025, 0.3) }}
      whileHover={reduce ? undefined : { y: -3 }}
    >
      <Link
        href={`/${e.slug}`}
        transitionTypes={["nav-forward"]}
        className="group relative block overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400"
      >
        <div
          className="relative h-28 sm:h-32 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: e.bgPreview, color: e.fgPreview }}
        >
          <div className={nombreClass}>{e.nombre}</div>

          <div className="absolute bottom-2.5 left-2.5 flex gap-1">
            {e.paleta.map((c, idx) => (
              <span
                key={idx}
                className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <span
            className="absolute top-2.5 right-2.5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider rounded-full text-white"
            style={{ backgroundColor: e.accentPreview }}
          >
            {e.estado === "aprobado" ? "✓" : e.estado === "descartado" ? "✗" : "·"}
          </span>

          {/* Descripción + cuándo-usar: en hover, no infla la card */}
          <div
            className="absolute inset-0 flex flex-col justify-center gap-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: e.bgPreview, color: e.fgPreview }}
          >
            <p className="text-[11px] leading-snug">{e.descripcion}</p>
            <p className="text-[10px] leading-snug opacity-70">
              <span className="font-semibold">Cuándo:</span> {e.cuandoUsar}
            </p>
          </div>
        </div>

        <div className="p-3 border-t border-neutral-100">
          <p className="text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5 truncate">
            {e.tagline}
          </p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-mono text-neutral-400 truncate">{e.tipografia}</p>
            <span className="text-[11px] text-neutral-400 group-hover:text-neutral-800 transition-colors shrink-0">
              Ver →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
