import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { localeFallback } from './scripts/locale-fallback';

export default defineConfig({
  plugins: [react(), tailwindcss(), localeFallback()],
  build: {
    outDir: 'dist/client',
  },
  appType: 'spa',
});
