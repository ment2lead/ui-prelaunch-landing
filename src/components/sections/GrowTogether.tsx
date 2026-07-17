import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

const moonStyles: CSSProperties[] = [
  {
    boxShadow: 'inset 150px 0 0 0 #160a2e, 0 0 60px rgba(164,233,240,0.25)',
    animation: 'menteeMerge 12s ease-in-out infinite',
  },
  {
    boxShadow: '0 0 90px rgba(164,233,240,0.55)',
    animation: 'specialistForm 12s ease-in-out infinite',
  },
  {
    boxShadow: 'inset -150px 0 0 0 #160a2e, 0 0 60px rgba(164,233,240,0.25)',
    animation: 'mentorMerge 12s ease-in-out infinite',
  },
];

export function GrowTogether() {
  const { t } = useTranslation();
  const phases = t('growTogether.phases', { returnObjects: true }) as Array<{
    role: string;
    description: string;
  }>;

  return (
    <section
      id='audience'
      className='glow-purple relative overflow-visible py-24 md:py-32'
    >
      <Container className='relative z-10'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl font-bold text-white md:text-6xl'>
            {t('growTogether.title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-white/75'>
            {t('growTogether.description')}
          </p>
        </div>

        <div className='mt-20 grid gap-14 md:grid-cols-3'>
          {phases.map((phase, index) => (
            <div
              key={phase.role}
              className='flex flex-col items-center text-center'
            >
              <div className='flex h-[210px] items-center justify-center'>
                <div
                  className='moon size-[150px] md:size-[190px]'
                  style={moonStyles[index]}
                />
              </div>
              <h3 className='mt-8 text-3xl font-extrabold text-white'>
                {phase.role}
              </h3>
              <p className='text-body mt-3 max-w-[360px] leading-relaxed text-white/80'>
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
