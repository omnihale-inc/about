import { navigationLinkProps } from '@/utils/type'
import Link from 'next/link'
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'


const HeaderLink = ({text, href, isDropDow=false, subLinks}: navigationLinkProps) => {
    return (
        <div className='relative group'>
            <Link className='text-xl flex items-center gap-1 text-green-color font-medium' href={href}>
                <span>{text}</span>
                {isDropDow && <MdArrowDropDown/>}
            </Link>
            {isDropDow && (
                <div className='px-6 hidden bg-white z-12 absolute py-6 group-hover:flex flex-col gap-2 shadow-xl rounded-lg'>
                    {subLinks?.map((sublink, _)=> (
                        <Link  className='text-xl text-green-color whitespace-nowrap hover:underline' key={`${sublink.text}-header`} href={sublink.href}>{sublink.text}</Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HeaderLink
