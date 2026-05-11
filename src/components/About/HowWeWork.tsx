import { howWeWorkContent } from "./aboutContent";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowWeWork() {
  const { title, steps } = howWeWorkContent;

  return (
    <section
      className="overflow-hidden relative bg-accent/30! dark:bg-accent"
      aria-label="How we work"
    >
      <div className="container relative ">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/2 h-full blur-3xl bg-linear-to-r from-primary/70 via-primary/40 opacity-40 to-transparent" />
        <div className="content-space">
          <h2>{title}</h2>

          <div className="grid grid-cols-1 py-6 md:py-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;

              return (
                // <Card
                //   key={step.step}
                //   className={cn(
                //     "relative overflow-visible transition-all duration-300 hover:-translate-y-1 shadow-lg md:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:transition-none",
                //     "ring-0",
                //   )}
                // >
                //   {/* Step number in corner */}
                //   <div
                //     className={cn(
                //       "absolute -top-4 -left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ring-1 ring-border",
                //       isLast
                //         ? "bg-orange-500/15 text-orange-500"
                //         : "bg-primary/10 text-primary",
                //     )}
                //     aria-hidden
                //   >
                //     {step.step}
                //   </div>

                //   <CardHeader className="items-center text-center gap-3 pt-3.5">
                //     <div className="flex flex-col items-center content-space">
                //     <span
                //       className={cn(
                //         "flex h-10 w-10 items-center justify-center rounded-lg",
                //         isLast
                //           ? "bg-orange-500/15 text-orange-500"
                //           : "bg-background text-foreground",
                //       )}
                //       aria-hidden
                //     >
                //       {/* <Icon icon={step.icon} className="h-5 w-5 fill-current" /> */}
                //       <step.icon className="h-5 w-5 fill-current" />
                //     </span>
                //     <CardTitle className="text-body-large font-semibold tracking-wide">
                //       {step.title}
                //     </CardTitle>
                //     </div>
                //   </CardHeader>
                //   <CardContent className="text-center">
                //     <small className="text-small text-muted-foreground">
                //       {step.description}
                //     </small>
                //   </CardContent>
                // </Card>
                <HowWeWorkStepCard key={step.step} step={step} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


function HowWeWorkStepCard({ step }: { step: typeof howWeWorkContent.steps[0] }) {
  return (
    <Card tabIndex={0} className=" bg-white/50 max-sm:focus-within:bg-primary cursor-pointer backdrop-blur-md max-sm:px-0 py-5 md:py-20 gap-y-0.5 md:gap-y-6 group hover:bg-primary transition-all duration-300 dark:shadow-none dark:border-none">
      <CardHeader className="flex items-start md:items-center md:justify-center flex-col gap-y-3 md:gap-y-6 group-focus:text-white group-hover:text-white">
        {/* <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-foreground"> */}
          <step.icon className="h-10 md:h-12 w-10 md:w-12 stroke-current" />
        {/* </span> */}
        <CardTitle className="text-left! md:text-center! w-full">
          <h3 className=" tracking-wide">
          {step.title}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-left md:text-center text-lg  group-focus:text-white group-hover:text-white">{step.description}</CardDescription>
      </CardContent>
    </Card>
  )
}