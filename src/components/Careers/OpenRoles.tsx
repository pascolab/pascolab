import { careersData } from "@/app/api/data";
import { Badge } from "@/components/ui/badge";
import EyeBrew from "../SharedComponent/EyeBrew";


export default function OpenRoles() {
  return (
    <section className="border-t border-border">
      <div className="container mx-auto content-space">

        <EyeBrew text={careersData.openRoles.eyebrow} />

        <div className="rounded-lg bg-primary/5 border border-primary px-5 py-10
                        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col content-space">
            <h3 className="text-foreground tracking-normal max-w-xl">
              {careersData.openRoles.title}
            </h3>
            <p className="text-body text-muted-foreground">
              {careersData.openRoles.description}
            </p>
          </div>
          <Badge
            variant="outline"
            className="border-primary/80 text-primary bg-background
                       text-xs font-medium px-3.5 py-2 rounded-full self-start sm:self-auto
                       whitespace-nowrap shrink-0"
          >
            {careersData.openRoles.ctaLabel}
          </Badge>
        </div>

      </div>
    </section>
  );
}