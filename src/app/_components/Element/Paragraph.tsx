import React from 'react'

const Paragraph = ({text, isCentered=false}: {text:string, isCentered?: boolean}) => {
  return (
    <p className={`text-base lg:text-2xl leading-8 font-normal ${isCentered ? "text-center": "text-start"}`}>
      {text}
    </p>
  )
}

export default Paragraph
