import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaGem,
  FaUsers,
} from 'react-icons/fa';

type ProblemItem = {
  title: string;
  description: string;
};

const IconMap = {
  1: FaChalkboardTeacher,
  2: FaUsers,
  3: FaBookOpen,
  4: FaGem,
} as const;

export function Solutions() {
  const { t } = useTranslation();
  const solutions = t('solutions.items', {
    returnObjects: true,
  }) as ProblemItem[];

  return (
    <Section variant='white'>
      <div className='flex flex-col items-center'>
        <div className='mb-32 text-center'>
          <h2 className='mb-2 text-h2 text-black'>{t('solutions.title')}</h2>
          <p className='text-body text-neutral-600'>
            {t('solutions.description')}
          </p>
        </div>

        <div className='grid w-full grid-cols-4 gap-6 '>
          {solutions.map((solution, index) => {
            const Icon = IconMap[(index + 1) as keyof typeof IconMap];

            return (
              <div
                key={solution.title}
                className='flex flex-col gap-2 items-center text-center '
              >
                <Icon className='size-10 text-neutral-600' />

                <h3 className='text-h3 font-bold'>{solution.title}</h3>
                <p className=' text-body text-neutral-600'>
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
