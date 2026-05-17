"use client";

import { motion } from "motion/react";
import { type Comercio, type ItemConfianza, type Producto } from "../_data";
import { useStoreCart } from "./use-store-cart";
import { StoreHeader } from "./StoreHeader";
import { ProductCatalog } from "./ProductCatalog";
import { FlyToCartLayer } from "./FlyToCartLayer";
import { CartDrawer } from "./CartDrawer";
import { TrustBand } from "./TrustBand";

type Props = {
  comercio: Comercio;
  productos: Producto[];
  confianza: ItemConfianza[];
};

/**
 * Lado externo (Tienda): tienda online real. Compone las piezas y les
 * inyecta el estado de compra (hook `useStoreCart`). La capa fly-to-cart
 * y el drawer viven acá → se desmontan al pasar a Admin.
 */
export function StoreFront({ comercio, productos, confianza }: Props) {
  const c = useStoreCart(productos);

  return (
    <>
      <FlyToCartLayer
        flyers={c.flyers}
        onLand={c.landFlyer}
        count={c.count}
        total={c.total}
        cartBtnRef={c.cartBtnRef}
        onOpenCart={() => c.setCartOpen(true)}
      />

      <CartDrawer
        open={c.cartOpen}
        onClose={() => c.setCartOpen(false)}
        step={c.step}
        setStep={c.setStep}
        items={c.itemsCarrito}
        cart={c.cart}
        setQty={c.setQty}
        subtotal={c.subtotal}
        envio={c.envio}
        total={c.total}
        count={c.count}
        pago={c.pago}
        setPago={c.setPago}
        cerrarPedido={c.cerrarPedido}
      />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-2 sm:px-4 pt-6 pb-14"
      >
        <StoreHeader comercio={comercio} />
        <ProductCatalog productos={productos} cart={c.cart} setQty={c.setQty} onFly={c.flyToCart} />
        <TrustBand items={confianza} />
      </motion.section>
    </>
  );
}
