import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import type { Locale } from '../../i18n';

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#features', label: t('header.nav.features') },
    { href: '#team', label: t('header.nav.team') },
    { href: '#pricing', label: t('header.nav.pricing') },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-neutral-200 bg-white">
      <Container className="flex h-full items-center justify-between">
        <a href="#" className="text-body font-semibold text-black">
          {t('header.logo')}
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body text-neutral-600 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-caption">
            {(['en', 'uk'] as Locale[]).map((lang, index) => (
              <span key={lang} className="flex items-center gap-2">
                {index > 0 && <span className="text-neutral-300">|</span>}
                <a
                  href={`/${lang}`}
                  className={
                    locale === lang
                      ? 'font-semibold text-black underline underline-offset-4'
                      : 'text-neutral-500 hover:text-black'
                  }
                >
                  {lang.toUpperCase()}
                </a>
              </span>
            ))}
          </div>

          <Button variant="outline">{t('header.becomeMentor')}</Button>
        </div>
      </Container>
    </header>
  );
}
