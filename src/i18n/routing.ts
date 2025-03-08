import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
  // pathnames: {
  //   '/': '/',
  //   '/pathnames': {
  //     en: '/pathnames',
  //     fr: '/pfadnamen',
  //   },
  // },
})
// export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]
