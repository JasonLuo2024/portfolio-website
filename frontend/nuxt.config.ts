export default defineNuxtConfig({
  compatibilityDate: '2026-04-14',
  ssr: false,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'neutral']
    }
  }
})