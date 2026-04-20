'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { servicesPageData } from '@/app/api/data'
import { headerData } from './Navigation/menuData'
import Logo from './Logo'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import ServicesMegaPanel from './Navigation/ServicesMegaPanel'
import ThemeSwitcher from '@/components/Common/Theme/ThemeSwitcher'
import CTA from '@/components/Common/CTA'

const BAR_H = 69

const Header: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [renderedItem, setRenderedItem] = useState<string | null>(null)
  const [contentVisible, setContentVisible] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const contentTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const desktopNavRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // ── Mega-menu helpers ─────────────────────────────────────────
  const clearMenuTimers = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (contentTimer.current) clearTimeout(contentTimer.current)
  }

  const openMenu = (label: string) => {
    clearMenuTimers()
    if (openItem && openItem !== label) {
      // Cross-fade: fade out → swap → fade in
      setContentVisible(false)
      contentTimer.current = setTimeout(() => {
        setRenderedItem(label)
        setOpenItem(label)
        setContentVisible(true)
      }, 90)
      return
    }
    setRenderedItem(label)
    setOpenItem(label)
    setContentVisible(false)
    contentTimer.current = setTimeout(() => setContentVisible(true), 90)
  }

  const closeMenu = () => {
    clearMenuTimers()
    setContentVisible(false)
    closeTimer.current = setTimeout(() => {
      setOpenItem(null)
      setRenderedItem(null)
    }, 250)
  }

  const toggleMenu = (label: string) => {
    openItem === label ? closeMenu() : openMenu(label)
  }

  // ── Event listeners ───────────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navbarOpen
      )
        setNavbarOpen(false)
      // Close desktop mega-menu when clicking outside the expanding nav
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node) &&
        openItem
      )
        closeMenu()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, openItem])

  // Clear mega-menu timers on unmount
  useEffect(() => () => clearMenuTimers(), [])

  const isMenuOpen = !!openItem
  const renderedHeaderItem = headerData.find((n) => n.label === renderedItem) ?? null
  const renderedMegaMenu = renderedHeaderItem?.megaMenu ?? null
  const renderedPanel = renderedHeaderItem?.panel ?? null

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      {/* ════════════════════════════════════════════════════
          DESKTOP — Apple-style expanding nav
          ════════════════════════════════════════════════════ */}

      {/* Page scrim — declared first so expanding nav is visually on top */}
      <div
        className='hidden lg:block fixed inset-0 pointer-events-none'
        style={{
          top: BAR_H,
          background: 'rgba(0,0,0,0.3)',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'opacity 0.35s ease-in-out',
        }}
      />

      {/* Expanding container */}
      <div
        ref={desktopNavRef}
        className='hidden lg:block overflow-hidden border-b border-border/40 bg-background dark:bg-background/65 backdrop-blur-xl'
        style={{
          maxHeight: isMenuOpen ? `calc(${BAR_H}px + 70vh)` : BAR_H,
          transition:
            'max-height 0.42s cubic-bezier(0.45, 0, 0.2, 1), background-color 0.2s ease',
        }}
      >
        {/* ── Top bar ── */}
        <div
          className='container mx-auto'
          style={{ height: BAR_H }}
        >
          <div className='flex items-center h-full justify-between'>
            <Logo />

            {/* Nav items */}
            <nav className='flex items-center gap-x-4'>
              {headerData.map((item) =>
                item.megaMenu || item.panel === 'services' ? (
                  // Mega-menu trigger: button that toggles panel
                  <button
                    key={item.label}
                    type='button'
                    onClick={() => toggleMenu(item.label)}
                    className={`inline-flex items-center select-none gap-0.5 text-sm font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 cursor-pointer text-foreground/90 hover:text-foreground`}
                  >
                    {item.label}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      className={`shrink-0 transition-transform duration-200 ${openItem === item.label ? '-rotate-180' : ''
                        }`}
                    >
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='m7 10l5 5l5-5'
                      />
                    </svg>
                  </button>
                ) : (
                  // Regular link — navigates directly
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => isMenuOpen && closeMenu()}
                    className={`inline-flex items-center select-none text-sm font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 text-foreground/90 hover:text-foreground`}
                  >
                    <span className='text-foreground'>{item.label}</span>
                  </Link>
                )
              )}
            </nav>

           <div className='flex items-center gap-2'>
            <ThemeSwitcher />
            <CTA label='Let&apos;s Talk' href='/contact' size='lg' />
           </div>
          </div>
          <div />
        </div>

        {/* ── Columns panel ── */}
        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            maxHeight: isMenuOpen ? '70vh' : 0,
            transition: 'opacity 0.22s ease, max-height 0.42s cubic-bezier(0.45, 0, 0.2, 1)',
          }}
          className='overflow-auto '
        >
          {renderedPanel === 'services' ? (
            <ServicesMegaPanel sections={servicesPageData} onClose={closeMenu} />
          ) : renderedMegaMenu ? (
            <div className='container mx-auto px-8 py-7 flex gap-12 '>
              {renderedMegaMenu.sections.map((section) => (
                <div key={section.id} className='flex-1 min-w-0'>
                  {/* Bold category heading */}
                  <p className='text-3xl font-bold text-foreground mb-2'>
                    {section.sidebarLabel}
                  </p>

                  {/* Thin rule  under heading */}
                  <div className='h-[0.5px] bg-border  mb-5' />

                  {/* Sub-item links */}
                  <ul className='space-y-3 select-none'>
                    {section.items.map((item) => (
                      <li key={item.title} className='select-none'>
                        <Link
                          href={item.href ?? '#'}
                          onClick={closeMenu}
                          className='text-base select-none tracking-wide decoration-foreground/90 hover:underline underline-offset-4 text-foreground/90  ps-1 md:ps-2  dark:hover:text-white transition-colors duration-300 block hover:text-primary'
                        >
                          <span className='text-foreground'>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {section.cta && (
                    <Link
                      href={section.cta.href}
                      onClick={closeMenu}
                      className='mt-4 inline-flex items-center gap-1 text-[13px] ps-1 md:ps-2 font-medium text-primary hover:underline'
                    >
                      {section.cta.label}
                      <svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24'>
                        <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 12h14M12 5l7 7-7 7' />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MOBILE — Top bar
          ════════════════════════════════════════════════════ */}
      <div
        className='lg:hidden flex h-[60px] items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur-xl transition-colors'
      >
        <Logo />
        <div className='flex items-center gap-0.5'>
          <ThemeSwitcher />
          <button
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='inline-flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-foreground hover:bg-muted/80'
            aria-label='Toggle mobile menu'
            aria-expanded={navbarOpen}
          >
            <span className='block h-0.5 w-6 bg-foreground' />
            <span className='block h-0.5 w-6 bg-foreground' />
            <span className='block h-0.5 w-6 bg-foreground' />
          </button>
        </div>
      </div>

      {/* Mobile backdrop overlay */}
      {navbarOpen && (
        <div
          className='fixed inset-0 z-100 bg-foreground/50 lg:hidden'
          aria-hidden
        />
      )}

      {/* Mobile slide-out drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 z-110 flex h-dvh w-full max-w-xs flex-col bg-background shadow-lg transition-transform duration-300 isolate lg:hidden ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className='flex shrink-0 items-center justify-between p-4'>
          <h2 className='text-lg font-bold text-foreground'>
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label='Close mobile menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='text-foreground'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='flex min-h-0 flex-1 flex-col items-start overflow-y-auto overscroll-contain p-4'>
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
        </nav>
      </div>

    </header>
  )
}

export default Header
