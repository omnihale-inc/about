'use client'
import React from 'react'
import data from '@/constants/data.json'
import { Raleway } from 'next/font/google'
import { motion } from "framer-motion"
import { textVariant } from '@/utils/motion'

const raleWay = Raleway({ subsets: ['latin'], weight: '600' })

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className='hidden lg:flex h-[44.27vh] bg-hero-desk bg-no-repeat bg-cover relative'>
      <div className='absolute top-0 right-0 bg-black px-24 w-full left-0 bottom-0 bg-opacity-70 flex flex-col justify-center items-start'>
        <motion.div className='text-white w-[40%] flex flex-col gap-y-3'>
          <motion.h1 variants={textVariant(0.5)} className={`${raleWay.className} text-[2rem] font-semibold`}>{data.heroSection.title}</motion.h1>
          <motion.p variants={textVariant(0.8)} className='text-xl'>{data.heroSection.description}</motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
