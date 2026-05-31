"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/data/portfolioData";
import type { AccountLink, ShowcaseVideo, SocialHandle, ViralVideo, ExternalLink, XhsSection, ExperienceDocument } from "@/data/portfolioData";

/* ========== Sub-components ========== */

function AccountBadges({ links, color }: { links: AccountLink[]; color: string }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {links.map((link) => (
        <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-white text-xs sm:text-sm text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent-light/50 active:scale-95 transition-all duration-200">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
          <span className="font-medium">{link.platform}</span>
          <span className="text-muted-light">·</span>
          <span>{link.label}</span>
          <svg className="w-3 h-3 text-muted-light group-hover:text-accent transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      ))}
    </div>
  );
}

function VideoCard({ video }: { video: ShowcaseVideo; color: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => { videoRef.current?.play(); setPlaying(true); };
  const handlePause = () => { videoRef.current?.pause(); setPlaying(false); };

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden bg-black/5 border border-border group/video">
        <video ref={videoRef} src={video.src} muted loop playsInline preload="metadata"
          className="w-full aspect-[9/16] object-cover cursor-pointer" onClick={handlePause} />
        {!playing && (
          <button onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 hover:bg-black/25 transition-colors cursor-pointer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-sm sm:text-base font-bold text-white tracking-wide drop-shadow-md">{video.title}</span>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">{video.playLabel}</span>
                <span className="text-xs sm:text-sm font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">{video.likeLabel}</span>
              </div>
            </div>
          </button>
        )}
        {playing && (
          <div onClick={handlePause} className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium">播放中</span>
          </div>
        )}
      </div>
      {video.douyinLink && (
        <a href={video.douyinLink.url} target="_blank" rel="noopener noreferrer"
          className="mt-2 block text-xs text-muted-light hover:text-accent transition-colors leading-relaxed">
          {video.douyinLink.label} {video.douyinLink.url}
        </a>
      )}
    </div>
  );
}

function SocialHandles({ handles, color }: { handles: SocialHandle[]; color: string }) {
  const platformIcons: Record<string, React.ReactNode> = {
    Instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    YouTube: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    TikTok: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5">
      {handles.map((h) => (
        <a key={h.platform} href={h.url} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent-light/50 active:scale-95 transition-all duration-200">
          <span className="text-muted-light group-hover:text-foreground transition-colors">
            {platformIcons[h.platform] || null}
          </span>
          <span className="font-medium">{h.platform}</span>
          <span className="text-muted-light hidden sm:inline">{h.handle}</span>
          <svg className="w-3 h-3 text-muted-light group-hover:text-accent transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      ))}
    </div>
  );
}

function ViralVideoCards({ videos }: { videos: ViralVideo[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {videos.map((v) => (
        <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer"
          className="group block rounded-xl overflow-hidden border border-border bg-white hover:border-accent/50 hover:shadow-md transition-all duration-300">
          <div className="aspect-[16/9] overflow-hidden bg-black/5 relative">
            <img src={v.cover} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 text-foreground ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">{v.title}</p>
            <p className="text-xs text-muted-light">{v.dataLabel}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

function ExternalLinks({ links, color }: { links: ExternalLink[]; color: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      {links.map((link) => (
        <div key={link.url}>
          <a href={link.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent-light/50 active:scale-95 transition-all duration-200">
            <svg className="w-3.5 h-3.5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
            <span className="font-medium">{link.label}</span>
          </a>
          {link.note && (
            <p className="text-xs text-muted-light mt-1 ml-1">{link.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function XhsBlock({ xhs, color }: { xhs: XhsSection; color: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => { videoRef.current?.play(); setPlaying(true); };
  const handlePause = () => { videoRef.current?.pause(); setPlaying(false); };

  return (
    <div className="space-y-3">
      <a href={xhs.url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-white text-xs sm:text-sm text-muted hover:text-foreground hover:border-accent/50 hover:bg-accent-light/50 active:scale-95 transition-all duration-200">
        <span className="text-sm shrink-0">📕</span>
        <span className="font-medium">{xhs.label}</span>
        <svg className="w-3 h-3 shrink-0 text-muted-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <div className="relative rounded-xl overflow-hidden bg-black/5 border border-border group/video max-w-sm">
        <video ref={videoRef} src={xhs.video.src} muted loop playsInline preload="metadata"
          className="w-full aspect-[9/16] object-cover cursor-pointer" onClick={handlePause} />
        {!playing && (
          <button onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 hover:bg-black/25 transition-colors cursor-pointer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg mb-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-foreground ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm sm:text-base font-bold text-white tracking-wide drop-shadow-md">{xhs.video.title}</span>
              <span className="text-xs font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full">{xhs.video.playLabel}</span>
              <span className="text-xs font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full">{xhs.video.likeLabel}</span>
            </div>
          </button>
        )}
        {playing && (
          <div onClick={handlePause} className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80 font-medium">播放中</span>
          </div>
        )}
      </div>
    </div>
  );
}

function InlinePdfViewer({ docs, color }: { docs: ExperienceDocument[]; color: string }) {
  return (
    <div className="flex flex-col gap-4">
      {docs.map((doc) => (
        <div key={doc.path}>
          <p className="text-sm font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
            {doc.label}
          </p>
          <iframe
            src={doc.path}
            className="w-full h-[500px] sm:h-[600px] border border-border rounded-xl shadow-sm"
            title={doc.label}
          />
        </div>
      ))}
    </div>
  );
}

/* ========== Main Experience Section ========== */

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding md:section-padding-md max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">核心实战经历</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">从大厂策展到国际电商实战</h2>
        <p className="text-muted max-w-xl mx-auto leading-relaxed text-sm">每一段经历都代表了一次从 0 到 1 的品牌传播突破</p>
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
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0"
                    style={{ background: exp.color }}>
                    {exp.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold">{exp.company}</h3>
                      <span className="text-xs text-muted-light">|</span>
                      <span className="text-sm text-muted font-medium">{exp.role}</span>
                    </div>
                    <p className="text-xs text-muted-light mt-0.5">{exp.period}</p>
                  </div>
                </div>
              </div>

              {/* Account Badges */}
              {exp.accountLinks && exp.accountLinks.length > 0 && (
                <div className="px-4 sm:px-6 md:px-8 mt-4">
                  <AccountBadges links={exp.accountLinks} color={exp.color} />
                </div>
              )}

              {/* KPI Highlights Bar */}
              <div className="mx-4 sm:mx-6 md:mx-8 mt-5 mb-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {exp.highlights.map((h) => (
                    <div key={h.label} className="rounded-lg sm:rounded-xl bg-accent-light px-3 sm:px-4 py-2.5 sm:py-3 text-center">
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent leading-tight">{h.value}</p>
                      <p className="text-xs text-muted-light mt-1 leading-tight">{h.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Detail Sections */}
              <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {exp.sections.map((section) => (
                    <div key={section.title}>
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                        {section.title}
                      </p>
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, j) => (
                          <li key={j} className="text-sm text-muted leading-relaxed flex items-start gap-2">
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

              {/* Mango TV: External Links */}
              {exp.externalLinks && exp.externalLinks.length > 0 && (
                <>
                  <div className="border-t border-border" />
                  <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                    <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                      实证跳转 · 直达入口
                    </p>
                    <ExternalLinks links={exp.externalLinks} color={exp.color} />
                  </div>
                </>
              )}

              {/* Mango TV: Inline PDF Viewer */}
              {exp.documents && exp.documents.length > 0 && (
                <>
                  <div className="border-t border-border" />
                  <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                      完整策划案 · 在线预览
                    </p>
                    <InlinePdfViewer docs={exp.documents} color={exp.color} />
                  </div>
                </>
              )}

              {/* Insta360: Video Showcase */}
              {exp.showcaseVideos && exp.showcaseVideos.length > 0 && (
                <>
                  <div className="border-t border-border" />
                  <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                    {/* Title + Douyin link inline */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <p className="text-sm font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                        {exp.showcaseTitle || "爆款作品微展厅"}
                      </p>
                      {exp.showcaseVideos.some((v) => v.douyinLink) && (
                        <a
                          href={exp.showcaseVideos.find((v) => v.douyinLink)!.douyinLink!.url}
                          target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-accent bg-white text-xs text-accent font-medium hover:bg-accent-light active:scale-95 transition-all duration-200 whitespace-nowrap"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                          打开抖音查看TA的更多作品
                        </a>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.showcaseVideos.map((v) => (
                        <VideoCard key={v.src} video={v} color={exp.color} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Insta360: XHS Section */}
              {exp.xhsSection && (
                <>
                  <div className="border-t border-border" />
                  <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6">
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                      小红书运营
                    </p>
                    <XhsBlock xhs={exp.xhsSection} color={exp.color} />
                  </div>
                </>
              )}

              {/* Insta360: Global Social Proof Hub */}
              {exp.socialHandles && exp.socialHandles.length > 0 && (
                <>
                  <div className="border-t border-border" />
                  <div className="px-4 sm:px-6 md:px-8 py-4 md:py-6 space-y-5">
                    <div>
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                        Official Handles · 海外官方矩阵直达
                      </p>
                      <SocialHandles handles={exp.socialHandles} color={exp.color} />
                    </div>

                    {exp.viralVideos && exp.viralVideos.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                          Viral Video Links · 现象级单品高光
                        </p>
                        <ViralVideoCards videos={exp.viralVideos} />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
