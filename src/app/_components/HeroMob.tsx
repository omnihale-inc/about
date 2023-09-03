'use client'
import React from 'react'
import data from '@/constants/data.json'
import { Raleway } from 'next/font/google'
import { motion } from "framer-motion"
import { textVariant } from '@/utils/motion'

const raleWay = Raleway({ subsets: ['latin'], weight: '600' })

const HeroMob = () => {
  return (
    <div className='grid grid-rows-2 h-[38.77vh] lg:hidden'>
      <div className='bg-hero-mob bg-no-repeat bg-cover'>
      </div>
      <div className='bg-[#000000b3] flex justify-center items-center'>
        <motion.div
          initial="hidden"
          whileInView="show"
          className='text-white flex flex-col text-center px-9'
        >
          <motion.h1 variants={textVariant(0.5)} className={`${raleWay.className} text-2xl font-semibold`}>{data.heroSection.title}</motion.h1>
          <motion.p variants={textVariant(0.8)} className='text-base font-light'>{data.heroSection.description}</motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroMob
