"use client";

import { useRef, useState, type MouseEvent } from "react";
import {
  ENVIO,
  ENVIO_GRATIS_DESDE,
  PAGOS,
  type Pago,
  type Producto,
} from "../_data";

export type Flyer = {
  key: number;
  emoji: string;
  prodId: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
};

export type CheckoutStep = "cart" | "checkout" | "done";

/**
 * Núcleo del storefront: carrito, totales derivados, fly-to-cart y
 * pasos del checkout. Una responsabilidad: el estado de compra.
 */
export function useStoreCart(productos: Producto[]) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState<CheckoutStep>("cart");
  const [pago, setPago] = useState<Pago>(PAGOS[0]);
  const [flyers, setFlyers] = useState<Flyer[]>([]);
  const cartBtnRef = useRef<HTMLButtonElement>(null);
  const flyId = useRef(0);

  const itemsCarrito = productos.filter((p) => cart[p.id]);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = itemsCarrito.reduce((s, p) => s + p.precio * cart[p.id], 0);
  const envio = subtotal === 0 || subtotal >= ENVIO_GRATIS_DESDE ? 0 : ENVIO;
  const total = subtotal + envio;

  const setQty = (id: string, q: number) =>
    setCart((c) => {
      const n = { ...c };
      if (q <= 0) delete n[id];
      else n[id] = q;
      return n;
    });

  const flyToCart = (prod: Producto, ev: MouseEvent<HTMLButtonElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    const cr = cartBtnRef.current?.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const tx = cr ? cr.left + cr.width / 2 : window.innerWidth - 48;
    const ty = cr ? cr.top + cr.height / 2 : window.innerHeight - 48;
    const key = ++flyId.current;
    setFlyers((f) => [...f, { key, emoji: prod.emoji, prodId: prod.id, x, y, dx: tx - x, dy: ty - y }]);
  };

  const landFlyer = (key: number, prodId: string) => {
    setFlyers((f) => f.filter((fl) => fl.key !== key));
    setCart((c) => ({ ...c, [prodId]: (c[prodId] || 0) + 1 }));
  };

  const cerrarPedido = () => {
    setCart({});
    setCartOpen(false);
    setStep("cart");
  };

  return {
    cart, setQty,
    cartOpen, setCartOpen,
    step, setStep,
    pago, setPago,
    flyers, flyToCart, landFlyer,
    cartBtnRef,
    itemsCarrito, count, subtotal, envio, total,
    cerrarPedido,
  };
}
