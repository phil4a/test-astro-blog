import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "http://astro-test-blog-30c8a9-6f1f61-51-250-32-23.traefik.me/",
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
