import 'aos/dist/aos.css'
import '../globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import AOSProvider from '@/components/AOSProvider'
import PageAnimatePresence from '@/components/PageAnimatePresence'
import Header from '@/components/header'
import { Footer, Message } from '@/components'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Source Of Asia',
  description:
    'Source Of Asia is a group of companies that provide a wide range of services in the field of construction, design, and consulting.',
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <AOSProvider>
            <PageAnimatePresence>
              <main className="max-w-screen-desktop mx-auto flex flex-col min-h-[100vh] ">
                <Header />
                <div className="flex-auto"> {children}</div>
                <Footer />
                <Message />
              </main>
            </PageAnimatePresence>
          </AOSProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
