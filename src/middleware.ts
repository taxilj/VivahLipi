import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl

    if (!pathname.startsWith('/dashboard')) {
      return NextResponse.next()
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl || supabaseUrl === 'placeholder') {
      return NextResponse.next()
    }

    const authCookie =
      request.cookies.get('sb-access-token')?.value ||
      request.cookies.get('sb-refresh-token')?.value

    if (!authCookie) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}
