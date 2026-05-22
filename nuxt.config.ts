// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})

//color palette:
// dark: https://huemint.com/website-2/#palette=2c394c-f8f4e9-e7779f-6bc5ea
//light: https://huemint.com/website-2/#palette=fef9ec-2c394c-2c7aa7-fb4669