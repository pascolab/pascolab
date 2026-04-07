'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@/app/api/data'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

const avatarColors = [
  'bg-blue-100 text-blue-700',
  'bg-emerald-100 text-emerald-700',
  'bg-violet-100 text-violet-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
  'bg-cyan-100 text-cyan-700',
  'bg-orange-100 text-orange-700',
]

const TestimonialCard = ({
  item,
  index,
}: {
  item: Testimonial
  index: number
}) => {
  const colorClass = avatarColors[index % avatarColors.length]
  return (
    <div className='bg-background shadow-sm rounded-lg p-6 flex flex-col gap-4 h-full min-h-52'>
      <p className='text-muted-foreground text-base leading-relaxed flex-1'>{item.quote}</p>

      <div className='flex items-center justify-between gap-3 pt-2'>
        <div className='flex items-center gap-3'>
          <div
            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${colorClass}`}
          >
            {getInitials(item.name)}  
          </div>
          <div>
            <p className='text-foreground text-sm font-semibold leading-tight'>{item.name}</p>
            <p className='text-muted-foreground text-xs'>{item.role}</p>
          </div>
        </div>
        <Badge variant='outline'>{item.company}</Badge>
      </div>
    </div>
  )
}


const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 600,
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 640,  
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  }

  return (
    <section
      id='testimonials'
      className='bg-background/90 relative z-40'
      aria-labelledby='testimonials-heading'
    >
      <div className='container mx-auto text-center mb-8'>
        <p className='text-muted-foreground font-semibold text-sm uppercase tracking-widest mb-3'>
          Feedback
        </p>
        <h2
          id='testimonials-heading'
          className='text-foreground text-3xl sm:text-4xl lg:text-[2.625rem] font-bold leading-tight mb-4'
        >
          What Our Clients Say
        </h2>
        <p className='text-muted-foreground text-base max-w-xl mx-auto'>
          See what our clients have to say about their experience with us.
        </p>
      </div>

      <div className='container mx-auto testimonial-slider'>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className='px-3 py-5'>
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
