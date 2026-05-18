"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { StyleTabs } from "@/components/style-tabs";
import { iosData, palette } from "./_data";
import { AppStoreHero } from "./_components/AppStoreHero";
import { OnboardingSlides } from "./_components/OnboardingSlides";
import { FeaturesList } from "./_components/FeaturesList";
import { RatingsReviews } from "./_components/RatingsReviews";
import { PhoneShell } from "./_components/PhoneShell";

/**
 * ios-native — composición delgada.
 * Externo = presentación tipo App Store (hero ficha + onboarding swipeable +
 * features lista iOS + ratings/reseñas) — NO landing web. Interno = la app con
 * TAB BAR ABAJO (firma iOS, se mantiene a propósito): cada tab es una pieza
 * funcional distinta + bottom-sheet slide-up. Firma de motion = springs
 * nativos. Swap a backend = tocar `_data.ts`.
 */
export default function IosNativePage() {
  const e = getEstilo("ios-native")!;
  const { bg, text, muted, sep, secondary } = palette;
  const d = iosData;

  const appStore = (
    <div className="space-y-10 pt-2 pb-6">
      <AppStoreHero app={d.app} />
      <OnboardingSlides slides={d.onboarding} />
      <FeaturesList groups={d.features} />
      <RatingsReviews
        ratingProm={d.app.ratingProm}
        reviewsTexto={d.app.reviewsTexto}
        reviews={d.reviews}
      />
    </div>
  );

  const laApp = <PhoneShell data={d} />;

  return (
    <div
      style={{ backgroundColor: bg, color: text, minHeight: "100vh" }}
      className="font-inter"
    >
      <StyleHeader estilo={e} borderColor={sep} navColor={muted} />

      <main className="max-w-3xl mx-auto px-5 py-12">
        <StyleTabs
          variant="soft-pill"
          accent={palette.accent}
          textActive="#ffffff"
          textInactive={secondary}
          bgContainer="rgba(255,255,255,0.7)"
          borderColor={sep}
          tabsClassName="mb-8 flex justify-center"
          tabs={[
            { id: "appstore", label: "App Store", content: appStore },
            { id: "app", label: "La app", content: laApp },
          ]}
        />

        <div className="mt-12">
          <StyleFooter estilo={e} textColor={secondary} borderColor={sep} />
        </div>
      </main>
    </div>
  );
}
