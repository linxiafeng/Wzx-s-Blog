module.exports = {
  title: "Wzx’s Blog",
  description: 'A simple a blog.',
  base:'/wzxblog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    /*用vssue 搞的评论模块，github一直登录不上*/
    // vssueConfig:{
    //   platform:'github',
    //   owner:'linxiafeng',
    //   repo:'docsComment',
    //   clientId:'f0fb6d033dd17568050b',
    //   clientSecret:'4690809ecfc2bdde318a7e15dd06ea1545ffa332'
    // },
    valineConfig:{
      appId: 'igRCCzChgsUjo3k8CMEhT2e2-gzGzoHsz',
      appKey: 'BwW5PPa8HmkZ4qMx9de2w4Bl'
    },
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs', 
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/linxiafeng', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/avatar.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'cabbage',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    /**
     * 密钥 (if your blog is private)
     */

    keyPage: {
      keys: ['e17387971e1a876715800d49172d00ca'],
      color: '#42b983',
      lineColor: '#42b983'
    }

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
