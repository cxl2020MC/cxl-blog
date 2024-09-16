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
      BuildTime: new Date(),
    },
  },

  site: {
    url: BlogConfig.site_url,
    name: BlogConfig.site_name,
    description: BlogConfig.description,
    defaultLocale: BlogConfig.language,
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }

  modules: ["@nuxt/icon", "@nuxtjs/seo", "@nuxtjs/color-mode"],
});
