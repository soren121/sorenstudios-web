import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.sorenstudios.com',
  integrations: [],
  compressHTML: false,
  build: {
    inlineStylesheets: 'never'
  },
  fonts: [{
    provider:fontProviders.fontsource(),
    name: 'Heebo',
    cssVariable: '--font-heebo',
    weights: ['100 900'],
    fallbacks: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
  }],
  vite: {
    ssr: {
      noExternal: ['bootstrap', 'bootstrap-icons', '@fontsource/heebo']
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'if-function',
            'import',
            'color-functions',
            'global-builtin',
          ],
        },
      },
    },
  }
});
