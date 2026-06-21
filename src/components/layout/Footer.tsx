import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='border-t border-neutral-200 bg-neutral-50 py-16'>
      <Container>
        <div className='mb-12 border-b border-neutral-200 pb-8'>
          <p className='mb-6 text-caption font-semibold uppercase tracking-wider text-neutral-500'>
            {t('footer.contacts')}
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-8 text-body text-neutral-600'>
              <a
                href={`mailto:${t('footer.email')}`}
                className='hover:text-black'
              >
                {t('footer.email')}
              </a>
              <span>{t('footer.phone')}</span>
            </div>
            <div className='flex gap-3'>
              <a
                href='https://linkedin.com/company/ment2lead'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-neutral-500 transition-colors duration-200 hover:text-[#0A66C2]'
              >
                <FaLinkedinIn className='size-6' />
              </a>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between text-caption text-neutral-500'>
          <p>{t('footer.copyright')}</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-black'>
              {t('footer.privacy')}
            </a>
            <a href='#' className='hover:text-black'>
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
