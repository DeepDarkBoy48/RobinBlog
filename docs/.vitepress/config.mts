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
      { text: 'study', link: '/FrontEnd/Springboot' },
      { text: 'job', link: '/job/' }
    ],

    sidebar: {
      '/FrontEnd/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '介绍', link: '/FrontEnd/Springboot' },
            { text: 'Markdown 示例', link: '/FrontEnd/vue' }
          ]
        },
        {
          text: 'VueLearn',
          collapsed: false,
          items: [
            { text: 'VueLearn', link: '/FrontEnd/vue' },  
            { text: 'Springboot', link: '/FrontEnd/Springboot' },
            { text: 'ps5', link: '/FrontEnd/ps5_game_recommendations' },
            { text: 'ob测试', link: '/FrontEnd/ob测试' }
          ]
        }
      ],
      
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
