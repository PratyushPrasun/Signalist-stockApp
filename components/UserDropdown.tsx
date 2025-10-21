'use client'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { useRouter } from 'next/navigation'
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import NavItems from './NavItems';

const UserDropdown = () => {
    const router = useRouter();
      const handleSignOut = async()=>{
        router.push("/")
      }

      const user ={ name:"SFdhg", email:"jndujhm@mdkm.com"}
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
    {user.name[0]}
  </AvatarFallback>
</Avatar>
<div className='hidden md:flex flex-col items-start '>
    <span className='text-base font-medium text-gray-400'>
        {user.name}
    </span>
</div>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
    <div className='flex relative items-center gap-3 py-2'>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>
    {user.name[0]}
  </AvatarFallback>
</Avatar>
<div className='flex flex-col items-start '>
    <span className='text-base font-medium text-gray-400'>
        {user.name}
    </span>
    <span className='text-sm m text-gray-500'>
        {user.email}
    </span>
    </div>
    </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator className='bg-gray-600'/>
    <DropdownMenuItem onClick={handleSignOut} className='text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer'>
        <LogOut className='h-4 w-4 mr-r hidden sm:block'/>
        Logout
    </DropdownMenuItem>
    <DropdownMenuSeparator className='hidden sm:block bg-gray-600'/>
    <nav className='sm:hidden'>
        <NavItems/>
    </nav>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropdown