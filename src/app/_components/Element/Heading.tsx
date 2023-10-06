import React from 'react'

const Heading = ({ text }: {text: string}) => {
  return (
    <h1 className='text-[4rem] text-center lg:text-[5rem] text-green-color'>
      {text}
    </h1>
  )
}

export default Heading
