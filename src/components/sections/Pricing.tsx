import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

type PricingTier = {
  name: string;
  subtitle: string;
  comingSoon?: string;
  items: string[];
  cta: string;
};

function CheckIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      aria-hidden='true'
      className='mt-0.5 shrink-0'
    >
      <path
        d='M3 8 L6.5 11.5 L13 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function PricingCard({
  tier,
  disabled = false,
}: {
  tier: PricingTier;
  disabled?: boolean;
}) {
  return (
    <div
      className={`relative rounded-md bg-white p-10 ${
        disabled
          ? 'border border-dotted border-neutral-300 opacity-50'
          : 'border border-neutral-200'
      }`}
    >
      {disabled && tier.comingSoon && (
        <span className='absolute right-6 top-6 rounded-md border border-neutral-300 px-3 py-1 text-caption text-neutral-500'>
          {tier.comingSoon}
        </span>
      )}

      <div className='mb-8'>
        <p className='text-caption font-semibold tracking-wider text-neutral-500'>
          {tier.name}
        </p>
        <p className='mt-1 text-h3 text-black'>{tier.subtitle}</p>
      </div>

      <ul className='mb-10 space-y-4'>
        {tier.items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-body ${
              disabled ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>

      <Button
        variant={disabled ? 'disabled' : 'primary'}
        fullWidth
        disabled={disabled}
        onClick={
          disabled
            ? undefined
            : () =>
                document
                  .getElementById('early-access')
                  ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        {tier.cta}
      </Button>
    </div>
  );
}

export function Pricing() {
  const { t } = useTranslation();
  const earlyBird = t('pricing.earlyBird', {
    returnObjects: true,
  }) as PricingTier;
  const standard = t('pricing.standard', {
    returnObjects: true,
  }) as PricingTier;

  return (
    <Section id='pricing' variant='white'>
      <h2 className='mb-16 text-center text-h2 text-black'>
        {t('pricing.title')}
      </h2>

      <div className='mx-auto grid max-w-4xl grid-cols-2 gap-8'>
        <PricingCard tier={earlyBird} />
        <PricingCard tier={standard} disabled />
      </div>
    </Section>
  );
}
