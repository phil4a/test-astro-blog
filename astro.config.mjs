import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://phil-astro.netlify.app/",
  image: {
    domains: ["bitcar.rent"],
  },
  integrations: [
    preact({
      include: ["**/preact/*"],
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
});
