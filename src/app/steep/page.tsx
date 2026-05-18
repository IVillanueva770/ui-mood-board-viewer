"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { steepData, tokens } from "./_data";
import { Hero } from "./_components/Hero";
import { Capabilities } from "./_components/Capabilities";
import { DashboardShowcase } from "./_components/DashboardShowcase";
import { TrustBand } from "./_components/TrustBand";
import { WorkspaceBar } from "./_components/WorkspaceBar";
import { DashboardGrid } from "./_components/DashboardGrid";
import { QueryBuilder } from "./_components/QueryBuilder";
import { SavedReports } from "./_components/SavedReports";
import { MetricDetail } from "./_components/MetricDetail";

/**
 * steep — composición delgada. Tokens refero EXACTOS (white canvas #ffffff,
 * warm mist #fbe1d1, ink #17191c) en `_data.ts`; swap a backend = tocar ese
 * archivo. Externo = landing de BI con gravitas serif (hero + 3). Interno =
 * plataforma analytics con las 4 piezas VISIBLES apiladas en scroll —
 * benchmark dimes/stripe-real: cero switcher/sidebar escondiendo módulos en un
 * viewer. Firma de motion: draw-in de charts + reveal de serif con restraint +
 * hover mist cálido. Rigor con calidez (lo diferencia de stripe-dashboard).
 */
export default function SteepPage() {
  const e = getEstilo("steep")!;
  const d = steepData;

  const marketing = (
    <div className="space-y-20 sm:space-y-28 pt-4 pb-6">
      <Hero />
      <Capabilities capabilities={d.capabilities} />
      <DashboardShowcase showcase={d.showcase} />
      <TrustBand trustStats={d.trustStats} quote={d.quote} />
    </div>
  );

  const workspace = (
    <div className="space-y-16 pt-2 pb-6">
      <WorkspaceBar />
      <DashboardGrid kpis={d.kpis} rangos={d.rangos} segmentos={d.segmentos} />
      <QueryBuilder metrics={d.queryMetrics} dims={d.queryDims} result={d.queryResult} />
      <SavedReports reports={d.reports} />
      <MetricDetail drill={d.drill} />
    </div>
  );

  return (
    <div style={{ backgroundColor: tokens.canvas, color: tokens.ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={tokens.border} navColor={tokens.slate} />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <StyleTabs
          variant="editorial-underline"
          accent={tokens.terracotta}
          textActive={tokens.ink}
          textInactive={tokens.slate}
          tabsClassName="mb-12 sm:mb-16"
          textClassName="font-cormorant text-lg"
          tabs={[
            { id: "marketing", label: "Marketing", content: marketing },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor={tokens.border}
          textColor={tokens.terracotta}
          accentColor={tokens.mist}
          className="mt-20 mb-14"
          textClassName="font-cormorant italic text-base"
        >
          end of report
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor={tokens.slate}
          borderColor={tokens.border}
          headingClass="font-cormorant italic text-base"
        />
      </main>
    </div>
  );
}
