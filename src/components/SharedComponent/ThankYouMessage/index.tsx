"use client"

import CTA from "@/components/Common/CTA"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type ThankYouMessageProps = {
  type: "contact-request" | "get-in-touch"
}

const CONTENT: Record<
  "contact-request" | "get-in-touch",
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
  "contact-request": {
    eyebrow: "Message received",
    title: "We'll be in touch soon.",
    description:
      "Thanks for reaching out to Pascolab. Our team has received your details and will get back to you within 1-2 business days.",
    secondaryCta: {
      href: "/services",
      label: "Explore Services",
    },
  },
  "get-in-touch": {
    eyebrow: "Email received",
    title: "Thanks for getting in touch.",
    description:
      "We have your email and would be glad to discuss your next project. Someone from Pascolab will follow up shortly.",
    secondaryCta: {
      href: "/projects",
      label: "View Projects",
    },
  }
}

function getContent(type?: string) {
  if (type === "contact-request") {
    return CONTENT["contact-request"]
  }
  else {
    return CONTENT["get-in-touch"]
  }
}

export default function ThankYouMessage({ type }: ThankYouMessageProps) {
  const content = getContent(type)

  return (
    <section className="bg-background py-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <Card className="mx-auto max-w-3xl  ">
          <CardHeader className="flex-center">
            <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-9 w-9" />
            </div>
          </CardHeader>

          <CardContent className="flex-center flex-col">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {content.eyebrow}
            </p>

            <h2 className="text-foreground text-center">
              {content.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg text-center">
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
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
