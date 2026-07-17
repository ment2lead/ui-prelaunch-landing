import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { defaultLocale, setupI18n } from './i18n';
import i18n from './i18n';

export async function render(_url: string) {
  await setupI18n(defaultLocale);

  const html = renderToString(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  );

  return { html, locale: defaultLocale };
}
