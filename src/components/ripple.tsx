"use client";

import { useState, useRef, MouseEvent, ReactNode, CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";

type RippleEvent = { id: number; x: number; y: number; size: number };

type Props = {
  children: ReactNode;
  color?: string;
  className?: string;
  style?: CSSProperties;
  as?: "button" | "div" | "nav";
  onClick?: () => void;
  ariaLabel?: string;
  duration?: number;
};

/**
 * Material 3 ripple effect. Spawns a circle on pointerdown that expands
 * from the click point and fades. Container must be position:relative.
 * State layer (constant overlay on hover) is the caller's job.
 */
export function Ripple({
  children,
  color = "rgba(255,255,255,0.35)",
  className = "",
  style = {},
  as = "button",
  onClick,
  ariaLabel,
  duration = 0.6,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [ripples, setRipples] = useState<RippleEvent[]>([]);

  const handlePointerDown = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, duration * 1000);
  };

  const Tag = motion[as] as typeof motion.button;

  return (
    <Tag
      ref={ref as never}
      onPointerDown={handlePointerDown}
      onClick={onClick}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {children}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size,
              borderRadius: "50%",
              backgroundColor: color,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </Tag>
  );
}
