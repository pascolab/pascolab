
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Brands from '@/components/Home/Brands';
import Stats from '@/components/SharedComponent/Stats'
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Contact from "@/components/Home/Contact";
import PortfolioShowcase from "@/components/Home/ProjectShowcase";
export const metadata: Metadata = {
  title: "Pascolab",
};

export default function Home() {
  return (
    <main >
      <Hero />
      <Brands />
      <Stats  />  
      <Services />
      <PortfolioShowcase />
      <Testimonial />
      <Contact />
    </main>
  )
}
