import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { ServicePageSection } from "@/types/service";

type IndustriesProps = {
  section: ServicePageSection;
};

export default function Industries({ section }: IndustriesProps) {
  const defaultValue = section.industries[0]?.id ?? "";

  return (
    <section id="industries " className="bg-accent/30! dark:bg-accent">
      <div className="container content-space">

        <div className="content-space">
          <p className="text-body-large font-semibold uppercase tracking-wide text-primary">
            Industries
          </p>
          <h2 className="max-w-3xl">
            Find use cases and delivery patterns relevant to your industry
          </h2>
        </div>

        <Tabs
          orientation="vertical"
          defaultValue={defaultValue}
          className="flex-col md:flex-row items-stretch overflow-hidden bg-background rounded-lg py-4 md:py-8 max-sm:content-space"
        >
          {/* Left sidebar — industry list */}
          <TabsList
            className="w-full md:space-y-2 shrink-0 md:w-60 lg:w-72 max-md:border-b border-border rounded-none ring-0 p-0 max-md:pb-5 h-auto justify-start items-stretch bg-transparent"
          >
            {section.industries.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="h-auto w-full justify-start rounded-none border-0 px-6 py-4 text-left text-sm font-medium text-muted-foreground/90 hover:text-foreground data-active:bg-primary! data-active:text-white! data-active:font-semibold hover:bg-primary/10"
              >
                {industry.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Right panel — content for selected industry */}
          {section.industries.map((industry) => (
            <TabsContent
              key={industry.id}
              value={industry.id}
              className="m-0 ring-0 p-6 md:p-8 lg:p-10 relative z-10 flex-1"
            >
              <div className="content-space max-w-2xl">
                <h3 className="text-h3 font-medium text-foreground">{industry.label}</h3>
                <p className="text-body-large font-normal text-muted-foreground">{industry.description}</p>

                <ul className="space-y-3 pt-2">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-muted-foreground text-body">
                      <span className="mt-[0.35rem] h-2.5 w-2.5 shrink-0 rounded-[2px] bg-primary" />
                      <p className="">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </section>
  );
}
