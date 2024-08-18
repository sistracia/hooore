import { PageRenderer } from "@repo/components/page-renderer";
import { getPagePaths, getPage } from "@/actions/page";
import { redirect } from "next/navigation";
import { getProjectByIdRepo } from "@/actions/project";
import { getNavbarByProjectIdRepo } from "@/actions/project-navbar";

export async function generateStaticParams() {
  return await getPagePaths();
}

export default async function Page(props: { params: { slug: string[] } }) {
  const slug = props.params.slug;
  const [project, navbars, pageData] = await Promise.all([
    getProjectByIdRepo(process.env.PROJECT_ID),
    getNavbarByProjectIdRepo(process.env.PROJECT_ID),
    getPage(slug),
  ]);

  if (!pageData) {
    return redirect("/not-found");
  }

  return (
    <PageRenderer
      contents={[...navbars, ...pageData]}
      projectLogo={project?.business_logo}
    />
  );
}
