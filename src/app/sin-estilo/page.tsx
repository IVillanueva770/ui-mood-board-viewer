"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { StyleTabs } from "@/components/style-tabs";
import { sinEstiloData, palette } from "./_data";
import { Hero } from "./_components/Hero";
import { FaltaDecidir } from "./_components/FaltaDecidir";
import { StatsPlaceholder } from "./_components/StatsPlaceholder";
import { CardsPlaceholder } from "./_components/CardsPlaceholder";
import { WorkspaceBar } from "./_components/WorkspaceBar";
import { ItemsTable } from "./_components/ItemsTable";
import { GenteTable } from "./_components/GenteTable";
import { NotasList } from "./_components/NotasList";
import { AjustesList } from "./_components/AjustesList";
import { PlaceholderDivider } from "./_components/PlaceholderDivider";

/**
 * sin-estilo — CONTROL NEGATIVO del viewer. Composición delgada.
 *
 * Mismo ESQUELETO que las demás (chrome + 2 tabs externo/interno + hero + 3-4
 * piezas por lado + divider + footer) para que se vea la comparación "misma
 * app con estilo vs sin estilo" — pero todo crudo: Roboto Mono única,
 * #fff/#000/#666, border-radius 0, sin sombra/gradiente/acento, y CERO motion.
 *
 * Decisiones de motion (el control negativo prohíbe animación):
 * - `InternalNav` ELIMINADO. Era un switcher (montaba 1 sub-vista, desmontaba
 *   el resto) → prohibido por la rúbrica. El interno ahora apila las 4 piezas
 *   en scroll; la nav es sólo anclas in-page (WorkspaceBar).
 * - `DividerReveal` reemplazado por `PlaceholderDivider` estático: era motion
 *   decorativo y la composición lo controla, así que se quita.
 * - `StyleHeader/StyleFooter/StyleTabs` se mantienen: son el esqueleto
 *   compartido inmutable (no se tocan componentes shared) — su micro-fade de
 *   tab es lo único no removible y es justamente lo que hace comparable la
 *   página contra el resto de la tanda.
 *
 * Datos genéricos a propósito en `_data.ts` (placeholder, swap a backend =
 * tocar ese archivo). Piezas en `_components/` con props tipadas.
 */
export default function SinEstiloPage() {
  const e = getEstilo("sin-estilo")!;
  const d = sinEstiloData;

  const landing = (
    <div className="space-y-12 pt-2 pb-6">
      <Hero />
      <FaltaDecidir items={d.faltaDecidir} />
      <StatsPlaceholder metricas={d.metricas} />
      <CardsPlaceholder cards={d.cards} />
    </div>
  );

  const workspace = (
    <div className="space-y-12 pt-2 pb-6">
      <WorkspaceBar />
      <ItemsTable items={d.items} />
      <GenteTable gente={d.gente} />
      <NotasList notas={d.notas} />
      <AjustesList ajustes={d.ajustes} />
    </div>
  );

  return (
    <div
      style={{ backgroundColor: palette.bg, color: palette.ink, minHeight: "100vh" }}
      className="font-roboto-mono"
    >
      <StyleHeader estilo={e} borderColor={palette.ink} navColor={palette.muted} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10">
        <StyleTabs
          variant="ascii-bracket"
          accent={palette.ink}
          textActive="#ffffff"
          textInactive={palette.ink}
          borderColor={palette.ink}
          tabsClassName="mb-10"
          tabs={[
            { id: "landing", label: "Landing", content: landing },
            { id: "app", label: "App", content: workspace },
          ]}
        />

        <div className="mt-12 mb-10">
          <PlaceholderDivider />
        </div>

        <StyleFooter
          estilo={e}
          textColor={palette.muted}
          borderColor={palette.ink}
          monoFont="var(--font-roboto-mono)"
        />
      </main>
    </div>
  );
}
