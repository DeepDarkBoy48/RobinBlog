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
      { text: 'study', link: '/FrontEnd/Springboot' },
      { text: 'work', link: '/work/工商银行' }
    ],

    sidebar: {
      //FrontEnd页面,代表FrontEnd文件夹
      '/FrontEnd1/': [
        //单个页面中的一个分栏，可以有多个分栏
        //FrontEnd分栏
        {
          text: 'FrontEnd',
          collapsed: false,
          //每个分栏中可以有多个子项
          items: [
            { text: 'vue', link: '/FrontEnd/vue' }
          ]
        },
        //BackEnd分栏
        {
          text: 'BackEnd',
          collapsed: false,
          //每个分栏中可以有多个子项
          items: [
            { text: 'springboot', link: '/BackEnd/Springboot' }
          ]
        }
      ],

      //work页面
      '/work/': [
        { 
          text: '银行',
          collapsed: false, 
          items: [
            { text: '工商银行', link: '/work/工商银行' }
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
