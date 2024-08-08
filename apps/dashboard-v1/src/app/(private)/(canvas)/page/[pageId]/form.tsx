"use client";

import { type PageContent } from "@/actions/page.definition";
import { useRouter } from "next/navigation";
import { TemplatePreview } from "@/components/template-preview";
import { useState } from "react";
import { SocialMediaFields } from "@/components/social-media-fields";

export default function PageEditForm(props: { pageContents: PageContent[] }) {
  const { pageContents } = props;
  const [pageContent] = pageContents;

  const router = useRouter();
  const [activeContent, setActiveContent] = useState<PageContent | null>(null);

  return (
    <TemplatePreview
      title={pageContent?.name}
      description={`https://www.hooore.com${pageContent?.page_slug}`}
      pageContents={pageContents}
      preViewContent={activeContent}
      onPreviewClick={setActiveContent}
      onBack={() => {
        router.back();
      }}
    >
      <SocialMediaFields />
    </TemplatePreview>
  );
}
