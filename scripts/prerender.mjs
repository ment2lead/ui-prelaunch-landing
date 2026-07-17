import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const clientDir = path.join(root, 'dist/client');
const serverEntry = path.join(root, 'dist/server/entry-server.js');

async function prerender() {
  const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');
  const { render } = await import(serverEntry);

  const { html, locale } = await render('/');
  const document = template
    .replace('<!--app-html-->', html)
    .replace('<html lang="en">', `<html lang="${locale}">`);

  fs.writeFileSync(path.join(clientDir, 'index.html'), document);
  console.log('Pre-rendered /');
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
