import type { Plugin } from 'vite';

export function localeFallback(): Plugin {
  return {
    name: 'locale-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/en' || url === '/uk') {
          req.url = '/';
        }
        next();
      });
    },
  };
}
