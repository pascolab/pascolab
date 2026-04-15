import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'

const PortfolioList = () => {
  return (
    <section id='portfolio' className=' bg-background'>
      <div className='flex flex-wrap gap-8.5 lg:px-8.5 px-0 max-w-480 w-full justify-center m-auto'>
        {portfolioinfo.map((item, index) => (
          <Link key={index} href={`/portfolio/#!`} passHref>
            <div className={`w-[18rem] group ${item.Class}`}>
              <div className='relative overflow-hidden rounded-lg group-hover:scale-[1.1] group-hover:cursor-pointer transition-all duration-500'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <h4 className='pb-[0.3125rem] pt-[2.1875rem] group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
                {item.title}
              </h4>
              <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
                {item.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList
