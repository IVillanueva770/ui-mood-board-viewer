"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { calmData, palette } from "./_data";
import { Hero } from "./_components/Hero";
import { Programas } from "./_components/Programas";
import { ComoFunciona } from "./_components/ComoFunciona";
import { Testimonios } from "./_components/Testimonios";
import { Planes } from "./_components/Planes";
import { TodayHeader } from "./_components/TodayHeader";
import { TodaySection } from "./_components/TodaySection";
import { MeditationLibrary } from "./_components/MeditationLibrary";
import { SleepStories } from "./_components/SleepStories";
import { MoodJournal } from "./_components/MoodJournal";
import { Settings } from "./_components/Settings";

/**
 * calm — composición delgada. Wellness premium minimal.
 *
 * Externo (Library) = landing serena: serif Cormorant, mucho aire, orbe que
 * respira. Interno (Today) = la app calma con las 5 piezas VISIBLES apiladas
 * en scroll — se eliminó el `InternalNav` que escondía las sub-vistas tras un
 * sidebar (1 pieza para un viewer). La nav del interno ahora son anclas
 * in-page (jumplinks a secciones todas montadas). Datos en `_data.ts`; swap a
 * backend = tocar ese archivo. Firma de motion: fades lentos + breathing
 * scale (`useCalmMotion`), easings larguísimos, cero bounce.
 */
export default function CalmPage() {
  const e = getEstilo("calm")!;
  const d = calmData;
  const { bg, ink, sage, muted, clay, line } = palette;

  const library = (
    <div className="space-y-24 sm:space-y-36 pt-2 pb-10">
      <Hero />
      <Programas programas={d.programas} />
      <ComoFunciona pasos={d.pasos} />
      <Testimonios testimonios={d.testimonios} />
      <Planes planes={d.planes} />
    </div>
  );

  const today = (
    <div className="scroll-smooth space-y-20 sm:space-y-28 pt-2 pb-10">
      <TodayHeader fecha={d.sesion.fecha} nombre={d.sesion.nombre} />
      <TodaySection sesion={d.sesion} moods={d.moods} />
      <MeditationLibrary categorias={d.meditaciones} />
      <SleepStories stories={d.sleep} />
      <MoodJournal entradas={d.mood} />
      <Settings grupos={d.settings} />
    </div>
  );

  return (
    <div style={{ backgroundColor: bg, color: ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={line} navColor={muted} />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <StyleTabs
          variant="editorial-underline"
          accent={sage}
          textActive={ink}
          textInactive={muted}
          tabsClassName="mb-12 sm:mb-16"
          textClassName="font-cormorant text-lg"
          tabs={[
            { id: "library", label: "Library", content: library },
            { id: "today", label: "Today", content: today },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor={line}
          textColor={sage}
          accentColor={clay}
          className="mt-20 mb-14"
          textClassName="font-cormorant italic text-lg"
        >
          —
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor={muted}
          borderColor={line}
          headingClass="font-cormorant italic text-base"
        />
      </main>
    </div>
  );
}
