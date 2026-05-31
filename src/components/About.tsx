"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education, skillCategories } from "@/data/portfolioData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const child = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const iconMap: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
    </svg>
  ),
  content: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  cert: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding md:section-padding-md max-w-6xl mx-auto" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
          关于我
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          播音主持出身，扎根营销实战
        </h2>
        <p className="text-muted max-w-xl mx-auto leading-relaxed text-sm">
          用镜头表现力与数据洞察力，为品牌讲好每一个故事
        </p>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 md:gap-14">
        {/* Left: Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2"
        >
          <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted mb-5">
            教育背景
          </h3>
          <div className="card p-6 space-y-4">
            <div>
              <p className="font-semibold text-lg leading-snug">{education.school}</p>
              <p className="text-sm text-muted mt-1">
                {education.major}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs px-3 py-1 rounded-full bg-accent-light text-accent font-medium">
                  {education.degree}
                </span>
                <span className="text-xs text-muted-light">{education.graduation}</span>
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-3"
        >
          <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-muted mb-5">
            核心能力
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {skillCategories.map((category) => (
              <div key={category.title} className="card p-4 md:p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-accent">{iconMap[category.icon]}</span>
                  <p className="text-sm font-semibold">{category.title}</p>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="flex flex-col gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={child}
                      className="text-sm text-muted flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-accent/40 before:shrink-0"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
