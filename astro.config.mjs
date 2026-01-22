import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://amufaamo.github.io',
  base: '/falkjlj-site',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
