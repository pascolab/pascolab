import Image from 'next/image'
import { Brand, brands } from './brandsData'

const BrandItem = ({brand}: {brand: Brand}) => {
  return (
    <div
                  key={brand.alt}
                  className='shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 h-12 md:h-16'
                >
                  <Image  
                    src={brand.src}
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                    unoptimized
                    className='h-full object-cover w-auto dark:invert'
                  />
                </div>
  )
}

const Brands = () => {
  return (
    <section className=' py-0 *:py-3  space-y-3 bg-white'> 

      {/* Marquee strip LTR */}
      <div
        className='w-full overflow-hidden brands-marquee-mask'
        aria-hidden='true'
      >
        {/* First Marquee LTR */}
        <div className='flex w-max brands-marquee-track'>
          {/* Two identical sets for seamless looping */}
          {[0, 1].map((set) => (
            <div
              key={set}
              className='flex items-center gap-12 px-6'
            >
              {brands.map((brand) => (
                <BrandItem key={brand.alt} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Second Marquee RTL */}
      <div
        className='w-full overflow-hidden brands-marquee-mask'
        aria-hidden='true'
      >
        <div className='flex w-max brands-marquee-track reverse'>
          {/* Two identical sets for seamless looping */}
          {[0, 1].map((set) => (
            <div
              key={set}
              className='flex items-center gap-12  px-6'
            >
              {brands.map((brand) => (
                <BrandItem key={brand.alt} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
