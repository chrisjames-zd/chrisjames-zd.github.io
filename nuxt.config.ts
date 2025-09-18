// Nuxt 3 config with Tailwind, Radix Vue, and public runtime config
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
      title: 'Zendesk Demo Engineering — Demo Studio',
      meta: [
        { name: 'description', content: 'Internal microsite: Access Demo Studio, learn about Demo Engineering, and find resources.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Optional: Zendesk Garden base + MDI (from provided small apps UI notes)
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/combine/npm/@zendeskgarden/css-bedrock@7.0.21,npm/@zendeskgarden/css-utilities@4.3.0' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      // Update these in .env or runtime
      demoStudioUrl: '',       // e.g., https://<your-subdomain>.zendesk.com/agent/?demo_studio=1
      requestAccessUrl: ''     // e.g., Slack form, Google Form, or internal Help Center article
    }
  },
});
