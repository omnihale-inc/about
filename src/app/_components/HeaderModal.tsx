import Image from 'next/image'
import React from 'react'
import { Caesar_Dressing } from 'next/font/google'
import data from '@/constants/data.json'
import Link from 'next/link'
import { motion, Cycle } from "framer-motion"
import { navMenu, staggerNavigation } from '@/utils/motion'
import NavLinkMob from './elements/NavLinkMob'

type headerModal = {
    toggle: Cycle
}

const caesar = Caesar_Dressing({ subsets: ['latin'], weight: '400' })

const HeaderModal = ({ toggle }: headerModal) => {
    return (
        <motion.div variants={navMenu}
            initial="initial"
            animate="animate"
            exit="exit" className="fixed inset-0 origin-top h-screen w-full lg:hidden flex flex-col justify-between bg-white-color px-7">
            <motion.div className='border-b border-gray-400 py-4 flex justify-center'>
                <motion.div className='flex items-center gap-2 pb-3'>
                    <Image src="/logo.svg" alt='logo' className="w-[30px] h-[30px] lg:h-10 lg:w-10" width={40} height={40} />
                    <h3 className={`${caesar.className} lg:text-2xl text-xl`}>Omnihale</h3>
                </motion.div>
            </motion.div>
            <motion.div
                initial="initial"
                animate="open"
                exit="initial"
                variants={staggerNavigation}
                className='flex flex-1 flex-col pt-24 gap-6'>
                {data.headerItems.slice(0, data.headerItems.length - 1).map((item) => (
                    <div key={item.id} className='overflow-hidden'>
                        <NavLinkMob asSubLink={item.subLinks.length > 0} subLinks={item.subLinks} href={item.href} title={item.title} />
                    </div>
                ))}
            </motion.div>
            <motion.div className="border-t border-gray-400 py-7">
                <Link onClick={() => toggle()} key={data.headerItems[data.headerItems.length - 1].id} className='text-[1.125rem] text-text-color duration-300 hover:text-gray-700' href={data.headerItems[data.headerItems.length - 1].href}>{data.headerItems[data.headerItems.length - 1].title}</Link>
            </motion.div>
        </motion.div>
    )
}

export default HeaderModal
