import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const base =
  process.env.GITHUB_PAGES === 'true' ? '/ui-prelaunch-landing/' : '/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
  ssr: {
    noExternal: ['react-i18next', 'i18next'],
  },
});
