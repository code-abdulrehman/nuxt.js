// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt App',
      meta: [
        { name: 'description', content: 'Nuxt App' }
      ]
    }
  }
})