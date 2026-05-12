import Link from "next/link";
import type { WhatWeDoItem } from "@/types/service";

type CategoryItemProps = {
  category: WhatWeDoItem;
};

export default function CategoryItem({ category}: CategoryItemProps) {
  return (
    <Link
      href={category.href}
      className={`group block py-5 md:py-4 border-b border-border transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-2 block h-2.5 w-2.5 shrink-0 rounded-[2px] bg-muted-foreground/50 group-hover:bg-primary" />
        <div className="flex-1 min-w-0">
          <p className="text-body-large group-hover:text-primary transition-colors duration-300 ease-in-out">
            {category.title}
          </p>
          <p className="text-small  -translate-y-full max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:translate-y-1 group-hover:max-h-10 group-hover:opacity-100">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
