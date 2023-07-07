/* eslint-disable semi */
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server" // default is "dist" for static sites and "server" for SSR sites
});