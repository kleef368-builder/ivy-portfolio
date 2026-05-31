"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolioData";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding md:section-padding-md max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
          核心实战经历
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          从大厂策展到国际电商实战
        </h2>
        <p className="text-muted max-w-xl mx-auto leading-relaxed text-sm">
          每一段经历都代表了一次从 0 到 1 的品牌传播突破
        </p>
      </motion.div>

      <div className="flex flex-col gap-6 md:gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 * i }}
          >
            <div className="card-hover overflow-hidden">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-6 md:px-8 pt-5 md:pt-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0"
                    style={{ background: exp.color }}
                  >
                    {exp.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold">{exp.company}</h3>
                      <span className="text-xs text-muted-light">|</span>
                      <span className="text-sm text-muted font-medium">
                        {exp.role}
                      </span>
                    </div>
                    <p className="text-xs text-muted-light mt-0.5">{exp.period}</p>
                  </div>
                </div>
              </div>

              {/* KPI Highlights Bar */}
              <div className="mx-4 sm:mx-6 md:mx-8 mt-5 mb-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {exp.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-lg sm:rounded-xl bg-accent-light px-3 sm:px-4 py-2.5 sm:py-3 text-center"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent leading-tight">
                        {h.value}
                      </p>
                      <p className="text-xs text-muted-light mt-1 leading-tight">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Detail Sections */}
              <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {exp.sections.map((section) => (
                    <div key={section.title}>
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: exp.color }}
                        />
                        {section.title}
                      </p>
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-muted-light mt-1 shrink-0">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
