'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@/app/api/data'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import clientTestimonial from '../../../../public/images/testimonial/Client-testimonial.png'
import EyeBrew from '../EyeBrew'

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

const TestimonialCard = ({
  item,
}: {
  item: Testimonial
}) => {
  return (
    <Card className='relative h-full shadow-none! ring-0 content-space bg-transparent border-none '>
        <EyeBrew text="Client Testimonial" />
      <CardHeader className='gap-4'>

        <div className='flex items-center gap-1 text-orange-500/80'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className='h-4 w-4 fill-current' />
          ))}
        </div>

        <p className='text-foreground text-body-large '>
          &ldquo;{item.quote}&rdquo;
        </p>
      </CardHeader>

      <CardContent className=''>
        <div className='flex items-start justify-between gap-6'>
          <div>
            <p className='text-foreground font-bold text-body-large'>{item.name}</p>
            <p className='text-muted-foreground/75  font-bold  tracking-widest text-small'>
              {item.role}
              <span className='inline-block uppercase'>{item.company ? ` · ${item.company}` : null}</span>
            </p>
          </div>
        </div>
      </CardContent>

      <Quote className='pointer-events-none absolute bottom-4 right-4 h-10 w-10 text-transparent  fill-primary/15 dark:fill-accent/30' />
    </Card>
  )
}


const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 600,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
  }

  return (
    <section
      id='testimonials'
      className='relative z-40 '
      aria-labelledby='testimonials-heading'
    >
      <div className='container mx-auto'>
        <h2 id='testimonials-heading' className='sr-only'>
          Testimonials
        </h2>

        <div className='flex flex-col lg:flex-row items-center md:justify-between gap-10 lg:gap-14'>
          <div className='w-full  max-w-[520px] lg:max-w-[40%]'>
            <Image
              src={clientTestimonial}
              alt='Client testimonial'
              className='h-auto w-full'
              priority={false}
              sizes='(min-width: 1024px) 560px, 100vw'
            />
          </div>

          <div className='w-full lg:max-w-[50%] testimonial-slider'>
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className='py-2'>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
