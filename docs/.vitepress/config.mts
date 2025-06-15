import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoteBookRobin",
  description: "study",
  base: '/RobinBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/introduction' },
      { text: '参考', link: '/reference/site-config' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: 'Markdown 示例', link: '/guide/markdown-examples' }
          ]
        },
        {
          text: 'VueLearn',
          collapsed: false,
          items: [
            { text: 'VueLearn1', link: '/guide/vuelearn/vue1' },
            { text: 'VueLearn2', link: '/guide/vuelearn/vue2' },
            { text: 'Springboot', link: '/guide/vuelearn/Springboot' },
            { text: 'ps5', link: '/guide/vuelearn/ps5_game_recommendations' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          collapsed: false,
          items: [
            { text: '站点配置', link: '/reference/site-config' },
            { text: 'API 示例', link: '/reference/api-examples' }
          ]
        }
      ]
    },

    // 让目录从1开始，并且显示到6级
    outline: {
      level: [1, 6],
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
