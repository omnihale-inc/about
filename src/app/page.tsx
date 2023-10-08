import HeroDeskImage from '@/components/HeroDeskImage';
import HeroMobImage from '@/components/HeroMobImage';
import HeroText from '@/components/HeroText';
import Team from '@/components/Team';
import Values from '@/components/Values';
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
