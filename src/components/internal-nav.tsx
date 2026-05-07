"use client";

import { type ReactNode, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";

export type NavItem = {
  id: string;
  label: string;
  icon?: string;
  shortcut?: string;
  badge?: string | number;
};

type Variant =
  | "brutalist-sidebar"
  | "tech-sidebar"
  | "glass-topnav"
  | "editorial-sidebar"
  | "soft-sidebar"
  | "ios-bottom"
  | "m3-bottom"
  | "ascii-list"
  | "sport-vertical";

type Props = {
  variant: Variant;
  items: NavItem[];
  active: string;
  onChange: (id: string) => void;
  /* Theming */
  bgContainer?: string;
  bgActive?: string;
  bgInactive?: string;
  textActive?: string;
  textInactive?: string;
  accent: string;
  borderColor?: string;
  /* Workspace label */
  workspaceLabel?: string;
  workspaceInitial?: string;
  /* Layout */
  className?: string;
  /* Per-item content (sub-views) */
  children: ReactNode;
};

export function InternalNav({
  variant,
  items,
  active,
  onChange,
  bgContainer,
  bgActive,
  textActive,
  textInactive,
  accent,
  borderColor,
  workspaceLabel,
  workspaceInitial,
  className = "",
  children,
}: Props) {
  /* SIDEBAR LEFT + content right */
  if (
    variant === "brutalist-sidebar" ||
    variant === "tech-sidebar" ||
    variant === "soft-sidebar" ||
    variant === "editorial-sidebar"
  ) {
    return (
      <div className={`grid grid-cols-12 gap-0 ${className}`}>
        <aside
          className={
            variant === "brutalist-sidebar"
              ? "col-span-12 md:col-span-3 lg:col-span-2 p-3"
              : "col-span-12 md:col-span-3 lg:col-span-2 py-4"
          }
          style={{
            borderRight: variant === "brutalist-sidebar" ? `3px solid ${borderColor}` : `1px solid ${borderColor}`,
            backgroundColor: bgContainer,
          }}
        >
          {workspaceLabel && (
            <div
              className={
                variant === "brutalist-sidebar"
                  ? "flex items-center gap-2 mb-5 pb-3 px-1"
                  : "flex items-center gap-2 mb-5 px-3"
              }
              style={
                variant === "brutalist-sidebar" ? { borderBottom: `2px solid ${borderColor}` } : undefined
              }
            >
              {workspaceInitial && (
                <span
                  className={
                    variant === "brutalist-sidebar"
                      ? "w-7 h-7 flex items-center justify-center font-bebas text-sm"
                      : "w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold"
                  }
                  style={{
                    backgroundColor: accent,
                    color: bgContainer,
                    border: variant === "brutalist-sidebar" ? `2px solid ${borderColor}` : "none",
                  }}
                >
                  {workspaceInitial}
                </span>
              )}
              <span
                className={
                  variant === "brutalist-sidebar"
                    ? "font-bebas text-base tracking-wider"
                    : variant === "editorial-sidebar"
                    ? "font-cormorant text-base italic"
                    : "font-semibold text-sm"
                }
                style={{ color: textActive }}
              >
                {workspaceLabel}
              </span>
            </div>
          )}

          <nav className="space-y-0.5">
            {items.map((it, i) => {
              const a = active === it.id;
              return (
                <motion.button
                  key={it.id}
                  onClick={() => onChange(it.id)}
                  whileHover={
                    variant === "brutalist-sidebar"
                      ? {}
                      : variant === "tech-sidebar"
                      ? { x: 2 }
                      : variant === "editorial-sidebar"
                      ? { x: 4 }
                      : { x: 2 }
                  }
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  className="relative w-full flex items-center justify-between gap-2 cursor-pointer"
                  style={
                    variant === "brutalist-sidebar"
                      ? {
                          padding: "10px 12px",
                          fontFamily: "var(--font-bebas)",
                          fontSize: "1.1rem",
                          letterSpacing: "0.05em",
                          color: a ? bgContainer : textInactive,
                          backgroundColor: a ? accent : "transparent",
                          border: a ? `2px solid ${borderColor}` : "2px solid transparent",
                        }
                      : variant === "editorial-sidebar"
                      ? {
                          padding: "8px 0 8px 12px",
                          color: a ? accent : textInactive,
                          fontStyle: a ? "italic" : "normal",
                          fontSize: "0.95rem",
                          letterSpacing: a ? "0.01em" : "0",
                        }
                      : {
                          padding: "6px 12px",
                          color: a ? textActive : textInactive,
                          backgroundColor: a ? bgActive : "transparent",
                          fontWeight: a ? 600 : 400,
                          fontSize: "0.875rem",
                          borderRadius: variant === "tech-sidebar" ? "6px" : "999px",
                          marginLeft: variant === "tech-sidebar" ? "8px" : "12px",
                          marginRight: variant === "tech-sidebar" ? "8px" : "12px",
                          width: "auto",
                          borderLeft: variant === "tech-sidebar" && a ? `2px solid ${accent}` : "2px solid transparent",
                        }
                  }
                >
                  {variant === "editorial-sidebar" && (
                    <span className="text-[10px] font-mono opacity-50 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                  {it.icon && variant !== "editorial-sidebar" && (
                    <span className="text-base mr-1">{it.icon}</span>
                  )}
                  <span className="flex-1 text-left">{it.label}</span>
                  {it.badge !== undefined && (
                    <span
                      className="px-1.5 py-0.5 text-[10px] font-bold rounded"
                      style={{
                        backgroundColor: a ? bgContainer : accent,
                        color: a ? accent : bgContainer,
                      }}
                    >
                      {it.badge}
                    </span>
                  )}
                  {it.shortcut && (
                    <span
                      className="text-[10px] opacity-50 font-mono"
                      style={{ color: a ? textActive : textInactive }}
                    >
                      {it.shortcut}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </nav>
        </aside>

        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  /* TOP NAV horizontal */
  if (variant === "glass-topnav") {
    return (
      <div className={className}>
        <div
          className="flex items-center justify-between gap-4 mb-8 pb-3"
          style={{ borderBottom: `1px solid ${borderColor}` }}
        >
          {workspaceLabel && (
            <div className="flex items-center gap-2">
              {workspaceInitial && (
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-light"
                  style={{ backgroundColor: accent, color: bgContainer }}
                >
                  {workspaceInitial}
                </span>
              )}
              <span className="font-light text-sm tracking-wider" style={{ color: textActive }}>
                {workspaceLabel}
              </span>
            </div>
          )}

          <nav className="flex items-center gap-7 overflow-x-auto">
            {items.map((it) => {
              const a = active === it.id;
              return (
                <motion.button
                  key={it.id}
                  onClick={() => onChange(it.id)}
                  whileTap={{ scale: 0.98 }}
                  className="relative pb-2 text-xs uppercase font-light whitespace-nowrap"
                  style={{
                    color: a ? textActive : textInactive,
                    letterSpacing: "0.2em",
                  }}
                >
                  {it.label}
                  {a && (
                    <motion.span
                      layoutId="glass-topnav-line"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute left-0 right-0 -bottom-px h-px"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  /* BOTTOM NAV (mobile) */
  if (variant === "ios-bottom" || variant === "m3-bottom") {
    return (
      <div className={`relative ${className}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="pb-24"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-around gap-1 px-3 py-2 rounded-full"
          style={{
            backgroundColor: bgContainer,
            backdropFilter: "blur(20px)",
            border: `1px solid ${borderColor}`,
            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            minWidth: "min(360px, calc(100% - 32px))",
          }}
        >
          {items.map((it) => {
            const a = active === it.id;
            return (
              <motion.button
                key={it.id}
                onClick={() => onChange(it.id)}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 600, damping: 18 }}
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 relative flex-1"
              >
                <motion.span
                  animate={{ scale: a ? 1.15 : 1, y: a ? -1 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="text-lg"
                >
                  {it.icon}
                </motion.span>
                <motion.span
                  animate={{ color: a ? accent : textInactive }}
                  className="text-[9px] font-medium"
                >
                  {it.label}
                </motion.span>
                {a && variant === "ios-bottom" && (
                  <motion.span
                    layoutId="ios-bottom-dot"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                )}
                {a && variant === "m3-bottom" && (
                  <motion.span
                    layoutId="m3-bottom-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ backgroundColor: bgActive }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  /* SPORT VERTICAL with aggressive lateral bar */
  if (variant === "sport-vertical") {
    return (
      <div className={`grid grid-cols-12 gap-0 ${className}`}>
        <aside
          className="col-span-12 md:col-span-3 lg:col-span-2 p-0"
          style={{ borderRight: `1px solid ${borderColor}` }}
        >
          {workspaceLabel && (
            <div
              className="px-4 py-4 mb-2"
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: accent }}>
                {workspaceLabel}
              </p>
            </div>
          )}
          <nav className="space-y-0">
            {items.map((it) => {
              const a = active === it.id;
              return (
                <motion.button
                  key={it.id}
                  onClick={() => onChange(it.id)}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full px-4 py-3 font-bebas text-lg uppercase tracking-widest text-left overflow-hidden"
                  style={{ color: a ? textActive : textInactive, borderBottom: `1px solid ${borderColor}` }}
                >
                  {a && (
                    <motion.span
                      layoutId="sport-vertical-bar"
                      transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                      className="absolute inset-y-0 left-0 w-1.5"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                  <span className="relative">{it.label}</span>
                </motion.button>
              );
            })}
          </nav>
        </aside>

        <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-6 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  /* ASCII list */
  if (variant === "ascii-list") {
    return (
      <div className={className}>
        <div
          className="mb-6 p-3 font-mono text-xs"
          style={{ border: `1px solid ${borderColor}` }}
        >
          <p className="mb-2 opacity-70">{workspaceLabel ? `[WORKSPACE] ${workspaceLabel}` : "[WORKSPACE]"}</p>
          <nav className="space-y-1">
            {items.map((it) => {
              const a = active === it.id;
              return (
                <motion.button
                  key={it.id}
                  onClick={() => onChange(it.id)}
                  whileHover={{ x: 4 }}
                  className="block w-full text-left"
                  style={{ color: a ? textActive : textInactive }}
                >
                  {a ? "▸ " : "  "}[{a ? "X" : " "}] {it.label.toUpperCase()}
                  {it.shortcut && <span className="ml-3 opacity-50">{it.shortcut}</span>}
                </motion.button>
              );
            })}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return null;
}

/* Helper para renderizar contenido condicional según view activa */
export function NavView({ when, current, children }: { when: string; current: string; children: ReactNode }) {
  if (when !== current) return null;
  return <>{children}</>;
}
