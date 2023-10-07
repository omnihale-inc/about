import React from 'react';
import Image from 'next/image';

type HeroDeskProps = {
  imgSrc: string;
};

const HeroDeskImage = (props: HeroDeskProps) => {
  return (
    <div className='hidden md:block relative h-[400px]'>
      <Image src={props.imgSrc} alt='hero-desk' fill objectFit='cover' />
    </div>
  );
};

export default HeroDeskImage;
