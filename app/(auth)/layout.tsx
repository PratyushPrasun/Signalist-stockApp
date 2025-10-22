
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='auth-layout'>
        <section className='auth-left-section scrollbar-hide-default'>
            <Link href='/' className='auth-logo'>
             <Image src="/assets/icons/logo.svg" alt='Signalist logo' width={140} height={32} className='h-8 w-auto'/>
            </Link>
            <div className='pb-6 lg:pb-7 flex-1'>{children}</div>
        </section>
        <section className='auth-right-section'>
            <div className='z-10 relative lg:mt-2 lg:mb-10'>
                <blockquote className='auth-blockquote'>
                    Signalisst turned my wathlist into winning list. The alerts are spot-on , and i feel confident making moves in the market knowing I have Signalist by my side.
                </blockquote>
                <div className="flex items-center justify-between">
                    <div>
                        <cite className='auth-testimonial-author'> - Ethan R.</cite>
                        <p className='max-ad:text-xs text-gray-500'>Retail Invester</p>
                    </div>
                <div className='flex items-center gap-0.5'>
                    {[1,2,3,4,5].map((star)=>(
                        <Image src='/assets/icons/star.svg' alt='star' key={star} width={20} height={20} className='w-4 h-4'/> 
                    ))}
                </div>
                </div>
            </div>
            <div className='flex-1 relative'>
                <Image src="/assets/images/dashboard.png" alt='' width={1440} height={1150} className='auth-dashboard-preview absolute top-0'/>
            </div>
        </section>
    </main>
  )
}

export default layout