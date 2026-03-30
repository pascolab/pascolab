'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MegaMenuConfig } from '@/types/menu'

type Props = {
  config: MegaMenuConfig
  variant: 'desktop' | 'mobile'
}

const MegaMenuPanel: React.FC<Props> = ({ config, variant }) => {
  const [activeSectionId, setActiveSectionId] = useState(config.sections[0].id)
  const activeSection =
    config.sections.find((s) => s.id === activeSectionId) ?? config.sections[0]

  if (variant === 'mobile') {
    return (
      <div className='w-full mt-1'>
        {config.sections.map((section) => (
          <div key={section.id} className='mb-5 pl-3 border-l-2 border-primary'>
            <p className='text-sm font-semibold text-midnight_text dark:text-white mb-0.5'>
              {section.panelTitle}
            </p>
            <p className='text-xs text-grey dark:text-grey mb-3'>
              {section.panelDescription}
            </p>
            <div className='grid grid-cols-1 gap-2'>
              {section.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href ?? '#'}
                  className='group block py-1'>
                  <span className='block text-sm font-medium text-midnight_text dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors'>
                    {item.title}
                  </span>
                  <span className='block text-xs text-grey dark:text-grey leading-relaxed'>
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
            {section.cta && (
              <Link
                href={section.cta.href}
                className='mt-4 inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium'>
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
    <div className='flex bg-white dark:bg-darklight rounded-2xl border border-border dark:border-dark_border shadow-xl overflow-hidden'>
      {/* Left sidebar */}
      <div className='w-44 shrink-0 border-r border-border dark:border-dark_border py-4 px-2'>
        {config.sections.map((section) => (
          <button
            key={section.id}
            onMouseEnter={() => setActiveSectionId(section.id)}
            onClick={() => setActiveSectionId(section.id)}
            className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeSectionId === section.id
                ? 'bg-section dark:bg-midnight_text text-midnight_text dark:text-white'
                : 'text-grey dark:text-grey hover:bg-section dark:hover:bg-midnight_text hover:text-midnight_text dark:hover:text-white'
            }`}>
            {section.sidebarLabel}
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
        <h3 className='text-lg font-bold text-midnight_text dark:text-white'>
          {activeSection.panelTitle}
        </h3>
        <p className='text-sm text-grey dark:text-grey mt-0.5 mb-4'>
          {activeSection.panelDescription}
        </p>
        <hr className='border-border dark:border-dark_border mb-5' />

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5'>
          {activeSection.items.map((item, i) => (
            <Link key={i} href={item.href ?? '#'} className='group'>
              <p className='font-semibold text-sm text-midnight_text dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors'>
                {item.title}
              </p>
              <p className='text-xs text-grey dark:text-grey mt-0.5 leading-relaxed'>
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {activeSection.cta && (
          <>
            <hr className='border-border dark:border-dark_border mt-5 mb-4' />
            <div className='flex justify-end'>
              <Link
                href={activeSection.cta.href}
                className='bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium'>
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
