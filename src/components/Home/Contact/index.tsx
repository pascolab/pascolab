import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import ContactForm from '@/components/Contact/Form'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
        <div className='w-full' >
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-primary text-center'>
          Get In Touch
          </h2>

          <ContactForm />
        </div>
        
      </div>
    </section>
  )
}

export default Contact
