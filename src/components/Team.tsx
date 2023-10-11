import Image from 'next/image';
import CtaParagraph from './Element/CtaParagraph';
import data from '@/constants/data.json'
import { withGreenButton } from './withButtonStyle';
import ContactUsButton from './ContactUsButton';
import UserTeam from './UserTeam';

export default function Team() {
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  const teamData = data.team
  return (
    <div className=' mx-[24px]  md:mx-[80px] flex flex-col gap-5'>
      <div className='mt-[40px] lg:mt-[160px] text-center md:ml-[24px]'>
        <h3 className='text-[32px] lg:text-[64px] text-[#247e5b] text-center'>
          Introducing Our Visionary Team:
        </h3>
        <p className='text-[20px] md:text-[24px] mt-[16px] text-center'>
          Pioneers of Omnihale Solutions for a Transformed Human Experience
        </p>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {teamData.teams.map((team, _) => (
          <UserTeam
            key={team.id}
            position={team.position}
            imgUrl={team.imgUrl}
            username={team.username}
          />
        ))}
      </div>
      <div className="relative scroll-team lg:hidden mx-6 z-0 grid auto-cols-[20rem] grid-flow-col gap-4 overflow-x-auto pt-2">
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
  );
}
