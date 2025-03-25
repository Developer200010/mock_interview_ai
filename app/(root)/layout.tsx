import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
    
    <nav>
      <Link href="/" className='flex items-center gap-2 p-2'>
      <Image src="/logo.svg" alt="logo" width={38} height={32}/>
      <h2 className='text-primary-100'>PrepWise</h2>
      </Link>
    </nav>
<div>{children}</div>
    </>
  )
}

export default RootLayout;