import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ServicePageSection } from '@/types/service'
import EyeBrew from '../SharedComponent/EyeBrew';

export function ProjectDetails(
  {section}:{section:ServicePageSection}) {
    const project = section.project;
    const { title, description, challenge, focusIntro, focusPoints, result } = project;
    return (
        <section id="project-details">
        <div className="container content-space">
            <EyeBrew text="Our Recent Project" />
          <div className="content-space">
            <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              {description}
            </p>
            </div>
          <div className="content-space">
            {/* Challenge Section */}
           {challenge && <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Badge variant="secondary" className='py-1 pt-1.25'>
                  Challenge
                </Badge>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-foreground leading-relaxed">
                  {challenge}
                </p>
              </div>
            </div>}
  
           {focusIntro && focusPoints.length > 0 && <div className="border-t border-border" />}
  
            {/* Focus Section */}
           {focusIntro && focusPoints.length > 0 && <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Badge variant="secondary" className="mb-4 py-1 pt-1.25">
                  Approach
                </Badge>
                <h3 className="text-lg font-semibold text-foreground">{focusIntro}</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4">
                  {focusPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-4 items-start pb-4 last:pb-0"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                          <span className="text-sm font-semibold text-primary">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-foreground leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>}
  
            <div className="border-t border-border" />
  
            {/* Result Section */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Badge variant="secondary" className="mb-4 py-1 pt-1.25">
                  Result
                </Badge>
              </div>
              <div className="md:col-span-2">
                <Card className="bg-primary/5 border-primary/20 p-4">
                  <CardContent className="md:py-4 max-sm:px-0">
                    <p className="text-body md:text-body-large text-foreground leading-relaxed">
                      {result}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          </div>
          </div>
        </section>
    )
  }
  