"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "TypeScript", "JavaScript", "React", "Next.js", "Vue.js",
  "Tailwind CSS", "Node.js", "HTML/CSS", "Figma",
  "Git", "REST APIs", "GraphQL", "Jest", "Docker",
  "Responsive Design", "Accessibility", "CI/CD", "Agile",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32 max-w-5xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Turning ideas into{" "}
          <span className="text-gradient">polished products</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            <div className="glass rounded-xl p-5">
              <p className="font-medium">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted mt-1">University Name &mdash; 2022 &ndash; 2026</p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                Focused on software engineering, human-computer interaction, and web technologies.
                Active member of the university&apos;s coding club and hackathon organizer.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-10 mb-4">My Approach</h3>
          <p className="text-muted leading-relaxed">
            I believe great software starts with empathy for the user. Every pixel,
            every interaction, and every line of code should serve a purpose. I&apos;m
            passionate about bridging the gap between design and engineering —
            turning static mockups into living, breathing experiences that feel
            intuitive and look stunning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Skills &amp; Tools</h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={child}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm border border-white/10 bg-white/[0.03] hover:bg-accent/10 hover:border-accent/30 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
