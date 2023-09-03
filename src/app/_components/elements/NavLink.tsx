import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { navLinkVariant } from '@/utils/motion'

const NavLink = ({title, href}:{title: string, href: string}) => {
  return (
    <motion.div variants={navLinkVariant}>
      <Link className='text-[1.125rem] text-text-color hover:text-gray-700 duration-300' href={href}>{title}</Link>
    </motion.div>
  )
}

export default NavLink
