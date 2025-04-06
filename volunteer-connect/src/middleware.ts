import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;
  
  // Define public routes that don't require authentication
  const publicRoutes = [
    '/login',
    '/register',
    '/',
    '/about',
    '/blog',
    '/contact'
  ];

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => path === route);

  // Always allow access to public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Check for auth token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  // If trying to access dashboard routes without auth, redirect to login
  if (path.includes('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // For authenticated users trying to access auth pages, redirect to dashboard
  if ((path === '/login' || path === '/register') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Update config to match all routes
export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
}; 