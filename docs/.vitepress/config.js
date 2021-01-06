module.exports = {
  lang: 'zh-CN',
  title: 'BFChain 开发者社区',
  description: '为开发者提供全方位服务和工具，帮助构建区块链生态体系。',

  themeConfig: {
    repo: 'implement-bfchain-org/bbfc.dev-test',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑',
    lastUpdated: '最近更新',

    // algolia: {
    //   apiKey: '5d42198c0c46b52f3bb45b0185a72c45',
    //   indexName: 'vitepress'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '教程', link: '/01.guide/' },
      { text: 'API 参考', link: '/02.api/' },
      { text: '社区问答', link: 'https://qa.bfcc.dev/' }
    ],

    sidebar: {
      '/01.guide/': 'auto',
      '/02.api/': getAPISidebar()
    }
  }
}

function getAPISidebar () {
  return [
    {
      text: '接口列表',
      children: [
        { text: '接口传入参数和返回参数说明', link: '/02.api/1.1' },
        { text: '基础接口使用说明', link: '/02.api/1.2' },
        { text: '发送事件接口使用说明', link: '/02.api/1.3' },
        { text: '节点管理接口使用说明', link: '/02.api/1.4' }
      ]
    },
    {
      text: '调用方式以及示例',
      children: [
        { text: '命令行工具', link: '/02.api/2.1' },
        { text: 'Websocket', link: '/02.api/2.2' },
        { text: 'Grpc', link: '/02.api/2.3' },
        { text: 'SDK', link: '/02.api/2.4' }
      ]
    }
  ]
}

// function getGuideSidebar () {
//   return [
//     {
//       text: '指南',
//       children: [
//         { text: '简介', link: '/01.guide/01.intro' },
//         { text: '阅读对象', link: '/01.guide/02.user' },
//         { text: '运行安装', link: '/guide/configuration' },
//         { text: '节点部署', link: '/guide/assets' },
//         { text: '常见问题', link: '/guide/markdown' },
//         { text: '名词解释', link: '/guide/deploy' }
//       ]
//     }
//   ]
// }
