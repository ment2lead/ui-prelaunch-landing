import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

export function Solutions() {
  const { t } = useTranslation();
  const items = t('solutions.items', { returnObjects: true }) as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section
      id='solution'
      className='relative overflow-visible pt-20 pb-24 md:pt-28 md:pb-32'
    >
      <div aria-hidden='true' className='lightning-stage'>
        <div className='lightning-halo' />
        <svg
          className='lightning-bolt'
          viewBox='0 0 64 96'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className='lightning-bolt-glow'
            d='M36 2 L14 52 H32 L22 94 L54 38 H34 L36 2Z'
          />
          <path
            className='lightning-bolt-core'
            d='M36 2 L14 52 H32 L22 94 L54 38 H34 L36 2Z'
          />
        </svg>
      </div>

      <Container className='relative z-10'>
        <div className='mx-auto max-w-2xl pt-16 text-center md:pt-20'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            {t('solutions.title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-white/65'>
            {t('solutions.description')}
          </p>
        </div>

        <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map((pillar) => (
            <div
              key={pillar.number}
              className='group relative rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-cyan/50'
            >
              <span className='text-2xl font-bold text-brand-cyan'>
                {pillar.number}
              </span>
              <h3 className='mt-4 text-lg font-semibold text-white'>
                {pillar.title}
              </h3>
              <p className='text-body mt-3 leading-relaxed text-white/60'>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
