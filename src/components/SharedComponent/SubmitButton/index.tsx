'use client'

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label: string
    className?: string
    isLoading?: boolean
}


export default function SubmitButton({ label, className, isLoading }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    const loading = isLoading ?? pending

    return (
        <Button
        type='submit'
        disabled={loading}
        className={cn('rounded-none border-2 border-primary text-white h-auto py-4', className)}>
        {loading ? <>
          <Loader2 className='w-4 h-4 animate-spin' />
          <span className='ml-2'>{label}</span>
        </> : label}
      </Button>
    )
}