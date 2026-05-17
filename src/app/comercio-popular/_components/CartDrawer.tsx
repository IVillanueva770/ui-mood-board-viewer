"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  palette,
  fmt,
  ENVIO_GRATIS_DESDE,
  PAGOS,
  type Pago,
  type Producto,
} from "../_data";
import { type CheckoutStep } from "./use-store-cart";

type Props = {
  open: boolean;
  onClose: () => void;
  step: CheckoutStep;
  setStep: (s: CheckoutStep) => void;
  items: Producto[];
  cart: Record<string, number>;
  setQty: (id: string, q: number) => void;
  subtotal: number;
  envio: number;
  total: number;
  count: number;
  pago: Pago;
  setPago: (p: Pago) => void;
  cerrarPedido: () => void;
};

/** Pieza externa clave: carrito + checkout de 1 paso + confirmación. */
export function CartDrawer(props: Props) {
  const { open, onClose, step, setStep, items, cart, setQty } = props;
  const { subtotal, envio, total, count, pago, setPago, cerrarPedido } = props;
  const { verde, verdeSoft, text, muted, border, surface } = palette;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55]"
            style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-[56] flex flex-col"
            style={{ backgroundColor: "#ffffff", borderLeft: `1px solid ${border}` }}
          >
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{ borderBottom: `1px solid ${border}` }}
            >
              <p className="font-semibold text-lg">
                {step === "cart" && "Tu carrito"}
                {step === "checkout" && "Finalizar compra"}
                {step === "done" && "¡Listo!"}
              </p>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                style={{ color: muted }}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {step === "cart" && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-16">
                      <div className="text-5xl mb-3">🛒</div>
                      <p className="font-medium">Tu carrito está vacío</p>
                      <p className="text-sm mt-1" style={{ color: muted }}>
                        Agregá productos del catálogo y aparecen acá.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {items.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center gap-3 rounded-xl p-3"
                          style={{ border: `1px solid ${border}` }}
                        >
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                            style={{ background: p.gradient }}
                          >
                            {p.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium leading-snug truncate">{p.nombre}</p>
                            <p className="text-sm font-semibold">{fmt(p.precio * cart[p.id])}</p>
                          </div>
                          <div
                            className="flex items-center gap-2 rounded-lg px-1.5 py-1"
                            style={{ border: `1px solid ${border}` }}
                          >
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => setQty(p.id, cart[p.id] - 1)}
                              className="w-6 h-6 rounded-md text-base leading-none font-semibold"
                              style={{ color: verde }}
                              aria-label={`Quitar uno de ${p.nombre}`}
                            >
                              −
                            </motion.button>
                            <span className="text-sm font-semibold w-5 text-center tabular-nums">
                              {cart[p.id]}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => setQty(p.id, cart[p.id] + 1)}
                              className="w-6 h-6 rounded-md text-base leading-none font-semibold"
                              style={{ color: verde }}
                              aria-label={`Agregar uno de ${p.nombre}`}
                            >
                              +
                            </motion.button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="px-5 py-4 space-y-2 shrink-0" style={{ borderTop: `1px solid ${border}` }}>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: muted }}>Subtotal</span>
                    <span className="font-medium">{fmt(subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: muted }}>Envío</span>
                    <span className="font-medium">
                      {envio === 0 ? (
                        <span style={{ color: verde }}>{subtotal === 0 ? "—" : "Gratis"}</span>
                      ) : (
                        fmt(envio)
                      )}
                    </span>
                  </div>
                  {subtotal > 0 && subtotal < ENVIO_GRATIS_DESDE && (
                    <p className="text-xs" style={{ color: muted }}>
                      Te faltan {fmt(ENVIO_GRATIS_DESDE - subtotal)} para el envío gratis.
                    </p>
                  )}
                  <div
                    className="flex items-center justify-between text-base font-semibold pt-2"
                    style={{ borderTop: `1px dashed ${border}` }}
                  >
                    <span>Total</span>
                    <span>{fmt(total)}</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: items.length ? 0.98 : 1 }}
                    disabled={items.length === 0}
                    onClick={() => setStep("checkout")}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white mt-1 disabled:opacity-40"
                    style={{ backgroundColor: verde }}
                  >
                    Finalizar compra
                  </motion.button>
                </div>
              </>
            )}

            {step === "checkout" && (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                  <button
                    onClick={() => setStep("cart")}
                    className="text-xs font-semibold flex items-center gap-1"
                    style={{ color: verde }}
                  >
                    ← Volver al carrito
                  </button>

                  <div className="space-y-3">
                    {[
                      { l: "Nombre y apellido", ph: "Ej. Roxana Blanco" },
                      { l: "Dirección de entrega", ph: "Calle, número, piso/depto" },
                      { l: "Teléfono", ph: "11 5841-2204" },
                    ].map((f) => (
                      <label key={f.l} className="block">
                        <span className="text-xs font-semibold" style={{ color: muted }}>{f.l}</span>
                        <input
                          placeholder={f.ph}
                          className="mt-1 w-full rounded-lg px-3 py-2.5 text-sm outline-none"
                          style={{ border: `1px solid ${border}`, backgroundColor: surface }}
                        />
                      </label>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold mb-2" style={{ color: muted }}>Medio de pago</p>
                    <div className="grid grid-cols-3 gap-2">
                      {PAGOS.map((m) => {
                        const a = pago === m;
                        return (
                          <motion.button
                            key={m}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setPago(m)}
                            className="py-2.5 rounded-lg text-xs font-semibold"
                            style={{
                              backgroundColor: a ? verdeSoft : "#ffffff",
                              color: a ? verde : text,
                              border: a ? `1px solid ${verde}` : `1px solid ${border}`,
                            }}
                          >
                            {m}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 space-y-2 shrink-0" style={{ borderTop: `1px solid ${border}` }}>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: muted }}>
                      {count} {count === 1 ? "producto" : "productos"} · envío{" "}
                      {envio === 0 ? "gratis" : fmt(envio)}
                    </span>
                    <span className="text-base font-semibold">{fmt(total)}</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep("done")}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ backgroundColor: verde }}
                  >
                    Confirmar pedido
                  </motion.button>
                </div>
              </>
            )}

            {step === "done" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 360, damping: 18 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
                  style={{ backgroundColor: verdeSoft }}
                >
                  ✓
                </motion.div>
                <p className="text-lg font-semibold">¡Pedido confirmado!</p>
                <p className="text-sm mt-2" style={{ color: muted }}>
                  Te lo llevamos a domicilio en 30 a 90 minutos. Pagás con{" "}
                  <span style={{ color: verde, fontWeight: 600 }}>{pago}</span> al recibirlo.
                </p>
                <p className="text-sm mt-3 font-semibold">Total: {fmt(total)}</p>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={cerrarPedido}
                  className="mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ backgroundColor: surface, color: text, border: `1px solid ${border}` }}
                >
                  Volver a la tienda
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
