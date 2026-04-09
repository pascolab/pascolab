'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { portfolioinfo, type PortfolioItem } from '@/app/api/data'

const COL_PARALLAX: [number, number][] = [
  [72, -56],
  [-44, 60],
  [52, -68],
]

const LG_MIN = '(min-width: 1024px)'

function splitIntoColumns<T>(items: T[]): [T[], T[], T[]] {
  const a: T[] = []
  const b: T[] = []
  const c: T[] = []
  items.forEach((item, i) => {
    if (i % 3 === 0) a.push(item)
    else if (i % 3 === 1) b.push(item)
    else c.push(item)
  })
  return [a, b, c]
}

function GalleryCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shadow-2xl"
    >
      <article className="relative aspect-square w-full overflow-hidden rounded-lg shadow-[0px_0px_13px_2px] shadow-primary-foreground/30 transition-shadow duration-300 group-hover:shadow-xl">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 33vw"
          className="object-cover transition-all duration-300 ease-in-out group-hover:blur-xs group-hover:scale-[1.02] group-focus-visible:blur-sm motion-reduce:group-hover:blur-none motion-reduce:group-hover:scale-100"
        />
        
        {/* Dark shade — stronger on hover / focus */}
        <div
          className="absolute inset-0 z-1 transition-colors duration-300 bg-black/45  "
          aria-hidden
        />
        <div className="absolute inset-0 z-2 flex flex-col justify-between p-5 sm:p-6">
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-wider text-white md:text-white/90 drop-shadow-sm">
              {item.kind}
            </p>
            <h3 className="mt-3.5 md:mt-2 text-3xl md:text-[.9rem] font-normal leading-snug text-white drop-shadow-md">
              {item.title}
            </h3>
          </div>
          <span
            className="pointer-events-none absolute bottom-5 left-5 inline-flex w-fit translate-y-2 items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-1 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:bottom- sm:left-6"
            aria-hidden
          >
            Explore More &gt;
          </span>
        </div>
      </article>
    </Link>
  )
}

const PortfolioCard = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(LG_MIN)
    const update = () => setIsLargeScreen(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const parallaxOff =
    (prefersReducedMotion ?? false) || !isLargeScreen

  const y0 = useTransform(
    scrollYProgress,
    [0, 1],
    parallaxOff ? [0, 0] : COL_PARALLAX[0]
  )
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    parallaxOff ? [0, 0] : COL_PARALLAX[1]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    parallaxOff ? [0, 0] : COL_PARALLAX[2]
  )

  const [col0, col1, col2] = useMemo(
    () => splitIntoColumns(portfolioinfo),
    []
  )

  const columns = [col0, col1, col2]
  const columnYs = [y0, y1, y2]
  const staggerClass = [
    'mt-14 lg:mt-16',
    'mt-0 lg:mt-2',
    'mt-0',
  ]

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl bg-linear-to-b px-3 py-10 md:px-6 md:py-14"
    >
      {/* Mobile / tablet: single vertical list, no parallax */}  
      <div className="flex flex-col gap-4 lg:hidden">
        {portfolioinfo.map((item) => (
          <GalleryCard key={item.slug} item={item} />
        ))}
      </div>

      {/* Large screens: 3 columns + scroll parallax */}
      <div className="hidden gap-5 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-7">
        {columns.map((items, colIndex) => (
          <motion.div
            key={colIndex}
            className={`flex flex-col gap-5 lg:gap-6 xl:gap-7 ${staggerClass[colIndex]}`}
            style={{ y: columnYs[colIndex] }}
          >
            {items.map((item) => (
              <GalleryCard key={item.slug} item={item} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCard
