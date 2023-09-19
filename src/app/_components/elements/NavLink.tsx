'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { navLinkVariant } from '@/utils/motion'
import { BsChevronRight } from 'react-icons/bs'
import { NavItemProps } from '@/utils/type'

const NavLink = ({ title, href, asSubLink = false, subLinks }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div className='relative' variants={navLinkVariant}>
      <div onClick={() => setIsOpen(!isOpen)} className='text-text-color hover:text-gray-700 duration-300 flex gap-2.5 items-center'>
        <Link className='text-[1.125rem]' href={href}>{title}</Link>
        {asSubLink && (
          <BsChevronRight className={`cursor-pointer ${isOpen ? "rotate-90" : "rotate-0"} duration-300`} size={20} />
        )}
      </div>
      {/* open and close the dropdow by check if navlink is a dropdown */}
      {asSubLink && isOpen && (
        <div className="absolute z-30 bg-[#FAF9F9] top-8 shadow-lg w-[124px] flex flex-col gap-3 p-4 border border-[#898989]">
          {subLinks?.map((link) => (
            <Link className='text-sm font-normal' key={link.id} href={link.href}>{link.title}</Link>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default NavLink
