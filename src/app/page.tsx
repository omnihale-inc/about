import ContactUsButton from '@/components/ContactUsButton';
import CtaParagraph from '@/components/Element/CtaParagraph';
import HeroDeskImage from '@/components/HeroDeskImage';
import HeroMobImage from '@/components/HeroMobImage';
import HeroText from '@/components/HeroText';
import Team from '@/components/Team';
import Values from '@/components/Values';
import { withGreenButton } from '@/components/withButtonStyle';
import data from '@/constants/data.json';

export default function Home() {
  const { title, description, imageDesk, imageMob } = data.homepage.heroText;
  const GreenContactUsButton = withGreenButton(ContactUsButton);
  const teamData = data.team
  return (
    <>
      <main>
        <HeroText title={title} description={description} />
        <div className='mx-[80px]'>
          <HeroDeskImage imgSrc={imageDesk} />
        </div>
        <div className='w-[366px] mx-[auto]'>
          <HeroMobImage imgSrc={imageMob} />
        </div>
        <Values />
        <Team />
        <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
          <CtaParagraph />
          <GreenContactUsButton />
        </div>
      </main>
    </>
  );
}
