
import { cn } from "@/lib/utils";
import { Button } from "../ui/button"
import Link from "next/link"

type ContactCTAProps = {
    className?: string;
    label: string;
    href?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
}

export default function ContactCTA({ className, label, href = "/contact", variant = "default", size = "default" }: ContactCTAProps) {
    return (
        <Button variant={variant} size={size} asChild className={cn('h-auto  text-white border border-primary   min-h-12.5   px-4 tracking-wide rounded-full hover:bg-transparent! hover:text-black  dark:hover:bg-white! dark:hover:text-black    font-normal', className)}>
            <Link href={href}>{label}</Link>
        </Button>
    )
}   