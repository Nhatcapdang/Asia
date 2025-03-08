/** @format */

'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '../../utils/cn'
import Image, { StaticImageData } from 'next/image'
import { WobbleCard } from '@/utils/glare-card'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    avatar: StaticImageData
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const t = useTranslations()

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '10s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '30s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]',
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          ' flex  w-max flex-nowrap gap-14  max-md:gap-8 max-xs:gap-4',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-right"
            data-aos-offset={50 * idx}
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            className="max-w-[340px] max-md:max-w-[280px] max-xs:max-w-[200px] "
          >
            <WobbleCard className="rounded-[8px]  duration-300 relative">
              <Image
                src={item.avatar}
                alt="avatar"
                style={{
                  objectFit: 'cover',
                }}
                className="w-full h-full aspect-square"
                loading="lazy"
                placeholder="blur"
                quality={60}
              />
            </WobbleCard>
            <div className=" flex flex-col gap-4 max-xs:gap-2">
              <div></div>
              <div className="max-xs:block hidden"></div>
              <div>
                <h1 className="text-asia-2  text-[20px] max-xs:text-xs font-medium">
                  {t.raw('bloc_3.cases')[idx].category}
                </h1>
                <h1 className="font-medium text-[28px] max-xs:text-base text-asia-1">
                  {t.raw('bloc_3.cases')[idx].tagline}
                </h1>
              </div>
              <p className="line-clamp-2 text-asia-1  max-xs:text-sm text-opacity-80 pl-4 border-asia-7 border-l-[0.5px]">
                {t.raw('bloc_3.cases')[idx].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
