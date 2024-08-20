/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BITCAR_API_URL: string;
  readonly BITCAR_CONSUMER_KEY: string;
  readonly BITCAR_CONSUMER_SECRET: string;
  // больше переменных env...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
