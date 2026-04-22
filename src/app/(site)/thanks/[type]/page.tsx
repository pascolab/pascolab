import ThankYouMessage from "@/components/SharedComponent/ThankYouMessage"

type ThanksPageProps = {
  params: Promise<{ type: string }>
}
export default async function ThanksPage({
  params,
  
}: ThanksPageProps) {
  const { type } = await params

  return (
      <ThankYouMessage type={type as "contact-request" | "get-in-touch"} />
  );
}

export function generateStaticParams() {
  return [
    { type: "contact-request" },
    { type: "get-in-touch" },
  ]
}