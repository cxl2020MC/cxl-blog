// https://nuxt.com/docs/api/configuration/nuxt-config
import { BlogConfig } from "./blog.config";
import { formatBuildTime } from "./utils/formatDate";

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
      BuildTime: formatBuildTime(),
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
    storageKey: 'nuxt-color-mode',
  },
mdc: {
    remarkPlugins: {
      plugins: {
        // Register/Configure remark plugin to extend the parser
      }
    },
    rehypePlugins: {
      options: {
        // Configure rehype options to extend the parser
      },
      plugins: {
        // Register/Configure rehype plugin to extend the parser
      }
    },
    headings: {
      anchorLinks: {
        // Enable/Disable heading anchor links. { h1: true, h2: false }
      }
    },
    highlight: true, // Control syntax highlighting
    components: {
      prose: false, // Add predefined map to render Prose Components instead of HTML tags, like p, ul, code
      map: {
        // This map will be used in `<MDCRenderer>` to control rendered components
      }
    }
},
  modules: ["@nuxt/icon", "@nuxtjs/seo", "@nuxtjs/color-mode", "@nuxtjs/mdc"],
});
