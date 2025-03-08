/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Container from '../container'
import { MENU } from '../header'
import { Tasp, Twitter, Linkedin } from '../../../public'
import Svg from '../../../public/svg'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer>
      <div className=" bg-asia-1 ">
        <Container className="flex flex-col gap-14">
          <div></div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-xs:grid-cols-1 justify-around gap-5 max-xs:gap-8 max-xs:text-center">
            <p className="text-lg">
              {t('footer.address.name')}
              <br />
              {t('footer.address.phone')} <br />
              {t('footer.address.location')}
            </p>
            <ul className="text-lg">
              <Link href={t.raw('footer.links')[0].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[0].name}
                </li>
              </Link>
              <Link href={t.raw('footer.links')[1].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[1].name}
                </li>
              </Link>
              <Link href={t.raw('footer.links')[2].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[2].name}
                </li>
              </Link>
            </ul>
            <ul className="text-lg">
              <Link href={t.raw('footer.links')[3].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[3].name}
                </li>
              </Link>
              <Link href={t.raw('footer.links')[4].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[4].name}
                </li>
              </Link>
              <Link href={t.raw('footer.links')[5].url}>
                <li className="cursor-pointer  text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[5].name}
                </li>
              </Link>
            </ul>
            <ul className="text-lg">
              <Link href={t.raw('footer.links')[6].url}>
                <li className="cursor-pointer text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[6].name}
                </li>
              </Link>
              <Link href={t.raw('footer.links')[7].url}>
                <li className="cursor-pointer text-white/60 hover:text-white/100">
                  {t.raw('footer.links')[7].name}
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-between pt-5 border-t-white/30 border-t  max-xs:pt-0  max-xs:border-t-0 max-xs:flex-col-reverse max-xs:items-center">
            <p className="border-t-white/30 max-xs:border-t max-xs:w-full max-xs:text-center  max-xs:pt-5">
              © BASIC 2025
            </p>
            <div className="flex gap-3 max-xs:mb-5 ">
              {[<Svg.Fb />, <Svg.Fb2 />, <Svg.Fb3 />].map((i, idx) => {
                return (
                  <span
                    key={idx}
                    className="cursor-pointer [&_svg>rect]:hover:fill-asia-3"
                  >
                    {i}
                  </span>
                )
              })}
            </div>
          </div>
          <div></div>
        </Container>
      </div>
    </footer>
  )
}
