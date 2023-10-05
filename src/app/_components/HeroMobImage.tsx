import React from 'react';
import Image from 'next/image';

const HeroMob = () => {
  return (
    <div className='block sm:hidden px-[24px] mx-[auto] w-[fit-content]'>
      <Image
        src='/images/homepage/hero-mobile.png'
        alt='hero-desk'
        width={366}
        height={240}
        objectFit='cover'
      />
    </div>
  );
};

export default HeroMob;
