import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fontsPlugin from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    vue(),
    fontsPlugin({
      google: {
        families: ['Roboto', 'Open Sans'],
      },
      custom: {
        families: [
          {
            name: 'Tiempos Headline',
            file: {
              regular: path.resolve(__dirname, 'fonts/TiemposHeadline-Regular.ttf'),
              bold: path.resolve(__dirname, 'fonts/TiemposHeadline-Bold.ttf'),
            },
          },
        ],
      },
    }),
    // Add more plugins here
  ],
});
