import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import { withGreenButton } from '../withButtonStyle';
import ContactUsButton from '../ContactUsButton';
import { IconContext } from 'react-icons';
import { useState } from 'react';

type DesktopNavigationProps = {
  font: NextFont;
};

const GreenContactUsButton = withGreenButton(ContactUsButton);

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [animate, setAnimate] = useState({
    buttonRotateDown: false,
    buttonRotateUp: false,
  });
  return (
    <div className='flex pt-[70px] px-[80px] items-center justify-between'>
      <div className='flex items-center'>
        <Image src='/logo.svg' width={30} height={30} alt='logo' />
        <h3
          className={`${props.font.className} ml-[12px] text-2xl text-[#404040] tracking-wider`}
        >
          <a href='/'>Omnihale</a>
        </h3>
      </div>
      <div className='md:basis-[201px]  lg:basis-[391px] text-[#247e5b]'>
        <ul className='flex justify-between '>
          <a href='/'>
            <li>About</li>
          </a>
          <li className='relative'>
            Company
            {companyDropdown ? (
              <motion.button
                initial={{ rotate: '0deg' }}
                animate={{
                  rotate: animate.buttonRotateDown ? '180deg' : '0deg',
                }}
                transition={{ duration: 1 }}
                className='absolute top-[1px]'
                onClick={() => {
                  setAnimate({ buttonRotateDown: true, buttonRotateUp: false });
                  setCompanyDropdown(false);
                }}
              >
                <IconContext.Provider value={{ size: '25px' }}>
                  <MdArrowDropUp />
                </IconContext.Provider>
              </motion.button>
            ) : (
              <motion.button
                initial={{ rotate: '0deg' }}
                animate={{
                  rotate: animate.buttonRotateUp ? '180deg' : '0deg',
                }}
                transition={{ duration: 1 }}
                className='absolute top-[1px]'
                onClick={() => {
                  setAnimate({ buttonRotateDown: false, buttonRotateUp: true });
                  setCompanyDropdown(true);
                }}
              >
                <IconContext.Provider value={{ size: '25px' }}>
                  <MdArrowDropDown />
                </IconContext.Provider>
              </motion.button>
            )}
            {companyDropdown && (
              <motion.ul
                initial={{ y: -25 }}
                animate={{ y: 0 }}
                exit={{ y: -25 }}
                transition={{ duration: 0.3 }}
                className=' absolute mt-[20px] bg-white px-[10px] pb-[10px] w-[max-content]'
              >
                <a href='/company/overview'>
                  <li>Overview</li>
                </a>
                <li>People</li>
                <a href='mailto:contact@omnihale.com'>
                  <li>Contact Us</li>
                </a>
              </motion.ul>
            )}
          </li>
          <a href='https://omnihale.com'>
            <li>Product</li>
          </a>
        </ul>
      </div>
      <div>
        <GreenContactUsButton />
      </div>
    </div>
  );
};

export default DesktopNavigation;
