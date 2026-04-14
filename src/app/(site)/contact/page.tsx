
import ContactForm from "@/components/Contact/Form";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Pascolab",
};

const Page = () => {
 
  return (
    <section className="bg-background">
    <div className="container py-4 md:py-6 lg:py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="content-space md:pr-4">
          <p className="text-body-large font-light text-primary">
            Pascolab
          </p>
          <h1 className="font-semibold">
            Let&apos;s discuss your project
          </h1>
          <p className="text-body font-light text-foreground">
            We are committed to understanding your requirements and crafting a
            tailored solution that aligns with your goals.
          </p>
          <p className="text-body font-light text-foreground">
            Enter your details and someone from our team will reach out to find
            a time to connect with you.
          </p>
        </div>

        <div>

         <ContactForm />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Page
