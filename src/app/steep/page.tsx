"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { getEstilo } from "@/lib/estilos";
import { StyleHeader, StyleFooter } from "@/components/style-chrome";
import { DividerReveal } from "@/components/divider-reveal";
import { StyleTabs } from "@/components/style-tabs";
import { InternalNav } from "@/components/internal-nav";

export default function SteepPage() {
  const e = getEstilo("steep")!;
  const [activeView, setActiveView] = useState("reports");

  /* ============== TAB 1 — MARKETING (analytics platform) ============== */
  const landing = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
      className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-20 sm:pt-20 sm:pb-32"
    >
      <p className="text-xs uppercase tracking-[0.3em] mb-7" style={{ color: "#5d2a1a" }}>
        analytics platform · beta abierta
      </p>
      <h1
        className="font-cormorant text-6xl sm:text-9xl font-medium leading-[1.02] mb-8 max-w-5xl"
        style={{ letterSpacing: "-0.015em" }}
      >
        Steep — <em className="italic" style={{ color: "#5d2a1a" }}>measure</em><br />
        what matters.
      </h1>
      <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-12" style={{ color: "#52545a" }}>
        A BI tool that asks better questions. Connect your warehouse, write a metric once, share it everywhere — without losing context.
      </p>

      <div className="flex items-center gap-4 flex-wrap mb-20">
        <motion.button
          whileHover={{ y: -1, boxShadow: "0 12px 28px -6px rgba(23,25,28,0.18)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="px-7 py-3.5 text-sm font-medium rounded-md"
          style={{ backgroundColor: "#17191c", color: "#ffffff" }}
        >
          Start free
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "#fbe1d1" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="px-7 py-3.5 text-sm font-medium rounded-md"
          style={{ color: "#17191c", border: "1px solid #e8e8e8" }}
        >
          Talk to us →
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {[
          {
            tit: "One metric, one place",
            desc: "Define revenue once. Reuse it across reports, dashboards, and exports without drift.",
            num: "01",
          },
          {
            tit: "Warehouse-native",
            desc: "Read your data where it lives. BigQuery, Snowflake, Postgres, Databricks. No copies.",
            num: "02",
          },
          {
            tit: "Reports that travel",
            desc: "Share a chart, a board, or a dataset. The receiver always sees the same numbers as you.",
            num: "03",
          },
        ].map((p, i) => (
          <motion.div
            key={p.tit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="p-7"
            style={{
              backgroundColor: "#f7f7f8",
              borderRadius: 16,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.04)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] mb-5 font-mono" style={{ color: "#5d2a1a" }}>
              · {p.num}
            </p>
            <h3 className="font-cormorant italic text-2xl mb-3 leading-tight" style={{ color: "#17191c" }}>
              {p.tit}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#52545a" }}>
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );

  /* ============== SUB-VISTAS DEL WORKSPACE BI ============== */

  const sparkPath = (vals: number[]) => {
    const max = Math.max(...vals);
    const w = 100;
    const h = 32;
    return vals
      .map((v, i) => {
        const x = (i / (vals.length - 1)) * w;
        const y = h - (v / max) * (h - 4) - 2;
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const ReportsView = (
    <div>
      <div className="mb-10 flex items-end justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#5d2a1a" }}>
            workspace · acme
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight" style={{ color: "#17191c" }}>
            Reports — <em className="italic">last 30 days.</em>
          </h2>
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          className="px-4 py-2 text-xs font-medium rounded-md"
          style={{ backgroundColor: "#17191c", color: "#fff" }}
        >
          New report
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "Daily Active Users", val: "12,481", delta: "+8.2%", points: [40, 52, 48, 60, 55, 72, 80, 85, 78, 92], color: "#5d2a1a" },
          { name: "Conversion rate", val: "3.41%", delta: "+0.6 pp", points: [30, 32, 35, 33, 38, 40, 42, 41, 44, 47], color: "#a04a32" },
          { name: "Revenue", val: "$ 184.2k", delta: "+22.4%", points: [50, 55, 65, 62, 78, 82, 88, 95, 102, 120], color: "#5d2a1a" },
          { name: "Cohort retention 30d", val: "62.0%", delta: "−1.8 pp", points: [70, 68, 66, 64, 62, 63, 60, 62, 61, 62], color: "#c97c5d" },
        ].map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -2, boxShadow: "0 12px 28px -6px rgba(23,25,28,0.1)" }}
            className="p-6 cursor-pointer"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <p className="text-xs uppercase tracking-wider" style={{ color: "#5d2a1a" }}>
                {r.name}
              </p>
              <span className="text-[11px] font-mono" style={{ color: "#52545a" }}>
                {r.delta}
              </span>
            </div>
            <p className="font-cormorant text-4xl mb-3" style={{ color: "#17191c" }}>
              {r.val}
            </p>
            <svg viewBox="0 0 100 32" className="w-full" preserveAspectRatio="none" style={{ height: 40 }}>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                d={sparkPath(r.points)}
                fill="none"
                stroke={r.color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DatasetsView = (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#5d2a1a" }}>
          datasets · 12 connected
        </p>
        <h2 className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight" style={{ color: "#17191c" }}>
          Sources of <em className="italic">truth.</em>
        </h2>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e8e8e8",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="grid grid-cols-12 gap-3 px-6 py-3 text-[11px] uppercase tracking-wider font-mono"
          style={{ borderBottom: "1px solid #e8e8e8", backgroundColor: "#f7f7f8", color: "#5d2a1a" }}
        >
          <div className="col-span-5">Name</div>
          <div className="col-span-2 text-right">Rows</div>
          <div className="col-span-2">Last sync</div>
          <div className="col-span-3">Source</div>
        </div>
        {[
          { n: "fct_orders", rows: "4.2M", sync: "2 min ago", src: "BigQuery" },
          { n: "dim_customers", rows: "184k", sync: "5 min ago", src: "BigQuery" },
          { n: "stg_events_mobile", rows: "12.8M", sync: "1 min ago", src: "Snowflake" },
          { n: "fct_subscriptions", rows: "62.4k", sync: "8 min ago", src: "Postgres" },
          { n: "marketing_attribution", rows: "920k", sync: "1 hr ago", src: "Snowflake" },
          { n: "ga4_sessions", rows: "8.4M", sync: "3 min ago", src: "BigQuery" },
          { n: "dim_dates", rows: "10.9k", sync: "1 day ago", src: "Postgres" },
        ].map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ backgroundColor: "rgba(251,225,209,0.25)" }}
            className="grid grid-cols-12 gap-3 px-6 py-4 items-baseline cursor-pointer"
            style={{ borderBottom: i < 6 ? "1px solid #e8e8e8" : "none" }}
          >
            <div className="col-span-5 font-cormorant italic text-lg" style={{ color: "#17191c" }}>
              {d.n}
            </div>
            <div className="col-span-2 text-right text-sm font-mono" style={{ color: "#17191c" }}>
              {d.rows}
            </div>
            <div className="col-span-2 text-xs" style={{ color: "#52545a" }}>
              {d.sync}
            </div>
            <div className="col-span-3 text-xs">
              <span
                className="px-2 py-1 rounded text-[11px]"
                style={{ backgroundColor: "#fbe1d1", color: "#5d2a1a", fontFamily: "var(--font-geist-mono)" }}
              >
                {d.src}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const BoardsView = (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#5d2a1a" }}>
          dashboards · 7 active
        </p>
        <h2 className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight" style={{ color: "#17191c" }}>
          Boards — <em className="italic">your team's view.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Executive Weekly", owner: "Ana M.", views: 184 },
          { name: "Growth — funnel", owner: "Tomás R.", views: 92 },
          { name: "Finance close", owner: "Luca K.", views: 41 },
          { name: "Product activation", owner: "Sofía L.", views: 156 },
          { name: "Marketing attribution", owner: "Ana M.", views: 78 },
          { name: "Customer success", owner: "Dani C.", views: 64 },
        ].map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -3, boxShadow: "0 14px 30px -8px rgba(23,25,28,0.12)" }}
            className="cursor-pointer rounded-xl overflow-hidden"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e8e8",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="h-36 flex items-end gap-1 px-4 pb-4"
              style={{ background: "linear-gradient(180deg, #fbe1d1, #f7f7f8)" }}
            >
              {[40, 60, 50, 70, 65, 80, 75, 90, 85].map((h, k) => (
                <motion.div
                  key={k}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.2 + k * 0.04, ease: "easeOut" }}
                  className="flex-1 rounded-t"
                  style={{ backgroundColor: k % 3 === 0 ? "#5d2a1a" : "#a04a32" }}
                />
              ))}
            </div>
            <div className="p-5">
              <h3 className="font-cormorant italic text-2xl mb-2 leading-tight" style={{ color: "#17191c" }}>
                {b.name}
              </h3>
              <div className="flex items-center justify-between text-xs" style={{ color: "#52545a" }}>
                <span>{b.owner}</span>
                <span className="font-mono">{b.views} views / 7d</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MetricsView = (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#5d2a1a" }}>
          metrics · single source
        </p>
        <h2 className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight" style={{ color: "#17191c" }}>
          Define once, <em className="italic">use everywhere.</em>
        </h2>
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Revenue",
            formula: "sum(orders.amount) where status = 'paid'",
            spark: [40, 50, 48, 60, 70, 75, 82, 90],
            owner: "Finance",
          },
          {
            name: "DAU",
            formula: "count(distinct sessions.user_id) per day",
            spark: [62, 68, 65, 70, 72, 78, 80, 84],
            owner: "Product",
          },
          {
            name: "Conversion",
            formula: "checkout_complete / sessions.count",
            spark: [30, 32, 35, 36, 38, 40, 42, 44],
            owner: "Growth",
          },
          {
            name: "NPS",
            formula: "promoters_pct − detractors_pct (rolling 30d)",
            spark: [40, 42, 38, 45, 48, 52, 50, 55],
            owner: "CS",
          },
        ].map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ x: 3 }}
            className="grid grid-cols-12 gap-4 items-center p-5 cursor-pointer"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e8e8",
              borderRadius: 12,
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div className="col-span-12 sm:col-span-3">
              <p className="font-cormorant italic text-2xl leading-none mb-1" style={{ color: "#17191c" }}>
                {m.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#5d2a1a" }}>
                owner · {m.owner}
              </p>
            </div>
            <div
              className="col-span-12 sm:col-span-6 text-xs px-3 py-2 rounded font-mono"
              style={{ backgroundColor: "#f7f7f8", color: "#52545a" }}
            >
              {m.formula}
            </div>
            <div className="col-span-12 sm:col-span-3">
              <svg viewBox="0 0 100 32" className="w-full" preserveAspectRatio="none" style={{ height: 36 }}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.06 }}
                  d={sparkPath(m.spark)}
                  fill="none"
                  stroke="#5d2a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const SettingsViewSteep = (
    <div>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#5d2a1a" }}>
          workspace settings
        </p>
        <h2 className="font-cormorant text-4xl sm:text-5xl font-medium leading-tight" style={{ color: "#17191c" }}>
          The <em className="italic">quiet panel.</em>
        </h2>
      </div>

      {[
        {
          titulo: "Workspace",
          items: [
            { k: "Name", v: "ACME — Analytics" },
            { k: "Plan", v: "Team — $290/mo" },
            { k: "Region", v: "us-east-1" },
            { k: "Slug", v: "acme-analytics" },
          ],
        },
        {
          titulo: "Members",
          items: [
            { k: "Ana Méndez", v: "Owner" },
            { k: "Tomás Ríos", v: "Editor" },
            { k: "Sofía López", v: "Editor" },
            { k: "Luca Karp", v: "Viewer" },
          ],
        },
        {
          titulo: "Integrations",
          items: [
            { k: "BigQuery", v: "Connected" },
            { k: "Snowflake", v: "Connected" },
            { k: "Slack", v: "Connected" },
            { k: "Looker", v: "Connect →" },
          ],
        },
        {
          titulo: "Billing",
          items: [
            { k: "Plan", v: "Team" },
            { k: "Next charge", v: "Jun 12, 2026" },
            { k: "Card", v: "···· 4421" },
            { k: "Invoices", v: "→" },
          ],
        },
      ].map((g, gi) => (
        <motion.div
          key={g.titulo}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: gi * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-10"
        >
          <p
            className="font-cormorant italic text-2xl mb-4 pb-2"
            style={{ color: "#17191c", borderBottom: "1px solid #e8e8e8" }}
          >
            {g.titulo}
          </p>
          <div className="space-y-2">
            {g.items.map((it) => (
              <div key={it.k} className="flex items-center justify-between py-2">
                <p className="text-sm" style={{ color: "#52545a" }}>
                  {it.k}
                </p>
                <p className="text-sm font-mono" style={{ color: "#17191c" }}>
                  {it.v}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const subViews: Record<string, React.ReactNode> = {
    reports: ReportsView,
    datasets: DatasetsView,
    boards: BoardsView,
    metrics: MetricsView,
    settings: SettingsViewSteep,
  };

  /* ============== TAB 2 — WORKSPACE BI ============== */
  const workspace = (
    <div
      style={{
        border: "1px solid #e8e8e8",
        borderRadius: 16,
        minHeight: "720px",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.04)",
      }}
    >
      <InternalNav
        variant="editorial-sidebar"
        items={[
          { id: "reports", label: "Reports" },
          { id: "datasets", label: "Datasets" },
          { id: "boards", label: "Boards" },
          { id: "metrics", label: "Metrics" },
          { id: "settings", label: "Settings" },
        ]}
        active={activeView}
        onChange={setActiveView}
        accent="#5d2a1a"
        bgContainer="#ffffff"
        textActive="#17191c"
        textInactive="#52545a"
        borderColor="#e8e8e8"
        workspaceLabel="ACME / Analytics"
        workspaceInitial="A"
      >
        {subViews[activeView]}
      </InternalNav>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#17191c", minHeight: "100vh" }} className="font-inter">
      <StyleHeader estilo={e} borderColor="#e8e8e8" navColor="#52545a" />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20">
        <StyleTabs
          variant="editorial-underline"
          accent="#5d2a1a"
          textActive="#17191c"
          textInactive="#52545a"
          tabsClassName="mb-12 sm:mb-16"
          textClassName="font-cormorant text-lg"
          tabs={[
            { id: "marketing", label: "Marketing", content: landing },
            { id: "workspace", label: "Workspace", content: workspace },
          ]}
        />

        <DividerReveal
          variant="asym-scatter"
          lineColor="#e8e8e8"
          textColor="#5d2a1a"
          accentColor="#fbe1d1"
          className="mt-20 mb-14"
          textClassName="font-cormorant italic text-base"
        >
          end of report
        </DividerReveal>

        <StyleFooter
          estilo={e}
          textColor="#52545a"
          borderColor="#e8e8e8"
          headingClass="font-cormorant italic text-base"
        />
      </main>
    </div>
  );
}
