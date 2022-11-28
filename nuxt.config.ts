import { resolve } from 'path'

export default defineNuxtConfig({
  // sccoped system configuration
  alias: {
    // https://nuxtjs.org/docs/configuration-glossary/configuration-alias
    '~~': resolve(__dirname, './'),
    'img': '~~/src/asset/image',
  },
  dir: {
    // https://nuxtjs.org/docs/configuration-glossary/configuration-dir/
    pages: 'app/page',
    layouts: 'src/layout',
    assets: 'src/asset',
  },
  modules: [
    // https://nuxtjs.org/docs/configuration-glossary/configuration-modules
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: [
    // https://nuxtjs.org/docs/configuration-glossary/configuration-css
    '@unocss/reset/tailwind.css',
  ],

  // unscoped system configuration
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },

  // depnency configuration
  colorMode: {
    classSuffix: '',
  },
})
