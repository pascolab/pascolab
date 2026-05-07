'use client'

import CTA from '@/components/Common/CTA'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import hero1 from '../../../../public/images/hero/hero-1.svg'
import hero2 from '../../../../public/images/hero/hero-2.svg'
import hero3 from '../../../../public/images/hero/hero-3.svg'
import { homeHeroContent } from '../homeContent'

const heroImages = [
  { src: hero1, alt: 'Hero slide 1' },
  { src: hero2, alt: 'Hero slide 2' },
  { src: hero3, alt: 'Hero slide 3' },
]

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out',
    pauseOnHover: true,
    swipe: true,
    touchMove: true,
  };

  return (
    <section className='relative  py-0 h-[calc(100vh-60px)] md:h-[calc(100vh-69px)] mt-15 md:mt-[69px] overflow-hidden'>
      <div className='absolute inset-0'>
        <Slider {...settings} className='hero-slider h-full'>
          {heroImages.map((image, index) => (
            <div key={index} className='relative h-screen'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className='object-cover object-center'
                sizes='100vw'
                loading='eager'
              />
            </div>
          ))}
        </Slider>
        <div className='pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/98 via-[#0e2a35]/50 to-[#0e2a35]/10 ' />
      </div>
      <div className='relative z-40 flex h-full flex-col pointer-events-none'>

        <div className='container mx-auto flex h-full flex-1 flex-col justify-center'>
          <div className='flex h-full w-full md:w-[60%] flex-col items-start justify-center pointer-events-none'>
            <div className='pointer-events-auto content-space'>
              <h1 className='text-display text-white'>
                {homeHeroContent.heading}
              </h1>
              <p className='max-w-2xl text-white/90 text-body-large'>
                {homeHeroContent.subheading}
              </p>
              <div className='flex flex-wrap items-center gap-4'>
                <CTA label={homeHeroContent.primaryCtaLabel} href={homeHeroContent.primaryCtaHref} size='lg' className='hover:bg-white! md:px-7' />
                <CTA label={homeHeroContent.secondaryCtaLabel} href={homeHeroContent.secondaryCtaLabel} size='lg' className='border-primary bg-transparent ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
