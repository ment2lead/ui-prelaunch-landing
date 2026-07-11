import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import iryna from '../../assets/img/team/iryna.jpeg';
// import olenaCeo from '../../assets/img/team/olena_ceo.jpeg';
// import sergiyCeo from '../../assets/img/team/sergiy_ceo.jpeg';
import oksana from '../../assets/img/team/oksana_800.jpeg';
import solomiia from '../../assets/img/team/solomiia.jpeg';

type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

const imagesMap = {
  iryna,
  solomiia,
  oksana,
};

export function Team() {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true }) as TeamMember[];

  return (
    <Section id='team' variant='muted'>
      <h2 className='mb-16 text-center text-h2 text-black'>
        {t('team.title')}
      </h2>

      <div className='flex justify-between gap-8'>
        {members.map((member) => (
          <div
            key={member.name}
            className='flex flex-col items-center text-center'
          >
            <img
              src={imagesMap[member.avatar as keyof typeof imagesMap]}
              className='mb-4 size-[120px] rounded-full object-cover'
            />
            <p className='text-body font-semibold text-black'>{member.name}</p>
            <p className='mt-1 text-caption text-neutral-600'>{member.role}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
