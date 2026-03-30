import Image from 'next/image'
import { brands } from './brandsData'

const Brands = () => {
  return (
    <section className='bg-white dark:bg-darklight py-10! md:py-12! overflow-hidden'>
      {/* Heading row */}
      <div className='container mx-auto mb-8'>
      <div className='flex items-center gap-4'>
  {/* Left Span - mostly transparent, fades in at the very end */}
  <span className='flex-1 h-px bg-border dark:bg-dark_border mask-[linear-gradient(to_right,transparent_60%,black_100%)]' />
  
  <p className='text-sm font-medium text-grey dark:text-white/50 whitespace-nowrap text-center px-2'>
    Loved by 1000+ big and small brands around the world
  </p>
  
  {/* Right Span - mostly transparent, fades in at the very beginning */}
  <span className='flex-1 h-px bg-border dark:bg-dark_border mask-[linear-gradient(to_left,transparent_60%,black_100%)]' />
</div>

      </div>

      {/* Marquee strip */}
      <div
        className='w-full overflow-hidden brands-marquee-mask container mx-auto'
        aria-hidden='true'
      >
        <div className='flex w-max brands-marquee-track'>
          {/* Two identical sets for seamless looping */}
          {[0, 1].map((set) => (
            <div
              key={set}
              className='flex items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10'
            >
              {brands.map((brand) => (
                <div
                  key={`${set}-${brand.alt}`}
                  className='shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300'
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                    unoptimized
                    className='h-7 md:h-9 w-auto dark:invert'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
