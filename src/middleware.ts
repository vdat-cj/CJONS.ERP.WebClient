import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { ACCESS_TOKEN } from '@/configs/constants'

export async function middleware(request: NextRequest) {
  const href = request.nextUrl.href
  const token = request.cookies.get(ACCESS_TOKEN)

  if (!href.includes('auth') && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
