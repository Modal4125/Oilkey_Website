// @ts-check
import { defineConfig, envField } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://oilkey.com',

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: { ja: 'ja-JP', en: 'en-US' },
      },
    }),
  ],

  // Old site (oilkey.co.jp) used /xxx/index.html-style URLs — 301 them to the
  // clean paths so inbound links and SEO carry over at cutover. A generic
  // catch-all for unknown old paths lives in vercel.json.
  redirects: {
    '/index.html': { status: 301, destination: '/' },
    '/company/index.html': { status: 301, destination: '/company' },
    '/business/index.html': { status: 301, destination: '/business' },
    '/items/index.html': { status: 301, destination: '/products' },
    '/factory_express/grease.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/paste.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/dry.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/oil.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/corrosion.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/maintenance.htm': { status: 301, destination: '/products/factory-express' },
    '/factory_express/pump.htm': { status: 301, destination: '/products/factory-express' },
    '/contact/index.html': { status: 301, destination: '/contact' },
    '/catalogue/index.html': { status: 301, destination: '/catalogue' },
    '/news/index.html': { status: 301, destination: '/news' },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      CONTACT_TO_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'oilkey@oilkey.co.jp',
      }),
      // Resend test sender; swap for a verified oilkey.com address before launch
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        default: 'onboarding@resend.dev',
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
