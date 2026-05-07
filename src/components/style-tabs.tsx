"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";

export type TabDef = {
  id: string;
  label: string;
  content: ReactNode;
};

type Variant =
  | "brutalist"
  | "tech-pill"
  | "soft-pill"
  | "glass-line"
  | "editorial-underline"
  | "sport-block"
  | "ascii-bracket";

type Props = {
  tabs: TabDef[];
  defaultTab?: string;
  variant: Variant;
  /* Colores configurables por estilo */
  bgContainer?: string;
  bgInactive?: string;
  textActive?: string;
  textInactive?: string;
  accent: string;
  borderColor?: string;
  /* Layout */
  className?: string;
  tabsClassName?: string;
  textClassName?: string;
  textStyle?: CSSProperties;
  sticky?: boolean;
};

export function StyleTabs({
  tabs,
  defaultTab,
  variant,
  accent,
  bgContainer,
  bgInactive,
  textActive,
  textInactive,
  borderColor,
  className = "",
  tabsClassName = "",
  textClassName = "",
  textStyle,
  sticky = false,
}: Props) {
  const [active, setActive] = useState(defaultTab || tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <div className={className}>
      <div
        className={`${sticky ? "sticky top-0 z-30" : ""} ${tabsClassName}`}
      >
        {variant === "brutalist" && (
          <div
            className="inline-flex relative"
            style={{ border: `3px solid ${accent}`, backgroundColor: bgContainer }}
          >
            {tabs.map((t, i) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.08 }}
                  className={`relative px-5 py-3 font-bebas text-xl tracking-wider z-0 ${textClassName}`}
                  style={{
                    color: a ? textActive : textInactive,
                    borderRight: i < tabs.length - 1 ? `3px solid ${accent}` : "none",
                  }}
                >
                  {a && (
                    <motion.span
                      layoutId="brutalist-tab-pill"
                      transition={{ duration: 0.15, ease: [0.65, 0, 0.35, 1] }}
                      className="absolute inset-0 -z-10"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "tech-pill" && (
          <div
            className="inline-flex p-1 rounded-full"
            style={{ backgroundColor: bgContainer, border: `1px solid ${borderColor}` }}
          >
            {tabs.map((t) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.12 }}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium z-0 ${textClassName}`}
                  style={{ color: a ? textActive : textInactive, ...textStyle }}
                >
                  {a && (
                    <motion.span
                      layoutId="tech-tab-pill"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "soft-pill" && (
          <div
            className="inline-flex p-1 rounded-full"
            style={{ backgroundColor: bgContainer || "#f3f4f6", border: borderColor ? `1px solid ${borderColor}` : "none" }}
          >
            {tabs.map((t) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.12 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold z-0 ${textClassName}`}
                  style={{ color: a ? textActive : textInactive, ...textStyle }}
                >
                  {a && (
                    <motion.span
                      layoutId="soft-tab-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full -z-10"
                      style={{ backgroundColor: accent, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "glass-line" && (
          <div className="inline-flex gap-8" style={{ borderBottom: `1px solid ${borderColor}` }}>
            {tabs.map((t) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  className={`relative pb-3 text-sm font-light tracking-wider uppercase ${textClassName}`}
                  style={{ color: a ? textActive : textInactive, letterSpacing: "0.15em", ...textStyle }}
                >
                  {t.label}
                  {a && (
                    <motion.span
                      layoutId="glass-tab-line"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute left-0 right-0 -bottom-px h-px"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "editorial-underline" && (
          <div className="inline-flex gap-10 items-baseline">
            {tabs.map((t, i) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  className={`relative pb-2 ${textClassName}`}
                  style={{
                    color: a ? textActive : textInactive,
                    fontStyle: a ? "italic" : "normal",
                    fontWeight: a ? 500 : 400,
                    ...textStyle,
                  }}
                >
                  <span className="text-[10px] mr-2 font-mono tracking-widest opacity-60">{String(i + 1).padStart(2, "0")}</span>
                  {t.label}
                  {a && (
                    <motion.span
                      layoutId="editorial-tab-line"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute left-0 right-0 -bottom-px h-0.5"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "sport-block" && (
          <div className="inline-flex relative" style={{ border: `2px solid ${borderColor}` }}>
            {tabs.map((t, i) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                  className={`relative px-6 py-2.5 font-bebas text-lg uppercase tracking-widest z-0 ${textClassName}`}
                  style={{
                    color: a ? textActive : textInactive,
                    borderRight: i < tabs.length - 1 ? `2px solid ${borderColor}` : "none",
                  }}
                >
                  {a && (
                    <motion.span
                      layoutId="sport-tab-block"
                      transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                      className="absolute inset-0 -z-10"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </motion.button>
              );
            })}
          </div>
        )}

        {variant === "ascii-bracket" && (
          <div className="inline-flex gap-1 font-mono text-xs">
            {tabs.map((t) => {
              const a = active === t.id;
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  whileTap={{ scale: 0.98 }}
                  className={`px-3 py-1.5 ${textClassName}`}
                  style={{
                    color: a ? textActive : textInactive,
                    backgroundColor: a ? accent : "transparent",
                    border: `1px solid ${borderColor}`,
                  }}
                >
                  [{a ? "X" : " "}] {t.label.toUpperCase()}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tab content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          {activeTab.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
