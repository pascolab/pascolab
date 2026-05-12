import ContactForm from '@/components/Contact/Form'
import CTA from '@/components/Common/CTA'
import { homeCTAContent } from '../homeContent'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,45%)_1fr] md:gap-8 lg:gap-12'>
          <div className='flex flex-col items-start text-left md:pt-20 content-space'>
            <h2 className='contact-heading'>
             {homeCTAContent.heading}
              </h2>
            <p className='max-w-md text-body-large text-muted-foreground'>
                {homeCTAContent.description}
            </p>
            <div className='flex flex-wrap items-center gap-4'>
            <CTA label={homeCTAContent.primaryCtaLabel} href={homeCTAContent.primaryCtaHref} size='lg' />
            <CTA label={homeCTAContent.secondaryCtaLabel} href={homeCTAContent.secondaryCtaHref} size='lg' className='border-primary bg-transparent text-foreground' />
            </div>
          </div>
          <div id='contact-form' className='min-w-0'>
            <ContactForm showJobInterest={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
