import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const dummyUserData = {
    role: "admin",
    email: "test@gmail.com"
  }

  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role == "admin";

  if(isServicesPage && !isAdmin) 
    return NextResponse.redirect(new URL('/login', request.url));

  return NextResponse.next();
}