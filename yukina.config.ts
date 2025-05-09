import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  // 网站标题
  title: "Wuhx",
  // 网站副标题
  subTitle: "——blog",
  // 品牌标题
  brandTitle: "Wuhx",

  // 网站描述
  description: "Demo Site",

  // 网站URL
  site: "https://xinhuiwu914.github.io/",

  // 设置网站语言和日期格式
  locale: "zh-CN",

  // 导航栏配置
  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/WhitePaper233/yukina",
    },
  ],

  // 用户名
  username: "Wuhx",
  // 个人签名
  sign: "Hello World.",
  // 头像URL
  avatarUrl: "/images/avatar.jpg",
  // 社交媒体链接
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/xinhuiwu914",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/3461579987225035?spm_id_from=333.1007.0.0",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "biowhx@gmail.com",
    },//这个地方可以换gmail
  ],
  // 侧边栏分类显示的最大数量（建议设置为2和3的公倍数）
  maxSidebarCategoryChip: 6,
  // 侧边栏标签显示的最大数量
  maxSidebarTagChip: 12,
  // 页脚分类显示的最大数量
  maxFooterCategoryChip: 6,
  // 页脚标签显示的最大数量
  maxFooterTagChip: 24,

  // 轮播图图片URL列表
  banners: [
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  ],

  // URL模式：'RAW' 原始模式 | 'HASH' 哈希模式
  slugMode: "HASH",

  // 许可证信息
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // 轮播图样式：'LOOP' 循环 | 'STATIC' 静态 | 'HIDDEN' 隐藏
  bannerStyle: "LOOP",
};

export default YukinaConfig;
