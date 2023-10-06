import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
  return (
    <Link className='px-6 py-5 bg-green-color text-white' href={"/contact"}>
      Contact Us
    </Link>
  )
}

export default ContactButton
