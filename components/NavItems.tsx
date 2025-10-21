'use client'

import { NAV_ITEMS } from '@/lib/aonstants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

    const pathname: string = usePathname()

    const isActive:(path:string) => boolean= (path:string)=>{
        if(path==='/')return pathname==='/';
        return pathname.startsWith(path);
    }

  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 am:gap-10 font-medium'>
        {NAV_ITEMS.map(({href, title})=>(
            <li key={href}>
                <Link href={href} className={`hover:text-yellow-500 transition-all ${
                    isActive(href)?'text-gray-100':""}`}>
                    {title}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems