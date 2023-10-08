import React from 'react';
import Image from 'next/image';

type HeroMobImageProps = {
  imgSrc: string;
};
const HeroMobImage = (props: HeroMobImageProps) => {
  return (
    <div className='block md:hidden h-[240px] relative'>
      <Image src={props.imgSrc} alt='hero-desk' fill objectFit='cover' />
    </div>
  );
};

export default HeroMobImage;
