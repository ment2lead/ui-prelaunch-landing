import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const clientDir = path.join(root, 'dist/client');
const serverEntry = path.join(root, 'dist/server/entry-server.js');

const routes = ['/en', '/uk'];
const basePath = process.env.BASE_PATH ?? '';
const enUrl = basePath ? `${basePath}en` : '/en';

async function prerender() {
  const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');
  const { render } = await import(serverEntry);

  for (const route of routes) {
    const { html, locale } = await render(route);
    const document = template
      .replace('<!--app-html-->', html)
      .replace('<html lang="en">', `<html lang="${locale}">`);

    const outDir = path.join(clientDir, route.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), document);
    console.log(`Pre-rendered ${route}`);
  }

  // Root redirect page
  const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0;url=${enUrl}" />
    <script>window.location.replace('${enUrl}')</script>
    <title>Ment to Lead</title>
  </head>
  <body>
    <p>Redirecting to <a href="${enUrl}">Ment to Lead</a>...</p>
  </body>
</html>`;

  fs.writeFileSync(path.join(clientDir, 'index.html'), redirectHtml);
  console.log('Created / redirect');
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
