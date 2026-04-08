import React from 'react'
import Link from 'next/link'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'
import { Button } from '@/components/ui/button'


const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-background relative z-30'>
      <div className='absolute right-0 bottom-0  w-[800px] h-[700px] 
              bg-[radial-gradient(ellipse_at_bottom_right,#0abfa3_0%,transparent_70%)] 
              pointer-events-none blur-2xl' />
      <div className='container'>
        <div className='text-center'>
          <h2
            className='sm:text-4xl text-[28px] leading-tight font-bold text-foreground text-center pt-7 pb-4 md:w-4/6 w-full m-auto'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            Explore my portfolio showcase
          </h2>
          <div className='pb-14 inline-flex'>
            <p className='text-base font-normal text-muted-foreground'>
              Dive into a curated collection of my finest work, showcasing
              expertise across various industries.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,45%)_1fr] md:gap-8 lg:gap-12'>
          <div className='flex flex-col items-start text-left md:pt-20'>
            <p
              className='text-sm font-semibold uppercase tracking-widest text-primary'
            >
              Featured Insights
            </p>
            <h2 className='mt-4 text-xl font-semibold bg-linear-to-r from-primary via-foreground to-foreground dark:from-foreground dark:via-primary dark:to-primary bg-clip-text text-transparent leading-tight md:text-3xl lg:text-5xl  lg:leading-[1.2]'>
                Stories of our{' '}
                transformations across Services and Industries
            </h2>
            <p className='mt-4 max-w-md text-base font-normal text-foreground dark:text-muted-foreground'>
              From Concept to Completion
            </p>
            <Link
              href='#portfolio-gallery'
              className='mt-8'
            >
              <Button size={'lg'} className='h-auto  text-white border border-primary   min-h-12.5   px-4 tracking-wide rounded-full hover:bg-transparent! hover:text-black  dark:hover:bg-white! dark:hover:text-black    font-normal'>
                Explore More
              </Button>
            </Link>
          </div>
          <div id='portfolio-gallery' className='min-w-0'>
            <PortfolioCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
