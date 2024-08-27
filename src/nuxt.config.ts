// https://nuxt.com/docs/api/configuration/nuxt-config
import { blog_config } from './blog.config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: 'cxl`s Blog',
      htmlAttrs: {
        lang: 'zh-CN',
        "data-theme": "light"
      },
      meta: [
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      ...blog_config,
      BuildTime: new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai"}),
    }
  },

  modules: ['@nuxt/icon', '@nuxtjs/seo']
})