import Image from "next/image";

import { aboutHeroContent } from "./aboutContent";

import heroBg from "../../../public/images/hero/hero-img.jpg";

export default function Hero() {
  const { highlight, title, description } = aboutHeroContent;

  return (
    <div
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden h-[50vh] md:h-[40vh] py-5"
    >
      <Image
        src={heroBg}
        alt=""
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
            className="text-h1 text-white"
          >
            {title}
          </h1>
          <p className="max-w-5xl text-body-large text-white/90 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
