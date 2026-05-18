"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { stripeData, tokens } from "./_data";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { IntegrationCode } from "./_components/IntegrationCode";
import { EnterpriseTrust } from "./_components/EnterpriseTrust";
import { CtaBand } from "./_components/CtaBand";
import { ConsoleHeader } from "./_components/ConsoleHeader";
import { BalanceOverview } from "./_components/BalanceOverview";
import { TransactionsTable } from "./_components/TransactionsTable";
import { PaymentDetail } from "./_components/PaymentDetail";
import { DevelopersPanel } from "./_components/DevelopersPanel";

/**
 * stripe-real — composición delgada. Tokens refero EXACTOS (Deep Violet
 * #533afd, Midnight Ink #061b31, bg #f6f9fc) en `_data.ts`; swap a backend =
 * tocar ese archivo. Externo = landing de infra fintech precisa (hero + 4).
 * Interno = command center financiero con las 4 piezas VISIBLES en scroll
 * (benchmark dimes: nada de InternalNav escondiendo módulos en un viewer).
 * Firma de motion: restraint — elevación sutil + focus deep-violet + draw-in
 * preciso del gráfico, sin count-up festivo (lo diferencia de stripe-dashboard).
 */
export default function StripeRealPage() {
  const e = getEstilo("stripe-real")!;
  const d = stripeData;

  const marketing = (
    <div className="space-y-16 sm:space-y-24 pt-4 pb-6">
      <Hero partners={d.partners} />
      <Features features={d.features} />
      <IntegrationCode samples={d.codeSamples} />
      <EnterpriseTrust compliance={d.compliance} stats={d.trustStats} />
      <CtaBand />
    </div>
  );

  const consoleTab = (
    <div className="space-y-10 pt-2 pb-6">
      <ConsoleHeader />
      <BalanceOverview
        metrics={d.metrics}
        netVolume={d.netVolume}
        netVolumeTotal={d.netVolumeTotal}
        payouts={d.payouts}
      />
      <TransactionsTable txns={d.txns} filters={d.txnFilters} />
      <PaymentDetail pago={d.paymentDetail} />
      <DevelopersPanel apiKeys={d.apiKeys} webhooks={d.webhooks} logs={d.logs} />
    </div>
  );

  return (
    <div style={{ backgroundColor: tokens.bg, color: tokens.ink, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={tokens.border} navColor={tokens.slate} />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="tech-pill"
          accent={tokens.violet}
          textActive="#ffffff"
          textInactive={tokens.slate}
          bgContainer={tokens.surface}
          borderColor={tokens.border}
          tabsClassName="mb-10"
          tabs={[
            { id: "marketing", label: "Marketing", content: marketing },
            { id: "console", label: "Console", content: consoleTab },
          ]}
        />

        <DividerReveal
          variant="tech-line-draw"
          lineColor={tokens.border}
          textColor={tokens.violet}
          className="mt-16 mb-10"
          textClassName="text-xs uppercase tracking-[0.25em] font-semibold"
        >
          Built on infrastructure
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor={tokens.slate}
          borderColor={tokens.border}
          monoFont="var(--font-roboto-mono)"
        />
      </main>
    </div>
  );
}
