import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.rewrite(new URL('/hello', request.url));
  }

  return NextResponse.redirect(new URL('/hello', request.url));
}

export const config = {
  matcher: ['/about', '/profile'],
};
