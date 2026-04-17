"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServicePageSection } from "@/types/service";
import { Card } from "../ui/card";

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

        <Card className="bg-transparent ring-0">
          <Accordion type="single" collapsible>
            {section.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="py-5 text-left hover:no-underline transition-all duration-300 ease-in-out">
                  <p className=" md:text-body-large! font-medium text-foreground">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="max-w-4xl text-muted-foreground">
                  <p className="font-normal">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
