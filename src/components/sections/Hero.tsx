import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section variant="white" className="!py-40 min-h-[720px]">
      <div className="grid grid-cols-12 items-center gap-12">
        <div className="col-span-7">
          <h1 className="text-h1 text-black">{t('hero.title')}</h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10">
            <Button
              variant="primary"
              onClick={() =>
                document
                  .getElementById('early-access')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        <div className="col-span-5">
          <div className="diagonal-lines aspect-[16/10] w-full rounded-sm border border-neutral-200 bg-neutral-100" />
        </div>
      </div>
    </Section>
  );
}
