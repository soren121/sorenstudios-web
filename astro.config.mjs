import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.sorenstudios.com',
  integrations: [],
  compressHTML: false,
  build: {
    inlineStylesheets: 'never'
  },
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
