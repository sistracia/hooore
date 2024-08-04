import { PageRenderer } from "@repo/components-v1/page-renderer";
import { getPagePaths, getPage } from "@/actions/page";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return await getPagePaths();
}

export default async function Page(props: { params: { slug: string[] } }) {
  const slug = props.params.slug;
  const pageData = await getPage(slug);

  if (!pageData) {
    return redirect("/not-found");
  }

  return <PageRenderer contents={pageData} />;
}
