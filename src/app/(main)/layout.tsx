import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import '@public/styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import AppSideBar from '@/components/layout/app-side-bar'
import Loading from '@/components/shared/loading'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${cjFont.variable} antialiased`}>
        <NuqsAdapter>
          <SidebarProvider>
            <AppSideBar />
            <SidebarInset>
              <Header />
              {/* page main content */}
              <Suspense fallback={<Loading />}>{children}</Suspense>
              {/* page main content ends */}
              <Footer />
            </SidebarInset>
          </SidebarProvider>
          <Toaster position='top-right' />
        </NuqsAdapter>
      </body>
    </html>
  )
}
