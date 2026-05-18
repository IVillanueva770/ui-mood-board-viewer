"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { sportData, palette } from "./_data";
import { Hero } from "./_components/Hero";
import { Programas } from "./_components/Programas";
import { Resultados } from "./_components/Resultados";
import { CtaFinal } from "./_components/CtaFinal";
import { WorkoutHoy } from "./_components/WorkoutHoy";
import { Progreso } from "./_components/Progreso";
import { Programa } from "./_components/Programa";
import { Ranking } from "./_components/Ranking";

/**
 * sport-dinamico — composición delgada (Nike Training / Strava).
 *
 * Externo (LANDING) = landing deportiva agresiva. Interno (LA APP) = la app
 * fitness con sus 4 piezas VISIBLES apiladas en scroll. Se eliminó el
 * `InternalNav` que escondía 3 de 4 vistas tras un sidebar (regla dura del
 * viewer: nada de switcher que desmonta). Datos en `_data.ts` → swap a backend
 * = tocar ese archivo. Firma de motion: slide-in agresivo + scale-punch +
 * counter sprint + wipe diagonal (`use-sport-motion` / `Counter`).
 */
export default function SportDinamicoPage() {
  const e = getEstilo("sport-dinamico")!;
  const d = sportData;

  const landing = (
    <div className="space-y-14 sm:space-y-20 pt-2 pb-6">
      <Hero stats={d.heroStats} />
      <Programas programas={d.programas} />
      <Resultados resultados={d.resultados} testimonios={d.testimonios} />
      <CtaFinal />
    </div>
  );

  const app = (
    <div className="space-y-12 pt-2 pb-6">
      <WorkoutHoy w={d.workout} />
      <Progreso prs={d.prs} racha={d.racha} volumen={d.volumen} />
      <Programa semanas={d.planSemanas} progreso={d.planProgreso} />
      <Ranking atletas={d.ranking} />
    </div>
  );

  return (
    <div style={{ backgroundColor: palette.bg, color: palette.ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#222222" navColor={palette.muted} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
        <StyleTabs
          variant="sport-block"
          accent={palette.orange}
          textActive={palette.bg}
          textInactive={palette.ink}
          borderColor={palette.border}
          tabsClassName="mb-8"
          tabs={[
            { id: "landing", label: "Landing", content: landing },
            { id: "app", label: "La app", content: app },
          ]}
        />

        <DividerReveal
          variant="slide-in"
          lineColor={palette.border}
          textColor={palette.orange}
          className="mt-14 mb-8"
          textClassName="font-bebas text-sm uppercase tracking-[0.3em]"
        >
          ↓ NO PIENSES. EMPEZÁ.
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor={palette.muted}
          borderColor={palette.border}
          headingClass="font-bebas tracking-wide"
        />
      </main>
    </div>
  );
}
