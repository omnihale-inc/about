import React from 'react';
import Image from 'next/image';

import data from '@/constants/data.json';

const HeroMob = () => {
  const { imageMob } = data.homepage.heroText;
  return (
    <div className='block sm:hidden px-[24px] mx-[auto] w-[fit-content]'>
      <Image
        src={imageMob}
        alt='hero-desk'
        width={366}
        height={240}
        objectFit='cover'
      />
    </div>
  );
};

export default HeroMob;
