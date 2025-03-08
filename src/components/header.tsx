'use client'

import React, { useCallback, useMemo, useState } from 'react'
import { Tasp } from '../../public'
import Container from './container'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Nav } from './Nav/Index'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Svg from '../../public/svg'

export const MENU = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: 'ABOUT US',
    href: '/about-us',
  },
  {
    title: 'SERVICES',
    href: '/services',
  },
  {
    title: 'TEAM',
    href: '/team',
  },
]
export default function Header() {
  const pathname = usePathname()
  const isActive = useCallback((href: string) => pathname === href, [pathname])
  const locale = useLocale()
  console.log(locale)
  const t = useTranslations()

  return (
    <header className=" bg-asia-1  bg-opacity-70 sticky w-full top-0 z-50 shadow-3xl">
      <Container>
        <div className="h-[72px]">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <Link href="/" locale={locale} className="font-bold">
                LOGO SAMPLE
              </Link>
            </div>
            <Nav />
            <div className="hidden min-[850px]:block h-full  flex-auto mx-[68px]">
              <ul className="text-[14px] font-bold flex group h-full items-center overflow-hidden">
                {MENU.map((item, idx) => (
                  <li
                    key={idx}
                    className={clsx('h-full flex items-center relative', {})}
                  >
                    <Link
                      href={item.href}
                      className={clsx(
                        'tracking-wider px-[22px] py-2 cursor-pointer hover:text-tsap-3 duration-300'
                      )}
                      locale={locale}
                    >
                      {t.raw('head_menu')[idx]}
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="pill-tab"
                          transition={{
                            type: 'spring',
                            duration: 0.5,
                            stiffness: 100,
                            damping: 20,
                          }}
                          className="absolute inset-0 border-t-[5px]  border-tsap-3 -z-10"
                        ></motion.span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden min-[850px]:flex  items-center space-x-4">
              {[<Svg.ArrowImg />, <Svg.Dolphin />, <Svg.Aim />].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="[&_svg>path]:hover:fill-asia-2 cursor-pointer"
                  >
                    {item}
                  </div>
                )
              )}
              <div className="p-4 py-[10px] h-10 flex justify-center items-center bg-asia-2 rounded-[33px] gap-2 group cursor-pointer duration-300 overflow-hidden">
                <span className="hidden opacity-0 group-hover:block group-hover:opacity-100 duration-300 ">
                  {' '}
                  Contactez-nous
                </span>
                <div className="">
                  <Svg.ArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
