import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@public/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import Image from 'next/image'

const geistSans = localFont({
  src: '../../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-screen items-center justify-center antialiased`}
      >
        <div className='bg-holder bg-auth-card-overlay fixed bottom-0 left-0 top-0'>
          <Image src='/images/bg/37.png' width={1920} height={1080} alt='Background Image' className='h-full' />
        </div>
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  )
}
