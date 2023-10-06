import React from 'react';
import Image from 'next/image';

import data from '@/constants/data.json';

const HeroMob = () => {
  const { imageMob } = data.homepage.heroText;
  return (
    <div className='block md:hidden px-[24px] mx-[auto] w-[366px] h-[240px] relative'>
      <Image src={imageMob} alt='hero-desk' fill objectFit='cover' />
    </div>
  );
};

export default HeroMob;
