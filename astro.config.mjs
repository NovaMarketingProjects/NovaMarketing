import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://novamarketing.es',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias') && !page.includes('/gracies')
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  build: {
    format: 'directory',
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.novamarketing.es',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});