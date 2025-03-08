import { WobbleCard } from '@/utils/glare-card'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import Img from '../../../public/image'
import Svg from '../../../public/svg'
import { InfiniteMovingCards } from '../animata/infinite-moving-cards'
import Container from '../container'
import Sliders from './Slides'

export default function Home() {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-20">
      <div className="max-h-[1080px] max-xs:h-[812px] max-md:h-[834px] relative -mt-[72px]">
        <Image
          className="w-full h-full object-cover"
          src={Img.Banner1}
          alt={'Introdution about company'}
          loading="lazy"
          objectPosition="center"
          placeholder="blur"
          quality={60}
        />
        <div className="absolute left-0 bottom-24 w-full">
          <Container className=" flex justify-around items-center border-t border-opacity-30 border-white py-5">
            {[<Svg.ArrowImg />, <Svg.Dolphin />, <Svg.Aim />].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="[&_svg>path]:hover:fill-asia-2 cursor-pointer scale-[1.4]"
                >
                  {item}
                </div>
              )
            )}
          </Container>
        </div>
      </div>
      <Container>
        <div className="max-md:block flex items-center font-semibold text-[52px] max-md:text-2xl text-center text-asia-2 uppercase">
          <span className="flex-1 border-t mr-10 border-asia-7 max-md:hidden min-w-40"></span>
          {t('bloc_1.title')}
          <span className="flex-1 border-t mr-10 border-asia-7 max-md:hidden min-w-40"></span>
        </div>
        <p className="text-asia-1 text-2xl text-center mb-10 max-md:text-sm max-md:mb-5">
          {t('bloc_1.subtitle')}
        </p>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 ">
          {[
            {
              avatar: Img.Avatar4,
            },
            {
              avatar: Img.Avatar5,
            },
            {
              avatar: Img.Avatar6,
            },
          ].map((i, idx) => {
            return (
              <div
                key={idx}
                className={clsx('group/item', {
                  'mt-10 max-md:mt-0': idx % 2 === 0,
                })}
                data-aos="fade-right"
                data-aos-offset={50 * idx}
                data-aos-easing="ease-in-sine"
                data-aos-once="true"
              >
                <WobbleCard className="rounded-[8px]  duration-300 relative">
                  <Image
                    src={i.avatar}
                    alt="avatar"
                    style={{
                      objectFit: 'cover',
                    }}
                    className="w-full h-full max-sm:max-h-[200px]"
                    loading="lazy"
                    placeholder="blur"
                    quality={60}
                  />
                </WobbleCard>
                <div className=" flex flex-col gap-4 max-md:gap-2">
                  <div></div>
                  <div className="max-md:block hidden"></div>
                  <div>
                    <h1 className="text-asia-2  text-[20px] max-md:text-xs font-medium">
                      {t.raw('bloc_1.cases')[idx].category}
                    </h1>
                    <h1 className="font-medium text-[28px] max-md:text-base text-asia-1">
                      {t.raw('bloc_1.cases')[idx].tagline}
                    </h1>
                  </div>
                  <p className="line-clamp-2 text-asia-1  max-md:text-sm text-opacity-80">
                    {t.raw('bloc_1.cases')[idx].description}
                  </p>
                  <button className="px-3 py-2 w-max text-asia-1 hover:bg-asia-2 hover:text-white group max-md:text-sm text-lg flex justify-center items-center gap-2 rounded-[33px] h-11 max-xs:h-8 border-opacity-30 border-asia-1 border">
                    {t.raw('bloc_1.cases')[idx].cta}{' '}
                    <span className="[&_svg>path]:fill-asia-8 group-hover:[&_svg>path]:fill-white">
                      <Svg.ArrowUpRight />
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
      <Container className="w-full">
        <div className="mb-[32px] max-xs:mb-[16px] flex justify-between items-center ">
          <div className="max-xs:block flex items-center font-semibold text-[52px] max-xs:text-2xl  text-asia-2 uppercase">
            {t('bloc_3.title')}
          </div>
          <p className="  flex max-sm:hidden text-asia-9 text-medium text-xl  justify-center items-center border-b border-asia-6 cursor-pointer hover:text-asia-2 hover:border-asia-2 group">
            {t('bloc_3.more_info')}{' '}
            <span className="[&_svg>path]:fill-asia-9 [&_svg]:rotate-[45deg] h-fit group-hover:[&_svg>path]:fill-asia-2">
              <Svg.ArrowUpRight />
            </span>
          </p>
        </div>
        <div className="w-full">
          <InfiniteMovingCards
            items={[
              {
                avatar: Img.Avatar7,
              },
              {
                avatar: Img.Avatar8,
              },
              {
                avatar: Img.Avatar9,
              },
              {
                avatar: Img.Avatar10,
              },
            ]}
            direction="right"
            speed="normal"
          />
        </div>
        <button className="hidden max-sm:flex mt-[15px] mx-auto rounded-[43px] bg-asia-2 px-10 py-3 w-max hover:bg-asia-3 cursor-pointer ">
          {t('bloc_3.more_info')}{' '}
          <span className="[&_svg>path]:fill-white [&_svg]:rotate-[45deg] h-fit group-hover:[&_svg>path]:fill-asia-2">
            <Svg.ArrowUpRight />
          </span>
        </button>
      </Container>
      <Container>
        <Card img={Img.Banner7} description={t('bloc_4.text')} />
        <div className="flex justify-around flex-wrap gap-6 mt-[60px]">
          {[
            {
              icon: <Svg.Container />,
            },
            {
              icon: <Svg.Container2 />,
            },
            {
              icon: <Svg.Container3 />,
            },
            {
              icon: <Svg.Container4 />,
            },
            {
              icon: <Svg.Container5 />,
            },
          ].map((i, idx) => (
            <div key={idx} className="flex flex-col  items-center flex-1">
              {i.icon}
              <p className="text-2xl max-xs:text-base text-asia-1 font-medium mt-4">
                {t.raw('bloc_4.pictos')[idx].title}
              </p>
              <p className="text-lg max-xs:text-sm text-asia-1 text-opacity-80 text-center">
                {t.raw('bloc_4.pictos')[idx].description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Sliders />
      <div className="flex flex-col [--gap2:50px] max-xs:[--gap2:20px] [gap:var(--gap2)]">
        <div className="h-[666px] max-xs:h-[483px]  overflow-hidden relative">
          <Image
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full h-full object-cover"
            src={Img.Banner3}
            alt={'Introdution about company'}
            loading="lazy"
            placeholder="blur"
            quality={60}
          />
          <div className="absolute top-0 right-0 h-full w-full">
            <div className=" mx-auto px-4 flex items-center mt-[70px]">
              <div className=" max-w-[647px] text-center flex flex-col gap-[25px] max-xs:gap-2 m-auto">
                <h1
                  data-aos="fade-left"
                  data-aos-once="true"
                  className="text-[52px] max-xs:text-2xl text-asia-1 font-semibold max-w-[555px]"
                >
                  {t('bloc_6.title')}{' '}
                  <span className="text-asia-1  text-opacity-50">
                    {t('bloc_6.subtitle')}
                  </span>
                </h1>
                <p
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-once="true"
                  className=" text-2xl max-xs:text-sm text-asia-1"
                >
                  {t('bloc_6.text')}{' '}
                </p>
                <div className="mx-auto mt-[15px]">
                  <button className="rounded-[43px] bg-asia-2 px-10 py-3 w-max hover:bg-asia-3 cursor-pointer">
                    {t('bloc_6.button')}{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({
  description,
  img,
}: {
  description: string
  img: StaticImageData
}) => {
  const t = useTranslations()

  return (
    <div>
      <div className="flex gap-6 max-lg:gap-8 max-md:hidden">
        <div className="flex-1 max-[912px]:mt-[var(--gap2)]">
          <h1
            data-aos-offset="0"
            data-aos="fade-left"
            data-aos-delay="-200"
            data-aos-once="true"
            className="text-5xl max-md:text-10 max-lg:text-[32px] max-xs:text-2xl text-asia-2 font-semibold  uppercase "
          >
            {t('bloc_4.title')}{' '}
            <span className="text-asia-2  text-opacity-60">
              {t('bloc_4.subtitle')}
            </span>
          </h1>
          <div className="mt-[60px] max-lg:mt-6  mb-[11px] max-xs:block flex items-center font-semibold text-[28px] max-xs:text-2xl text-center text-asia-1 uppercase">
            <span className="flex-1  border-t-2 mr-10 border-asia-7 max-xs:hidden max-w-[81px]"></span>
            {t('bloc_4.text_title')}
          </div>
          <p className="text-asia-1 text-opacity-80 max-lg:pl-0 pl-[121px] text-lg">
            {description}
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="400" data-aos-once="true">
          <Image
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-[30px] max-w-[503px] max-lg:max-w-[403px] max-md:max-w-[369px]  m-auto"
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
            placeholder="blur"
            quality={60}
          />
        </div>
      </div>

      {/* modile UI */}
      <div
        className=" px-4 py-8 max-md:block hidden"
        style={{
          backgroundImage: `url(${Img.Banner7.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=" w-full">
          <div className="flex-1 px-4 py-8  bg-white/60 backdrop-blur-[15px] rounded-[16px]">
            <h1
              data-aos-offset="0"
              data-aos="fade-left"
              data-aos-delay="-200"
              data-aos-once="true"
              className="text-5xl max-xl:text-10 max-lg:text-[32px] max-xs:text-2xl text-asia-2 font-semibold  uppercase "
            >
              {t('bloc_4.text_title')}

              <span className="text-asia-2  text-opacity-60">
                {t('bloc_4.subtitle')}
              </span>
            </h1>
            <div className="border-l-asia-7 border-l-2 pl-3 mt-6 max-xs:block flex items-center font-semibold text-[28px] max-xs:text-base  text-asia-1 uppercase">
              {t('bloc_4.text_title')}
            </div>
            <p className="text-asia-1 text-opacity-80 max-lg:pl-0 pl-[121px] text-lg max-xs:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
