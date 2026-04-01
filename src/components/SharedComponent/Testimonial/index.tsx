import { testimonials } from '@/app/api/data'

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
    <div className='shrink-0 w-72 sm:w-80 lg:w-88 bg-white  shadow-sm  transition-colors duration-500! ease-in-out rounded-lg p-6 flex flex-col gap-4 select-none'>
      {/* Quote */}
      <p className='text-midnight_text text-sm leading-relaxed flex-1'>{item.quote}</p>

      {/* Footer */}
      <div className='flex items-center justify-between gap-3 pt-2 '>
        <div className='flex items-center gap-3'>
          {/* Initials avatar */}
          <div
            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${colorClass}`}
          >
            {getInitials(item.name)}
          </div>
          <div>
            <p className='text-midnight_text text-sm font-semibold leading-tight'>
              {item.name}
            </p>
            <p className='text-secondary text-xs'>{item.role}</p>
          </div>
        </div>
        <span className='text-xs font-medium text-grey border border-border rounded-full px-3 py-0.5 shrink-0'>
          {item.company}
        </span>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section id='testimonials' className='bg-gray-50/70 overflow-hidden'>
      {/* Header */}
      <div className='container mx-auto text-center mb-8  '>
        <p className='text-primary font-semibold text-sm uppercase tracking-widest mb-3'>
          Feedback
        </p>
        <h2 className='text-midnight_text text-3xl sm:text-4xl lg:text-[2.625rem] font-bold leading-tight mb-4'>
          What Our Clients Say
        </h2>
        <p className='text-secondary text-base max-w-xl mx-auto'>
          See what our clients have to say about their experience with us.
        </p>
      </div>

      {/* Marquee strip */}
      <div
        className='w-full overflow-hidden testimonials-marquee-mask py-4'
        aria-label='Scrolling testimonials'
      >
        <div className='flex w-max testimonials-marquee-track gap-5 px-2.5'>
          {[0, 1].map((set) => (
            <div key={set} className='flex gap-5'>
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={`${set}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
