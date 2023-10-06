import React from 'react';
import Image from 'next/image';

import data from '@/constants/data.json';

const HeroDeskImage = () => {
  const { imageDesk } = data.homepage.heroText;
  return (
    <div className='hidden md:block relative h-[400px] mx-[80px]'>
      <Image src={imageDesk} alt='hero-desk' fill objectFit='cover' />
    </div>
  );
};

export default HeroDeskImage;
