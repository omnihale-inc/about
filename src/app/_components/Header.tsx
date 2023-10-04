'use client';

import { useState } from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { AiOutlineMenu } from 'react-icons/ai';
import { Caesar_Dressing } from 'next/font/google';

import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

const ceaserDressing = Caesar_Dressing({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const mobileNavHandler = (state: boolean) => {
    setMobileNavIsOpen(state);
  };
  return (
    <div>
      {/* logo desktop */}
      <div className='hidden md:block'>
        <DesktopNavigation
          font={ceaserDressing}
          companyDropDown={companyDropdown}
          onCompanyDropDown={setCompanyDropdown}
        />
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
        <IconContext.Provider
          value={{ size: '20px', style: { color: '#247e5b' } }}
        >
          <div onClick={() => mobileNavHandler(true)}>
            <AiOutlineMenu />
          </div>
        </IconContext.Provider>
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
            companyDropDown={companyDropdown}
            onCompanyDropDown={setCompanyDropdown}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
