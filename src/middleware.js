import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (token.status === "suspended") {
    return NextResponse.redirect(new URL("/account-suspended", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account/:path*",
    "/profile/:path*",
    "/events/:path*",
  ],
};
