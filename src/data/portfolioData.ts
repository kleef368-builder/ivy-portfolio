export const siteConfig = {
  name: "张且",
  nameEn: "Ivy Zhang",
  email: "ivyzhang@example.com",
  headline:
    "数据洞察市场，创意引领传播。我是张且 (Ivy)，一名具备双语传播力的整合营销策略操盘手。",
  bio: "毕业于广东外语外贸大学南国商学院双语播音与主持艺术专业。我将独特的镜头表现力与硬核的新媒体传播、传播数据分析能力相结合。擅长从 0 到 1 搭建跨平台传播矩阵、策划现象级线下快闪事件，拥有顶级泛娱乐大厂与国际电商的实战操盘经验，致力于为品牌创造具有Z世代共鸣的整合营销方案。",
  tagline: "品牌市场 · 整合营销 · 泛娱乐公关",
};

export const education = {
  school: "广东外语外贸大学南国商学院",
  major: "双语播音与主持艺术（新媒體傳播與數據分析方向）",
  graduation: "2027 届",
  degree: "本科",
  description:
    "主修课程：新媒体传播、播音主持实务、影视剪辑技术、传播数据分析",
};

export const skillCategories = [
  {
    title: "营销策划与执行",
    icon: "marketing",
    skills: [
      "整合营销策划",
      "品牌矩阵搭建",
      "线下活动执行",
      "Z世代用户洞察",
      "跨平台传播策略",
    ],
  },
  {
    title: "内容策划与运营",
    icon: "content",
    skills: [
      "热点文案创作",
      "短视频编导",
      "社交媒体运营",
      "TikTok / 抖音内容生态",
      "数据驱动选题优化",
    ],
  },
  {
    title: "剪辑 / 拍摄 / 编导",
    icon: "production",
    skills: [
      "Premiere / 剪映专业剪辑",
      "影视拍摄与构图",
      "短视频节奏把控",
      "多机位切换与导播",
      "后期调色与字幕包装",
    ],
  },
  {
    title: "出镜模特 / 带货主播 / 主持",
    icon: "host",
    skills: [
      "双语播音主持",
      "电商直播控场",
      "镜头表现力与形体",
      "品牌形象代言出镜",
      "现场互动与临场应变",
    ],
  },
];

export interface CampaignHighlight {
  label: string;
  value: string;
}

export interface AccountLink {
  label: string;
  platform: string;
  url: string;
}

export interface ShowcaseVideo {
  title: string;
  playLabel: string;
  likeLabel: string;
  src: string;
  poster?: string;
}

export interface StrategyInsight {
  title: string;
  strategy: string[];
  insight: string;
}

export interface ExperienceDocument {
  label: string;
  name: string;
  path: string;
}

export interface SocialHandle {
  platform: string;
  handle: string;
  url: string;
}

export interface ViralVideo {
  title: string;
  dataLabel: string;
  url: string;
  cover: string;
}

export interface DashboardImage {
  label: string;
  src: string;
}

export interface ExperienceEntry {
  company: string;
  companySub: string;
  role: string;
  period: string;
  color: string;
  logo: string;
  sections: {
    title: string;
    bullets: string[];
  }[];
  highlights: CampaignHighlight[];
  accountLinks?: AccountLink[];
  showcaseVideos?: ShowcaseVideo[];
  strategyInsight?: StrategyInsight;
  documents?: ExperienceDocument[];
  wechatArticle?: { label: string; url: string };
  dashboardImages?: DashboardImage[];
  socialHandles?: SocialHandle[];
  viralVideos?: ViralVideo[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "影石 Insta360",
    companySub: "Insta360",
    role: "UGC 内容创作与全球化账号孵化",
    period: "2026.03 – 至今",
    color: "#F5A623",
    logo: "IS",
    sections: [
      {
        title: "全球双端爆款操盘",
        bullets: [
          "负责国内抖音及海外多平台账号 0-1 冷启动孵化",
          "精准洞察国内外用户偏好差异，制定全球化差异化选题策略",
          "于国内抖音打造现象级爆款，「曲奇日记」账号粉丝快速突破 4,000+",
        ],
      },
      {
        title: "官方主流媒体认证",
        bullets: [
          "优质原创内容凭借极高的社会价值与创意深度获得权威认可",
          "被「学习强国」等国家级官方主流媒体转载与专题报道",
        ],
      },
      {
        title: "海外多跨度破圈",
        bullets: [
          "海外多平台运营表现优异，验证跨文化 Z 世代青年传播模型",
          "成功跨越地域与文化壁垒，实现真正意义上的全球化内容破圈",
        ],
      },
    ],
    highlights: [
      { label: "抖音播放量", value: "1,851.5 万+" },
      { label: "抖音点赞", value: "68.5 万+" },
      { label: "Instagram 单条点赞超", value: "100w" },
    ],
    accountLinks: [
      {
        label: "曲奇日记",
        platform: "抖音",
        url: "https://www.douyin.com/user/self",
      },
    ],
    showcaseVideos: [
      {
        title: "曲奇日记 · 现象级爆款",
        playLabel: "1,851.5 万次播放",
        likeLabel: "68.5 万点赞",
        src: "/videos/insta360-1.mp4",
      },
      {
        title: "全球品牌内容力",
        playLabel: "多平台矩阵曝光",
        likeLabel: "高互动转化",
        src: "/videos/insta360-3.mp4",
      },
    ],
    dashboardImages: [
      {
        label: "运营后台数据实况",
        src: "/images/insta360-dashboard.jpg",
      },
      {
        label: "运营后台数据实况 II",
        src: "/images/insta360-dashboard1.jpg",
      },
    ],
    socialHandles: [
      {
        platform: "Instagram",
        handle: "@maaax_lee",
        url: "https://www.instagram.com/maaax_lee/",
      },
      {
        platform: "YouTube",
        handle: "@maaax_lee",
        url: "https://www.youtube.com/@maaax_lee",
      },
      {
        platform: "TikTok",
        handle: "@maaax_lee",
        url: "https://www.tiktok.com/@maaax_lee",
      },
    ],
    viralVideos: [
      {
        title: "Instagram 爆款",
        dataLabel: "🔥 Instagram 点赞超 100 万现象级爆款",
        url: "https://www.instagram.com/p/DW0_9TXCaWu/",
        cover: "/images/ins-cover.jpg",
      },
      {
        title: "YouTube Shorts",
        dataLabel: "🚀 YouTube Shorts 核心高流作品",
        url: "https://www.youtube.com/shorts/BixQ-7XgsKg",
        cover: "/images/yt-cover.jpg",
      },
    ],
  },
  {
    company: "芒果TV",
    companySub: "芒果TV",
    role: "营销策划",
    period: "2025.07 – 2025.09",
    color: "#FF6A00",
    logo: "MG",
    sections: [
      {
        title: "整合营销与矩阵搭建",
        bullets: [
          "深度参与「你好，新同学」全国营销项目，搭建跨平台内容矩阵",
          "联动《歌手2025》《我们的宿舍》等顶级IP，负责每週現场采访选题与录製跟进，产出爆款短视频",
        ],
      },
      {
        title: "现象级城市策展",
        bullets: [
          "主導「无限X演唱会」预热宣传，策划「六朝古都」线下快闪",
          "打造「文物AI互动」与「可交互诗词长廊」，引爆城市话题",
        ],
      },
      {
        title: "线下快闪高转化",
        bullets: [
          "策划执行小红书开学博览会（中大站）线下快闪，特邀嘉宾张雅琪互动",
        ],
      },
    ],
    highlights: [
      { label: "微博话题阅读量", value: "26.5 亿+" },
      { label: "讨论量", value: "559.4 万+" },
      { label: "单日互动人流", value: "2,000+" },
      { label: "办卡转化率提升", value: "~40%" },
    ],
    documents: [
      {
        label: "「你好，新同学」策划案",
        name: "校园营销方案",
        path: "/docs/mango-campus.pdf",
      },
      {
        label: "「无限X演唱会」策划案",
        name: "演唱会预热方案",
        path: "/docs/mango-concert.pdf",
      },
    ],
    wechatArticle: {
      label: "微信公众号复盘推文",
      url: "https://mp.weixin.qq.com/",
    },
    strategyInsight: {
      title: "「你好，新同学」整合营销战役",
      strategy: [
        "多IP联动矩阵：联动《歌手2025》《我们的宿舍》等顶级IP形成内容合力",
        "跨平台分发：微博话题 + 短视频切片 + 线下快闪三方共振",
        "热点借势：围绕开学季情绪共鸣，策划UGC互动话题",
      ],
      insight:
        "核心逻辑：「IP矩阵 × 话题共振 × 线下体验」三层漏斗。用顶级IP内容在微博造势引流，用短视频切片在抖音/小红书做二次分发，用线下快闪创造高转化场景。",
    },
  },
  {
    company: "国际电商",
    companySub: "TikTok",
    role: "短视频内容创作",
    period: "2025.02 – 至今",
    color: "#00D4AA",
    logo: "TT",
    sections: [
      {
        title: "爆款内容打造",
        bullets: [
          "操盘 TikTok 短视频内容矩阵，深耕青年文化垂类",
          "结合哪吒IP等热点话题进行创意内容策划与执行",
        ],
      },
      {
        title: "数据驱动变现",
        bullets: [
          "分析用户行为数据优化选品策略与内容节奏",
          "建立内容-转化数据模型，推动销售持续增长",
        ],
      },
    ],
    highlights: [
      { label: "2周涨粉", value: "5,000+" },
      { label: "单条播放量", value: "10 万+" },
      { label: "单月销售额增长", value: "30%" },
    ],
  },
  {
    company: "FILA",
    companySub: "斐乐",
    role: "电商主播",
    period: "2024.09 – 2025.11",
    color: "#1E3A5F",
    logo: "FL",
    sections: [
      {
        title: "官方渠道日播",
        bullets: [
          "负责品牌抖音官方帐号渠道日播（场均 4 小时）",
          "保持高水准的镜头表现力与产品讲解节奏",
        ],
      },
      {
        title: "数据复盘优化",
        bullets: [
          "协同团队进行直播数据复盘，优化货品组合与话术节奏",
          "助力大促期间达成销售目标，积累品牌电商实战经验",
        ],
      },
    ],
    highlights: [
      { label: "场均 GMV", value: "5 万元+" },
      { label: "场均直播时长", value: "4 小时" },
    ],
  },
];

export const socials = [
  {
    label: "Email",
    href: "mailto:ivyzhang@example.com",
    icon: "email",
  },
  {
    label: "WeChat",
    href: "#",
    icon: "wechat",
    copyText: "ivyzhang_wechat",
  },
];
