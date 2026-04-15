import Image from 'next/image'
import { Brand, brands } from './brandsData'
import { homeBrandsContent } from '../homeContent'

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
    <section className=' max-sm:py-8 max-sm:border-b border-border/50 bg-background'> 
    <div className='container mx-auto flex flex-col md:flex-row! items-center content-space'>
    <div className='w-full md:w-[25%] shrink-0 content-space'>
      <h2 className='text-display'>{homeBrandsContent.heading}</h2>
      <p className='text-body-large text-muted-foreground'>{homeBrandsContent.subHeading}</p>
    </div>
      {/* Second Marquee RTL */}  
      <div
        className='flex-1 brands-marquee-mask'
        aria-hidden='true'
      >
        <div className='flex w-max brands-marquee-track reverse'>
          {/* Two identical sets for seamless looping */}
          {[0, 1].map((set) => (
            <div
              key={set}
              className='flex items-center gap-12  px-6 py-2.75'
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
