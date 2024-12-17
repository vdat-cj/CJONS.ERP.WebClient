import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'

import '@public/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'

const cjFont = localFont({
  src: [
    {
      path: '../../../public/fonts/CJFont/BodyLight.ttf',
      weight: '300'
    },
    {
      path: '../../../public/fonts/CJFont/BodyRegular.ttf',
      weight: '400'
    },
    {
      path: '../../../public/fonts/CJFont/TittleMedium.ttf',
      weight: '500'
    },
    {
      path: '../../../public/fonts/CJFont/TittleBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-cj'
})

export const metadata: Metadata = {
  title: 'ERP - CJ OLivenetworks Vina'
}

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${cjFont.variable} flex h-screen w-screen items-center justify-center antialiased`}>
        <div className='bg-holder bg-auth-card-overlay fixed bottom-0 left-0 top-0'>
          <Image src='/images/bg/37.png' width={1920} height={1080} alt='Background Image' className='h-full' />
        </div>
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  )
}
