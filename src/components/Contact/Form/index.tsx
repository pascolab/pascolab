"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SERVICE_OPTIONS = [
  "Remote IT Resources",
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AR/VR",
  "Gaming",
  "Cyber Security",
  "Other IT Services",
] as const

const REGION_OPTIONS = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East & Africa",
  "Latin America",
  "Other",
] as const


function RequiredMark() {
  return <span className="text-destructive">*</span>
}

function FieldLabel({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode
  required?: boolean
  htmlFor?: string
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="text-xs font-normal text-foreground"
    >
      {children}
      {required ? <RequiredMark /> : null}
    </Label>
  )
}

const ContactForm = () => {
  return (
    <Card className="dark:ring-0">
      <CardHeader>
        <CardTitle>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-primary text-center'>

            Get In Touch
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-full-name" required>
            Full Name
          </FieldLabel>
          <Input
            id="contact-full-name"
            type="text"
            autoComplete="name"
          />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-email" required>
            Email
          </FieldLabel>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"

          />
        </div>

        <div className="space-y-2">
          <FieldLabel required>Phone Number</FieldLabel>
          <div className="flex gap-2">
            <Select defaultValue="us">
              <SelectTrigger
                className={cn(
                  "h-auto w-32! shrink-0 border-[#E5E7EB] bg-muted px-2 dark:bg-input/30",
                  "data-[size=default]:h-10"
                )}
              >
                <SelectValue placeholder="🇺🇸 +1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">
                  <span className="flex items-center gap-2">
                    <span aria-hidden>🇺🇸</span>
                    <span>+1</span>
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 000-0000"
              className={cn("min-w-0 flex-1")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-company" required>
            Company Name
          </FieldLabel>
          <Input
            id="contact-company"
            type="text"
            autoComplete="organization"

          />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-company-url">Company URL</FieldLabel>
          <Input
            id="contact-company-url"
            type="url"
            autoComplete="url"
            placeholder="https://"

          />
        </div>

        <div className="space-y-2">
          <FieldLabel required>Region</FieldLabel>
          <Select>
            <SelectTrigger
              size="default"
              className={cn(
                "h-10 w-full border-[#E5E7EB] bg-[#F5F6F8] dark:bg-input/30",
                "data-[size=default]:h-10"
              )}
            >
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {REGION_OPTIONS.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-xs font-normal text-foreground">
            Services you are looking for
            <RequiredMark />
          </Label>
          <div className="space-y-3">
            {SERVICE_OPTIONS.map((label, i) => {
              const id = `contact-service-${i}`
              return (
                <div key={label} className="flex items-start gap-2.5">
                  <Checkbox id={id} className="mt-0.5" />
                  <Label
                    htmlFor={id}
                    className="cursor-pointer text-sm font-normal leading-snug text-foreground"
                  >
                    {label}
                  </Label>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-project-details" required>
            Project Details
          </FieldLabel>
          <Textarea
            id="contact-project-details"
            rows={5}
            className={cn(
              "min-h-34 resize-y py-2.5"
            )}
          />
        </div>

        <div className="space-y-2">
          <FieldLabel required>
            I am looking for a job at Devinc
          </FieldLabel>
          <Select>
            <SelectTrigger
              size="default"
              className={cn(
                "h-10 w-full border-[#E5E7EB] bg-[#F5F6F8] dark:bg-input/30",
                "data-[size=default]:h-10"
              )}
            >
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end bg-transparent border-t-0">
        <Button
          type="button"
          className="rounded-full bg-primary px-10 py-5 text-base font-medium text-primary-foreground hover:bg-primary/90"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ContactForm
