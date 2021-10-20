import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    Modules: ['@nuxtjs/tailwindcss'],
    
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    }
})
