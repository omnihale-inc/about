import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import data from '@/constants/data.json'
import FooterLink from './Element/FooterLink'

const Footer = () => {
  const footerData = data.footer
  return (
    <footer className="bg-green-color py-5 text-white w-full px-6 lg:px-0">
      <div className='flex flex-col gap-8 pt-14 container-wrap mx-auto'>
        <div className='flex flex-col items-start lg:items-center gap-4 lg:flex-row lg:justify-between'>
          <div>
            <Image className="" src={footerData.icon} alt='footer logo' width={200} height={200} />
          </div>
          <Link className='px-6 py-5 text-green-color bg-white hover:bg-gray-300' href={"#"}>Contact Us</Link>
        </div>
        <div className='flex flex-col gap-8'>
          {footerData.links.map((link, _) => (
            <FooterLink key={link.id} href={link.href} text={link.text} />
          ))}
        </div>
        <div className='flex justify-center'>
          <p className='text-base text-center flex gap-1'><Image src={footerData['copy-right']} alt='copy' width={24} height={24} />copyright of omnihale 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
