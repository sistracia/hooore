import { PageRenderer } from "@repo/components/page-renderer";
import { getPagePathsRepo, getPageRepo } from "@/actions/page";
import { redirect } from "next/navigation";
import { getProjectByIdRepo } from "@/actions/project.repository";
import { getNavbarByProjectIdRepo } from "@/actions/project-navbar.repository";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/toaster";
import Script from "next/script";
import type { Metadata, ResolvingMetadata } from "next";
import { getMetaByProjectIdRepo } from "@/actions/project-meta.repository";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata(
  _: Props,
  __: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const metas = await getMetaByProjectIdRepo(process.env.PROJECT_ID);
  const metadata = metas.reduce<Metadata>(
    (metadata, meta) => {
      if (meta.type === "title") {
        metadata.title = meta.content;
      }

      if (meta.type === "description") {
        metadata.description = meta.content;
      }

      if (meta.type === "favico" && Array.isArray(metadata.icons)) {
        metadata.icons.push({
          rel: "icon",
          type: "image/x-icon",
          url: meta.content,
        });
      }

      return metadata;
    },
    { icons: [] },
  );

  return metadata;
}

export async function generateStaticParams() {
  return await getPagePathsRepo();
}

export default async function Page(props: Props) {
  const slug = props.params.slug;
  const [project, navbars, pageData] = await Promise.all([
    getProjectByIdRepo(process.env.PROJECT_ID),
    getNavbarByProjectIdRepo(process.env.PROJECT_ID),
    getPageRepo(slug),
  ]);

  if (!pageData) {
    return redirect("/not-found");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <PageRenderer
          contents={[...navbars, ...pageData]}
          projectLogo={project?.business_logo}
        />
        <Toaster />
        <Script
          defer
          src="https://analytics.hooore.com/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        />
      </body>
    </html>
  );
}
