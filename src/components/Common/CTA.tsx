
import { cn } from "@/lib/utils";
import { Button } from "../ui/button"
import Link from "next/link"

type CTAProps = {
    className?: string;
    label: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
}

export default function CTA({ className, label, href, type = "button", variant = "default", size = "default" }: CTAProps) {
    const classes = cn(
        "h-auto text-white text-sm md:text-base border border-primary min-h-11 px-3.5 md:px-4.5 py-1.5 md:py-2.75 tracking-wide rounded-full hover:bg-transparent! hover:text-black dark:hover:bg-white! dark:hover:text-black font-normal",
        className
    )

    if (href) {
        return (
            <Button asChild variant={variant} size={size} className={classes}>
                <Link href={href}>{label}</Link>
            </Button>
        )
    }

    return (
        <Button type={type} variant={variant} size={size} className={classes}>
            {label}
        </Button>
    )
}   