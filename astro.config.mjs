import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://humanoid-blog.web.app',
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
