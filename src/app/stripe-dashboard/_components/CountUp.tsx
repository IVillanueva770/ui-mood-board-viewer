"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

type Props = {
  /** Valor final al que cuenta. */
  to: number;
  prefijo?: string;
  sufijo?: string;
  decimales?: number;
  duracion?: number;
  className?: string;
};

/**
 * Firma de motion de stripe-dashboard: el número cuenta de 0 al valor real
 * cuando entra en viewport (no al montar a ciegas — un dashboard premium
 * "se llena" cuando lo mirás). Formato es-AR (miles con punto).
 * Respeta `prefers-reduced-motion`: sin reduce, salta al valor final.
 */
export function CountUp({
  to,
  prefijo = "",
  sufijo = "",
  decimales = 0,
  duracion = 1.2,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValor(to);
      return;
    }
    const controls = animate(0, to, {
      duration: duracion,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValor(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce, duracion]);

  const texto = new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(valor);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefijo}
      {texto}
      {sufijo}
    </span>
  );
}
