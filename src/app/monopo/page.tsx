"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { StyleTabs } from "@/components/style-tabs";
import { DividerReveal } from "@/components/divider-reveal";
import { frost, monopoData } from "./_data";
import { AtmosphericBg } from "./_components/AtmosphericBg";
import { Hero } from "./_components/Hero";
import { FeaturedWork } from "./_components/FeaturedWork";
import { WorkGrid } from "./_components/WorkGrid";
import { Capabilities } from "./_components/Capabilities";
import { ContactBand } from "./_components/ContactBand";
import { WorkspaceHeader } from "./_components/WorkspaceHeader";
import { ProjectsTable } from "./_components/ProjectsTable";
import { ClientsGrid } from "./_components/ClientsGrid";
import { InvoicesPanel } from "./_components/InvoicesPanel";
import { TeamPanel } from "./_components/TeamPanel";

/**
 * monopo — composición delgada (estilo refero, atmosférico premium).
 *
 * Externo (Work) = sitio de estudio: hero + featured + grilla + capabilities
 * + band CTA. Interno (Studio) = workspace con las piezas VISIBLES en scroll
 * (se eliminó el `InternalNav` que escondía 5 sub-vistas = 1 pieza oculta para
 * un viewer; mismo criterio que el benchmark dimes). Datos/tokens refero en
 * `_data.ts` → swap a backend = tocar ese archivo. Firma: shifting gradient
 * vivo (`AtmosphericBg`, transforms) + frosted shimmer (`FrostSweep`/divider
 * glass-shimmer) + ghost sweep + radius 75.024px.
 */
export default function MonopoPage() {
  const e = getEstilo("monopo")!;
  const d = monopoData;

  const work = (
    <div className="pt-2 pb-8 space-y-28">
      <Hero />
      <FeaturedWork proyecto={d.featured} />
      <WorkGrid trabajos={d.trabajos} />
      <Capabilities capabilities={d.capabilities} />
      <ContactBand />
    </div>
  );

  const shimmer = (
    <DividerReveal
      variant="glass-shimmer"
      lineColor={frost.border}
      textColor={frost.textMute}
      accentColor="rgba(167,139,250,0.5)"
      className="my-16"
      textClassName="text-[10px] uppercase tracking-[0.4em]"
    >
      monopo · studio
    </DividerReveal>
  );

  const studio = (
    <div className="pt-2 pb-8">
      <WorkspaceHeader />
      <div className="mt-14">
        <ProjectsTable proyectos={d.proyectos} stats={d.studioStats} />
      </div>
      {shimmer}
      <ClientsGrid clientes={d.clientes} />
      {shimmer}
      <InvoicesPanel stats={d.invoiceStats} facturas={d.facturas} />
      {shimmer}
      <TeamPanel equipo={d.equipo} />
    </div>
  );

  return (
    <div style={{ color: frost.text, minHeight: "100vh", position: "relative" }} className="font-inter">
      <AtmosphericBg />

      <StyleHeader estilo={e} borderColor="rgba(255,255,255,0.1)" navColor="#6d6d6d" />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16 relative">
        <StyleTabs
          variant="glass-line"
          accent={frost.violet}
          textActive={frost.text}
          textInactive={frost.textFaint}
          borderColor="rgba(255,255,255,0.1)"
          tabsClassName="mb-12"
          tabs={[
            { id: "work", label: "Work", content: work },
            { id: "studio", label: "Studio", content: studio },
          ]}
        />

        <div className="mt-20">
          <StyleFooter estilo={e} textColor={frost.textSoft} borderColor="rgba(255,255,255,0.1)" />
        </div>
      </main>
    </div>
  );
}
