"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { linearData, tokens, mono } from "./_data";
import { HeroLanding } from "./_components/HeroLanding";
import { FeaturesGrid } from "./_components/FeaturesGrid";
import { ProductShowcase } from "./_components/ProductShowcase";
import { MetricsBand } from "./_components/MetricsBand";
import { CtaBand } from "./_components/CtaBand";
import { Workspace } from "./_components/Workspace";

/**
 * linear — composición delgada (refero exact · candidato a dashboard del Exo).
 * Externo (Marketing) = landing de dev-tool con restraint. Interno (Workspace)
 * = command center denso con piezas VISIBLES + ⌘K. Tokens reales en `_data.ts`;
 * swap a backend = tocar ese archivo. Firma: focus rings neon-lime keyboard-
 * first + dimming de siblings + ⌘K fade+scale + transiciones instantáneas.
 */
export default function LinearPage() {
  const e = getEstilo("linear")!;
  const t = tokens;
  const d = linearData;

  const marketing = (
    <div className="space-y-20 sm:space-y-28 pt-2 pb-8">
      <HeroLanding preview={d.issues.slice(0, 4)} />
      <FeaturesGrid features={d.features} />
      <ProductShowcase issues={d.issues.slice(0, 5)} />
      <MetricsBand stats={d.stats} logos={d.logos} />
      <CtaBand />
    </div>
  );

  return (
    <div style={{ backgroundColor: t.bg, color: t.fg, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={t.line} navColor={t.muted} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <StyleTabs
          variant="glass-line"
          accent={t.lime}
          textActive={t.fg}
          textInactive={t.faint}
          borderColor={t.line}
          tabsClassName="mb-10"
          tabs={[
            { id: "marketing", label: "Marketing", content: marketing },
            { id: "workspace", label: "Workspace", content: <Workspace data={d} /> },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor={t.line}
          textColor={t.muted}
          className="mt-16 mb-10"
          textClassName="text-[11px] uppercase tracking-[0.3em]"
          textStyle={{ fontFamily: mono }}
        >
          built for those who move fast
        </DividerReveal>

        <StyleFooter estilo={e} textColor={t.muted} borderColor={t.line} monoFont={mono} />
      </main>
    </div>
  );
}
