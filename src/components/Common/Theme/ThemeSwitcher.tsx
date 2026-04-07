"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
        <Button variant="ghost"  size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
        className="size-9"
        >
      {theme === "dark" ? (
        <Sun className="size-5 scale-100 transition-all" />
      ) : (
        <Moon className="size-5 scale-100 transition-all" />
      )}
    </Button>
  );
}
