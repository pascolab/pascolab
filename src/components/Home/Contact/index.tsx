
import { getImgPath } from '@/utils/image'
import ContactForm from '@/components/Contact/Form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CTA from '@/components/Common/CTA'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,40%)_1fr] md:gap-8 lg:gap-12'>
          <div className='flex flex-col items-start text-left md:pt-20'>
            <h2 className='mt-4 text-xl font-semibold bg-linear-to-r from-primary via-foreground to-foreground dark:from-foreground dark:via-primary dark:to-primary bg-clip-text text-transparent leading-tight md:text-3xl lg:text-5xl  lg:leading-[1.2]'>
              Get In Touch
              </h2>
            <p className='mt-4 max-w-md text-base font-normal text-foreground dark:text-muted-foreground mb-8'>
              We are committed to understanding your requirements and crafting a
              tailored solution that aligns with your goals.
            </p>
            <CTA label='Get In Touch' href='/contact' size='lg' />
          </div>
          <div id='contact-form' className='min-w-0'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
