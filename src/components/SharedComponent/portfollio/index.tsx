import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'
import CTA from '@/components/Common/CTA'
import EyeBrew from '../EyeBrew'


const Portfolio = () => {
  return (
    <section id='portfolio' className='bg-background relative z-30 overflow-hidden'>
      <div className='absolute right-0 bottom-0 w-[350px] h-[200px]  md:w-[800px] md:h-[700px] 
              bg-[radial-gradient(ellipse_at_bottom_right,#0abfa3_0%,transparent_70%)] 
              pointer-events-none blur-2xl' />
      <div className='container'>
        <div className='text-center content-space items-center'>
          <h2
            className='text-foreground text-center md:w-4/6 w-full m-auto'>
            Explore my portfolio showcase
          </h2>
          <div className='pb-14 inline-flex'>
            <p className=' '>
              Dive into a curated collection of my finest work, showcasing
              expertise across various industries.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1  gap-4 md:grid-cols-[minmax(0,45%)_1fr] '>
          <div className='flex flex-col items-start text-left md:pt-20 content-space'>
            <EyeBrew text="Featured Insights" />
            <h2 className=' text-foreground text-left  max-w-4xl w-full
            '>
              Stories of our transformations across <span className='text-primary'>Services</span> and Industries
            </h2>
            <p>
              From Concept to Completion
            </p>
            <CTA label='Explore More' href='/case-studies' size='lg' />
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
