'use client';

import ContactUsButton from '@/components/ContactUsButton';
import CtaParagraph from '@/components/Elements/CtaParagraph';
import HeroDeskImage from '@/components/HeroDeskImage';
import HeroMobImage from '@/components/HeroMobImage';
import HeroText from '@/components/HeroText';
import Founders from '@/components/Founders';
import Values from '@/components/Values';
import { withGreenButton } from '@/components/withButtonStyle';
import data from '@/constants/data.json';

export default function Home() {
  const { title, description, imageDesk, imageMob } = data.homepage.heroText;
  const GreenContactUsButton = withGreenButton(ContactUsButton);

  return (
    <>
      <main>
        <HeroText title={title} description={description} />
        <div className='w-full my-6'>
          <div className='container-wrap mx-auto'>
            <div className='flex flex-col gap-4'></div>
            <div className='flex flex-col gap-10 lg:gap-16'>
              <div className='flex flex-col max-w-2xl mx-auto gap-6 items-center mt-[-30px]'></div>
              <div>
                <HeroDeskImage imgSrc={imageDesk} />
                <HeroMobImage imgSrc={imageMob} />
              </div>
            </div>
          </div>
        </div>
        <Values />
        <Founders />
        <div className='max-w-6xl py-32 mx-auto px-4 flex flex-col items-center gap-9'>
          <CtaParagraph />
          <GreenContactUsButton />
        </div>
      </main>
    </>
  );
}
