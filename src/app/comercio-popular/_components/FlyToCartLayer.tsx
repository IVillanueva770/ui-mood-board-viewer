"use client";

import { type RefObject } from "react";
import { motion, AnimatePresence } from "motion/react";
import { palette, fmt } from "../_data";
import { type Flyer } from "./use-store-cart";

type Props = {
  flyers: Flyer[];
  onLand: (key: number, prodId: string) => void;
  count: number;
  total: number;
  cartBtnRef: RefObject<HTMLButtonElement | null>;
  onOpenCart: () => void;
};

/** Firma de motion del estilo: el producto vuela en arco hasta el carrito. */
export function FlyToCartLayer({ flyers, onLand, count, total, cartBtnRef, onOpenCart }: Props) {
  const { verde } = palette;

  return (
    <>
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
              onAnimationComplete={() => onLand(fl.key, fl.prodId)}
              style={{ position: "fixed", left: 0, top: 0, fontSize: "30px", lineHeight: 1 }}
            >
              {fl.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        ref={cartBtnRef}
        onClick={onOpenCart}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-white"
        style={{ backgroundColor: verde, boxShadow: "0 8px 24px rgba(22,163,74,0.35)" }}
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
    </>
  );
}
