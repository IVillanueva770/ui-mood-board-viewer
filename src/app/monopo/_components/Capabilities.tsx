"use client";

import { motion } from "motion/react";
import { frost, type Capability } from "../_data";
import { useFrostMotion } from "./use-frost-motion";

/** Pieza externa: qué hace el estudio — tres áreas, frosted, lift al hover. */
export function Capabilities({ capabilities }: { capabilities: Capability[] }) {
  const { sectionReveal, frostLift } = useFrostMotion();

  return (
    <motion.section {...sectionReveal}>
      <div className="grid grid-cols-12 gap-8 mb-10">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: frost.textMute }}>
            What we do
          </p>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2
            className="text-3xl sm:text-4xl font-light leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Three things, done with{" "}
            <em className="italic" style={{ color: frost.violet }}>obsession.</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {capabilities.map((c) => (
          <motion.div
            key={c.num}
            {...frostLift(frost.violet)}
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: frost.surface,
              backdropFilter: frost.blur,
              border: `1px solid ${frost.border}`,
            }}
          >
            <div
              aria-hidden
              className="absolute -top-14 -right-14 w-36 h-36 rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{ backgroundColor: frost.violet }}
            />
            <div className="relative">
              <p
                className="text-xs mb-5 tracking-[0.3em]"
                style={{ color: frost.textFaint, fontFamily: frost.mono }}
              >
                {c.num}
              </p>
              <h3 className="text-2xl font-light mb-3">{c.titulo}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: frost.textSoft }}>
                {c.desc}
              </p>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="text-xs uppercase tracking-widest pb-2"
                    style={{ color: frost.textMute, borderBottom: `1px solid ${frost.border}` }}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
