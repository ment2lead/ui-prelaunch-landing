import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import uk from './resources/uk.json';

export type Locale = 'en' | 'uk';

export const locales: Locale[] = ['en', 'uk'];

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/uk') ? 'uk' : 'en';
}

export async function setupI18n(locale: Locale) {
  if (i18n.isInitialized && i18n.language === locale) {
    return i18n;
  }

  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
    lng: locale,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  return i18n;
}

export default i18n;
