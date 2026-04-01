
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Brands from '@/components/Home/Brands';
import Counter from '@/components/Home/Counter'
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Contactform from '@/components/Home/Contact';
import Models from "@/components/Home/Models";
export const metadata: Metadata = {
  title: "Pascolab",
};

export default function Home() {
  return (
    <main >
      <Hero />
      <Brands />
      <Services />
      <Counter isColorMode={false} />
      <Portfolio />
      <Models />
      <Testimonial />
      <Contactform />
    </main>
  )
}
