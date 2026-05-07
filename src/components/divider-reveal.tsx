"use client";

import { motion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type Variant =
  | "tech-line-draw"
  | "brutalist-stamp"
  | "soft-bounce"
  | "asym-scatter"
  | "glass-shimmer"
  | "slide-in";

type Props = {
  variant: Variant;
  lineColor: string;
  textColor: string;
  accentColor?: string;
  className?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  children: ReactNode;
  textClassName?: string;
};

export function DividerReveal({
  variant,
  lineColor,
  textColor,
  accentColor,
  className = "",
  style,
  textStyle,
  children,
  textClassName = "text-xs uppercase tracking-[0.2em] font-semibold",
}: Props) {
  const containerProps = {
    initial: "rest",
    whileInView: "visible",
    viewport: { once: true, margin: "-30px" },
  };

  if (variant === "tech-line-draw") {
    return (
      <motion.div
        {...containerProps}
        className={`flex items-center gap-3 ${className}`}
        style={style}
      >
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex-1 h-px origin-right"
          style={{ backgroundColor: lineColor }}
        />
        <motion.span
          variants={{
            rest: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className={textClassName}
          style={{ color: textColor, ...(textStyle || {}) }}
        >
          {children}
        </motion.span>
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex-1 h-px origin-left"
          style={{ backgroundColor: lineColor }}
        />
      </motion.div>
    );
  }

  if (variant === "brutalist-stamp") {
    return (
      <motion.div
        {...containerProps}
        className={`py-3 flex items-center justify-between flex-wrap gap-3 ${className}`}
        style={{ borderTop: `3px solid ${lineColor}`, borderBottom: `3px solid ${lineColor}`, ...style }}
      >
        <motion.span
          variants={{
            rest: { opacity: 0, x: -20, scale: 0.96 },
            visible: { opacity: 1, x: 0, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className={textClassName}
          style={{ color: textColor, ...(textStyle || {}) }}
        >
          {children}
        </motion.span>
        {accentColor && (
          <motion.span
            variants={{
              rest: { opacity: 0, x: 20, rotate: -8 },
              visible: { opacity: 1, x: 0, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 380, damping: 22, delay: 0.08 }}
            className="font-mono text-xs px-2 py-0.5"
            style={{ backgroundColor: accentColor, color: lineColor }}
          >
            ↓
          </motion.span>
        )}
      </motion.div>
    );
  }

  if (variant === "soft-bounce") {
    return (
      <motion.div
        {...containerProps}
        className={`flex items-center gap-3 ${className}`}
        style={style}
      >
        <motion.div
          variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 h-px"
          style={{ backgroundColor: lineColor }}
        />
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.7, y: 8 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 320, damping: 14, delay: 0.2 }}
          className={textClassName}
          style={{ color: textColor, ...(textStyle || {}) }}
        >
          {children}
        </motion.span>
        <motion.div
          variants={{ rest: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 h-px"
          style={{ backgroundColor: lineColor }}
        />
      </motion.div>
    );
  }

  if (variant === "asym-scatter") {
    return (
      <motion.div
        {...containerProps}
        className={`grid grid-cols-12 gap-4 ${className}`}
        style={style}
      >
        <div className="col-span-12 md:col-span-2" />
        <div className="col-span-12 md:col-span-10 flex items-center gap-5">
          <motion.span
            variants={{
              rest: { opacity: 0, x: -16 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className={textClassName}
            style={{ color: textColor }}
          >
            {children}
          </motion.span>
          <motion.div
            variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex-1 h-px origin-left"
            style={{ backgroundColor: lineColor }}
          />
          {accentColor && (
            <motion.span
              variants={{
                rest: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.5 }}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === "glass-shimmer") {
    return (
      <motion.div
        {...containerProps}
        className={`flex items-center gap-4 relative overflow-hidden ${className}`}
        style={style}
      >
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex-1 h-px origin-right"
          style={{ backgroundColor: lineColor }}
        />
        <motion.span
          variants={{
            rest: { opacity: 0, letterSpacing: "0.5em" },
            visible: { opacity: 1, letterSpacing: "0.4em" },
          }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className={textClassName}
          style={{ color: textColor, ...(textStyle || {}) }}
        >
          {children}
        </motion.span>
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex-1 h-px origin-left"
          style={{ backgroundColor: lineColor }}
        />
        {/* Shimmer pass over the divider */}
        <motion.div
          aria-hidden
          variants={{
            rest: { x: "-110%", opacity: 0 },
            visible: { x: "110%", opacity: 1 },
          }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-y-0 w-1/3 pointer-events-none"
          style={{
            background: accentColor
              ? `linear-gradient(110deg, transparent, ${accentColor}, transparent)`
              : "linear-gradient(110deg, transparent, rgba(255,255,255,0.3), transparent)",
            mixBlendMode: "screen",
            filter: "blur(4px)",
          }}
        />
      </motion.div>
    );
  }

  if (variant === "slide-in") {
    return (
      <motion.div
        {...containerProps}
        className={`flex items-center gap-3 relative overflow-hidden ${className}`}
        style={style}
      >
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="flex-1 h-px origin-left"
          style={{ backgroundColor: lineColor }}
        />
        <motion.span
          variants={{
            rest: { opacity: 0, x: -40, skewX: -8 },
            visible: { opacity: 1, x: 0, skewX: 0 },
          }}
          transition={{ duration: 0.4, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
          className={textClassName}
          style={{ color: textColor, ...(textStyle || {}) }}
        >
          {children}
        </motion.span>
        <motion.div
          variants={{ rest: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          className="flex-1 h-px origin-right"
          style={{ backgroundColor: lineColor }}
        />
      </motion.div>
    );
  }

  return null;
}
