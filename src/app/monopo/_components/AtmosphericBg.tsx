"use client";

import { motion, useReducedMotion } from "motion/react";
import { frost } from "../_data";

/**
 * LA firma de monopo: gradiente orgánico en movimiento continuo, vivo y lento.
 *
 * Performance (requisito del plan): NO se interpola la prop `background` (eso
 * es repaint pesado por frame). Se animan dos blobs radiales blureados sólo
 * con `x/y/scale/rotate` (transform compositable, `willChange: transform`).
 * Reduced-motion: blobs estáticos en posición de reposo (la atmósfera frosted
 * se mantiene, sin movimiento).
 */
export function AtmosphericBg() {
  const reduce = useReducedMotion();

  const violetBlob = reduce
    ? {}
    : {
        animate: { x: ["-8%", "12%", "-8%"], y: ["-6%", "10%", "-6%"], scale: [1, 1.15, 1] },
        transition: { duration: 26, repeat: Infinity, ease: "easeInOut" as const },
      };

  const blueBlob = reduce
    ? {}
    : {
        animate: { x: ["10%", "-10%", "10%"], y: ["8%", "-8%", "8%"], scale: [1.1, 0.95, 1.1] },
        transition: { duration: 32, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <>
      {/* Filtro de grano para el shimmer (lo consume FrostSweep). */}
      <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="monopo-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0.55 0"
            />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: frost.bg }}>
        <motion.div
          {...violetBlob}
          className="absolute"
          style={{
            top: "-20%",
            left: "-10%",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(120,50,200,0.28) 0%, rgba(120,50,200,0.10) 40%, transparent 70%)`,
            filter: "blur(70px)",
            willChange: "transform",
          }}
        />
        <motion.div
          {...blueBlob}
          className="absolute"
          style={{
            bottom: "-25%",
            right: "-12%",
            width: "65vw",
            height: "65vw",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(50,100,200,0.24) 0%, rgba(50,100,200,0.09) 40%, transparent 70%)`,
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
      </div>
    </>
  );
}
