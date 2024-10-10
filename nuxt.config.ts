import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-10-07',
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],

  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}
})