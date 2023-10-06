import React from 'react';
import Image from 'next/image';

const HeroDeskImage = () => {
  return (
    <div className='hidden sm:block relative h-[400px] mx-[80px]'>
      <Image
        src='/images/homepage/hero-desk.jpg'
        alt='hero-desk'
        fill
        objectFit='cover'
      />
    </div>
  );
};

export default HeroDeskImage;
