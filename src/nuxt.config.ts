// https://nuxt.com/docs/api/configuration/nuxt-config
import { BlogConfig } from "./blog.config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      title: "cxl`s Blog",
      htmlAttrs: {
        "data-theme": "light",
      },
      meta: [
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  appConfig: {
    ...BlogConfig,
  },

  runtimeConfig: {
    public: {
      api_url: BlogConfig.api_url,
      BuildTime: new Date().toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
      }),
    },
  },

  site: {
    url: BlogConfig.site_url,
    name: BlogConfig.site_name,
    description: BlogConfig.description,
    defaultLocale: BlogConfig.language,
  },

  image: {
    domains: BlogConfig.image_domains,
    format: ["avif", "webp"],
  },

  modules: ["@nuxt/icon", "@nuxtjs/seo"],
});
