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
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/SharedComponent/SubmitButton"
import { submitForm } from "@/utils/submit-form"

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
  {
    code: "+44",
    label: "UK",
    value: "uk",
  },
  {
    code: "+49",
    label: "Germany",
    value: "de",
  },
  {
    code: "+41",
    label: "Switzerland",
    value: "ch",
  },
  {
    code: "+33",
    label: "France",
    value: "fr",
  },
  {
    code: "+92",
    label: "Pakistan",
    value: "pk",
  }
] as const

type FormFields = {
  fullName: string
  email: string
  phone: string
  companyName: string
  companyUrl: string
  projectDetails: string
}

type FormErrors = Partial<
  Record<keyof FormFields | "region" | "services" | "jobInterest", string>
>

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

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-xs text-destructive mt-1">{message}</p>
}

const INITIAL_FIELDS: FormFields = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  companyUrl: "",
  projectDetails: "",
}

function validate(
  fields: FormFields,
  region: string,
  selectedServices: string[],
  jobInterest: string
): FormErrors {
  const errors: FormErrors = {}

  if (!fields.fullName.trim()) errors.fullName = "Full name is required"

  if (!fields.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address"
  }

  if (!fields.phone.trim()) errors.phone = "Phone number is required"

  if (!fields.companyName.trim()) errors.companyName = "Company name is required"

  if (!region) errors.region = "Please select a region"

  if (selectedServices.length === 0)
    errors.services = "Please select at least one service"

  if (!fields.projectDetails.trim())
    errors.projectDetails = "Project details are required"

  if (!jobInterest) errors.jobInterest = "Please make a selection"

  return errors
}

const ContactForm = ({ showTitle = true }: { showTitle?: boolean }) => {
  const FORM_URL = `${process.env.NEXT_PUBLIC_FORMBOLD_URL}/${process.env.NEXT_PUBLIC_FORMBOLD_CONTACT_FORM_ID}`;
  if (!FORM_URL) {
    throw new Error("ID for contact form is not set")
  }

  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [fields, setFields] = React.useState<FormFields>(INITIAL_FIELDS)
  const [region, setRegion] = React.useState("")
  const [jobInterest, setJobInterest] = React.useState("")
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [errors, setErrors] = React.useState<FormErrors>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleRegionChange = (value: string) => {
    setRegion(value)
    if (errors.region) setErrors((prev) => ({ ...prev, region: undefined }))
  }

  const handleJobInterestChange = (value: string) => {
    setJobInterest(value)
    if (errors.jobInterest)
      setErrors((prev) => ({ ...prev, jobInterest: undefined }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices((current) => {
      if (checked) {
        return current.includes(service)
          ? current
          : [...current, service];
      }
      return current.filter((s) => s !== service);
    })
    if (selectedServices.length > 0 && errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }))
    }
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validate(fields, region, selectedServices, jobInterest)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      const payload = {
        fullName: fields.fullName,
        email: fields.email,
        phone: fields.phone,
        companyName: fields.companyName,
        companyUrl: fields.companyUrl,
        region,
        services: selectedServices,
        projectDetails: fields.projectDetails,
        lookingForJob: jobInterest,
        source: 'contact_form',
        formType: 'contact_request',
      }
      if (!payload.fullName || !payload.email || !payload.phone || !payload.companyName || !payload.region || !payload.services || !payload.projectDetails || !payload.lookingForJob) return
      const response = await submitForm(FORM_URL, payload)

      if (response && response.ok) {
        router.push("/thanks/contact-request")
      } else {
        console.error("Failed to submit contact request form")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="dark:ring-0">
      {showTitle && (
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-primary text-center">
              Get In Touch
            </h2>
          </CardTitle>
        </CardHeader>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <CardContent className="space-y-5 max-sm:px-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <FieldLabel htmlFor="contact-full-name" required>
                Full Name
              </FieldLabel>
              <Input type='hidden' name='source' value='contact_form' />
              <Input type='hidden' name='formType' value='contact_request' />
              <Input
                id="contact-full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fields.fullName}
                onChange={handleChange}
                className={cn(errors.fullName && "border-destructive")}
              />
              <FieldError message={errors.fullName} />
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
                value={fields.email}
                onChange={handleChange}
                className={cn(errors.email && "border-destructive")}
              />
              <FieldError message={errors.email} />
            </div>
          </div>

          <div className="space-y-2">
            <FieldLabel required>Phone Number</FieldLabel>
            <div className="flex gap-2">
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                value={fields.phone}
                onChange={handleChange}
                className={cn(
                  "min-w-0 flex-1",
                  errors.phone && "border-destructive"
                )}
              />
            </div>
            <FieldError message={errors.phone} />
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
              value={fields.companyName}
              onChange={handleChange}
              className={cn(errors.companyName && "border-destructive")}
            />
            <FieldError message={errors.companyName} />
          </div>

          <div className="space-y-2">
            <FieldLabel htmlFor="contact-company-url">Company URL</FieldLabel>
            <Input
              id="contact-company-url"
              name="companyUrl"
              type="url"
              autoComplete="url"
              placeholder="https://"
              value={fields.companyUrl}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <FieldLabel required>Region</FieldLabel>
            <Select onValueChange={handleRegionChange}>
              <SelectTrigger
                size="default"
                className={cn(
                  "h-10 w-full border-[#E5E7EB] bg-[#F5F6F8] dark:bg-input/30",
                  "data-[size=default]:h-10",
                  errors.region && "border-destructive"
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
            <FieldError message={errors.region} />
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
            <FieldError message={errors.services} />
          </div>

          <div className="space-y-2">
            <FieldLabel htmlFor="contact-project-details" required>
              Project Details
            </FieldLabel>
            <Textarea
              id="contact-project-details"
              name="projectDetails"
              rows={5}
              value={fields.projectDetails}
              onChange={handleChange}
              className={cn(
                "min-h-34 resize-y py-2.5",
                errors.projectDetails && "border-destructive"
              )}
            />
            <FieldError message={errors.projectDetails} />
          </div>

          <div className="space-y-2">
            <FieldLabel required>
              I am looking for a job at Pascolab
            </FieldLabel>
            <Select onValueChange={handleJobInterestChange}>
              <SelectTrigger
                size="default"
                className={cn(
                  "h-10 w-full border-[#E5E7EB] bg-[#F5F6F8] dark:bg-input/30",
                  "data-[size=default]:h-10",
                  errors.jobInterest && "border-destructive"
                )}
              >
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FieldError message={errors.jobInterest} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end bg-transparent border-t-0 pb-7 max-sm:px-0">
          <SubmitButton
            label="Submit"
            isLoading={isSubmitting}
            className="max-sm:min-h-9.5 py-2.5 px-5 rounded-full md:py-2.75"
          />
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm
