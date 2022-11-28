import { resolve } from 'path'

export default defineNuxtConfig({
  // sccoped system configuration
  alias: {
    // https://nuxtjs.org/docs/configuration-glossary/configuration-alias
    '~~': resolve(__dirname, './'),
    'img': '~~/src/asset/image',
    'sass': '~~/src/asset/sass',
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

  // unscoped system configuration
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    // https://nuxtjs.org/docs/configuration-glossary/configuration-css
    '@unocss/reset/tailwind.css',
    '~~/src/asset/sass/xpolar.scss',
    '~~/src/asset/sass/negar.scss',
  ],

  // depnency configuration
  colorMode: {
    classSuffix: '',
  },
})
