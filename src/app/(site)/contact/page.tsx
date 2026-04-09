
import ContactForm from "@/components/Contact/Form";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Pascolab",
};

const Page = () => {
 
  return (
    <section className="bg-background">
    <div className="container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-5 md:pr-4">
          <h2 className="text-3xl font-bold leading-tight text-midnight_text sm:text-4xl">
            Let&apos;s discuss your project
          </h2>
          <p className="text-base leading-relaxed text-foreground">
            We are committed to understanding your requirements and crafting a
            tailored solution that aligns with your goals.
          </p>
          <p className="text-base leading-relaxed text-foreground">
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
