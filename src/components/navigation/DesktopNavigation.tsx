import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import data from '@/constants/data.json'
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

import { withGreenButton } from '../withButtonStyle';
import ContactUsButton from '../ContactUsButton';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import HeaderLink from '../Element/HeaderLink';

type DesktopNavigationProps = {
  font: NextFont;
};

const GreenContactUsButton = withGreenButton(ContactUsButton);

const DesktopNavigation = (props: DesktopNavigationProps) => {
  const navData = data.footer.links
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [animate, setAnimate] = useState({
    buttonRotateDown: false,
    buttonRotateUp: false,
  });
  return (
    <div className='container-wrap mx-auto flex justify-between items-center pt-16'>
      <div className='flex items-center'>
        <Image src='/logo.svg' width={30} height={30} alt='logo' />
        <h3
          className={`${props.font.className} ml-[12px] text-2xl text-[#404040] tracking-wider`}
        >
          <a href='/'>Omnihale</a>
        </h3>
      </div>
      <div className='flex space-x-12'>
        {navData.map((linkItem, _)=> (
          <HeaderLink subLinks={linkItem.sublinks} href={linkItem.href} text={linkItem.text} isDropDow={linkItem.isDropDow}/>
        ))}
        {/* <ul className='flex justify-between '>
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
        </ul> */}
        
      </div>
      <div>
        <GreenContactUsButton />
      </div>
    </div>
  );
};

export default DesktopNavigation;
