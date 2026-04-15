
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Services from "@/components/Home/Services";
import heroBg from "../../../../public/images/hero/hero-img.jpg";
export const metadata: Metadata = {
    title: "Services | Pascolab",
};

const page = () => {
  return (
    <>
      <HeroSub
        image={heroBg}
        highlight="> What we do"
        title="Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
      />
      <Services/>
    </>
  );
};

export default page;
