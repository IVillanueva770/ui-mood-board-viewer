"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

const VERDE = "#16a34a";
const VERDE_SOFT = "#dcfce7";
const TEXT = "#171717";
const MUTED = "#737373";
const BORDER = "#e5e5e5";
const SURFACE = "#f8f9fa";

const CATEGORIAS = ["Todo", "Almacén", "Bebidas", "Limpieza", "Lácteos", "Panadería"];

type Prod = { id: string; nombre: string; precio: number; emoji: string; grad: string; cat: string };

const PRODUCTOS: Prod[] = [
  { id: "yerba", nombre: "Yerba Playadito 1kg", precio: 3200, emoji: "🌿", cat: "Almacén", grad: "linear-gradient(135deg,#dcfce7,#bbf7d0)" },
  { id: "leche", nombre: "Leche La Serenísima 1L", precio: 1450, emoji: "🥛", cat: "Lácteos", grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)" },
  { id: "fideos", nombre: "Fideos Matarazzo 500g", precio: 890, emoji: "🍝", cat: "Almacén", grad: "linear-gradient(135deg,#fef3c7,#fde68a)" },
  { id: "aceite", nombre: "Aceite Cocinero 900ml", precio: 2700, emoji: "🫒", cat: "Almacén", grad: "linear-gradient(135deg,#fef3c7,#fcd34d)" },
  { id: "pan", nombre: "Pan francés 1kg", precio: 1200, emoji: "🍞", cat: "Panadería", grad: "linear-gradient(135deg,#fed7aa,#fdba74)" },
  { id: "coca", nombre: "Coca Cola 2.25L", precio: 2490, emoji: "🥤", cat: "Bebidas", grad: "linear-gradient(135deg,#fee2e2,#fecaca)" },
  { id: "manteca", nombre: "Manteca Sancor 200g", precio: 1380, emoji: "🧈", cat: "Lácteos", grad: "linear-gradient(135deg,#fef9c3,#fef08a)" },
  { id: "arroz", nombre: "Arroz Gallo 1kg", precio: 1650, emoji: "🍚", cat: "Almacén", grad: "linear-gradient(135deg,#f5f5f4,#e7e5e4)" },
  { id: "lavandina", nombre: "Lavandina Ayudín 1L", precio: 990, emoji: "🧴", cat: "Limpieza", grad: "linear-gradient(135deg,#cffafe,#a5f3fc)" },
];

const ENVIO = 650;
const ENVIO_GRATIS_DESDE = 15000;
const PAGOS = ["Mercado Pago", "Efectivo", "Transferencia"];

const fmt = (n: number) => "$" + n.toLocaleString("es-AR");

export default function ComercioPopularPage() {
  const e = getEstilo("comercio-popular")!;
  const [activeView, setActiveView] = useState("pedidos");
  const [activeCat, setActiveCat] = useState("Todo");

  /* ---- estado de tienda / carrito ---- */
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart");
  const [pago, setPago] = useState(PAGOS[0]);
  const [flyers, setFlyers] = useState<
    { key: number; emoji: string; prodId: string; x: number; y: number; dx: number; dy: number }[]
  >([]);
  const cartBtnRef = useRef<HTMLButtonElement>(null);
  const flyId = useRef(0);

  const productosVisibles =
    activeCat === "Todo" ? PRODUCTOS : PRODUCTOS.filter((p) => p.cat === activeCat);

  const itemsCarrito = PRODUCTOS.filter((p) => cart[p.id]);
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

  const flyToCart = (prod: Prod, ev: React.MouseEvent<HTMLButtonElement>) => {
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

  /* ============== TAB 1 — TIENDA PÚBLICA ============== */
  const tienda = (
    <>
      {/* Capa de "fly-to-cart" — firma de motion del estilo */}
      <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
        <AnimatePresence>
          {flyers.map((fl) => (
            <motion.div
              key={fl.key}
              initial={{ x: fl.x, y: fl.y, scale: 1, opacity: 1 }}
              animate={{
                x: [fl.x, fl.x + fl.dx * 0.5, fl.x + fl.dx],
                y: [fl.y, fl.y + fl.dy * 0.35 - 60, fl.y + fl.dy],
                scale: [1, 0.95, 0.3],
                opacity: [1, 1, 0.4],
              }}
              transition={{ duration: 0.6, ease: "easeInOut", times: [0, 0.55, 1] }}
              onAnimationComplete={() => landFlyer(fl.key, fl.prodId)}
              style={{ position: "fixed", left: 0, top: 0, fontSize: "30px", lineHeight: 1 }}
            >
              {fl.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Botón flotante del carrito */}
      <motion.button
        ref={cartBtnRef}
        onClick={() => setCartOpen(true)}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-white"
        style={{ backgroundColor: VERDE, boxShadow: "0 8px 24px rgba(22,163,74,0.35)" }}
      >
        <span className="text-lg">🛒</span>
        <span className="text-sm font-semibold">{count > 0 ? fmt(total) : "Carrito"}</span>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 520, damping: 16 }}
            className="absolute -top-1.5 -right-1.5 min-w-[22px] h-[22px] px-1 rounded-full text-[11px] font-bold flex items-center justify-center"
            style={{ backgroundColor: "#dc2626", color: "#fff" }}
          >
            {count}
          </motion.span>
        )}
      </motion.button>

      {/* Drawer del carrito + checkout */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
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
              style={{ backgroundColor: "#ffffff", borderLeft: `1px solid ${BORDER}` }}
            >
              <div
                className="flex items-center justify-between px-5 py-4 shrink-0"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <p className="font-semibold text-lg">
                  {step === "cart" && "Tu carrito"}
                  {step === "checkout" && "Finalizar compra"}
                  {step === "done" && "¡Listo!"}
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-lg"
                  style={{ color: MUTED }}
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>

              {/* ----- Paso carrito ----- */}
              {step === "cart" && (
                <>
                  <div className="flex-1 overflow-y-auto px-5 py-4">
                    {itemsCarrito.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-16">
                        <div className="text-5xl mb-3">🛒</div>
                        <p className="font-medium">Tu carrito está vacío</p>
                        <p className="text-sm mt-1" style={{ color: MUTED }}>
                          Agregá productos del catálogo y aparecen acá.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {itemsCarrito.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center gap-3 rounded-xl p-3"
                            style={{ border: `1px solid ${BORDER}` }}
                          >
                            <div
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                              style={{ background: p.grad }}
                            >
                              {p.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium leading-snug truncate">{p.nombre}</p>
                              <p className="text-sm font-semibold">{fmt(p.precio * cart[p.id])}</p>
                            </div>
                            <div
                              className="flex items-center gap-2 rounded-lg px-1.5 py-1"
                              style={{ border: `1px solid ${BORDER}` }}
                            >
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                onClick={() => setQty(p.id, cart[p.id] - 1)}
                                className="w-6 h-6 rounded-md text-base leading-none font-semibold"
                                style={{ color: VERDE }}
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
                                style={{ color: VERDE }}
                              >
                                +
                              </motion.button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="px-5 py-4 space-y-2 shrink-0" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: MUTED }}>Subtotal</span>
                      <span className="font-medium">{fmt(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: MUTED }}>Envío</span>
                      <span className="font-medium">
                        {envio === 0 ? (
                          <span style={{ color: VERDE }}>{subtotal === 0 ? "—" : "Gratis"}</span>
                        ) : (
                          fmt(envio)
                        )}
                      </span>
                    </div>
                    {subtotal > 0 && subtotal < ENVIO_GRATIS_DESDE && (
                      <p className="text-xs" style={{ color: MUTED }}>
                        Te faltan {fmt(ENVIO_GRATIS_DESDE - subtotal)} para el envío gratis.
                      </p>
                    )}
                    <div
                      className="flex items-center justify-between text-base font-semibold pt-2"
                      style={{ borderTop: `1px dashed ${BORDER}` }}
                    >
                      <span>Total</span>
                      <span>{fmt(total)}</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: itemsCarrito.length ? 0.98 : 1 }}
                      disabled={itemsCarrito.length === 0}
                      onClick={() => setStep("checkout")}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white mt-1 disabled:opacity-40"
                      style={{ backgroundColor: VERDE }}
                    >
                      Finalizar compra
                    </motion.button>
                  </div>
                </>
              )}

              {/* ----- Paso checkout (1 paso) ----- */}
              {step === "checkout" && (
                <>
                  <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                    <button
                      onClick={() => setStep("cart")}
                      className="text-xs font-semibold flex items-center gap-1"
                      style={{ color: VERDE }}
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
                          <span className="text-xs font-semibold" style={{ color: MUTED }}>
                            {f.l}
                          </span>
                          <input
                            placeholder={f.ph}
                            className="mt-1 w-full rounded-lg px-3 py-2.5 text-sm outline-none"
                            style={{ border: `1px solid ${BORDER}`, backgroundColor: SURFACE }}
                          />
                        </label>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-semibold mb-2" style={{ color: MUTED }}>
                        Medio de pago
                      </p>
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
                                backgroundColor: a ? VERDE_SOFT : "#ffffff",
                                color: a ? VERDE : TEXT,
                                border: a ? `1px solid ${VERDE}` : `1px solid ${BORDER}`,
                              }}
                            >
                              {m}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 py-4 space-y-2 shrink-0" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: MUTED }}>
                        {count} {count === 1 ? "producto" : "productos"} · envío{" "}
                        {envio === 0 ? "gratis" : fmt(envio)}
                      </span>
                      <span className="text-base font-semibold">{fmt(total)}</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("done")}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                      style={{ backgroundColor: VERDE }}
                    >
                      Confirmar pedido
                    </motion.button>
                  </div>
                </>
              )}

              {/* ----- Paso confirmado ----- */}
              {step === "done" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 18 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
                    style={{ backgroundColor: VERDE_SOFT }}
                  >
                    ✓
                  </motion.div>
                  <p className="text-lg font-semibold">¡Pedido confirmado!</p>
                  <p className="text-sm mt-2" style={{ color: MUTED }}>
                    Te lo llevamos a domicilio en 30 a 90 minutos. Pagás con{" "}
                    <span style={{ color: VERDE, fontWeight: 600 }}>{pago}</span> al recibirlo.
                  </p>
                  <p className="text-sm mt-3 font-semibold">Total: {fmt(total)}</p>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={cerrarPedido}
                    className="mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ backgroundColor: SURFACE, color: TEXT, border: `1px solid ${BORDER}` }}
                  >
                    Volver a la tienda
                  </motion.button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-2 sm:px-4 pt-6 pb-14"
      >
        <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ backgroundColor: VERDE_SOFT }}
            >
              🏪
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Almacén Don Pedro</h1>
              <p className="text-xs" style={{ color: MUTED }}>Av. Belgrano 1242 · Abierto hasta 21hs · Envíos al barrio</p>
            </div>
          </div>
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ backgroundColor: VERDE_SOFT, color: VERDE }}
          >
            ● Abierto ahora
          </span>
        </div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-white rounded-xl mt-5 mb-5 flex items-center gap-2 px-4 py-3"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <span style={{ color: MUTED }}>🔎</span>
          <input
            className="flex-1 bg-transparent outline-none text-sm"
            placeholder="Buscar productos… ej. yerba, leche, fideos"
            readOnly
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="text-sm font-semibold px-3 py-1 rounded-lg text-white"
            style={{ backgroundColor: VERDE }}
          >
            Buscar
          </motion.button>
        </motion.div>

        {/* Categorías chips — filtran el catálogo */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 -mx-2 px-2">
          {CATEGORIAS.map((cat) => {
            const a = activeCat === cat;
            return (
              <motion.button key={cat} onClick={() => setActiveCat(cat)} whileTap={{ scale: 0.96 }} className="text-sm px-4 py-2 rounded-full whitespace-nowrap shrink-0" style={{ backgroundColor: a ? VERDE : "#ffffff", color: a ? "#ffffff" : TEXT, border: a ? `1px solid ${VERDE}` : `1px solid ${BORDER}`, fontWeight: a ? 600 : 500 }}>{cat}</motion.button>
            );
          })}
        </div>

        {/* Productos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {productosVisibles.map((p, i) => {
            const q = cart[p.id] || 0;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.035 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl overflow-hidden flex flex-col"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <div className="aspect-square flex items-center justify-center text-4xl" style={{ background: p.grad }}>
                  {p.emoji}
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <p className="text-sm font-medium leading-snug mb-1 line-clamp-2">{p.nombre}</p>
                  <p className="text-lg font-semibold mb-2">{fmt(p.precio)}</p>
                  {q === 0 ? (
                    <motion.button
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(ev) => flyToCart(p, ev)}
                      className="mt-auto py-2 rounded-lg text-xs font-semibold text-white w-full"
                      style={{ backgroundColor: VERDE }}
                    >
                      + Agregar
                    </motion.button>
                  ) : (
                    <div
                      className="mt-auto flex items-center justify-between rounded-lg px-1.5 py-1"
                      style={{ border: `1px solid ${VERDE}` }}
                    >
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setQty(p.id, q - 1)}
                        className="w-7 h-7 rounded-md text-lg leading-none font-semibold"
                        style={{ color: VERDE }}
                      >
                        −
                      </motion.button>
                      <motion.span
                        key={q}
                        initial={{ scale: 0.6 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        className="text-sm font-bold tabular-nums"
                      >
                        {q}
                      </motion.span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setQty(p.id, q + 1)}
                        className="w-7 h-7 rounded-md text-lg leading-none font-semibold"
                        style={{ color: VERDE }}
                      >
                        +
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Band de confianza: envío + medios de pago */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10">
          {[
            { icon: "🚚", t: "Envío en el día", d: "Belgrano, Recoleta y Palermo · gratis desde $15.000" },
            { icon: "💳", t: "Medios de pago", d: "Mercado Pago, efectivo o transferencia" },
            { icon: "📲", t: "Atención directa", d: "Pedidos y consultas por WhatsApp al instante" },
          ].map((b) => (
            <motion.div
              key={b.t}
              whileHover={{ y: -2 }}
              className="bg-white rounded-xl p-4 flex items-start gap-3"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                style={{ backgroundColor: VERDE_SOFT }}
              >
                {b.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{b.t}</p>
                <p className="text-xs mt-0.5" style={{ color: MUTED }}>{b.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );

  /* ============== SUB-VISTAS ADMIN ============== */

  const PedidosView = (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Pedidos</h2>
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: VERDE_SOFT, color: VERDE }}
        >
          12 hoy · $86.450
        </span>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-2">Pedido</div>
          <div className="col-span-3">Cliente</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Pago</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-1 text-right">Hora</div>
        </div>
        {[
          { id: "#5217", cli: "Vecina del 4°B", total: "$4.320", pago: "Efectivo", estado: "Listo", hora: "14:42" },
          { id: "#5216", cli: "Don Eduardo", total: "$2.890", pago: "MP", estado: "Preparando", hora: "14:18" },
          { id: "#5215", cli: "Sra. González", total: "$8.150", pago: "Transferencia", estado: "Listo", hora: "13:50" },
          { id: "#5214", cli: "Joven del kiosco", total: "$1.450", pago: "MP", estado: "Entregado", hora: "13:32" },
          { id: "#5213", cli: "Roxana B.", total: "$12.780", pago: "Efectivo", estado: "Entregado", hora: "12:48" },
          { id: "#5212", cli: "Familia Pérez", total: "$3.620", pago: "MP", estado: "Entregado", hora: "11:55" },
          { id: "#5211", cli: "Marta del 2°", total: "$5.100", pago: "Transferencia", estado: "Entregado", hora: "10:30" },
        ].map((p, i, arr) => (
          <motion.div key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-2 font-mono text-xs font-semibold">{p.id}</div>
            <div className="col-span-3 truncate">{p.cli}</div>
            <div className="col-span-2 font-semibold">{p.total}</div>
            <div className="col-span-2 text-xs" style={{ color: MUTED }}>{p.pago}</div>
            <div className="col-span-2">
              <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-1 rounded-full" style={{ backgroundColor: p.estado === "Listo" ? "#fef3c7" : p.estado === "Preparando" ? "#fed7aa" : VERDE_SOFT, color: p.estado === "Listo" ? "#92400e" : p.estado === "Preparando" ? "#9a3412" : "#166534" }}>{p.estado}</span>
            </div>
            <div className="col-span-1 text-right text-xs" style={{ color: MUTED }}>{p.hora}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ProductosView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>
            114 productos · 8 categorías
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Productos</h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ backgroundColor: VERDE }}
        >
          + Nuevo producto
        </motion.button>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-1"></div>
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">Categoría</div>
          <div className="col-span-2">Precio</div>
          <div className="col-span-2">Stock</div>
          <div className="col-span-1 text-right">On</div>
        </div>
        {[
          { nombre: "Yerba Playadito 1kg", cat: "Almacén", precio: "$3.200", stock: 24, on: true, grad: "linear-gradient(135deg,#dcfce7,#bbf7d0)", emoji: "🌿" },
          { nombre: "Leche La Serenísima 1L", cat: "Lácteos", precio: "$1.450", stock: 36, on: true, grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)", emoji: "🥛" },
          { nombre: "Fideos Matarazzo 500g", cat: "Almacén", precio: "$890", stock: 4, on: true, grad: "linear-gradient(135deg,#fef3c7,#fde68a)", emoji: "🍝" },
          { nombre: "Pan francés 1kg", cat: "Panadería", precio: "$1.200", stock: 0, on: false, grad: "linear-gradient(135deg,#fed7aa,#fdba74)", emoji: "🍞" },
          { nombre: "Coca Cola 2.25L", cat: "Bebidas", precio: "$2.490", stock: 18, on: true, grad: "linear-gradient(135deg,#fee2e2,#fecaca)", emoji: "🥤" },
          { nombre: "Manteca Sancor 200g", cat: "Lácteos", precio: "$1.380", stock: 9, on: true, grad: "linear-gradient(135deg,#fef9c3,#fef08a)", emoji: "🧈" },
          { nombre: "Arroz Gallo 1kg", cat: "Almacén", precio: "$1.650", stock: 3, on: true, grad: "linear-gradient(135deg,#f5f5f4,#e7e5e4)", emoji: "🍚" },
        ].map((p, i, arr) => (
          <motion.div key={p.nombre} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.28, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-1">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: p.grad }}>{p.emoji}</div>
            </div>
            <div className="col-span-4 truncate font-medium">{p.nombre}</div>
            <div className="col-span-2 text-xs" style={{ color: MUTED }}>{p.cat}</div>
            <div className="col-span-2 font-semibold">{p.precio}</div>
            <div className="col-span-2">
              <span className="text-xs font-semibold" style={{ color: p.stock < 5 ? "#dc2626" : TEXT }}>
                {p.stock === 0 ? "Sin stock" : `${p.stock} u.`}
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <div className="w-9 h-5 rounded-full relative transition-colors" style={{ backgroundColor: p.on ? VERDE : "#d4d4d4" }}>
                <motion.div initial={false} animate={{ x: p.on ? 18 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 28 }} className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const ClientesView = (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold tracking-tight">Clientes</h2>
        <span className="text-xs" style={{ color: MUTED }}>418 registrados · 67 activos este mes</span>
      </div>

      <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        <div
          className="grid grid-cols-12 gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-semibold"
          style={{ backgroundColor: SURFACE, color: MUTED, borderBottom: `1px solid ${BORDER}` }}
        >
          <div className="col-span-4">Nombre</div>
          <div className="col-span-3">Teléfono</div>
          <div className="col-span-2 text-right">Compras</div>
          <div className="col-span-3 text-right">Total gastado</div>
        </div>
        {[
          { nombre: "Roxana Blanco", tel: "11 5841-2204", compras: 23, total: "$184.300", frec: true },
          { nombre: "Don Eduardo Pereyra", tel: "11 4429-7733", compras: 41, total: "$298.400", frec: true },
          { nombre: "Sra. González (4°B)", tel: "11 6234-1182", compras: 18, total: "$132.700", frec: true },
          { nombre: "Familia Pérez", tel: "11 3387-9921", compras: 9, total: "$74.220", frec: true },
          { nombre: "Marta del 2°A", tel: "11 5500-2310", compras: 7, total: "$48.900", frec: true },
          { nombre: "Vecina del 4°B", tel: "11 6177-3490", compras: 2, total: "$8.640", frec: false },
          { nombre: "Joven del kiosco", tel: "11 4711-0028", compras: 1, total: "$1.450", frec: false },
        ].map((c, i, arr) => (
          <motion.div key={c.nombre} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.28, delay: i * 0.04 }} whileHover={{ backgroundColor: SURFACE }} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center text-sm cursor-pointer" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
            <div className="col-span-4 flex items-center gap-2 min-w-0">
              <span className="truncate font-medium">{c.nombre}</span>
              {c.frec && <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: VERDE_SOFT, color: VERDE }}>Frecuente</span>}
            </div>
            <div className="col-span-3 text-xs font-mono" style={{ color: MUTED }}>{c.tel}</div>
            <div className="col-span-2 text-right">{c.compras}</div>
            <div className="col-span-3 text-right font-semibold">{c.total}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MiTiendaView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>Configuración del comercio</p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Mi tienda</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: "🏪", titulo: "Datos del comercio", campos: [["Nombre", "Almacén Don Pedro"], ["Dirección", "Av. Belgrano 1242, CABA"], ["CUIT", "20-12345678-9"]] },
          { icon: "💳", titulo: "Métodos de pago", campos: [["Efectivo", "Habilitado"], ["Mercado Pago", "Conectado ✓"], ["Transferencia", "CBU configurado"]] },
          { icon: "🚚", titulo: "Envíos", campos: [["Zona", "Belgrano, Recoleta, Palermo"], ["Costo base", "$650"], ["Tiempo", "30 a 90 minutos"]] },
          { icon: "🕐", titulo: "Horario", campos: [["Lun a Vie", "8:00 — 21:00"], ["Sábados", "8:00 — 14:00"], ["Domingos", "Cerrado"]] },
        ].map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl p-5"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: VERDE_SOFT }}>{s.icon}</div>
              <p className="font-semibold">{s.titulo}</p>
            </div>
            <div className="space-y-2 mb-4">
              {s.campos.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-xs" style={{ color: MUTED }}>{k}</span>
                  <span className="font-medium text-right truncate">{v}</span>
                </div>
              ))}
            </div>
            <motion.button whileHover={{ y: -1 }} className="text-xs font-semibold px-3 py-1.5 rounded-lg w-full" style={{ backgroundColor: SURFACE, color: TEXT, border: `1px solid ${BORDER}` }}>Editar</motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MetricasView = (
    <div>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VERDE }}>
          Resumen del comercio · Mayo 2026
        </p>
        <h2 className="text-2xl font-semibold tracking-tight mt-0.5">Métricas</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          { v: "$86.450", l: "Ventas hoy", trend: "+12%", up: true },
          { v: "12", l: "Pedidos hoy", trend: "+3", up: true },
          { v: "$7.204", l: "Ticket promedio", trend: "—", up: false },
          { v: "67", l: "Clientes únicos / mes", trend: "+8", up: true },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="bg-white rounded-xl p-4"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <p className="text-xl sm:text-2xl font-semibold tracking-tight">{s.v}</p>
            <div className="flex items-baseline justify-between mt-1.5">
              <p className="text-xs" style={{ color: MUTED }}>{s.l}</p>
              <span
                className="text-[10px] font-semibold"
                style={{ color: s.up ? VERDE : MUTED }}
              >
                {s.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-5" style={{ border: `1px solid ${BORDER}` }}>
        <div className="flex items-baseline justify-between mb-4">
          <p className="font-semibold">Ventas por día · esta semana</p>
          <span className="text-xs" style={{ color: MUTED }}>Total: $487.300</span>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {[
            { dia: "L", val: 65 }, { dia: "M", val: 78 }, { dia: "X", val: 52 },
            { dia: "J", val: 88 }, { dia: "V", val: 95 }, { dia: "S", val: 100 }, { dia: "D", val: 30 },
          ].map((b, i) => (
            <div key={b.dia} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div initial={{ height: 0 }} animate={{ height: `${b.val}%` }} transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.32, 0.72, 0, 1] }} className="w-full rounded-t-md" style={{ backgroundColor: b.val === 100 ? VERDE : VERDE_SOFT, minHeight: "8px" }} />
              <span className="text-xs font-mono" style={{ color: MUTED }}>{b.dia}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    pedidos: PedidosView,
    productos: ProductosView,
    clientes: ClientesView,
    "mi-tienda": MiTiendaView,
    metricas: MetricasView,
  };

  const workspace = (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER}`, minHeight: "640px" }}>
      <InternalNav
        variant="soft-sidebar"
        items={[
          { id: "pedidos", label: "Pedidos", icon: "📦", badge: 3 },
          { id: "productos", label: "Productos", icon: "🛍️" },
          { id: "clientes", label: "Clientes", icon: "👥" },
          { id: "mi-tienda", label: "Mi tienda", icon: "🏪" },
          { id: "metricas", label: "Métricas", icon: "📊" },
        ]}
        active={activeView} onChange={setActiveView} accent={VERDE} bgContainer="#ffffff" bgActive={VERDE_SOFT} textActive={TEXT} textInactive={MUTED} borderColor={BORDER} workspaceLabel="Don Pedro" workspaceInitial="P"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: SURFACE, color: TEXT, minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor={BORDER} navColor={MUTED} />
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <StyleTabs variant="soft-pill" accent={VERDE} bgContainer="#ffffff" textActive="#ffffff" textInactive={MUTED} borderColor={BORDER} tabsClassName="mb-8" tabs={[{ id: "tienda", label: "Tienda", content: tienda }, { id: "admin", label: "Admin", content: workspace }]} />
        <DividerReveal variant="soft-bounce" lineColor={BORDER} textColor={MUTED} className="my-10">Tu comercio, online</DividerReveal>

        <StyleFooter estilo={e} textColor={MUTED} borderColor={BORDER} />
      </main>
    </div>
  );
}
