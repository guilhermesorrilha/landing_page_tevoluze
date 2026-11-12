import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /* A Netlify serve na raiz do domínio. Era '/landing_page_tevoluze/'
     enquanto o destino era o GitHub Pages, que serve em subpasta. */
  base: '/',
});
