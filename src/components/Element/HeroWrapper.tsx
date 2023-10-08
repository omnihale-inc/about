import React from 'react'

const HeroWrapper = ({bgClass}:{bgClass: string}) => {
  return (
    <div className={`w-full h-[240px] lg:h-[400px] ${bgClass} bg-no-repeat bg-cover`}>
    </div>
  )
}

export default HeroWrapper
