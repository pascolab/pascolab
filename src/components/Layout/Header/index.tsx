'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { headerData } from './Navigation/menuData'
import Logo from './Logo'
import MobileHeaderLink from './Navigation/MobileHeaderLink'

const BAR_H = 52   // px — desktop nav bar height
const PANEL_H = 280 // px — expanded mega-menu panel height

const Header: React.FC = () => {
  // ── Apple-style mega-menu state ──────────────────────────────
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [renderedItem, setRenderedItem] = useState<string | null>(null)
  const [contentVisible, setContentVisible] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const contentTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── General UI state ─────────────────────────────────────────
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
  const renderedMegaMenu =
    headerData.find((n) => n.label === renderedItem)?.megaMenu ?? null

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
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Expanding container */}
      <div
        ref={desktopNavRef}
        className='hidden lg:block overflow-hidden border-b border-border/40 bg-white  backdrop-blur-xl'
        style={{
          height: isMenuOpen ? BAR_H + PANEL_H : BAR_H,
          transition:
            'height 0.42s cubic-bezier(0.45, 0, 0.2, 1), background-color 0.2s ease',
        }}
      >
        {/* ── Top bar ── */}
        <div
          className='container mx-auto flex items-center justify-between'
          style={{ height: BAR_H }}
        >
          <Logo />

          {/* Nav items */}
          <nav className='flex items-center'>
            {headerData.map((item) =>
              item.megaMenu ? (
                // Mega-menu trigger: button that toggles panel
                <button
                  key={item.label}
                  onClick={() => toggleMenu(item.label)}
                  className={`inline-flex items-center gap-0.5 text-base font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 cursor-pointer text-black/80 hover:text-black `}
                >
                  {item.label}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    className={`shrink-0 transition-transform duration-200 ${
                      openItem === item.label ? '-rotate-180' : ''
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
                  className={`inline-flex items-center text-base font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 text-black/80 hover:text-black`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

         <div />
        </div>

        {/* ── Columns panel ── */}
        <div
          style={{
            height: PANEL_H,
            opacity: contentVisible ? 1 : 0,
            transition: 'opacity 0.22s ease',
          }}
          className='overflow-auto'
        >
          {renderedMegaMenu && (
            <div className='max-w-6xl mx-auto px-8 py-7 flex gap-12'>
              {renderedMegaMenu.sections.map((section) => (
                <div key={section.id} className='flex-1 min-w-0'>
                  {/* Bold category heading */}
                  <p className='text-lg font-semibold text-midnight_text dark:text-white mb-2'>
                    {section.sidebarLabel}
                  </p>

                  {/* Thin rule under heading */}
                  <div className='h-[0.5px] bg-border  mb-5' />

                  {/* Sub-item links */}
                  <ul className='space-y-3'>
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href ?? '#'}
                          onClick={closeMenu}
                          className='text-[13px] text-black/90  ps-1 md:ps-2  dark:hover:text-white transition-colors duration-300 block hover:text-primary'
                        >
                          {item.title}
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
          )}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MOBILE — Top bar
          ════════════════════════════════════════════════════ */}
      <div
        className={`lg:hidden flex items-center justify-between h-[60px] px-4 border-b border-border/40 transition-all bg-white`}
      >
        <Logo />
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='p-2 rounded-lg'
          aria-label='Toggle mobile menu'
        >
          <span className='block w-6 h-0.5 bg-black dark:bg-white' />
          <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5' />
          <span className='block w-6 h-0.5 bg-black dark:bg-white mt-1.5' />
        </button>
      </div>

      {/* Mobile backdrop overlay */}
      {navbarOpen && (
        <div className='fixed inset-0 z-60 bg-black/50 lg:hidden' aria-hidden />
      )}

      {/* Mobile slide-out drawer */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-y-0 right-0 z-70 flex h-dvh w-full max-w-xs flex-col bg-white shadow-lg transition-transform duration-300 dark:bg-darkmode isolate ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex shrink-0 items-center justify-between p-4'>
          <h2 className='text-lg font-bold text-midnight_text dark:text-white'>
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
              className='dark:text-white'
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
