"use client"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { footerCtaContent } from "@/app/api/data"
import SubmitButton from "../SubmitButton"
import { submitForm } from "@/utils/submit-form";

export default function GetInTouchForm() {
    const FORM_URL = `${process.env.NEXT_PUBLIC_FORMBOLD_URL}/${process.env.NEXT_PUBLIC_FORMBOLD_CONTACT_REQUEST_FORM_ID}`;
    if (!FORM_URL) {
        throw new Error("ID for form under footer is not set")
      }
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
      const payload = {
        email: formData.get('email') as string,
        source: formData.get('source') as string,
        formType: formData.get('formType') as string,
      }
    
      if (!payload.email) return
       const response = await submitForm(FORM_URL, payload)

      if (response && response.ok) {
        router.push(`/thanks/get-in-touch`)
      } else {
        console.error('Failed to submit get-in-touch form')
      }
    }
    return (
      <form action={handleSubmit} className='get_in_touch-form flex w-full md:w-3/4 sm:mx-0 mx-auto items-stretch'>
      <Input
        name='email'
        id='footer-email'
        type='email'
        placeholder='Email*'
        required
        autoComplete='email'
        className='rounded-none text-base px-2 py-1.25 h-auto focus-visible:ring-offset-0'
      />
      <Input type='hidden' name='source' value='footer' />
      <Input type='hidden' name='formType' value='get_in_touch' />
    <SubmitButton label={footerCtaContent.secondaryCtaLabel} />
    </form>
    )
  }