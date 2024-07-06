import type { PageData } from "@/types/page";
import { redirect } from "next/navigation";
import servicesDetails from "../../data/services-details.json";

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const pageData = (servicesDetails as Record<string, PageData>)[params.slug];

  if (!pageData) {
    return redirect("/not-found");
  }

  return <div></div>;
}
