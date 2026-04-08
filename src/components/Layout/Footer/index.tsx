import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  {label: 'Case Studies', href: '/case-studies' },
  {label: "Company", href: '/company' },
  { label: 'Contact', href: '/contact' },
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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 w-full">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image
                src={getImgPath('/images/logo/white-logo-footer.png')}
                alt="Pascolab"
                width={150}
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

          {/* Navigation links */}
          <div className="w-full">
            <ul className="space-y-3">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base max-sm:border-b w-full pb-1 border-b-muted-foreground hover:border-b-primary  inline-block  transition-colors duration-200 tracking-wide hover:text-foreground dark:hover:text-white"
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
