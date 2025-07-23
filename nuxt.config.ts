import Lara from '@primeuix/themes/lara'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/supabase'],
  css: ['primeicons/primeicons.css', '~/assets/css/tailwind.css'],
  imports: {
    dirs: ['./composables/useMarkdown', './composables/useServices', './composables/useLogger'],
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      node_env: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },
  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Lara,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    },
    components: {
      exclude: ['Form', 'FormField', 'Chart', 'Editor'],
    },
  },
})
