'use client';
import { useState } from 'react';
import { Caesar_Dressing } from 'next/font/google';

import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import Menu from './Menu';

const ceaserDressing = Caesar_Dressing({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const mobileNavHandler = (state: boolean) => {
    setMobileNavIsOpen(state);
  };
  return (
    <div>
      {/* logo desktop */}
      <div className='hidden md:block'>
        <DesktopNavigation font={ceaserDressing} />
      </div>
      <div className='flex justify-between items-center md:hidden p-[24px] pt-[71px]'>
        {/* logo mobile */}
        <div className='flex items-center'>
          <Image src='/logo.svg' width={30} height={30} alt='logo' />
          <h3
            className={`${ceaserDressing.className} ml-[12px] text-2xl text-[#404040] tracking-wider`}
          >
            Omnihale
          </h3>
        </div>
        {/* styles the AiOutlineMenu icon */}
        <div onClick={() => mobileNavHandler(true)}>
          <Menu />
        </div>
      </div>
      {/* 
        shows menu icon on small screen and hidden on,
        big screen 
      */}
      <AnimatePresence>
        {mobileNavIsOpen && (
          <MobileNavigation
            mobileNavIsOpen
            onMobileNavOpen={mobileNavHandler}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
