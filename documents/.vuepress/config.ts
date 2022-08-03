import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/fe-starter/",
  lang: "zh-CN",
  title: "前端笔记",
  description: "学前端的日记",
  theme: defaultTheme({
    notFound: ["404 Not Found"],
    navbar: [
    ],
    sidebar: [
      "basic.md",
      "advanced.md",
      "selected.md",
      "handwritten.md",
      "principle.md",
      "interview.md",
    ],
  }),
});
