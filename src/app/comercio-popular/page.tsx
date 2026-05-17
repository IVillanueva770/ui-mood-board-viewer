"use client";

import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { comercioData, palette } from "./_data";
import { StoreFront } from "./_components/StoreFront";
import { MetricsPanel } from "./_components/MetricsPanel";
import { OrdersTable } from "./_components/OrdersTable";
import { ProductsTable } from "./_components/ProductsTable";
import { CustomersTable } from "./_components/CustomersTable";
import { StoreSettings } from "./_components/StoreSettings";

/**
 * comercio-popular — composición delgada.
 * Tienda = storefront real (catálogo + carrito + checkout, firma fly-to-cart).
 * Admin = panel scrolleable con TODOS los módulos a la vista (sin sub-nav
 * que los esconda). Datos desde `_data.ts`; piezas reciben todo por props.
 */
export default function ComercioPopularPage() {
  const e = getEstilo("comercio-popular")!;
  const { text, surface, muted, border, verde } = palette;
  const d = comercioData;

  const tienda = (
    <StoreFront comercio={d.comercio} productos={d.productos} confianza={d.confianza} />
  );

  const admin = (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 pt-4 pb-12 space-y-12">
      <MetricsPanel kpis={d.kpis} ventas={d.ventasSemana} total={d.ventasSemanaTotal} />
      <OrdersTable pedidos={d.pedidos} />
      <ProductsTable productos={d.productosAdmin} />
      <CustomersTable clientes={d.clientes} />
      <StoreSettings secciones={d.tienda} />
    </div>
  );

  return (
    <div style={{ backgroundColor: surface, color: text, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={border} navColor={muted} />
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs
          variant="soft-pill"
          accent={verde}
          bgContainer="#ffffff"
          textActive="#ffffff"
          textInactive={muted}
          borderColor={border}
          tabsClassName="mb-8"
          tabs={[
            { id: "tienda", label: "Tienda", content: tienda },
            { id: "admin", label: "Admin", content: admin },
          ]}
        />
        <DividerReveal variant="soft-bounce" lineColor={border} textColor={muted} className="my-10">
          Tu comercio, online
        </DividerReveal>
        <StyleFooter estilo={e} textColor={muted} borderColor={border} />
      </main>
    </div>
  );
}
