'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { servicesPageData } from '@/app/api/data'
import { headerData } from './Navigation/menuData'
import Logo from './Logo'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import MegaMenuPanel from './Navigation/MegaMenuPanel'
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
  const panelRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // ── Mega-menu helpers ─────────────────────────────────────────
  const clearMenuTimers = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (contentTimer.current) clearTimeout(contentTimer.current)
  }

  const openMenu = (label: string) => {
    clearMenuTimers()
    if (openItem && openItem !== label) {
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
      const target = e.target as Node
      const insideBar = desktopNavRef.current?.contains(target)
      const insidePanel = panelRef.current?.contains(target)

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        navbarOpen
      )
        setNavbarOpen(false)

      if (!insideBar && !insidePanel && openItem) closeMenu()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [navbarOpen, openItem])

  useEffect(() => () => clearMenuTimers(), [])

  const isMenuOpen = !!openItem
  const renderedHeaderItem = headerData.find((n) => n.label === renderedItem) ?? null
  const renderedMegaMenu = renderedHeaderItem?.megaMenu ?? null
  const renderedPanel = renderedHeaderItem?.panel ?? null

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>

      {/* ════════════════════════════════════════════════════
          DESKTOP — top bar
          ════════════════════════════════════════════════════ */}

      {/* Page scrim */}
      <div
        className='hidden lg:block fixed inset-0 pointer-events-none'
        style={{
          top: BAR_H,
          background: 'rgba(0,0,0,0.3)',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'opacity 0.35s ease-in-out',
        }}
      />

      {/* Top bar — has its own frosted background */}
      <div
        ref={desktopNavRef}
        className='hidden lg:flex items-center bg-background/65 backdrop-blur-xl'
        style={{ height: BAR_H }}
      >
        <div className='container mx-auto'>
          <div className='flex items-center h-full justify-between'>
            <Logo />

            <nav className='flex items-center gap-x-4'>
              {headerData.map((item) =>
                item.megaMenu || item.panel === 'services' ? (
                  <button
                    key={item.label}
                    type='button'
                    onClick={() => toggleMenu(item.label)}
                    className='inline-flex items-center select-none gap-0.5 text-sm font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 cursor-pointer text-foreground/90 hover:text-foreground'
                  >
                    {item.label}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      className={`shrink-0 transition-transform duration-200 ${openItem === item.label ? '-rotate-180' : ''}`}
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
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => isMenuOpen && closeMenu()}
                    className='inline-flex items-center select-none text-sm font-normal px-3.5 py-1.5 rounded-full transition-colors duration-150 text-foreground/90 hover:text-foreground'
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
        </div>
      </div>

      {/* ── Floating panel — completely separate from the top bar ── */}
      {renderedItem && (
        <div
          ref={panelRef}
          className='hidden lg:block fixed left-0 right-0'
          style={{
            top: BAR_H,
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'opacity 0.22s ease, transform 0.22s ease',
            pointerEvents: isMenuOpen ? 'auto' : 'none',
          }}
        >
          <div className='container mx-auto'>
            {renderedPanel === 'services' ? (
              <ServicesMegaPanel sections={servicesPageData} onClose={closeMenu} />
            ) : renderedMegaMenu ? (
              <MegaMenuPanel config={renderedMegaMenu} variant='desktop' />
            ) : null}
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════
          MOBILE — Top bar
          ════════════════════════════════════════════════════ */}
      <div className='lg:hidden flex h-[60px] items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur-xl transition-colors'>
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
        className={`fixed inset-y-0 right-0 z-110 flex h-dvh w-full max-w-xs flex-col bg-background shadow-lg transition-transform duration-300 isolate lg:hidden ${navbarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex shrink-0 items-center justify-between p-4'>
          <h2 className='text-lg font-bold text-foreground'>Menu</h2>
          <button onClick={() => setNavbarOpen(false)} aria-label='Close mobile menu'>
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
