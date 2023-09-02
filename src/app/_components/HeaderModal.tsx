import Image from 'next/image'
import React from 'react'
import { Caesar_Dressing } from 'next/font/google'
import data from '@/constants/data.json'
import Link from 'next/link'
import { motion, Cycle } from "framer-motion"
import { navOpen } from '@/utils/motion'
type headerModal = {
    toggle: Cycle
}

const caesar = Caesar_Dressing({ subsets: ['latin'], weight: '400' })

const HeaderModal = ({ toggle }: headerModal) => {
    return (
        <motion.div initial="closed" exit="closed" animate="open" variants={navOpen} className="fixed inset-0 h-screen w-full lg:hidden flex flex-col justify-between bg-white-color px-7">
            <motion.div className='border-b border-gray-400 py-4 flex justify-center'>
                <motion.div className='flex items-center gap-2 pb-3'>
                    <Image src="/logo.svg" alt='logo' className="w-[30px] h-[30px] lg:h-10 lg:w-10" width={40} height={40} />
                    <h3 className={`${caesar.className} lg:text-2xl text-xl`}>Omnihale</h3>
                </motion.div>
            </motion.div>
            <motion.div className='flex flex-1 flex-col pt-24 gap-6'>
                {data.headerItems.slice(0, data.headerItems.length - 1).map((item) => (
                    <Link onClick={() => toggle()} key={item.id} className='text-[1.125rem] text-text-color hover:text-gray-700 duration-300' href={item.href}>{item.title}</Link>
                ))}
            </motion.div>
            <motion.div className="border-t border-gray-400 py-7">
                <Link onClick={() => toggle()} key={data.headerItems[data.headerItems.length - 1].id} className='text-[1.125rem] text-text-color duration-300 hover:text-gray-700' href={data.headerItems[data.headerItems.length - 1].href}>{data.headerItems[data.headerItems.length - 1].title}</Link>
            </motion.div>
        </motion.div>
    )
}

export default HeaderModal
