import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://novamarketing.es',
  integrations: [],
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
    // CSS en fichero externo (mejor relación texto/HTML y cacheable entre páginas)
    inlineStylesheets: 'never',
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
    build: {
      // scripts del layout en ficheros externos cacheables (no inline en cada página)
      assetsInlineLimit: 0,
    },
  },
});