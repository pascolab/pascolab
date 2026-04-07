import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const companyLinks = [
  { label: 'About Us', href: '/company/about-us' },
  { label: 'How We Work', href: '/company/how-we-work' },
  { label: 'AI First Company', href: '/company/ai-first-company' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Information Security', href: '/services/information-security' },
  { label: 'AI, ML & Data Analytics', href: '/services/ai-ml-data-analytics' },
  { label: 'Generative AI', href: '/services/generative-ai' },
  { label: 'Digital Solutions', href: '/services/digital-solutions' },
  { label: 'Cloud Services', href: '/services/cloud-services' },
]

const solutionLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Dedicated Teams', href: '/teams' },
  { label: 'Policy & Strategy', href: '/services/policy-strategy' },
  { label: 'Emerging Technologies', href: '/services/emerging-technologies' },
]

const socialLinks = [
  { href: '#', icon: '/images/footer/facebook.svg', label: 'Facebook' },
  { href: '#', icon: '/images/footer/linkedin.svg', label: 'LinkedIn' },
  { href: '#', icon: '/images/footer/twitter.svg', label: 'Twitter' },
]

const Footer: FC = () => {
  return (
    <footer className="relative overflow-hidden bg-background text-muted-foreground">

      {/* ── Main grid ── */}
      <div className="container mx-auto pb-10 pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                src={getImgPath('/images/logo/Pascolab_Logo.svg')}
                alt="Pascolab"
                width={50}
                height={28}
                quality={100}
                className="h-auto"
              />
            </Link>

            {/* Social icons */}
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11   w-11 items-center justify-center rounded-full border border-muted-foreground transition-colors duration-200 hover:border-primary hover:bg-primary/10 dark:hover:border-primary dark:hover:bg-primary/10"
                >
                  <Image
                    src={getImgPath(icon)}
                    alt={label}
                    width={17}
                    height={17}
                    className="h-auto w-[14px] brightness-0 dark:invert"
                  />
                </a>
              ))}
            </ul>

            {/* Contact info */}
            <ul className="space-y-3">
            <li className="flex items-center gap-2.5  ">
                <Icon icon="mdi:map-marker" className="shrink-0 text-muted-foreground w-8 h-11" />
                <a
                  href="https://maps.app.goo.gl/P1eXJ3J6JwzVg9f97"
                  className="text-base transition-colors duration-200 hover:text-foreground dark:hover:text-white"
                >
                  New York, 80 Broad Street · 5th Floor · Office 503
                </a>
              </li>
              
              <li className="flex items-center gap-2.5 ">
                <Icon icon="mdi:email" className="shrink-0 text-muted-foreground w-7 h-10" />
                <a
                  href="mailto:info@pascolab.com"
                  className="text-base transition-colors duration-200 hover:text-foreground dark:hover:text-white"
                >
                  info@pascolab.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon icon="mdi:phone" className="shrink-0 text-muted-foreground w-7 h-10" />
                <a
                  href="tel:+19296340281"
                  className="text-base transition-colors duration-200 hover:text-foreground dark:hover:text-white"
                >
                  +1 (929) 634-0281
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
              <h3 className="mb-5 text-lg font-semibold uppercase tracking-widest text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base transition-colors duration-200 tracking-wide hover:text-foreground dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base transition-colors duration-200 tracking-wide hover:text-foreground dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold uppercase tracking-widest text-foreground">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base transition-colors duration-200 tracking-wide hover:text-foreground dark:hover:text-white"
                  >
                    {label} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
