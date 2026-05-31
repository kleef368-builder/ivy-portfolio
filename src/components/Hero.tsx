"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolioData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af3720_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          variants={item}
          className="text-accent text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-6 md:mb-8"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 md:mb-8 text-foreground"
        >
          数据洞察市场，{" "}
          <br className="md:hidden" />
          <span className="text-accent">创意</span>引领传播
        </motion.h1>

        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg text-muted max-w-xl mx-auto mb-3 md:mb-4 leading-relaxed"
        >
          我是张且 (Ivy)，一名具备双语传播力的整合营销策略操盘手。
        </motion.p>

        <motion.p
          variants={item}
          className="text-xs sm:text-sm md:text-base text-muted-light max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          {siteConfig.bio}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-all duration-200"
          >
            查看核心经历
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-accent/30 text-accent font-medium text-sm hover:bg-accent-light transition-all duration-200"
          >
            Campaign Simulator
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-light hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
