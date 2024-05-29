import createMiddleware from "next-intl/middleware";
import { locales, pathnames, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
  ],
};
