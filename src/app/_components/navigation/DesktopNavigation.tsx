import Image from 'next/image';
import { NextFont } from 'next/dist/compiled/@next/font';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowDropDown } from 'react-icons/md';

import { withGreenButton } from '../withButtonStyle';
import ContactUsButton from '../ContactUsButton';

type DesktopNavigationProps = {
  font: NextFont;
  companyDropDown: boolean;
  onCompanyDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const GreenContactUsButton = withGreenButton(ContactUsButton);

const DesktopNavigation = (props: DesktopNavigationProps) => {
  return (
    <div className='flex pt-[70px] px-[80px] items-center justify-between'>
      <div className='flex items-center'>
        <Image src='/logo.svg' width={30} height={30} alt='logo' />
        <h3
          className={`${props.font.className} ml-[12px] text-2xl text-[#404040] tracking-wider`}
        >
          Omnihale
        </h3>
      </div>
      <div className='md:basis-[201px]  lg:basis-[391px] text-[#247e5b]'>
        <ul className='flex justify-between '>
          <li>About</li>
          <li className='relative'>
            Company
            {props.companyDropDown ? (
              <motion.button
                initial={{ rotate: '0deg' }}
                animate={{ rotate: '180deg' }}
                transition={{ duration: 0.3 }}
                className='absolute top-[6px]'
                onClick={() => props.onCompanyDropDown(false)}
              >
                <MdArrowDropDown />
              </motion.button>
            ) : (
              <motion.button
                initial={{ rotate: '180deg' }}
                animate={{ rotate: '360deg' }}
                transition={{ duration: 0.3 }}
                className='absolute top-[6px]'
                onClick={() => props.onCompanyDropDown(true)}
              >
                <MdArrowDropDown />
              </motion.button>
            )}
            <AnimatePresence>
              {props.companyDropDown && (
                <motion.ul
                  initial={{ y: -25 }}
                  animate={{ y: 0 }}
                  exit={{ y: -25 }}
                  transition={{ duration: 0.3 }}
                  className=' absolute mt-[20px] bg-white'
                >
                  <li>Overview</li>
                  <li>People</li>
                  <li>Contact Us</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>Product</li>
        </ul>
      </div>
      <div>
        <GreenContactUsButton />
      </div>
    </div>
  );
};

export default DesktopNavigation;
