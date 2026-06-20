import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import {
  FaQuestionCircle,
  FaUserFriends,
  FaCompass,
  FaUserPlus,
} from 'react-icons/fa';

type ProblemItem = {
  title: string;
  description: string;
};

const IconMap = {
  1: FaQuestionCircle,
  2: FaUserFriends,
  3: FaCompass,
  4: FaUserPlus,
} as const;

export function Problems() {
  const { t } = useTranslation();
  const problems = t('problems.items', {
    returnObjects: true,
  }) as ProblemItem[];

  return (
    <Section variant='muted'>
      <div className='grid grid-cols-12 gap-24 items-center'>
        <div className='col-span-7 flex flex-col items-start gap-2'>
          <span className='text-body font-medium text-black border rounded-xl px-2 py-0.5'>
            {' '}
            {t('problems.problem_badge')}
          </span>
          <h2 className='text-h2 text-black'>{t('problems.title')}</h2>
          <p className='text-body text-neutral-600'>
            {t('problems.description')}
          </p>
        </div>

        <div className='col-span-5 flex flex-col'>
          {problems.map((problem, index) => {
            const Icon = IconMap[(index + 1) as keyof typeof IconMap];
            const rotations = [
              'rotate-[-2deg]',
              'rotate-[1deg] translate-x-10',
              'rotate-[-2deg]',
            ];
            return (
              <div
                key={problem.title}
                className={`rounded-md border border-neutral-200 bg-white px-6 py-8 ${rotations[index]}`}
              >
                <div className='flex flex-col items-start gap-2'>
                  <Icon className='size-6 text-neutral-600' />
                  <h3 className='text-h3 font-bold text-black'>
                    {problem.title}
                  </h3>
                  <p className='text-body text-neutral-600'>
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
