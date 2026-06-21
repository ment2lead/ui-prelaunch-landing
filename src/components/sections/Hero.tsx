import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section
      id='hero'
      variant='white'
      className='!bg-[#06737c] !py-40 min-h-[720px]'
    >
      <div className='grid grid-cols-12 items-center gap-12'>
        <div className='col-span-7'>
          <h1 className='text-h1 text-white'>{t('hero.title')}</h1>
          <p className='mt-6 max-w-xl text-lg text-white/80'>
            {t('hero.subtitle')}
          </p>
          <div className='mt-10'>
            <Button variant='inverse'>{t('header.becomeMentor')}</Button>
          </div>
        </div>

        <div className='col-span-5'>
          <div className='diagonal-lines aspect-[16/10] w-full rounded-md border border-white/20 bg-white/10' />
        </div>
      </div>
    </Section>
  );
}
