// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/supabase'],
  css: ['primeicons/primeicons.css', '~/assets/css/tailwind.css'],
  imports: {
    dirs: ['./composables/useMarkdown'],
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
    options: { unstyled: true },
    importPT: {
      as: 'lara',
      from: '@/assets/presets/lara/',
    },
    components: {
      exclude: ['Form', 'FormField'],
    },
  },
})
