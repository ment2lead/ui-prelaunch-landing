import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { getLocaleFromPath, setupI18n } from './i18n';
import i18n from './i18n';
import './styles/index.css';

async function bootstrap() {
  const locale = getLocaleFromPath(window.location.pathname);
  await setupI18n(locale);
  document.documentElement.lang = locale;

  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }

  hydrateRoot(
    root,
    <I18nextProvider i18n={i18n}>
      <App locale={locale} />
    </I18nextProvider>,
  );
}

bootstrap();
