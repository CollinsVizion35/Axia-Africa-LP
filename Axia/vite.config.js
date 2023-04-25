import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fontsPlugin from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    vue(),
    // Add more plugins here
  ],
});
