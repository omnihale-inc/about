import HeroDeskImage from './_components/HeroDeskImage';
import HeroMobImage from './_components/HeroMobImage';
import HeroText from './_components/HeroText';
import Team from './_components/Team';
import Values from './_components/Values';
import data from '@/constants/data.json';

export default function Home() {
  const { title, description, imageDesk, imageMob } = data.homepage.heroText;
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
      </main>
    </>
  );
}
