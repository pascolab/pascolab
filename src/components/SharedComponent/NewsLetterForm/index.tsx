import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { footerCtaContent } from "@/app/api/data"
import SubmitButton from "../SubmitButton"

const FORMSPREE_URL = 'https://formspree.io/f/xlgawowa'; // It'll accept data as formData
const FORMBOLD_URL = 'https://formbold.com/s/92BGa'; // It'll accept data as JSON

export default function NewsletterForm() {
    const router = useRouter()
    const handleSubmit = async (formData: FormData) => {
        const response = await fetch(FORMBOLD_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              email: formData.get('email'),
            }),
          })

      console.log('response', response)
      if (response.ok) {
        router.push(`/thanks/newsletter`)
      } else {
        console.error(response)
      }
    }
  
    return (
      <form action={handleSubmit} className='newsletter-form flex w-full md:w-3/4 sm:mx-0 mx-auto items-stretch'>
      <Input
        name='email'
        id='footer-email'
        type='email'
        placeholder='Email*'
        autoComplete='email'
        className='rounded-none text-base px-2 py-1.25 h-auto focus-visible:ring-offset-0'
      />
    <SubmitButton label={footerCtaContent.secondaryCtaLabel} />
    </form>
    )
  }