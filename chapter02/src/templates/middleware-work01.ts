import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/hello', request.url));
}

export const config = {
  matcher: '/about',
};
