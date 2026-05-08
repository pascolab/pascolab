import Image from 'next/image'
import { Brand, brands } from './brandsData'
import { homeBrandsContent } from '../homeContent'

const BrandItem = ({brand}: {brand: Brand}) => {
  return (
    <div
                  key={brand.alt}
                  className='shrink-0 opacity-100 transition-opacity duration-300 h-20 md:h-32 scale-150 last:me-4 md:last:me-23!'
                >
                  <Image  
                    src={brand.src}
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                    unoptimized
                    className='h-full object-cover w-auto'
                  />
                </div>
  )
}

const Brands = () => {
  return (
    <section className=' max-sm:py-8  bg-[#07151b] overflow-hidden'> 
    <div className='container mx-auto flex flex-col md:flex-row! items-center content-space'>
    <div className='w-full md:w-[25%] shrink-0 md:content-space'>
      <h2 className='text-display text-white'>{homeBrandsContent.heading}</h2>
      <p className='text-body-large text-white/80 max-sm:py-4'>{homeBrandsContent.subHeading}</p>
    </div>
      {/* Second Marquee RTL */}  
      <div
        className='flex-1 brands-marquee-mask bg-[#07151b] shadow-lg'
        aria-hidden='true'
      >
        <div className='flex w-max brands-marquee-track reverse '>
          {/* Two identical sets for seamless looping */}
          {[0, 1, 2].map((set) => (
            <div
              key={set}
              className='flex items-center gap-24 md:gap-40  px-6'
            >
              {brands.map((brand) => (
                <BrandItem key={brand.alt} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Brands
