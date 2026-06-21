import { useState, useRef, useEffect, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

type FormErrors = {
  name?: string;
  email?: string;
  goal?: string;
};

type GoalOption = 'mentor' | 'learner' | '';

export function LeadForm() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState<GoalOption>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const goalOptions = [
    { value: 'mentor' as const, label: t('form.goalOptions.mentor') },
    { value: 'learner' as const, label: t('form.goalOptions.learner') },
    { value: 'both' as const, label: t('form.goalOptions.both') },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (!name.trim()) {
      next.name = t('form.errors.nameRequired');
    }

    if (!email.trim()) {
      next.email = t('form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t('form.errors.emailInvalid');
    }

    if (!goal) {
      next.goal = t('form.errors.goalRequired');
    }

    return next;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
  }

  const selectedLabel =
    goalOptions.find((option) => option.value === goal)?.label ??
    t('form.goal');

  return (
    <Section id='early-access' variant='white'>
      <div className='mx-auto max-w-[560px]'>
        <h2 className='mb-10 text-center text-h2 text-black'>
          {t('form.title')}
        </h2>

        {submitted ? (
          <p className='rounded-md border border-neutral-200 bg-white px-6 py-8 text-center text-body text-neutral-600'>
            {t('form.success')}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6' noValidate>
            <div>
              <label htmlFor='name' className='mb-2 block text-body text-black'>
                {t('form.name')}
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='w-full border border-neutral-200 bg-white px-4 py-3 text-body outline-none focus:border-neutral-400'
              />
              {errors.name && (
                <p className='mt-1 text-caption text-neutral-500'>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-body text-black'
              >
                {t('form.email')}
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='w-full border border-neutral-200 bg-white px-4 py-3 text-body outline-none focus:border-neutral-400'
              />
              {errors.email && (
                <p className='mt-1 text-caption text-neutral-500'>
                  {errors.email}
                </p>
              )}
            </div>

            <div ref={dropdownRef}>
              <label className='mb-2 block text-body text-black'>
                {t('form.goal')}
              </label>
              <div className='relative'>
                <button
                  type='button'
                  onClick={() => setDropdownOpen((open) => !open)}
                  className='flex w-full items-center justify-between border border-neutral-200 bg-white px-4 py-3 text-left text-body outline-none focus:border-neutral-400'
                >
                  <span className={goal ? 'text-black' : 'text-neutral-400'}>
                    {selectedLabel}
                  </span>
                  <svg
                    width='12'
                    height='8'
                    viewBox='0 0 12 8'
                    fill='none'
                    aria-hidden='true'
                    className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path
                      d='M1 1 L6 6 L11 1'
                      stroke='#737373'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <ul className='absolute z-10 mt-1 w-full border border-neutral-200 bg-white shadow-sm'>
                    {goalOptions.map((option) => (
                      <li key={option.value}>
                        <button
                          type='button'
                          onClick={() => {
                            setGoal(option.value);
                            setDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-body hover:bg-neutral-50 ${
                            goal === option.value
                              ? 'bg-neutral-50 font-medium text-black'
                              : 'text-neutral-600'
                          }`}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.goal && (
                <p className='mt-1 text-caption text-neutral-500'>
                  {errors.goal}
                </p>
              )}
            </div>

            <label className='flex items-start gap-3 text-sm text-neutral-600 '>
              <input type='checkbox' required className='mt-0.5 size-5' />
              <span className='text-body '>
                {t('form.i_agree')}{' '}
                <a
                  href='/privacy-policy'
                  className='underline hover:text-neutral-900'
                >
                  {t('form.privacy_policy')}
                </a>{' '}
                and{' '}
                <a
                  href='/terms-of-use'
                  className='underline hover:text-neutral-900'
                >
                  {t('form.terms_of_use')}
                </a>
                .
              </span>
            </label>

            <Button type='submit' variant='primary' fullWidth>
              {t('form.submit')}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
