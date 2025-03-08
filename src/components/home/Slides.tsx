'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import Img from '../../../public/image'
import Svg from '../../../public/svg'
import Container from '../container'

const SLIDES_DATA = [
  {
    avatar: Img.Banner5,
  },
  {
    avatar: Img.Banner6,
  },
  {
    avatar: Img.Teambg,
  },
  {
    avatar: Img.Business1,
  },
]
const Slides = () => {
  const t = useTranslations()
  const [active, setActive] = useState(0)
  return (
    <div className="bg-gradient-to-b  from-asia-10/20 to-white">
      <Container className="mt-[60px]">
        <div className="grid grid-cols-2 max-xs:grid-cols-1 mb-[32px] gap-10 max-md:gap-5">
          <p className="text-asia-1/80 text-lg max-md:text-sm">
            {t('bloc_5.text')}{' '}
          </p>
          <h1 className="text-asia-1 font-semibold text-[40px] uppercase max-md:text-2xl">
            {t('bloc_5.title')} <span className="text-asia-2">#BASIC</span>
          </h1>
        </div>
        <div
          className="bg-cover bg-no-repeat rounded-[20px] mb-[22px]"
          style={{
            backgroundImage: `url(${Img.Fin.src})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="   ">
            <div className="bg-white p-5 rounded-[20px]">
              <Image
                src={Img.Lbs}
                alt="Fin"
                className="w-full h-full object-cover"
                loading="lazy"
                placeholder="blur"
                quality={60}
              />
              <div className="flex justify-between items-center">
                <p className="text-black font-semibold text-2xl max-xs:text-base">
                  {' '}
                  {t.raw('bloc_5.reviews')[active].author}
                </p>
                <p className="text-black text-xl max-xs:text-sm">
                  {' '}
                  {t.raw('bloc_5.reviews')[active].date}
                </p>
              </div>
              <p className="text-asia-9  max-xs:text-sm">
                {t.raw('bloc_5.reviews')[active].review}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 max-sm:gap-4 mb-12 max-md:grid-cols-2">
          {SLIDES_DATA.map((i, idx) => {
            return (
              <div
                className="relative cursor-pointer rounded-[20px] overflow-hidden"
                key={idx}
                onMouseEnter={() => setActive(idx)}
              >
                <Image
                  className="w-full h-full object-cover"
                  src={i.avatar}
                  alt={'Introdution about company'}
                  loading="lazy"
                  objectPosition="center"
                  placeholder="blur"
                  quality={60}
                />
                <div className="absolute left-0 bottom-0 justify-between px-5 py-4 max-xs:p-2 w-full flex bg-asia-1/60  cursor-pointer">
                  <p className="flex items-center gap-[6px] max-xs:text-xs">
                    <Svg.Instagram />
                    {t.raw('bloc_5.reviews')[idx].author}
                  </p>
                  <Svg.ArrowUpRight />
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-asia-9 text-2xl">
          {t('bloc_5.footer')}
          Consultez @BASIC et{' '}
          {/* <span className="text-asia-2 font-bold">#BASIC</span> pour découvrir
            les ex périences inoubliables des pourvoiries et activités BASIC. */}
        </p>
      </Container>
    </div>
  )
}

export default Slides
