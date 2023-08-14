// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    build: {
      target: 'esnext',
    },
  },
  modules: ['nuxt-api-party'],
  apiParty: {
    endpoints: {
      c1api: {
        url: 'http://localhost:8080',
        cookies: true
      }
    }
  }
})
