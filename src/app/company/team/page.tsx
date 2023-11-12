import ContactUsButton from '@/components/ContactUsButton';
import CtaParagraph from '@/components/Elements/CtaParagraph';
import HeroText from '@/components/HeroText';
import UserTeam from '@/components/UserTeam';
import { withGreenButton } from '@/components/withButtonStyle';
import data from '@/constants/data.json';

export default function Team() {
  const teamData = data.team;
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  return (
    <div>
      <div className='container-wrap mx-auto flex flex-col gap-6'>
        <HeroText
          isPtag={false}
          description={teamData.description}
          title={teamData.title}
        />
        <div className='hidden lg:grid grid-cols-4 gap-6'>
          {teamData.teams.map((team, _) => (
            <UserTeam
              key={team.id}
              position={team.position}
              imgUrl={team.imgUrl}
              username={team.username}
            />
          ))}
        </div>
      </div>
      <div className='relative scroll-team lg:hidden mx-6 z-0 grid auto-cols-[20rem] grid-flow-col gap-4 overflow-x-auto pt-2'>
        {teamData.teams.map((team, _) => (
          <UserTeam
            key={team.id}
            position={team.position}
            imgUrl={team.imgUrl}
            username={team.username}
          />
        ))}
      </div>
      <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
        <CtaParagraph />
        <GreenContactUsButton />
      </div>
    </div>
  );
}
