import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "pt"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/home": "/home",
  "/about": {
    en: "/about",
    pt: "/sobre",
  },
  "/contact": {
    en: "/contact",
    pt: "/contato",
  },
  "/projects": {
    en: "/projects",
    pt: "/projetos",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
