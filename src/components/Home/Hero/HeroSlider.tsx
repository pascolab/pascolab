'use client'

import hero1 from '../../../../public/images/hero/hero-1.svg'
import hero2 from '../../../../public/images/hero/hero-2.svg'
import hero3 from '../../../../public/images/hero/hero-3.svg'


import Image from 'next/image'
import Slider from "react-slick";

const heroImages = [
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-1.svg", alt: 'Hero slide 1' },
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-2.svg", alt: 'Hero slide 2' },
  { src: "https://ik.imagekit.io/agvenvoax/Pascolab/hero-3.svg", alt: 'Hero slide 3' },
]
export default function HeroSlider() {
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
    )

}