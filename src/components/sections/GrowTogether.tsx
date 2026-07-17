import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

const crescentPhases = [
  { stack: 'moon-phase-mentee', punch: true },
  { stack: 'moon-phase-specialist', punch: false },
  { stack: 'moon-phase-mentor', punch: true },
] as const;

export function GrowTogether() {
  const { t } = useTranslation();
  const phases = t('growTogether.phases', { returnObjects: true }) as Array<{
    role: string;
    description: string;
  }>;

  return (
    <section id='audience' className='relative overflow-visible py-24 md:py-32'>
      <Container className='relative z-10'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            {t('growTogether.title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-white/75'>
            {t('growTogether.description')}
          </p>
        </div>

        <div className='mt-20 grid gap-14 md:grid-cols-3'>
          {phases.map((phase, index) => {
            const moon = crescentPhases[index];

            return (
              <div
                key={phase.role}
                className='flex flex-col items-center text-center'
              >
                <div className='flex h-[150px] items-center justify-center'>
                  {moon.punch ? (
                    <div
                      className={`moon-phase-stack size-[110px] md:size-[140px] ${moon.stack}`}
                    >
                      <span className='moon moon-layer-full' />
                      <span className='moon moon-layer-crescent' />
                    </div>
                  ) : (
                    <div
                      className={`moon size-[110px] md:size-[140px] ${moon.stack}`}
                    />
                  )}
                </div>
                <h3 className='mt-8 text-3xl font-extrabold text-white'>
                  {phase.role}
                </h3>
                <p className='text-body mt-3 max-w-[360px] leading-relaxed text-white/80'>
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
