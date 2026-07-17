import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { scrollToId } from '../ui/scrollToId';
import logo from '../../assets/img/logo-ment2lead-white.png';

const navKeys = ['solution', 'product', 'pricing', 'team'] as const;

export function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 h-[72px] border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-night-900/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container className='flex h-full items-center justify-between'>
        <a
          href='#hero'
          onClick={(e) => {
            e.preventDefault();
            scrollToId('hero');
          }}
          className='flex items-center'
        >
          <img
            src={logo}
            alt={t('header.logo')}
            className='h-8 w-auto object-contain'
          />
        </a>

        <nav className='hidden items-center gap-9 md:flex'>
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(key);
              }}
              className='text-[0.95rem] text-white/70 transition-colors hover:text-white'
            >
              {t(`header.nav.${key}`)}
            </a>
          ))}
        </nav>

        <Button variant='cyan' onClick={() => scrollToId('early-access')}>
          {t('header.cta')}
        </Button>
      </Container>
    </header>
  );
}
