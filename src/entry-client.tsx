import { createRoot, hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { defaultLocale, setupI18n } from './i18n';
import i18n from './i18n';
import './styles/index.css';

async function bootstrap() {
  await setupI18n(defaultLocale);
  document.documentElement.lang = defaultLocale;

  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }

  const app = (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );

  // Prerender only runs at build time; in dev `#root` is empty (comment only).
  if (root.firstElementChild) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}

bootstrap();
