import { useTranslation } from 'react-i18next';
import { FaCompass, FaQuestionCircle, FaUserFriends } from 'react-icons/fa';
import { Container } from '../ui/Container';

const icons = [FaQuestionCircle, FaUserFriends, FaCompass];

export function Problems() {
  const { t } = useTranslation();
  const items = t('problems.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id='problem' className='relative overflow-visible py-24 md:py-32'>
      <div
        aria-hidden='true'
        className='moon-deck pointer-events-none absolute top-1/2 right-[-40px] z-2 hidden size-[420px] -translate-y-1/2 md:block lg:right-[-20px] lg:size-[520px]'
      />

      <Container className='relative z-10'>
        <div className='grid gap-12 lg:grid-cols-12 lg:items-center'>
          <div className='lg:col-span-5'>
            <h2 className='text-4xl font-bold text-white md:text-5xl'>
              {t('problems.title')}
            </h2>
            <p className='mt-6 max-w-md text-lg leading-relaxed text-white/60'>
              {t('problems.description')}
            </p>
          </div>

          <div className='flex flex-col gap-5 lg:col-span-7'>
            {items.map((item, index) => {
              const Icon = icons[index] ?? FaQuestionCircle;
              return (
                <div
                  key={item.title}
                  className='rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:border-brand-cyan/40'
                >
                  <div className='flex items-start gap-5'>
                    <Icon className='mt-1 size-7 shrink-0 text-brand-cyan' />
                    <div>
                      <h3 className='text-xl font-semibold text-white'>
                        {item.title}
                      </h3>
                      <p className='text-body mt-2 leading-relaxed text-white/60'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
