import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://revhappy.github.io/humanoid-blog/
export default defineConfig({
  site: 'https://revhappy.github.io',
  base: '/humanoid-blog',
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
