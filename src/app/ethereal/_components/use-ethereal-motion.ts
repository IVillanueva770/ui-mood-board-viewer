"use client";

import { useRef } from "react";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from "motion/react";

/**
 * Firma de motion de ethereal: lento y atmosférico, lo opuesto a snappy.
 * - reveal:     scroll-reveal lento (fade-up con easing expo, larguísimo)
 * - maskReveal: type mask reveal — clip-path wipe descendente sobre el texto
 * - drift:      entrada lateral lenta para listas editoriales
 * Todo degrada a fade simple con `prefers-reduced-motion`.
 */

const EASE_ETHEREAL = [0.16, 1, 0.3, 1] as const; // expo-out, settle largo
const EASE_DRIFT = [0.22, 0.61, 0.36, 1] as const;

export function useEtherealMotion() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.3, delay: 0 },
        } as const)
      : ({
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 1.05, delay, ease: EASE_ETHEREAL },
        } as const);

  const maskReveal = (delay = 0) =>
    reduce
      ? ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.3 },
        } as const)
      : ({
          initial: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 },
          whileInView: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 1.15, delay, ease: EASE_ETHEREAL },
        } as const);

  const drift = (delay = 0) =>
    reduce
      ? ({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.3 },
        } as const)
      : ({
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.9, delay, ease: EASE_DRIFT },
        } as const);

  return { reduce, reveal, maskReveal, drift };
}

/**
 * Cursor-aware: el elemento reacciona a la posición del mouse con un
 * desplazamiento sutil y elástico (spring). Sin mouse / reduced-motion =
 * estático, no rompe.
 */
export function useCursorTilt(strength = 12) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.6 });
  const x = useTransform(sx, [-0.5, 0.5], [-strength, strength]);
  const y = useTransform(sy, [-0.5, 0.5], [-strength, strength]);

  function onMouseMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const style: MotionStyle = reduce ? {} : { x, y };
  return { ref, onMouseMove, onMouseLeave, style };
}

/**
 * Parallax leve atado al scroll de la ventana. Devuelve un `y` en píxeles
 * para mover un elemento a contramano del scroll. Reduced-motion = 0.
 */
export function useScrollParallax(distance = 60) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : -distance]);
  return reduce ? 0 : y;
}
