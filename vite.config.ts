import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { localeFallback } from './scripts/locale-fallback';

const base =
  process.env.GITHUB_PAGES === 'true' ? '/ui-prelaunch-landing/' : '/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), localeFallback()],
  build: {
    outDir: 'dist/client',
  },
  appType: 'spa',
});
