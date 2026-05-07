import { cn } from "@/lib/utils"


export default function EyeBrew({text, className}: {text: string, className?: string}) {
    return (
        <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className={cn("text-small font-medium text-primary uppercase tracking-wide", className)}>
          {text}
        </span>
      </div> 
    )
}