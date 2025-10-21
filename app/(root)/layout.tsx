import Navbar from '@/components/Navbar';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='min-h-screen text-gray-400'>
      <Navbar/>
        <div className='container py-10'>
            {children}
        </div>
    </main>
  )
}

export default layout