import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoteBookRobin",
  description: "study",
  base: '/RobinBlog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //顶部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Code', link: '/Code/FrontEnd/NVM' },
      { text: 'Job', link: '/Job/工商银行' },
      { text: 'Fun', link: '/Fun/ps5_game_recommendations' }, 
    ],

    sidebar: {
      //Code页面,代表Code文件夹，也就是Code文件夹（总文件夹）
      '/Code/': [
        //单个页面中的一个分栏，可以有多个分栏, 也就是多个文件夹
        {
          text: 'FrontEnd',
          collapsed: false,
          //每个分栏中可以有多个页面，也就是多个md文件
          items: [
            { text: 'NVM', link: '/Code/FrontEnd/NVM' },
            { text: 'React', link: '/Code/FrontEnd/React' },
            { text: 'vue', link: '/Code/FrontEnd/vue' }
          ]
        },
        {
          text: 'BackEnd',
          collapsed: false,
          items: [
            { text: 'Jenv', link: '/Code/BackEnd/Jenv' },
            { text: 'python', link: '/Code/BackEnd/python' },
            { text: 'Redis', link: '/Code/BackEnd/Redis' },
            { text: 'Springboot', link: '/Code/BackEnd/Springboot' }
          ]
        }
      ],
      //Job
      '/Job/': [
        { 
          text: '银行',
          collapsed: false, 
          items: [
            { text: '工商银行', link: '/Job/工商银行' }
          ]
        }
      ],
      '/Fun/': [
        {
          text: 'ps5',
          collapsed: false,
          items: [
            { text: 'ps5游戏推荐', link: '/Fun/ps5_game_recommendations' }
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
