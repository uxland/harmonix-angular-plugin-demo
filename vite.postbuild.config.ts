import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'dist/my-plugin/fesm2022/my-plugin.mjs'),
      formats: ['es'],
      fileName: 'my-plugin-bundled'
    },
    rollupOptions: {
      external: ['@angular/core', '@angular/common', '@angular/platform-browser', '@uxland/primary-shell']
    }
  }
});