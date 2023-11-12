'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

import data from '@/constants/data.json';
import FooterLink from './Elements/FooterLink';
import { withWhiteButton } from './withButtonStyle';
import ContactUsButton from './ContactUsButton';
import { LayoutGroup, motion } from 'framer-motion';
import SocialLink from './Elements/SocialLink';

const Footer = () => {
  const footerData = data.footer;
  const WhiteContactUsButton = withWhiteButton(ContactUsButton);
  return (
    <LayoutGroup>
      <motion.footer className='bg-green-color duration-500 transition py-5 text-white w-full px-6 lg:px-0'>
        <div className='flex flex-col gap-8 pt-14 container-wrap mx-auto'>
          <div className='flex flex-col items-start lg:items-center gap-4 lg:flex-row lg:justify-between'>
            <div>
              <Image
                className=''
                src={footerData.icon}
                alt='footer logo'
                width={200}
                height={200}
              />
            </div>
            <Link className='mt-[20px]' href={'#'}>
              <WhiteContactUsButton />
            </Link>
          </div>
          <div className='flex flex-col duration-500 transition transform gap-8'>
            {footerData.links.map((link, _) => (
              <FooterLink
                isDropDow={link.isDropDow}
                subLinks={link.sublinks}
                key={`${link.id}-footer`}
                href={link.href}
                text={link.text}
              />
            ))}
          </div>
          <div className='max-w-[1250px] w-[90%] m-auto text-[#ffffff]'>
            <IconContext.Provider value={{ size: '30px' }}>
              <div className='flex w-[fit-content] m-auto'>
                <h3 className='text-2xl px-2'>Follow Us |</h3>
                <SocialLink
                  icon={<BsLinkedin />}
                  href='https://www.linkedin.com/company/omnihale/'
                />
                <div className='w-3'></div>
                <SocialLink
                  icon={<BsTwitter />}
                  href='https://twitter.com/omnihale'
                />
              </div>
            </IconContext.Provider>
          </div>
          <div className='flex justify-center'>
            <p className='text-base text-center flex gap-1'>
              <Image
                src={footerData['copy-right']}
                alt='copy'
                width={24}
                height={24}
              />
              copyright of omnihale 2023
            </p>
          </div>
        </div>
      </motion.footer>
    </LayoutGroup>
  );
};

export default Footer;
