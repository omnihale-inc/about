import Link from 'next/link'
import React from 'react'

const FooterLink = ({href, text, isDrop=false}: {href: string, text: string, isDrop?: boolean}) => {
  return (
    <Link className="text-base lg:text-xl text-white" href={href}>
      {text}
    </Link>
  )
}

export default FooterLink
