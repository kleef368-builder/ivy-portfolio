"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { campaignCases } from "@/data/portfolioData";

export default function CampaignSimulator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState(campaignCases[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const active = campaignCases.find((c) => c.id === activeId)!;

  return (
    <section
      id="simulator"
      className="section-padding md:section-padding-md max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="text-accent text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3">
          Campaign Simulator
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          营销活动模拟器
        </h2>
        <p className="text-muted max-w-lg mx-auto leading-relaxed text-xs sm:text-sm">
          点击下方标签，查看每个项目的核心策略逻辑与KPI爆发点——复现我在芒果TV期间的策划复盘方法论。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {/* ===== MOBILE: Horizontal scrollable tabs ===== */}
        <div className="md:hidden mb-5">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {campaignCases.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.08 * i }}
                onClick={() => {
                  setActiveId(c.id);
                  const el = scrollRef.current?.children[i] as HTMLElement;
                  el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                }}
                className={`shrink-0 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 whitespace-nowrap snap-start cursor-pointer ${
                  activeId === c.id
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-border bg-white text-muted hover:border-accent/40 active:bg-accent-light"
                }`}
              >
                {c.tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP: Left sidebar tags ===== */}
        <div className="hidden md:grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 flex flex-col gap-3">
            {campaignCases.map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                onClick={() => setActiveId(c.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                  activeId === c.id
                    ? "border-accent bg-accent-light shadow-sm"
                    : "border-border bg-white hover:border-accent/40 hover:bg-surface-hover"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      activeId === c.id
                        ? "bg-accent text-white"
                        : "bg-accent-light text-accent group-hover:bg-accent group-hover:text-white"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold transition-colors ${
                        activeId === c.id ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {c.tag}
                    </p>
                    <p className="text-xs text-muted-light mt-0.5">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Desktop: Right detail panel */}
          <div className="md:col-span-8">
            <DetailPanel active={active} />
          </div>
        </div>

        {/* ===== MOBILE: Detail panel below tabs ===== */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <DetailPanel active={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

function DetailPanel({
  active,
}: {
  active: (typeof campaignCases)[number];
}) {
  return (
    <div className="card p-4 sm:p-6 md:p-8 h-full">
      {/* Title */}
      <div className="mb-5 md:mb-6">
        <p className="text-xs text-accent font-medium tracking-wider uppercase mb-1">
          {active.subtitle}
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{active.title}</h3>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 md:mb-8">
        {active.kpi.map((k, j) => (
          <motion.div
            key={k.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.08 * j }}
            className="rounded-lg sm:rounded-xl bg-accent-light px-3 sm:px-4 py-3 sm:py-4 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + 0.08 * j }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-accent"
            >
              {k.value}
            </motion.p>
            <p className="text-xs text-muted-light mt-1">{k.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Strategy Logic */}
      <div className="mb-5 md:mb-6">
        <p className="text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          核心策略逻辑
        </p>
        <ul className="space-y-2.5">
          {active.strategy.map((s, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.08 * j }}
              className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2.5"
            >
              <span className="text-accent text-xs mt-0.5 shrink-0 font-mono">
                0{j + 1}
              </span>
              {s}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Insight Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="rounded-lg sm:rounded-xl border border-accent/20 bg-accent-light/50 p-4 sm:p-5"
      >
        <p className="text-xs text-accent font-semibold tracking-wider uppercase mb-2">
          Insight · 策略复盘
        </p>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {active.insight}
        </p>
      </motion.div>
    </div>
  );
}
