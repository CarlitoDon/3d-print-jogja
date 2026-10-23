import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
const defaultLocale: Locale = "id";

function getLocale(req: NextRequest): Locale {
  const acceptLang = req.headers.get("accept-language") ?? "";
  for (const part of acceptLang.split(",")) {
    const lang = part.split(";")[0].trim().split("-")[0].toLowerCase();
    if ((locales as readonly string[]).includes(lang)) return lang as Locale;
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  const locale = getLocale(req);
  req.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
