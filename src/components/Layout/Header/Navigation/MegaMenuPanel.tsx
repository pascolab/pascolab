'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MegaMenuConfig } from '@/types/menu'

type Props = {
  config: MegaMenuConfig
  variant: 'desktop' | 'mobile'
  onClose?: () => void
}

const MegaMenuPanel: React.FC<Props> = ({ config, variant, onClose }) => {
  const [activeSectionId, setActiveSectionId] = useState(config.sections[0].id)
  const activeSection =
    config.sections.find((s) => s.id === activeSectionId) ?? config.sections[0]

  if (variant === 'mobile') {
    return (
      <div className='w-full mt-1'>
        {config.sections.map((section) => (
          <div key={section.id} className='mb-5 pl-3 border-l-2 border-primary'>
            <p className='text-sm font-semibold text-foreground mb-0.5'>
              {section.panelTitle}
            </p>
            <p className='text-xs text-muted-foreground mb-3'>
              {section.panelDescription}
            </p>
            <div className='grid grid-cols-1 gap-2'>
              {section.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href ?? '#'}
                  onClick={onClose}
                  className='group block py-1'>
                  <span className='block text-sm font-medium text-foreground group-hover:text-primary transition-colors'>
                    {item.title}
                  </span>
                  <span className='block text-xs text-muted-foreground leading-relaxed'>
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
            {section.cta && (
              <Link
                href={section.cta.href}
                onClick={onClose}
                className='mt-4 inline-block w-full text-center bg-primary text-foreground px-4 py-2 rounded-lg hover:bg-primary/90 text-sm font-medium'>
                {section.cta.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Desktop variant
  return (
    <div className='flex bg-background rounded-2xl border border-border shadow-xl overflow-hidden'>
      {/* Left sidebar */}
      <div className='w-44 shrink-0 border-r border-border py-4 px-2'>
        {config.sections.map((section) => (
          <button
            key={section.id}
            onMouseEnter={() => setActiveSectionId(section.id)}
            onClick={() => setActiveSectionId(section.id)}
            className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeSectionId === section.id
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:bg-foreground hover:text-background'
            }`}>
            <span className='text-foreground'>{section.sidebarLabel}</span>
            {activeSectionId === section.id && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
                className='shrink-0'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m9 18 6-6-6-6'
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Right content */}
      <div className='flex-1 p-6 min-w-0'>
        <h3 className='text-lg font-bold text-foreground'>
          {activeSection.panelTitle}
        </h3>
        <p className='text-sm text-muted-foreground mt-0.5 mb-4'>
          {activeSection.panelDescription}
        </p>
        <hr className='border-border mb-5' />

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5'>
          {activeSection.items.map((item, i) => (
            <Link key={i} href={item.href ?? '#'} className='group'>
              <p className='font-semibold text-sm text-foreground group-hover:text-primary transition-colors'>
                <span className='text-foreground'>{item.title}</span>
              </p>
              <p className='text-xs text-muted-foreground mt-0.5 leading-relaxed'>
                <span className='text-muted-foreground'>{item.description}</span>
              </p>
            </Link>
          ))}
        </div>

        {activeSection.cta && (
          <>
            <hr className='border-border mt-5 mb-4' />
            <div className='flex justify-end'>
              <Link
                href={activeSection.cta.href}
                className='bg-foreground text-background px-5 py-2 rounded-lg hover:bg-primary/90 text-sm font-medium'>
                {activeSection.cta.label}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MegaMenuPanel
