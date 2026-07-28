import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://revhappy.github.io/humanoid-blog/
export default defineConfig({
  site: 'https://revhappy.github.io',
  // Trailing slash required so BASE_URL joins cleanly with path segments
  base: '/humanoid-blog/',
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
