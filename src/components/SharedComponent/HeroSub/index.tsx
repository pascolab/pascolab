import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <>
      <section className='text-center'>
        <h2 className='dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text'>
          {title}
        </h2>
        <p className='md:text-xl text-lg text-grey font-normal max-w-3xl w-full mx-auto my-7.5'>
          {description}
        </p>  
        <Breadcrumb links={breadcrumbLinks} />
      </section>
    </>
  )
}

export default HeroSub
