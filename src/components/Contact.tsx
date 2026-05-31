"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { socials } from "@/data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  ),
  wechat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18z" />
    </svg>
  ),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleSocialClick = (social: (typeof socials)[0]) => {
    if (social.copyText) {
      navigator.clipboard.writeText(social.copyText);
      setCopiedLabel(social.label);
      setTimeout(() => setCopiedLabel(null), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding md:section-padding-md max-w-3xl mx-auto"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          联系我
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
          期待与你交流
        </h2>
        <p className="text-sm text-muted max-w-lg mx-auto mb-8 md:mb-12 leading-relaxed">
          目前正在寻找品牌市场 / 整合营销方向的机会。无论是项目合作、岗位推荐，还是想交流泛娱乐营销心得——都欢迎随时联系。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
      >
        {socials.map((social) => (
          <div key={social.label}>
            {social.copyText && social.href === "#" ? (
              <button
                onClick={() => handleSocialClick(social)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 card-hover text-muted hover:text-foreground transition-colors group cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-accent">
                  {iconMap[social.icon]}
                </span>
                <span className="text-sm">
                  {copiedLabel === social.label
                    ? "已复制！"
                    : `${social.label}: ${social.copyText}`}
                </span>
              </button>
            ) : social.copyText ? (
              <a
                href={social.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 card-hover text-muted hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-accent">
                  {iconMap[social.icon]}
                </span>
                <span className="text-sm">{social.label}: {social.copyText}</span>
              </a>
            ) : (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 card-hover text-muted hover:text-foreground transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-accent-light flex items-center justify-center text-accent">
                  {iconMap[social.icon]}
                </span>
                <span className="text-sm">{social.label}</span>
              </a>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
