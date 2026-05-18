"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { saasData, palette } from "./_data";
import { LandingHero } from "./_components/LandingHero";
import { LogosBand } from "./_components/LogosBand";
import { Features } from "./_components/Features";
import { Pricing } from "./_components/Pricing";
import { CtaBand } from "./_components/CtaBand";
import { SaasFooter } from "./_components/SaasFooter";
import { WorkspaceBar } from "./_components/WorkspaceBar";
import { MetricsOverview } from "./_components/MetricsOverview";
import { ClientesTabla } from "./_components/ClientesTabla";
import { EquipoBilling } from "./_components/EquipoBilling";

/**
 * modern-saas — composición delgada.
 * Externo = landing SaaS canónica (hero → logos → features → pricing → CTA →
 * footer). Interno = dashboard de la plataforma, scrolleable y con las piezas
 * VISIBLES (no un InternalNav que las esconde). Firma de motion = scroll-reveal
 * fade-up escalonado + gradient sheen + count-up. Swap a backend = `_data.ts`.
 */
export default function ModernSaasPage() {
  const e = getEstilo("modern-saas")!;
  const { muted, border, surface, card, text, accent } = palette;
  const d = saasData;

  const producto = (
    <div className="space-y-20 pt-2 pb-6">
      <LandingHero />
      <LogosBand logos={d.logos} proofStat={d.proofStat} />
      <Features features={d.features} />
      <Pricing planes={d.planes} />
      <CtaBand />
      <SaasFooter footer={d.footer} />
    </div>
  );

  const plataforma = (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: card,
        border: `1px solid ${border}`,
        boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 16px 40px -28px rgba(94,106,210,0.35)",
      }}
    >
      <WorkspaceBar workspace={d.workspace} />
      <MetricsOverview kpis={d.kpis} serie={d.mrrSerie} />
      <ClientesTabla clientes={d.clientes} />
      <EquipoBilling plan={d.workspace.plan} uso={d.uso} equipo={d.equipo} />
    </div>
  );

  return (
    <div
      style={{ backgroundColor: palette.bg, color: text, minHeight: "100vh", fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <StyleTabs
          variant="tech-pill"
          accent={accent}
          textActive="#ffffff"
          textInactive={muted}
          bgContainer={surface}
          borderColor={border}
          tabsClassName="mb-10"
          tabs={[
            { id: "producto", label: "Producto", content: producto },
            { id: "plataforma", label: "Plataforma", content: plataforma },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor={border}
          textColor={accent}
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.2em] font-semibold"
        >
          Construido con confianza
        </DividerReveal>

        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
