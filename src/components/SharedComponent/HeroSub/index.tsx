import React, { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

export type HeroSubProps = {
  image: StaticImageData;
  highlight: string;
  title: string;
  description: string;
}

const HeroSub: FC<HeroSubProps> = ({ image, highlight, title, description }) => {
  return (
    <div
    aria-labelledby="about-hero-heading"
    className="relative overflow-hidden h-[50vh] md:h-[45vh] py-5"
  >
    <Image
      src={image}
      alt={title}
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 bg-linear-to-r from-black via-[#0e2a35]/80 to-[#0e2a35]/40"
      aria-hidden
    />
    <div className="container h-full relative z-10 flex  items-end">
      <div className="max-w-3xl pb-2 text-left content-space">
        <p className="text-body-large text-primary font-semibold tracking-wide">
          {highlight}
        </p>
        <h1
          id="about-hero-heading"
          className="text-h1 text-white tracking-wide"
        >
          {title}
        </h1>
        <p className="max-w-5xl text-body-large text-white/90 ">
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeroSub
