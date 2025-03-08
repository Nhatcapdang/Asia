import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  const response = await fetch(
    `https://api.test.soa-dev.net/api/v1/pages?lang=${locale}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch messages')
  }
  const messages = await response.json()
  return {
    locale,
    // messages: (await import(`../messages/${locale}.json`)).default,
    // https://api.test.soa-dev.net/api/v1/pages?lang=en
    messages: messages[0],
  }
})
