import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';

type FormErrors = {
  name?: string;
  email?: string;
  role?: string;
  consent?: string;
};
type RoleOption = 'mentee' | 'mentor' | 'both' | '';

const roleValues = ['mentee', 'mentor', 'both'] as const;
const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

export function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<RoleOption>('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    if (!name.trim()) next.name = t('contact.errors.nameRequired');
    if (!email.trim()) next.email = t('contact.errors.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = t('contact.errors.emailInvalid');
    if (!role) next.role = t('contact.errors.roleRequired');
    if (!consent) next.consent = t('contact.errors.consentRequired');
    return next;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitError(false);
    if (Object.keys(nextErrors).length > 0) return;

    if (!scriptUrl) {
      console.error('VITE_GOOGLE_SCRIPT_URL is not configured');
      setSubmitError(true);
      return;
    }

    setSubmitting(true);
    try {
      // Apps Script always answers the first POST with 302 Found, then returns JSON.
      const response = await fetch(scriptUrl, {
        method: 'POST',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
          consent,
        }),
      });

      const raw = await response.text();
      let result: { ok?: boolean; error?: string } = {};
      try {
        result = JSON.parse(raw) as { ok?: boolean; error?: string };
      } catch {
        throw new Error(`Unexpected response: ${raw.slice(0, 200)}`);
      }

      if (!result.ok) {
        throw new Error(result.error || 'Script returned error');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Contact form submit failed', error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const selectedLabel = role
    ? t(`contact.roleOptions.${role}`)
    : t('contact.rolePlaceholder');

  const fieldClass =
    'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-body text-white outline-none transition-colors placeholder:text-white/40 focus:border-brand-cyan';

  return (
    <section
      id='early-access'
      className='relative overflow-visible pt-8 pb-24 md:pt-12 md:pb-32'
    >
      <Container className='relative z-10'>
        <div className='mx-auto max-w-[560px]'>
          <div className='mb-10 text-center'>
            <SectionLabel>{t('contact.label')}</SectionLabel>
            <h2 className='mt-4 text-4xl font-bold text-white md:text-5xl'>
              {t('contact.title')}
            </h2>
          </div>

          {submitted ? (
            <p className='text-body rounded-2xl border border-white/15 bg-white/5 px-6 py-10 text-center text-white/80'>
              {t('contact.success')}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-5' noValidate>
              <div>
                <label
                  htmlFor='contact-name'
                  className='text-body mb-2 block text-white/80'
                >
                  {t('contact.name')}
                </label>
                <input
                  id='contact-name'
                  type='text'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={fieldClass}
                  disabled={submitting}
                />
                {errors.name && (
                  <p className='text-caption mt-1 text-brand-light-cyan'>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='contact-email'
                  className='text-body mb-2 block text-white/80'
                >
                  {t('contact.email')}
                </label>
                <input
                  id='contact-email'
                  type='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={fieldClass}
                  disabled={submitting}
                />
                {errors.email && (
                  <p className='text-caption mt-1 text-brand-light-cyan'>
                    {errors.email}
                  </p>
                )}
              </div>

              <div ref={dropdownRef}>
                <label className='text-body mb-2 block text-white/80'>
                  {t('contact.role')}
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => setDropdownOpen((open) => !open)}
                    className={`flex items-center justify-between text-left ${fieldClass}`}
                    disabled={submitting}
                  >
                    <span className={role ? 'text-white' : 'text-white/40'}>
                      {selectedLabel}
                    </span>
                    <FaChevronDown
                      className={`size-3 text-brand-light-cyan transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <ul className='absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/15 bg-[#0e1e2e] shadow-xl'>
                      {roleValues.map((value) => (
                        <li key={value}>
                          <button
                            type='button'
                            onClick={() => {
                              setRole(value);
                              setDropdownOpen(false);
                            }}
                            className={`text-body w-full px-4 py-3 text-left transition-colors hover:bg-white/5 ${
                              role === value
                                ? 'font-medium text-brand-cyan'
                                : 'text-white/75'
                            }`}
                          >
                            {t(`contact.roleOptions.${value}`)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {errors.role && (
                  <p className='text-caption mt-1 text-brand-light-cyan'>
                    {errors.role}
                  </p>
                )}
              </div>

              <label className='text-body flex items-start gap-3 text-white/70'>
                <input
                  type='checkbox'
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  disabled={submitting}
                  className='mt-0.5 size-5 accent-brand-cyan'
                />
                <span>
                  {t('contact.iAgree')}{' '}
                  <a
                    href='/privacy-policy'
                    className='text-brand-cyan underline'
                  >
                    {t('contact.privacyPolicy')}
                  </a>{' '}
                  {t('contact.and')}{' '}
                  <a href='/terms-of-use' className='text-brand-cyan underline'>
                    {t('contact.termsOfUse')}
                  </a>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className='text-caption -mt-3 text-brand-light-cyan'>
                  {errors.consent}
                </p>
              )}

              {submitError && (
                <p className='text-caption text-brand-light-cyan'>
                  {t('contact.errors.submitFailed')}
                </p>
              )}

              <Button
                type='submit'
                variant='cyan'
                fullWidth
                disabled={submitting}
              >
                {submitting ? t('contact.submitting') : t('contact.submit')}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
