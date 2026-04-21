"use client"

import * as React from "react"

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
import CTA from "@/components/Common/CTA"

const CONTACT_FORM_ACTION = "https://formspree.io/f/xlgawowa"

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

const PHONE_CODE_OPTIONS = [
  {
    code: "+1",
    label: "US / Canada",
    value: "us",
  },
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

const ContactForm = ({showTitle = true}: {showTitle?: boolean}) => {
  const [phoneCountryCode, setPhoneCountryCode] = React.useState<string>(
    PHONE_CODE_OPTIONS[0].code
  )
  const [region, setRegion] = React.useState("")
  const [jobInterest, setJobInterest] = React.useState("")
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices((currentServices) => {
      if (checked) {
        return currentServices.includes(service)
          ? currentServices
          : [...currentServices, service]
      }

      return currentServices.filter((currentService) => currentService !== service)
    })
  }

  return (
    <Card className="dark:ring-0">
      {showTitle && (
        <CardHeader>
          <CardTitle>
            <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-primary text-center'>
                Get In Touch
              </h2> 
            </CardTitle>
          </CardHeader>
        )}
      <form action={CONTACT_FORM_ACTION} method="POST">
      <CardContent className="space-y-5 max-sm:px-0">
       <input type="hidden" name="_next" value="/thanks?type=contact" />
       <input type="hidden" name="phoneCountryCode" value={phoneCountryCode} />
       <input type="hidden" name="region" value={region} />
       <input type="hidden" name="lookingForJob" value={jobInterest} />
       {selectedServices.map((service) => (
        <input key={service} type="hidden" name="services" value={service} />
       ))}

       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
       <div className="space-y-2">
          <FieldLabel htmlFor="contact-full-name" required>
            Full Name
          </FieldLabel>
          <Input
            id="contact-full-name"
            name="fullName"
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
            name="email"
            type="email"
            autoComplete="email"

          />
        </div>
       </div>

        <div className="space-y-2">
          <FieldLabel required>Phone Number</FieldLabel>
          <div className="flex gap-2">
            <Select
              defaultValue={PHONE_CODE_OPTIONS[0].value}
              onValueChange={(value) => {
                const selectedOption = PHONE_CODE_OPTIONS.find((option) => option.value === value)
                setPhoneCountryCode(selectedOption?.code ?? PHONE_CODE_OPTIONS[0].code)
              }}
            >
              <SelectTrigger
                className={cn(
                  "h-auto w-32! shrink-0 border-[#E5E7EB] bg-muted px-2 dark:bg-input/30",
                  "data-[size=default]:h-10 overflow-hidden!"
                )}
              >
                <SelectValue placeholder="🇺🇸 +1" />
              </SelectTrigger>
              <SelectContent>
                {PHONE_CODE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="contact-phone"
              name="phone"
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
            name="companyName"
            type="text"
            autoComplete="organization"

          />
        </div>

        <div className="space-y-2">
          <FieldLabel htmlFor="contact-company-url">Company URL</FieldLabel>
          <Input
            id="contact-company-url"
            name="companyUrl"
            type="url"
            autoComplete="url"
            placeholder="https://"

          />
        </div>

        <div className="space-y-2">
          <FieldLabel required>Region</FieldLabel>
          <Select onValueChange={setRegion}>
            <SelectTrigger
              size="default"
              className={cn(
                "h-10 w-full border-[#E5E7EB] bg-[#F5F6F8] dark:bg-input/30",
                "data-[size=default]:h-10"
              )}
            >
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent >
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
          <div className="space-y-3 columns-2">
            {SERVICE_OPTIONS.map((label, i) => {
              const id = `contact-service-${i}`
              return (
                <div key={label} className="flex items-start gap-2.5">
                  <Checkbox
                    checked={selectedServices.includes(label)}
                    id={id}
                    className="mt-0.5"
                    onCheckedChange={(checked) =>
                      handleServiceChange(label, checked === true)
                    }
                  />
                  <Label
                    htmlFor={id}
                    className="cursor-pointer text-xs md:text-sm font-normal leading-snug text-foreground"
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
            name="projectDetails"
            rows={5}
            className={cn(
              "min-h-34 resize-y py-2.5"
            )}
          />
        </div>

        <div className="space-y-2">
          <FieldLabel required>
            I am looking for a job at Pascolab
          </FieldLabel>
          <Select onValueChange={setJobInterest}>
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
      <CardFooter className="flex justify-end bg-transparent border-t-0 pb-7 max-sm:px-0">
        <CTA label='Submit' type='submit' size='lg' className="max-sm:min-h-9.5 px-4"  />
      </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm
