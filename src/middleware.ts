import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const protectedRoutes = [
    '/dashboard',
    '/wedding'
  ]

  const isProtected = protectedRoutes.some(
    route => pathname.startsWith(route)
  )

  if (!isProtected) {
    return NextResponse.next()
  }

  const token =
    request.cookies.get('sb-access-token')?.value

  if (!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/wedding/:path*'
  ]
}
