// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
})

//color palette:
// dark: https://huemint.com/website-2/#palette=2c394c-f8f4e9-e7779f-6bc5ea
//light: https://huemint.com/website-2/#palette=fef9ec-2c394c-2c7aa7-fb4669
