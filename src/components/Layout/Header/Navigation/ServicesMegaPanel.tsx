'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import type { ServicePageSection } from '@/types/service'
import { Button } from '@/components/ui/button'

type ServicesMegaPanelProps = {
  sections: ServicePageSection[]
  onClose: () => void
}

const ArrowIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24'>
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M5 12h14M12 5l7 7-7 7'
    />
  </svg>
)

const ChevronIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'>
    <path
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m9 18l6-6l-6-6'
    />
  </svg>
)

const ServicesMegaPanel: React.FC<ServicesMegaPanelProps> = ({ sections, onClose }) => {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? '')

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeSectionId) ?? sections[0],
    [activeSectionId, sections]
  )

  if (!activeSection) return null

  return (
    <div className='px-0'>
      <div className='flex flex-col overflow-hidden bg-card shadow-xl lg:flex-row'>
        <div className='flex w-full shrink-0 flex-col border-b border-border bg-secondary lg:w-[320px] lg:border-b-0 lg:border-r'>
          <div className=''>
            {sections.map((section) => {
              const isActive = activeSection.id === section.id

              return (
                <Button 
                    key={section.id}
                  type='button'
                  onMouseEnter={() => setActiveSectionId(section.id)}
                  onFocus={() => setActiveSectionId(section.id)}
                  onClick={() => setActiveSectionId(section.id)}
                className={`flex w-full items-center justify-between rounded-none px-4 h-auto py-3 text-left text-sm font-medium transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'text-white'
                    : 'text-foreground bg-transparent'
                }`}>
                  <span>{section.title}</span>
                  <span className='shrink-0'>
                    {isActive ? <ChevronIcon /> : null}
                  </span>
                </Button>
              )
            })}
          </div>

          <div className='mt-auto border-t border-border px-4 py-4'>
            <Link
              href='/services'
              onClick={onClose}
              className='inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:underline'
            >
              View all services
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className='min-w-0 flex-1 p-5 lg:p-7'>
          <div className='mb-5 border-b border-border pb-4'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground'>
              What we do
            </p>
            <h3 className='mt-2 text-2xl font-bold text-foreground'>
              {activeSection.title}
            </h3>
            <p className='mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground'>
              {activeSection.subtitle}
            </p>
          </div>

          <div className='grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2'>
            {activeSection.whatWeDo.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className='group flex gap-3 p-2 -m-2'
              >
                <span className='mt-2 h-2 w-2 shrink-0 bg-foreground/70 transition-colors group-hover:bg-primary' />
                <span className='min-w-0'>
                  <span className='block text-sm font-semibold text-foreground transition-colors group-hover:text-primary'>
                    {item.title}
                  </span>
                  <span className='mt-1 block text-xs leading-relaxed text-muted-foreground'>
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className='mt-6 border-t border-border pt-4'>
            <div className='flex justify-start lg:justify-end'>
              <Link
                href={`/services/${activeSection.id}`}
                onClick={onClose}
                className='inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:underline'
              >
                All {activeSection.title} services
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesMegaPanel
