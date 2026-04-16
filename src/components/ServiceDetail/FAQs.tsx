"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServicePageSection } from "@/types/service";

type FAQsProps = {
  section: ServicePageSection;
};

export default function FAQs({ section }: FAQsProps) {
  return (
    <section id="faqs">
      <div className="container content-space">
        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            FAQs
          </p>
          <h2 className="max-w-3xl">Frequently asked questions</h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <Accordion type="single" collapsible>
            {section.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base hover:no-underline">
                  <span className="pr-6 text-h3">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-4xl text-muted-foreground">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
