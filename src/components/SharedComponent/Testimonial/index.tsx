'use client'

import React, { useRef } from 'react'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@/app/api/data'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import EyeBrew from '../EyeBrew'
import { getImgPath } from '@/utils/image'

interface SliderRef {
  slickPrev: () => void
  slickNext: () => void
}

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className='relative flex flex-col gap-5 rounded-lg  dark:ring-0 bg-card p-4 md:p-6 h-full min-h-[260px]'>
    <Image src={getImgPath("/images/testimonial/testimonial-icon.svg")} alt="quote" width={50} height={50} className='' />

    <div className='flex items-center gap-1 text-orange-500'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className='h-4 w-4 fill-current' />
      ))}
    </div>

    <p className='text-foreground text-body flex-1 leading-relaxed'>
      &ldquo;{item.quote}&rdquo;
    </p>

    <div>
      <p className='text-foreground font-bold tracking-wide text-body'>{item.name}</p>
      <p className='text-muted-foreground font-medium tracking-wide text-small'>
        {item.role}
        {item.company ? (
          <span className='uppercase'>&nbsp;&middot;&nbsp;{item.company}</span>
        ) : null}
      </p>
    </div>
  </div>
)

const Testimonial = () => {
  const sliderRef = useRef<SliderRef>(null)

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section
      id='testimonials'
      className='relative z-40'
      aria-labelledby='testimonials-heading'
    >
      <div className='container mx-auto'>
        {/* Section header */}
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-14'>
          <EyeBrew text='Client Testimonial' />

          {/* Prev / Next controls */}
          <div className='flex items-center max-sm:justify-end gap-3'>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label='Previous testimonial'
              className='flex items-center justify-center h-8 w-8  md:h-10 md:w-10 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-200'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              aria-label='Next testimonial'
              className='flex items-center justify-center h-8 w-8  md:h-10 md:w-10 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-200'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef as unknown as React.LegacyRef<Slider>} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className='px-3'>
              <TestimonialCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
