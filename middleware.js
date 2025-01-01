import { NextResponse } from "next/server";
import { getServerCookie } from "./utils/configs/serverSideCookies";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const protectedPaths = [
    "/auth/sign-in",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];
  const publicPaths = ["/_next", "/images", "/api", "/favicon.ico", "/fonts"];

  // Check if the path is a public path
  if (publicPaths.some((publicPath) => path.startsWith(publicPath))) {
    return NextResponse.next();
  }

  // const token = getServerCookie("authToken") || "";
  const token = request.cookies.get("authToken")?.value;
  console.log(`Token present: ${!!token}`);
  if (!protectedPaths.includes(path) && !token) {
    if (path !== "/") {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }

  if (protectedPaths.includes(path) && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
