
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import CTA from '@/components/Common/CTA'
import { footerCtaContent } from '@/app/api/data'
  import GetInTouchForm from '@/components/SharedComponent/GetInTouchForm'

const logoLight = getImgPath("/images/logo/white-logo-footer.png");
const logoDark = getImgPath("/images/logo/logo-light.png");


const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-solid border-border bg-primary/10 text-muted-foreground">

      {/* ── Main grid ── */}
      <div className="container mx-auto">
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-border flex items-center sm:border-b-0 sm:min-h-25 py-10 shrink-0 '>
            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto w-full content-space'>
              <Link href='/' className='md:block flex justify-center'>
                <Image
                  src={logoLight}
                  alt="logo"
                  width={200}
                  height={50}
                  style={{ height: 'auto' }}
                  className=" hidden dark:block"
                  loading="eager"
                />
                <Image
                  src={logoDark}
                  alt="logo"
                  width={200}
                  height={50}
                  style={{ height: 'auto' }}
                  className=" block dark:hidden"
                  loading="eager"
                />
              </Link>
              <h3 className='text-foreground md:text-[2.8rem]'>
                {footerCtaContent.title}
              </h3>
              <CTA label={footerCtaContent.primaryCtaLabel} href={footerCtaContent.primaryCtaHref} size='lg' className='w-fit max-sm:mx-auto' />
            </div>
          </div>
          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center sm:min-h-25 py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-border'>
            <div className='flex flex-col md:items-start items-center content-space'>
              <h3 className='text-foreground inline-block'>
                Support
              </h3>
             <div className='flex flex-col gap-y-2.5 md:gap-y-3.5'>
             {/* <div className='flex items-center gap-3'>
                <p className='text-foreground'>Phone: </p>
                <Link
                  href='tel:+(690) 2560 0020'
                  className='text-foreground/80 hover:text-foreground'>
                  +91 98260 00000
                </Link>
              </div> */}
              <div className='flex items-center gap-3'>
                <p className='text-foreground'>Email: </p>
                <Link
                  href='mailto:info@venus.com'
                  className='text-foreground/80 hover:text-foreground'>
                  info@pascolab.com
                </Link>
              </div>
             </div>
              <div>
                <ul className='flex items-center gap-4'>
                  <li className='group'>

                    <Link href='https://www.facebook.com/profile.php?id=61588817951346' className=' block p-1 rounded-sm  group-hover:bg-primary transition-colors ease-in-out duration-300'>
                    <Image src={getImgPath("/images/footer/facebook.svg")} alt="facebook" width={25} height={25} className='block dark:hidden' />
                    <Image src={getImgPath("/images/footer/facebook-dark.svg")} alt="facebook" width={25} height={25} className='hidden dark:block' />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.instagram.com/pascolab/' className=' block p-1 rounded-sm group-hover:bg-primary transition-colors ease-in-out duration-300'>
                    <Image src={getImgPath("/images/footer/instagram.svg")} alt="instagram" width={25} height={25} className='block dark:hidden' />
                    <Image src={getImgPath("/images/footer/instagram-dark.svg")} alt="instagram" width={25} height={25} className='hidden dark:block' />
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.linkedin.com/company/pascolab/about/' className=' block p-1 rounded-sm  group-hover:bg-primary transition-colors ease-in-out duration-300'>
                    <Image src={getImgPath("/images/footer/linkedin.svg")} alt="linkedin" width={25} height={25} className='block dark:hidden' />
                    <Image src={getImgPath("/images/footer/linkedin-dark.svg")} alt="linkedin" width={25} height={25} className='hidden dark:block' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:col-span-4  col-span-12 border-t md:border-none border-solid border-border sm:flex items-center justify-end md:min-h-25 py-10 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center content-space'>
              {footerCtaContent.paragraphs.map(p => <p key={p} className=''>
                {p}
              </p>)}

              <GetInTouchForm />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-5 min-h-15 md:min-h-17.25 border-t border-solid border-border'>
        <div>
          <ul className='flex justify-center items-center sm:gap-7 gap-3 md:ps-26'>
            <li className='text-foreground/80'>
              <Link href='/' className='hover:text-primary'>
                Home
              </Link>
            </li>
            <li className='text-foreground/80'>
              <Link href='/services' className='hover:text-primary'>
                Services
              </Link>
            </li>
            <li className='text-foreground/80'>
              <Link href='/projects' className='hover:text-primary'>
                Projects
              </Link>
            </li>
            <li className='text-foreground/80'>
              <Link href='/about-us' className='hover:text-primary'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> */}