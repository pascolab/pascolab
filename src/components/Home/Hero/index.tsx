'use client'

  import CTA from '@/components/Common/CTA'
import Image from 'next/image'
import Slider from "react-slick";
import { homeHeroContent } from '../homeContent'

const heroImages = [
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-1.svg", alt: 'Hero slide 1' },
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-2.svg", alt: 'Hero slide 2' },
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-3.svg", alt: 'Hero slide 3' },
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
    <section className='relative  py-0 h-[calc(90vh-60px)] md:h-[calc(100vh-69px)] mt-15 md:mt-[69px] overflow-hidden'>
      <div className='absolute inset-0'>
        <Slider {...settings} className='hero-slider h-full'>
          {heroImages.map((image, index) => (
            <div key={index} className='relative h-screen'>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className='object-cover object-[70%_80%] md:object-center'
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
          <div className='flex h-full w-full md:w-[60%] flex-col items-start justify-center'>
            <div className='pointer-events-none content-space select-none'>
              <h1 className='text-display text-white'>
                {homeHeroContent.heading}
              </h1>
              <p className='max-w-2xl text-white/90 text-body-large'>
                {homeHeroContent.subheading}
              </p>
              <div className='flex flex-wrap items-center gap-4 pointer-events-auto'>
                <CTA label={homeHeroContent.primaryCtaLabel} href={homeHeroContent.primaryCtaHref} size='lg' className='hover:bg-white! md:px-7' />
                <CTA label={homeHeroContent.secondaryCtaLabel} href={homeHeroContent.secondaryCtaHref} size='lg' className='border-primary bg-transparent not-dark:hover:text-white ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
