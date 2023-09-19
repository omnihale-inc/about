'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { navLinkVariant, staggerNavigation } from '@/utils/motion'
import { BsChevronRight } from 'react-icons/bs'
import { NavItemProps } from '@/utils/type'

const NavLinkMob = ({ title, href, asSubLink = false, subLinks }: NavItemProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <motion.div className='flex flex-col gap-[18px]' variants={navLinkVariant}>
            <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center'>
                <Link className='text-2xl text-text-color hover:text-gray-700 duration-300' href={href}>{title}</Link>
                {asSubLink && (
                    <BsChevronRight className={`cursor-pointer ${isOpen ? "rotate-90" : "rotate-0"} duration-300`} size={25} />
                )}
            </div>
            <motion.div
                initial="hidden"
                animate="show"
                exit="initial"
                className={`${asSubLink && isOpen ? 'block' : 'hidden'} duration-300 ease-in-out transition-all`}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="initial"
                            animate="open"
                            exit="initial"
                            variants={staggerNavigation}
                            className='flex flex-col gap-4 ml-6'>
                            {subLinks?.map((link) => (
                                <Link className='text-base' key={`${link.id}-mob`} href={link.href}>{link.title}</Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default NavLinkMob