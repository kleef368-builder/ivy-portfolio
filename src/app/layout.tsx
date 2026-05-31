import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "张且 Ivy Zhang | 品牌市场 · 整合营销 · 泛娱乐公关",
  description:
    "张且 (Ivy) 个人作品集 — 具备双语传播力的整合营销策略操盘手。芒果TV 26.5亿级项目经验，FILA官方直播，TikTok海外爆款操盘。专注于泛娱乐与青年文化方向的品牌营销。",
  keywords: [
    "张且", "Ivy Zhang", "品牌营销", "整合营销", "公关",
    "泛娱乐", "青年文化", "芒果TV", "FILA", "TikTok",
    "营销策划", "电商直播", "内容运营", "portfolio",
  ],
  openGraph: {
    title: "张且 Ivy Zhang | 品牌市场 · 整合营销 · 泛娱乐公关",
    description:
      "数据洞察市场，创意引领传播。具备双语传播力的整合营销策略操盘手。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
