import { defineConfig } from 'vite';
import path from 'path';
import pckg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, `dist/fesm2022/${pckg.name}.mjs`),
      formats: ['es'],
      fileName: () => `${pckg.name}-bundled.js`
    },
    rollupOptions: {
      external: [
        '@angular/animations',
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/router',
        '@uxland/primary-shell',
        'rxjs'
      ]
    }
  }
});