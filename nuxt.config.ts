// Nuxt 3 config — personal profile site for Chris James.
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'radix-vue/nuxt'
  ],
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      title: 'Chris James — Demo Architect @ Zendesk',
      meta: [
        {
          name: 'description',
          content:
            'Chris James — Demo Architect at Zendesk. AI copilots, internal tooling, and developer experiences for go-to-market engineering.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#1B263B' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
});
