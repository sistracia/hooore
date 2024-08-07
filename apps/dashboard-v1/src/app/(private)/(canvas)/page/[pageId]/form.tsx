"use client";

import { type PageContent } from "@/actions/page.definition";
import { PageRenderer } from "@/components/page-renderer";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const TemplatePreview = dynamic(
  async () => {
    const { TemplatePreview } = await import("@/components/template-preview");
    return TemplatePreview;
  },
  { ssr: false },
);

export default function PageEditForm(props: { pageContents: PageContent[] }) {
  const { pageContents } = props;
  const router = useRouter();
  const [pageContent] = pageContents;

  return (
    <TemplatePreview
      title={pageContent?.name}
      description={`https://www.hooore.com${pageContent?.slug}`}
      onBack={() => {
        router.back();
      }}
      aside={<div></div>}
    >
      <PageRenderer pageContents={pageContents} disableLink={true} />
    </TemplatePreview>
  );
}
