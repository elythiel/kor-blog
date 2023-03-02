// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    content: {
        documentDriven: true,
        mdc: true
    },
    css: [
        '~/assets/css/main.css'
    ],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ]
})
