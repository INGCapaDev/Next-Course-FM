import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
  return NextResponse.redirect('/');
}

export const config = {
  matcher: ['/todos'],
};
