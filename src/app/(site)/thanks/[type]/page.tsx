import ThankYouMessage from "@/components/SharedComponent/ThankYouMessage"

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: { type: string }
}) {
  const { type } = searchParams

  return (
      <ThankYouMessage type={type} />
  );
}

export function generateStaticParams() {
  return [
    { type: "contact" },
    { type: "newsletter" },
  ]
}