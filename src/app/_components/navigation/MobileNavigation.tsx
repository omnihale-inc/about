import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';
import { Caesar_Dressing } from 'next/font/google';

import { withWhiteButton } from '../withButtonStyle';
import ContactUsButton from '../ContactUsButton';

const ceaserDressing = Caesar_Dressing({
  weight: '400',
  subsets: ['latin'],
});

type MobileNavigationProps = {
  mobileNavIsOpen: boolean;
  onMobileNavOpen: (state: boolean) => void;
};

const WhiteContactUsButton = withWhiteButton(ContactUsButton);

const MobileNavigation = (props: MobileNavigationProps) => {
  const containerElement = document.createElement('div');

  useEffect(() => {
    // Checks the mobile-nav Id and attachs the div element which will
    // the container for the rest of our mobile-nav node
    const targetId = document.getElementById('mobile-nav');
    targetId?.appendChild(containerElement);
    () => targetId?.removeChild(containerElement);
  });
  return createPortal(<Node {...props} />, containerElement);
};

// Adds this Node component as child to div container in mobile-nav Id
function Node(props: MobileNavigationProps) {
  const [companyDropdown, setCompanyDropdown] = useState(false);
  return (
    // Animates the Node into and outside the screen
    <motion.div
      key={'mobile'}
      initial={{ x: -650 }}
      animate={{ x: 0, transition: { duration: 0.5, ease: 'easeIn' } }}
      exit={{ x: -650, transition: { duration: 0.5, ease: 'easeOut' } }}
      className='h-[100vh] supports-[height: 100dvh]:h-[100dvh] w-full bg-[#247e5b] absolute text-[white] px-[24px] sm:hidden'
    >
      {/* logo */}
      <div className='flex justify-between mt-[71px]'>
        <div className='flex'>
          <Image src='/logo.svg' width={30} height={30} alt='logo' />
          <h3
            className={`${ceaserDressing.className} ml-[12px] text-2xl text-white tracking-wider`}
          >
            Omnihale
          </h3>
        </div>
        {/* styling the icon */}
        <IconContext.Provider
          value={{
            size: '22px',
            style: {
              color: '#247e5b',
              backgroundColor: 'white',
              borderRadius: 20,
            },
          }}
        >
          <div
            onClick={() => {
              props.onMobileNavOpen(false);
            }}
          >
            <AiOutlineCloseCircle />
          </div>
        </IconContext.Provider>
      </div>
      {/* renders the navigation items */}
      <ul className='text-white text-[20px] mt-[56px]'>
        {['About', 'Company', 'Product'].map((text) => {
          if (text === 'Company')
            return (
              <>
                <div
                  key={text}
                  className='flex items-center justify-between p-[16px]'
                >
                  <li>{text}</li>
                  {companyDropdown ? (
                    <motion.button
                      initial={{ rotate: '180deg' }}
                      animate={{ rotate: '360deg' }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setCompanyDropdown(false)}
                    >
                      <MdArrowDropDown />
                    </motion.button>
                  ) : (
                    <motion.button
                      initial={{ rotate: '0deg' }}
                      animate={{ rotate: '180deg' }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setCompanyDropdown(true)}
                    >
                      <MdArrowDropDown />
                    </motion.button>
                  )}
                </div>
                <AnimatePresence>
                  {/* show company dropdown */}
                  {companyDropdown && (
                    <ul className='ml-[38px] text-[16px] overflow-hidden'>
                      {['Overview', 'People', 'Contact Us'].map((text) => (
                        <motion.li
                          initial={{ y: -100 }}
                          animate={{ y: 0 }}
                          exit={{ y: -100 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                          key={text}
                        >
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </AnimatePresence>
              </>
            );
          return (
            <li key={text} className='p-[16px]'>
              {text}
            </li>
          );
        })}
      </ul>
      <div className='mt-[56px]'>
        <WhiteContactUsButton />
      </div>
    </motion.div>
  );
}

export default MobileNavigation;
