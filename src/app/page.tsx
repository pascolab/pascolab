
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Brands from '@/components/Home/Brands';
import Counter from '@/components/Home/Counter'
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Contact from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Pascolab",
};

export default function Home() {
  return (
    <main >
      <Hero />
      <Brands />
      <Counter  />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  )
}
