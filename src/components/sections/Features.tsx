import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { FaComments, FaLayerGroup, FaUserFriends } from 'react-icons/fa';

type FeatureItem = {
  title: string;
  description: string;
};

const IconMap = {
  1: FaComments,
  2: FaLayerGroup,
  3: FaUserFriends,
} as const;

export function Features() {
  const { t } = useTranslation();
  const features = t('features.items', {
    returnObjects: true,
  }) as FeatureItem[];

  return (
    <Section id='features' variant='muted'>
      <div className='mb-32 text-center'>
        <h2 className=' text-h2 text-black'>{t('features.title')}</h2>
        <p className='text-body text-neutral-600'>
          {t('features.description')}
        </p>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {features.map((feature, index) => {
          const Icon = IconMap[(index + 1) as keyof typeof IconMap];

          return (
            <div
              key={feature.title}
              className='rounded-md border border-neutral-200 bg-white p-8 flex flex-col items-start gap-2'
            >
              <div className='rounded-md bg-teal-700'>
                <Icon className='size-10 p-2 text-white' />
              </div>
              <h3 className='text-h3 text-black'>{feature.title}</h3>
              <p className='text-body text-neutral-600'>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
