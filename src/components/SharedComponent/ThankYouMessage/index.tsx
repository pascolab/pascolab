"use client"

import CTA from "@/components/Common/CTA"
import { CheckCircle2 } from "lucide-react"

type ThankYouMessageType = "contact" | "newsletter"

type ThankYouMessageProps = {
  type: string
}

const CONTENT: Record<
  ThankYouMessageType | "default",
  {
    eyebrow: string
    title: string
    description: string
    secondaryCta?: {
      href: string
      label: string
    }
  }
> = {
  contact: {
    eyebrow: "Message received",
    title: "We'll be in touch soon.",
    description:
      "Thanks for reaching out to Pascolab. Our team has received your details and will get back to you within 1-2 business days.",
    secondaryCta: {
      href: "/services",
      label: "Explore Services",
    },
  },
  newsletter: {
    eyebrow: "Email received",
    title: "Thanks for getting in touch.",
    description:
      "We have your email and would be glad to discuss your next project. Someone from Pascolab will follow up shortly.",
    secondaryCta: {
      href: "/projects",
      label: "View Projects",
    },
  },
  default: {
    eyebrow: "Thank you",
    title: "Thanks for reaching out.",
    description:
      "Your message has been submitted successfully. We appreciate your interest in Pascolab and will follow up soon.",
    secondaryCta: {
      href: "/contact",
      label: "Contact Us Again",
    },
  },
}

function getContent(type?: string) {
  if (type === "contact" || type === "newsletter") {
    return CONTENT[type]
  }

  return CONTENT.default
}

export default function ThankYouMessage({ type }: ThankYouMessageProps) {
  const content = getContent(type)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm md:px-10 md:py-16">
          <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {content.eyebrow}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {content.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTA href="/" label="Back to Home" size="lg" />
            {content.secondaryCta ? (
              <CTA
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                size="lg"
                variant="outline"
                className="text-foreground hover:text-foreground dark:text-white dark:hover:text-black"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
