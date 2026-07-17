import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { scrollToId } from '../ui/scrollToId';

export function Pricing() {
  const { t } = useTranslation();
  const earlyItems = t('pricing.earlyBird.items', {
    returnObjects: true,
  }) as string[];
  const standardItems = t('pricing.standard.items', {
    returnObjects: true,
  }) as string[];

  return (
    <section id='pricing' className='relative overflow-visible py-24 md:py-32'>
      <Container className='relative z-10'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            {t('pricing.title')}
          </h2>
        </div>

        <div className='mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple to-brand-teal p-[1.5px] shadow-[0_30px_60px_-30px_rgba(91,36,122,0.6)]'>
            <div className='relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-night-850 p-9'>
              <span className='inline-block rounded-full bg-brand-cyan px-3 py-1 text-xs font-bold tracking-wider text-[#08222a] uppercase'>
                {t('pricing.earlyBird.badge')}
              </span>
              <div className='mt-6'>
                <p className='text-5xl font-bold text-white'>
                  {t('pricing.earlyBird.name')}
                </p>
                <p className='text-body mt-2 text-white/60'>
                  {t('pricing.earlyBird.subtitle')}
                </p>
              </div>
              <ul className='mt-8 space-y-3.5'>
                {earlyItems.map((item) => (
                  <li
                    key={item}
                    className='text-body flex items-start gap-3 text-white/85'
                  >
                    <FaCheck className='mt-1 size-4 shrink-0 text-brand-cyan' />
                    {item}
                  </li>
                ))}
              </ul>
              <div className='mt-9'>
                <Button
                  variant='cyan'
                  fullWidth
                  onClick={() => scrollToId('early-access')}
                >
                  {t('pricing.earlyBird.cta')}
                </Button>
              </div>
            </div>
          </div>

          <div className='relative rounded-3xl border border-white/10 bg-white/[0.03] p-9'>
            <span className='inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-wider text-white/50 uppercase'>
              {t('pricing.standard.badge')}
            </span>
            <div className='mt-6'>
              <p className='text-5xl font-bold text-white/40'>
                {t('pricing.standard.name')}
              </p>
              <p className='text-body mt-2 text-white/40'>
                {t('pricing.standard.subtitle')}
              </p>
            </div>
            <ul className='mt-8 space-y-3.5'>
              {standardItems.map((item) => (
                <li
                  key={item}
                  className='text-body flex items-start gap-3 text-white/35'
                >
                  <FaCheck className='mt-1 size-4 shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='mt-9'>
              <Button variant='cyan' fullWidth disabled>
                {t('pricing.standard.cta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
