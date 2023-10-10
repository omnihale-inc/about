'use client'
import { navigationLinkProps } from '@/utils/type'
import { MdArrowDropDown } from 'react-icons/md'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const FooterLink = ({ href, text, isDropDow = false, subLinks }: navigationLinkProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    if (!isDropDow) {
      setIsOpen(false)
    } else {
      setIsOpen(!isOpen)
    }
  }
  return (

    <div className='relative text-white duration-500 transition'>
      {isDropDow ? (
          <div className='flex flex-col gap-8 duration-500 transition  ease-in-out'>
            <button onClick={handleOpen} className='text-base lg:text-xl flex gap-2 items-center'>
              <span>{text}</span>
              {isDropDow && <MdArrowDropDown />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`duration-500 ml-8 transition-all ease-in-out flex flex-col gap-3 `}>
                  {subLinks?.map((sublink, _) => (
                    <Link className='text-base lg:text-xl whitespace-nowrap hover:underline' key={`${sublink.text}-footer`} href={sublink.href}>{sublink.text}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      ) : (
        <Link className='text-base lg:text-xl flex gap-2 items-center' href={href}>
          {text}
        </Link>
      )}
    </div>
  )
}

export default FooterLink
