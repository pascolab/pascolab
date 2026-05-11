import CTA from "@/components/Common/CTA";
import EyeBrew from "@/components/SharedComponent/EyeBrew";

export default function ServicesCTA() {
  return (
    <section className="border-t border-border">
      <div className="container py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="content-space max-w-xl">
            <EyeBrew text="Work with us" />
            <h2 className="text-foreground">
              Ready to build something that lasts?
            </h2>
            <p className="text-muted-foreground text-body-large max-w-lg">
              Tell us about your project and we&apos;ll get back to you within
              one business day.
            </p>
          </div>

          <div className="shrink-0">
            <CTA label="Start a conversation" href="/contact" size="lg" className="w-fit" />
          </div>
        </div>
      </div>
    </section>
  );
}
