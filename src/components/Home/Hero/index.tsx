'use client'

import Header from '@/components/Layout/Header'
import Image from 'next/image'
import Slider from "react-slick";
import hero1 from '../../../../public/images/hero/hero-img.jpg'

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
    pauseOnHover: true
  };

  return (
    <section className='relative h-[70vh] md:h-screen'>
      <div className='absolute inset-0'>
        <Slider {...settings} className='hero-slider h-full'>
          {heroImages.map((image, index) => (
            <div key={index} className='relative h-[70vh] md:h-screen'>
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
      </div>
        <Header />
    </section>
  )
}

export default Hero
