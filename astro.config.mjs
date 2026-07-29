import { defineConfig } from 'astro/config';

// Custom domain: https://mechafeed.com
export default defineConfig({
  site: 'https://mechafeed.com',
  // Root base for apex/custom domain (must match siteConfig.basePath)
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
