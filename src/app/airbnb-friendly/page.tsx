"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { airbnbData, palette } from "./_data";
import { SearchPanel } from "./_components/SearchPanel";
import { FeaturedListings } from "./_components/FeaturedListings";
import { HowItWorks } from "./_components/HowItWorks";
import { Testimonials } from "./_components/Testimonials";
import { TrustCta } from "./_components/TrustCta";
import { NextTrip } from "./_components/NextTrip";
import { TripsList } from "./_components/TripsList";
import { MessagesInbox } from "./_components/MessagesInbox";
import { WishlistGrid } from "./_components/WishlistGrid";
import { AccountSettings } from "./_components/AccountSettings";

/**
 * airbnb-friendly — composición delgada.
 * Cada lado = hero + piezas funcionales DISTINTAS y VISIBLES en scroll
 * (sin sub-nav que las esconda). Datos desde `_data.ts`; cada pieza recibe
 * lo suyo por props (swap a backend = tocar `_data.ts`).
 */
export default function AirbnbFriendlyPage() {
  const e = getEstilo("airbnb-friendly")!;
  const { text, surface, muted, border } = palette;
  const d = airbnbData;

  // Lado externo (Buscar): landing comercial del marketplace.
  const buscar = (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 pt-6 pb-14">
      <SearchPanel destinos={d.destinos} />
      <FeaturedListings listings={d.listings} />
      <DividerReveal variant="soft-bounce" lineColor={border} textColor={muted} className="my-16">
        Reservar es así de simple
      </DividerReveal>
      <HowItWorks pasos={d.pasos} />
      <Testimonials testimonios={d.testimonios} />
      <TrustCta items={d.confianza} />
    </div>
  );

  // Lado interno (Tu cuenta): home del huésped — todas las piezas a la vista.
  const cuenta = (
    <div className="max-w-3xl mx-auto px-2 sm:px-4 pt-4 pb-12 space-y-14">
      <NextTrip perfil={d.perfil} viaje={d.proximoViaje} />
      <TripsList viajes={d.viajes} />
      <MessagesInbox mensajes={d.mensajes} />
      <WishlistGrid items={d.wishlist} />
      <AccountSettings perfil={d.perfil} secciones={d.cuenta} />
    </div>
  );

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="soft-pill"
          accent={palette.rausch}
          bgContainer="#ffffff"
          textActive="#ffffff"
          textInactive={muted}
          borderColor={border}
          tabsClassName="mb-8"
          tabs={[
            { id: "buscar", label: "Buscar", content: buscar },
            { id: "cuenta", label: "Tu cuenta", content: cuenta },
          ]}
        />
        <DividerReveal variant="soft-bounce" lineColor={border} textColor={muted} className="my-10">
          Donde sea que vayas
        </DividerReveal>
        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
