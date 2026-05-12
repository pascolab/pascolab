import Link from "next/link";
import { Icon } from "@iconify/react";
import { servicesPageData } from "@/app/api/data";
import EyeBrew from "@/components/SharedComponent/EyeBrew";
import CTA from "@/components/Common/CTA";


const Services = () => (
  <section>
    <div className="container">

      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
        <div className="content-space">
          <EyeBrew text="What We Do" />
          <h2 className="text-foreground">Our services</h2>
        </div>
        <CTA label="View all services" href="/services" size='lg' className='border-primary bg-transparent text-foreground hidden md:block' />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {[...servicesPageData].slice(0, 4).map((service) => {

          return (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col h-78 md:h-96 overflow-hidden rounded-lg
                         border border-border
                         transition-colors duration-300 ease-in-out hover:border-primary/30"
            >
              <div className='absolute bg-linear-to-bl bg-background/50 top-0 left-0 w-full h-full blur-2xl pointer-events-none z-10 lg:-rotate-50 lg:top-20 lg:-left-45 lg:group-hover:left-0 lg:group-hover:top-0 lg:group-hover:rotate-0 transition-all duration-500 ease-out' />

              {/* ── Mobile layout ── */}
            <div className="block md:hidden">
            <div className="absolute top-4 left-4 z-20 max-md:block hidden">
                <Icon icon={service.icon} width={72} height={72} className="text-primary opacity-60" />
              </div>

              <div className="max-md:flex hidden flex-col justify-center pt-24 h-full p-5 z-20 content-space">
                <h3 className="text-foreground font-semibold pr-16 leading-tight">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.whatWeDo.slice(0, 5).map((cat) => (
                    <span
                      key={cat.id}
                      className="inline-flex items-center flex-wrap rounded-full border border-border
                                 bg-background text-body px-3 py-0.5 text-foreground/80"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

              {/* ── Desktop layout ── */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <Icon icon={service.icon} width={150} height={150} className="text-primary" />
              </div>

              <div className="hidden md:block px-5 pb-5 group-hover:opacity-0 transition-opacity duration-300 z-20">
                <h3 className="text-foreground font-semibold">
                  {service.title}
                </h3>
              </div>

              <div
                className="hidden lg:block absolute inset-0 bg-background/50 p-5 z-20
                           translate-y-full group-hover:translate-y-0
                           transition-all duration-500 ease-in-out"
              >
                <div className="flex flex-col gap-2 h-full justify-end">
                  <h3 className="mb-3 text-muted-foreground font-semibold">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap justify-start gap-2">
                    {service.whatWeDo.slice(0, 5).map((cat) => (
                      <span
                        key={cat.id}
                        className="inline-flex items-center rounded-full border border-border
                                   bg-background text-body px-3 py-0.5 text-foreground/80"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      

    </div>
  </section>
);

export default Services;
