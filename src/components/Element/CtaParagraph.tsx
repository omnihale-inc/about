import React from 'react'

function CtaParagraph({text}:{text: string}) {
  return (
    <p className='text-center text-2xl lg:text-[2.125rem] leading-8'>
      {text}
    </p>
  )
}

export default CtaParagraph
