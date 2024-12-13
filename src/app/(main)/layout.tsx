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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-hidden antialiased`}>
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
