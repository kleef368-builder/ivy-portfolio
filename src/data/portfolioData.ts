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
    "在校期间将镜头表现力与新媒体传播理论结合，系统学习传播数据分析与跨平台内容策略。具备双语（中英）沟通与主持能力，持续关注泛娱乐产业与青年文化趋势。",
};

export const skillCategories = [
  {
    title: "核心策略能力",
    icon: "strategy",
    skills: [
      "整合营销策划",
      "品牌矩阵搭建",
      "线下活动执行",
      "Z世代用户洞察",
      "跨平台传播策略",
    ],
  },
  {
    title: "出镜与内容实力",
    icon: "content",
    skills: [
      "双语播音主持",
      "电商直播控场",
      "影视剪辑技术",
      "热点文案创作",
      "短视频编导",
    ],
  },
  {
    title: "证书与工具",
    icon: "cert",
    skills: [
      "大学英语四级 (CET-4)",
      "普通话等级证书",
      "计算机二级 (MS Office)",
      "Excel 数据整理与分析",
      "剪映 / Premiere 剪辑",
    ],
  },
];

export interface CampaignHighlight {
  label: string;
  value: string;
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
      { label: "海外播放量", value: "近 2,000 万" },
      { label: "海外点赞", value: "100 万+" },
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

export interface CampaignCase {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  strategy: string[];
  kpi: { label: string; value: string }[];
  insight: string;
}

export const campaignCases: CampaignCase[] = [
  {
    id: "mango",
    tag: "芒果TV 多IP联动",
    title: "「你好，新同学」整合营销战役",
    subtitle: "芒果TV · 动感地带芒果卡项目",
    strategy: [
      "多IP联动矩阵：联动《歌手2025》《我们的宿舍》等顶级IP形成内容合力",
      "跨平台分发：微博话题 + 短视频切片 + 线下快闪三方共振",
      "热点借势：围绕开学季情绪共鸣，策划UGC互动话题",
    ],
    kpi: [
      { label: "微博话题阅读", value: "26.5 亿+" },
      { label: "话题讨论量", value: "559.4 万+" },
      { label: "单日人流", value: "2,000+" },
    ],
    insight:
      "核心逻辑：「IP矩阵 × 话题共振 × 线下体验」三层漏斗。用顶级IP内容在微博造势引流，用短视频切片在抖音/小红书做二次分发，用线下快闪创造高转化场景。",
  },
  {
    id: "ai-exhibition",
    tag: "线下AI互动展",
    title: "「六朝古都」城市策展",
    subtitle: "无限X演唱会预热 · 现象级线下体验",
    strategy: [
      "文旅+科技融合：将「六朝古都」历史与AI技术结合打造沉浸体验",
      "可交互装置：「文物AI互动」让用户通过手机与历史文物对话，「可交互诗词长廊」打造视觉打卡点",
      "社交裂变设计：每个装置天然具备打卡分享属性，引导UGC传播",
    ],
    kpi: [
      { label: "社交媒体曝光", value: "千万级" },
      { label: "到场参与人次", value: "万人级" },
      { label: "活动类型", value: "现象级城市事件" },
    ],
    insight:
      "核心逻辑：用「科技 × 文化」反差感制造话题。当千年文物遇上AI交互，天然具备传播基因。策展的关键在于让每个展项都成为「可拍照的内容」，让参与者成为品牌的二次传播节点。",
  },
  {
    id: "flash-mob",
    tag: "明星快闪办卡",
    title: "小红书开学博览会快闪",
    subtitle: "中大站 · 特邀嘉宾张雅琪互动",
    strategy: [
      "明星效应引流：特邀嘉宾张雅琪到场互动，快速聚集目标人群",
      "场景化体验设计：围绕「开学季」打造沉浸式体验，降低用户决策门槛",
      "即时转化链路：现场体验 → 即时办卡 → 社交分享，三步完成转化闭环",
    ],
    kpi: [
      { label: "单日人流", value: "2,000+" },
      { label: "办卡转化提升", value: "~40%" },
      { label: "特邀嘉宾", value: "张雅琪" },
    ],
    insight:
      "核心逻辑：「明星势能 × 场景体验 × 即时转化」。线下快闪的核心不是曝光量，而是转化效率。通过场景设计和明星互动降低用户心理防御，在情绪高点完成转化动作——这才是线下体验的护城河。",
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
