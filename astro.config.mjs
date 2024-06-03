import {defineConfig} from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://corrupted-games.github.io/",
  base: '/corrupted-games',
  integrations: [react()]
});