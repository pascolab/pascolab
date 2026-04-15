'use client'

import CTA from '@/components/Common/CTA'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import hero1 from '../../../../public/images/hero/hero-img.jpg'
import { homeHeroContent } from '../homeContent'

const heroImages = [
  { src: hero1, alt: 'Hero slide 1' },
  { src: hero1, alt: 'Hero slide 2' },
  { src: hero1, alt: 'Hero slide 3' },
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
    <section className='relative  h-screen py-0 my-0 overflow-hidden'>
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
              />
            </div>
          ))}
        </Slider>
        <div className='pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/98 via-[#0e2a35]/50 to-[#0e2a35]/10 ' />
      </div>
      <div className='relative z-40 flex h-full flex-col pointer-events-none'>
        {/* <div className='pointer-events-auto'>
          <Header />
        </div> */}
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
                <CTA label={homeHeroContent.primaryCtaLabel} href={homeHeroContent.primaryCtaHref} size='lg' className='hover:bg-white! md:py-3.5 md:px-7' />
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='py-3.5 h-auto md:px-7 border-primary! rounded-full'
                >
                  <Link href={homeHeroContent.secondaryCtaHref}>{homeHeroContent.secondaryCtaLabel}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
