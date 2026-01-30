import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vitobot87.github.io',
  base: '/taprobane-detailing-astro',
  integrations: [tailwind()],
  output: 'static'
});
