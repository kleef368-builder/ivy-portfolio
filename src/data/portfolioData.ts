export const siteConfig = {
  name: "张且",
  nameEn: "Ivy Zhang",
  headline:
    "hi，我是张且。",
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
  douyinLink?: { label: string; url: string };
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

export interface ExternalLink {
  label: string;
  url: string;
  note?: string;
}

export interface XhsSection {
  label: string;
  url: string;
  video: ShowcaseVideo;
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
  showcaseTitle?: string;
  socialHandles?: SocialHandle[];
  viralVideos?: ViralVideo[];
  xhsSection?: XhsSection;
  externalLinks?: ExternalLink[];
  documents?: ExperienceDocument[];
}

export interface ExperienceDocument {
  label: string;
  name: string;
  path: string;
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
        title: "多平台0-1冷启动",
        bullets: [
          "独立负责抖音、小红书、TikTok、YouTube、Ins 五大平台账号",
          "从内容策划、拍摄剪辑到发布运营全流程主导",
        ],
      },
      {
        title: "爆款成绩",
        bullets: [
          "抖音总播放量 1957.4万+",
          "单条爆款视频于4月登上「影石产品看后搜」全网第一名，直接带动销售额",
          "Ins 单条视频点赞超 100万",
        ],
      },
      {
        title: "官方认可",
        bullets: [
          "视频被「学习强国」等国家级媒体转载报道",
        ],
      },
      {
        title: "全链路制作能力",
        bullets: [
          "所有作品均由本人独立完成创意构思、脚本撰写、出镜拍摄、后期剪辑",
          "具备全链路内容制作能力",
        ],
      },
    ],
    highlights: [
      { label: "抖音总播放量", value: "1,957.4万+" },
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
    showcaseTitle: "账号运营 / Social Media Operations",
    showcaseVideos: [
      {
        title: "曲奇日记",
        playLabel: "播放量：36.2万",
        likeLabel: "点赞量：2900",
        src: "/videos/insta360-1.mp4",
      },
      {
        title: "「曲奇日记」爆款视频",
        playLabel: "观看数：1859万+",
        likeLabel: "点赞量：67.2万，评论量：8104",
        src: "/videos/insta360-3.mp4",
        douyinLink: {
          label: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。",
          url: "https://v.douyin.com/a5aqxO0Qnbc/",
        },
      },
    ],
    xhsSection: {
      label: "我在小红书收获了5919次赞与收藏，来看看我的主页>>",
      url: "https://xhslink.com/m/8l7zx2v0Edl",
      video: {
        title: "小红书作品",
        playLabel: "观看数：118705",
        likeLabel: "点赞量：1587",
        src: "/videos/intsta360-5.mp4",
      },
    },
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
        title: "1️⃣ 整合营销策划 · 多IP联动",
        bullets: [
          '深度参与「你好，新同学」全国营销项目，协助规划"线上引流→线下激活→长尾留存"全周期传播节奏',
          "搭建 微博 + 小红书 + 小程序 跨平台内容矩阵，实现话题阅读量 26.5亿+、讨论量 559.4万+",
          "联动头部IP《歌手2025》《我们的宿舍》，每周策划现场采访选题并产出短视频，保障节目期持续热度",
        ],
      },
      {
        title: "2️⃣ 线下事件策划 · 高转化快闪",
        bullets: [
          '为「无限X演唱会」策划预热事件：参与「六朝古都」城市策展，创意落地"文物AI互动""可交互诗词长廊"，形成现象级城市话题',
          "策划执行 小红书开学博览会（中山大学站）快闪活动：完成主题策划→互动设计→现场执行→素材回收全流程，邀请嘉宾张雅琪到场，单日互动人流 2000+人次",
        ],
      },
      {
        title: "3️⃣ 内容运营 · 用户增长",
        bullets: [
          '独立负责「青春学长」创意宣发线：打造"学长报道"等爆款互动视频，获 1万+点赞',
          "策划微博明星话题 #比个耶继续前行#，带动阅读量 494.9万、讨论量 5.3万+",
          "从0搭建小红书追星向新号：单条视频点赞 5万+，1个月涨粉5000+，通过社群运营直接带动芒果卡拉新",
          "撰写品牌宣传片脚本、艺人官宣文案、公众号推文等多体裁内容，平均互动率提升30%",
        ],
      },
    ],
    highlights: [
      { label: "微博话题阅读量", value: "26.5 亿+" },
      { label: "讨论量", value: "559.4 万+" },
      { label: "单日互动人流", value: "2,000+" },
    ],
    externalLinks: [
      {
        label: "@芒果打工记📓 小红书主页",
        url: "https://xhslink.com/m/6hJmWth6bFf",
        note: "* 当时是刚创建从0开始做半个月涨粉5000+，主要体现社群运营能力",
      },
      {
        label: "「你好新同学」微博官方直达",
        url: "http://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%96%B0%E5%90%8C%E5%AD%A6%E8%B6%85%E7%BA%A7%E8%BF%8E%E6%96%B0%E5%AD%A3%23",
      },
      {
        label: "小红书开学博览会官方直达",
        url: "https://www.xiaohongshu.com/page/topics/68b172330029000000000001?fullscreen=true&naviHidden=yes&themeType=default&id=68b172330029000000000001&isUnicomKing=false&page_source=note_feed.click_new_big&rn_app=1&rn_deeplink=xhsdiscover%253A%252F%252Frn%252Fads-topic%252Fpage%253FthemeType%253Ddefault%2526id%253D68b172330029000000000001%2526isUnicomKing%253Dfalse%2526page_source%253Dnote_feed.click_new_big&xhsshare=CopyLink&appuid=6813306c000000000e0134a9&apptime=1780234252&share_id=4affd4fc64f04a99a40676557588c784",
      },
      {
        label: "两周年庆祝视频微博直达",
        url: "https://weibo.com/5333331234/5189326126189443",
      },
    ],
    documents: [
      {
        label: "「你好，新同学」动感地带芒果卡 · 完整策划案",
        name: "校园营销方案",
        path: "/docs/mango-campus.pdf",
      },
      {
        label: "「无限X演唱会」预热策划 · 完整方案",
        name: "演唱会预热方案",
        path: "/docs/mango-concert.pdf",
      },
    ],
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
      { label: "单条播放量", value: "500万+" },
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
    href: "mailto:ivy770707@qq.com",
    icon: "email",
    copyText: "ivy770707@qq.com",
  },
  {
    label: "WeChat",
    href: "#",
    icon: "wechat",
    copyText: "Ivyxwy11",
  },
];
