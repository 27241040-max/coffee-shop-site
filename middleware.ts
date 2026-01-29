import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const supportedLocales = ["zh", "en"] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/zh", request.url));
  }

  const [, locale] = pathname.split("/");
  if (!supportedLocales.includes(locale as (typeof supportedLocales)[number])) {
    return NextResponse.redirect(new URL(`/zh${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"],
};
