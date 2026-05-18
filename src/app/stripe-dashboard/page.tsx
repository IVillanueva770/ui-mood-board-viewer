"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { stripeData, palette } from "./_data";
import { Hero } from "./_components/Hero";
import { Benefits } from "./_components/Benefits";
import { Pricing } from "./_components/Pricing";
import { TrustWall } from "./_components/TrustWall";
import { Workspace } from "./_components/Workspace";

/**
 * stripe-dashboard — composición delgada.
 * Externo = landing de servicio confiable (no oscuro técnico).
 * Interno = dashboard amigable para no-técnicos (Guadalupe / Fátima).
 * Firma de motion: count-up de KPIs + draw-in del gráfico (ver _components).
 * Datos desde `_data.ts`; swap a backend = tocar ese archivo.
 */
export default function StripeDashboardPage() {
  const e = getEstilo("stripe-dashboard")!;
  const d = stripeData;
  const { accent, text, muted, border, surface } = palette;

  // Externo: landing del servicio.
  const landing = (
    <div className="max-w-5xl mx-auto px-1 sm:px-2 pt-4 pb-10 space-y-20">
      <Hero />
      <Benefits beneficios={d.beneficios} />
      <DividerReveal
        variant="tech-line-draw"
        lineColor={border}
        textColor={accent}
        className="my-4"
      >
        Probalo sin tarjeta
      </DividerReveal>
      <Pricing planes={d.planes} />
      <TrustWall testimonios={d.testimonios} sellos={d.sellos} />
    </div>
  );

  // Interno: el dashboard.
  const workspace = (
    <div className="max-w-5xl mx-auto pt-4 pb-8">
      <Workspace data={d} />
    </div>
  );

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <StyleTabs
          variant="tech-pill"
          accent={accent}
          textActive="#ffffff"
          textInactive={muted}
          bgContainer="#ffffff"
          borderColor={border}
          tabsClassName="mb-8"
          tabs={[
            { id: "landing", label: "Servicio", content: landing },
            { id: "workspace", label: "Dashboard", content: workspace },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor={border}
          textColor={accent}
          className="mt-16 mb-10"
        >
          Hecho para que entiendas tu plata
        </DividerReveal>

        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
