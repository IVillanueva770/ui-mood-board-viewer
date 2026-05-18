"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { clinicoData, palette } from "./_data";
import { LandingHero } from "./_components/LandingHero";
import { Features } from "./_components/Features";
import { Pricing } from "./_components/Pricing";
import { ConfianzaPro } from "./_components/ConfianzaPro";
import { CtaFinal } from "./_components/CtaFinal";
import { AgendaDia } from "./_components/AgendaDia";
import { PacientesTabla } from "./_components/PacientesTabla";
import { Planes } from "./_components/Planes";
import { Reportes } from "./_components/Reportes";

/**
 * clinico-calmado — composición delgada.
 * Externo (Servicio) = landing de SaaS clínico profesional con pricing.
 * Interno (Workspace) = workspace del kine, piezas VISIBLES en scroll
 * (no sub-nav que las esconda). Datos desde `_data.ts`; swap a backend =
 * tocar `_data.ts`. Firma de motion: aireado/restraint + focus ring celeste.
 */
export default function ClinicoCalmadoPage() {
  const e = getEstilo("clinico-calmado")!;
  const { accent, muted, border, surface, card, text } = palette;
  const d = clinicoData;

  const servicio = (
    <div className="space-y-16 pt-6 pb-12">
      <LandingHero turnos={d.turnos} />
      <Features features={d.features} />
      <Pricing planes={d.planes} />
      <ConfianzaPro metricas={d.metricas} testimonios={d.testimonios} />
      <CtaFinal />
    </div>
  );

  const workspace = (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 pt-4 pb-12 space-y-14">
      <AgendaDia kpis={d.kpis} turnos={d.turnos} />
      <PacientesTabla pacientes={d.pacientes} />
      <Planes tratamientos={d.tratamientos} />
      <Reportes reporte={d.reporte} motivos={d.motivos} />
    </div>
  );

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent={accent}
          textActive="#ffffff"
          textInactive={muted}
          bgContainer={card}
          borderColor={border}
          tabsClassName="mb-10 flex justify-center"
          tabs={[
            { id: "servicio", label: "Servicio", content: servicio },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="soft-bounce"
          lineColor={border}
          textColor={accent}
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.22em] font-semibold"
        >
          Cuidado profesional, sin desorden
        </DividerReveal>

        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
