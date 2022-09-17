import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vue-base-tooltip/',
  title: 'Vue BaseTooltip',
  description: 'Basic, performant Vue tooltip directive.',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Guide',
            items: [
              { text: 'Get Started', link: '/guide' },
              { text: 'Configuration', link: '/guide/configuration' },
              { text: 'Styling', link: '/guide/styling' },
            ],
          },
          {
            text: 'Examples',
            items: [
              { text: 'Custom Styling', link: '/examples/custom-styling' },
              { text: 'Placement', link: '/examples/placement' },
              { text: 'Delay', link: '/examples/delay' },
              { text: 'Offset', link: '/examples/offset' },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Styling', link: '/guide/styling' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Custom Styling', link: '/examples/custom-styling' },
          { text: 'Placement', link: '/examples/placement' },
          { text: 'Delay', link: '/examples/delay' },
          { text: 'Offset', link: '/examples/offset' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CarlLDreyer/vue-base-tooltip' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Carl Lidström Dreyer',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Carl Lidström Dreyer' }],
    ['meta', { property: 'og:title', content: 'Vue BaseTooltip' }],
    ['meta', { property: 'og:description', content: 'Basic, performant Vue tooltip directive.' }],
  ],
})
