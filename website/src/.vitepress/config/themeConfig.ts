import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'

const themeConfig: DefaultTheme.Config = {

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'slack',
      link: 'https://hackclub.slack.com/archives/C09A63LQG76',
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'hackclub',
      link: 'https://hackclub.com/',
      ariaLabel: 'Hackclub',
    },
  ],

  footer: {
    message: '<a href="https://github.com/mihranrazaa/typeline-ysws" target="_blank">Typeline-YSWS</a> <span class="divider">|</span> <a href="https://github.com/aniyomiorg/aniyomi-website">Base Project</a>',
    copyright: ` ${new Date().getFullYear()} <a href="https://toolbox.hackclub.com/?category=YSWSs&query=">Hackclub</a>`,
  },

  editLink: {
    pattern: 'https://github.com/mihranrazaa/typeline-ysws/tree/master/website/src/:path',
    text: 'Help us improve this page',
  },



  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },

  search: {
    provider: 'local',
  },
}

export default themeConfig
