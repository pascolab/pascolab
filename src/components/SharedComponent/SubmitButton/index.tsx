'use client'

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label: string
}


export default function SubmitButton({ label }: SubmitButtonProps) {
    const { pending } = useFormStatus()


    return (
        <Button
        type='submit'
        disabled={pending}
        className='rounded-none border-2 border-primary text-white h-auto py-4'>
        {pending ? <>
          <Loader2 className='w-4 h-4 animate-spin' />
          <span className='ml-2'>{label}</span>
        </> : label}
      </Button>
    )
}