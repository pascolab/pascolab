import ContactForm from '@/components/Contact/Form'
import CTA from '@/components/Common/CTA'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,40%)_1fr] md:gap-8 lg:gap-12'>
          <div className='flex flex-col items-start text-left md:pt-20 content-space'>
            <h2 className='contact-heading'>
              Get In Touch
              </h2>
            <p className='max-w-md text-muted-foreground'>
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
