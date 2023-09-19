'use client'
import Image from 'next/image'
import React from 'react'
import { Caesar_Dressing } from 'next/font/google'
import { IoMenuOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { AnimatePresence, motion, useCycle } from "framer-motion"
import Link from 'next/link'
import data from '@/constants/data.json'
import HeaderModal from './HeaderModal'
import NavLink from './elements/NavLink'

const caesar = Caesar_Dressing({ subsets: ['latin'], weight: '400' })

const Header = () => {
  const [openNav, toggleNav] = useCycle(false, true)
  return (
    <motion.header className='w-full py-4 relative'>
      <div className='container mx-auto flex justify-between items-center px-7 lg:px-0 lg:items-end'>
        <motion.button animate={openNav ? "open" : "closed"} className='z-10 block lg:hidden' onClick={() => toggleNav()}>
          {openNav ?
            <IoMdClose className="text-black cursor-pointer" size={30} />
            : <IoMenuOutline className="block text-black cursor-pointer lg:hidden" size={30} />
          }
        </motion.button>
        <div className='flex items-center gap-2'>
          <Image src="/logo.svg" alt='logo' className="w-[30px] h-[30px] lg:h-10 lg:w-10" width={40} height={40} />
          <h3 className={`${caesar.className} lg:text-2xl text-xl`}>Omnihale</h3>
        </div>
        <div className='hidden lg:flex items-center gap-11'>
          {data.headerItems.slice(0, data.headerItems.length - 1).map((item) => (
            <NavLink asSubLink={item.subLinks.length > 0} key={item.id} subLinks={item.subLinks}  title={item.title} href={item.href}/>
          ))}
        </div>
        <Link key={data.headerItems[data.headerItems.length - 1].id} className='text-[1.125rem] text-text-color duration-300 hover:text-gray-700 hidden lg:block' href={data.headerItems[data.headerItems.length - 1].href}>{data.headerItems[data.headerItems.length - 1].title}</Link>
        <div className='block lg:hidden' />
      </div>
      <AnimatePresence>
        {openNav && (<HeaderModal toggle={toggleNav} />)}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
