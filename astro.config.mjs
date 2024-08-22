import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  experimental: {
    serverIslands: true,
  },
  site: "https://phil-astro.netlify.app",
  image: {
    domains: ["dev.bitcar.rent"],
  },
  integrations: [
    preact({
      include: ["**/preact/*"],
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
  output: "hybrid",
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});
