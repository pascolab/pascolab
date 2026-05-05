export type CareerPageHero = {
    eyebrow: string;
    title: string[];
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
}

export type OurCulture = {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    closing: string;
}

export type HowWeWork = {
    eyebrow: string;
    title: string;
    points: string[];
    closing: string;
}

export type WhatWeLookFor = {
    eyebrow: string;
    title: string;
    description: string[];
    points: string[];
}

export type OpenRoles = {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
}

export type CareersQoute = {
    quote: string;
    description: string;
}

export type CareersCta = {
    eyebrow: string;
    title: string;
    description: string[];
    ctaLabel: string;
    ctaHref: string;
    email: string;
    contactMessage: string;
}

export type CareersPageData = {
 hero: CareerPageHero;
 ourCulture: OurCulture;
 howWeWork: HowWeWork;
 whatWeLookFor: WhatWeLookFor;
 openRoles: OpenRoles;
 careersQoute: CareersQoute;
 careersCta: CareersCta;
}
