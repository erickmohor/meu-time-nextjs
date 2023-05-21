import { NextRequest, NextResponse } from 'next/server'


export function middleware(request: NextRequest) {
  const apiKey = request.cookies.get('nextauth.api.key')?.value
  
  if (!apiKey) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/information/:path*',
}