import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { scrollToId } from '../ui/scrollToId';
import dashboard from '../../assets/img/dashboard-desktop.png';
import mobile from '../../assets/img/dashboard-mobile.png';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id='hero'
      className='pitch-gradient hero-fade-bottom stars relative overflow-hidden pt-32 pb-28 md:pt-40 md:pb-36'
    >
      <Container className='relative z-10'>
        <div className='grid items-center gap-14 lg:grid-cols-12'>
          <div className='lg:col-span-6'>
            <SectionLabel>{t('hero.label')}</SectionLabel>
            <h1 className='mt-5 text-4xl leading-[1.08] font-bold text-white md:text-[3.5rem]'>
              {t('hero.titleLine1')}
              <br />
              {t('hero.titleLine2')}
              <br />
              <span className='text-brand-cyan'>{t('hero.titleAccent')}</span>
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-relaxed text-white/75'>
              {t('hero.subtitle')}
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <Button variant='cyan' onClick={() => scrollToId('early-access')}>
                {t('hero.ctaPrimary')}
              </Button>
              <Button variant='outline' onClick={() => scrollToId('product')}>
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          <div className='relative lg:col-span-6'>
            <div className='absolute -inset-6 rounded-[2rem] bg-brand-cyan/10 blur-2xl' />
            <div className='relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl shadow-black/40'>
              <img
                src={dashboard}
                alt={t('hero.dashboardAlt')}
                className='block w-full'
              />
            </div>
            <img
              src={mobile}
              alt={t('hero.mobileAlt')}
              className='absolute -right-6 -bottom-10 w-32 rounded-[1.3rem] border border-white/15 shadow-2xl shadow-black/50 md:w-40'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
