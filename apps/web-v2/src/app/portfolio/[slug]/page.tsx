import type { PageData } from "@/types/page";
import { redirect } from "next/navigation";
import servicesDetails from "../../data/services-details.json";
import { CTA } from "@/components/cta";

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const pageData = (servicesDetails as Record<string, PageData>)[params.slug];

  if (!pageData) {
    return redirect("/not-found");
  }

  return (
    <>
      <div></div>
      <CTA />
    </>
  );
}
