import React from 'react'
import data from '@/constants/data.json'

function CtaParagraph() {
  return (
    <p className='text-center text-2xl lg:text-[2.125rem] leading-10'>
      {data.action.paragraph}
    </p>
  )
}

export default CtaParagraph
