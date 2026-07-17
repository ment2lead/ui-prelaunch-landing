import { useTranslation } from 'react-i18next';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container } from '../ui/Container';
import logo from '../../assets/img/logo-ment2lead-white.png';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='relative overflow-visible pt-28 pb-12'>
      <div
        aria-hidden='true'
        className='moon float pointer-events-none absolute top-16 right-10 size-40 md:top-20 md:right-20 md:size-48'
        style={{ animation: 'moonShineFull 5s ease-in-out infinite' }}
      />

      <Container className='relative z-10'>
        <div className='max-w-xl'>
          <h2 className='text-5xl leading-tight font-bold text-white md:text-6xl'>
            {t('footer.title')}{' '}
            <span className='text-brand-cyan'>{t('footer.titleAccent')}</span>
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-white/60'>
            {t('footer.subtitle')}
          </p>
        </div>

        <div className='glow-divider my-12' />

        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt={t('header.logo')}
              className='h-7 w-auto object-contain'
            />
          </div>

          <div className='text-body flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60'>
            <a
              href={`mailto:${t('footer.email')}`}
              className='transition-colors hover:text-white'
            >
              {t('footer.email')}
            </a>
            <a
              href='https://linkedin.com/company/ment2lead'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='text-white/60 transition-colors hover:text-brand-cyan'
            >
              <FaLinkedinIn className='size-5' />
            </a>
          </div>
        </div>

        <div className='text-caption mt-10 flex flex-col gap-4 text-white/40 sm:flex-row sm:items-center sm:justify-between'>
          <p>{t('footer.copyright')}</p>
          <div className='flex gap-6'>
            <a
              href='/privacy-policy'
              className='transition-colors hover:text-white'
            >
              {t('footer.privacy')}
            </a>
            <a
              href='/terms-of-use'
              className='transition-colors hover:text-white'
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
