import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'

const themeConfig: DefaultTheme.Config = {

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/mihranrazaa/typeline-ysws',
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'hackclub',
      link: 'https://hackclub.com/',
      ariaLabel: 'Hackclub',
    },
  ],

  footer: {
    message: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="https://github.com/aniyomiorg/aniyomi-website">Base Project</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Typeline-YSWS`,
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
