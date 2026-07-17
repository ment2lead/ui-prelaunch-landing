import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import iryna from '../../assets/img/team/iryna.png';
import sergiy from '../../assets/img/team/sergiy.png';
import olena from '../../assets/img/team/olena.png';
import oksana from '../../assets/img/team/oksana.png';
import solomiia from '../../assets/img/team/solomiia.png';

const photos: Record<string, string> = {
  iryna,
  sergiy,
  olena,
  oksana,
  solomiia,
};

export function Team() {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    bio: string;
    avatar: string;
  }>;

  return (
    <section id='team' className='relative overflow-visible py-24 md:py-32'>
      <Container className='relative z-10'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-bold text-white md:text-5xl'>
            {t('team.title')}
          </h2>
        </div>

        <div className='mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5'>
          {members.map((member) => (
            <div
              key={member.avatar}
              className='flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm'
            >
              <img
                src={photos[member.avatar]}
                alt={member.name}
                className='size-[92px] rounded-full bg-[#d6eef2] object-cover ring-2 ring-brand-cyan/40'
              />
              <p className='mt-4 text-base font-bold text-white'>
                {member.name}
              </p>
              <p className='mt-1 text-sm font-semibold tracking-wider text-brand-cyan uppercase'>
                {member.role}
              </p>
              <p className='text-caption mt-3 leading-relaxed text-white/55'>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
