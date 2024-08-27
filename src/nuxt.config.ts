// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: 'cxl2020mc`s Blog',
      htmlAttrs: {
        lang: 'zh-CN'
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
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      BuildTime: new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai"})
    }
  },

  modules: ['@nuxt/icon', '@nuxtjs/seo']
})