// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      BuildTime: new Date().toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai"})
    }
  }
})
