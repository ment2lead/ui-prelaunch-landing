import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { getLocaleFromPath, setupI18n } from './i18n';
import i18n from './i18n';

export async function render(url: string) {
  const locale = getLocaleFromPath(url);
  await setupI18n(locale);

  const html = renderToString(
    <I18nextProvider i18n={i18n}>
      <App locale={locale} />
    </I18nextProvider>,
  );

  return { html, locale };
}
