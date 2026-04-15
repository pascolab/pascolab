import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import heroBg from "../../../../public/images/hero/hero-img.jpg";
export const metadata: Metadata = {
    title: "Portfolio | Venus",
};

const PortfolioList = () => {
    return (
        <>
            <HeroSub
                image={heroBg}
                highlight="> Our Solutions"
                title="Portfolio"
                description="Dive into a curated collection of my finest work, showcasing expertise across various industries."
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;