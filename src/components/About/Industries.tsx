import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { aboutIndustriesContent, industries } from "./aboutContent";

export default function Industries() {
  const { eyebrow, title, description } = aboutIndustriesContent;

  return (
    <section className="overflow-hidden relative bg-background">
      <div className="container mx-auto">
        <div className="content-space">
          <p className="text-body-large text-primary font-semibold">{eyebrow}</p>
          <h2 className="max-w-4xl w-full">{title}</h2>
          <p className="text-muted-foreground max-w-3xl">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6 md:py-4">
            {industries.map((item) => (
              <Card
                key={item.title}
                className=" ring-0   shadow-lg md:shadow-md"
              >
                <CardHeader className="px-0">
                  <CardTitle>
                    <h3 className="card-title">
                      {item.title}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <small className="text-muted-foreground">
                    {item.description}
                  </small>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

