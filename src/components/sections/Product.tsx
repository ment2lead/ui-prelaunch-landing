import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

export function Product() {
  const { t } = useTranslation();
  const items = t('product.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section
      id='product'
      className='glow-purple relative overflow-visible py-24 md:py-32'
    >
      <Container className='relative z-10'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            {t('product.title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-white/65'>
            {t('product.description')}
          </p>
        </div>

        <div className='mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2'>
          {items.map((feature) => (
            <div
              key={feature.title}
              className='rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm transition-colors hover:border-brand-cyan/40'
            >
              <h3 className='text-xl font-semibold text-white'>
                {feature.title}
              </h3>
              <p className='text-body mt-3 leading-relaxed text-white/60'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
