"use client";

import type { PageContent } from "@/actions/page.definition";
import { useRouter } from "next/navigation";
import { TemplatePreview } from "@/components/template-preview";
import { useState } from "react";
import { SocialMediaFields } from "@/components/social-media-fields";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import type { FuncActionState } from "@/types/result";
import { toast } from "@/components/ui/use-toast";

export default function PageEditForm(props: {
  pageId: string;
  pageContents: PageContent[];
  previewAction: (
    pageId: string,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
  saveAction: (pageContents: PageContent[]) => Promise<unknown>;
}) {
  const { pageId, pageContents, previewAction } = props;
  const [pageContent] = pageContents;

  const router = useRouter();
  const [activeContent, setActiveContent] = useState<PageContent | null>(null);

  const onPreviewClick = () => {
    previewAction(pageId, pageContents).then((result) => {
      if (!result.success) {
        toast({
          title: "Fail generate previw.",
          description: result.error,
        });
        return;
      }
      window.open(`/preview/${pageId}`);
    });
  };

  return (
    <TemplatePreview
      title={pageContent?.name}
      description={`https://www.hooore.com${pageContent?.page_slug}`}
      pageContents={pageContents}
      activeContent={activeContent}
      setActiveContent={setActiveContent}
      actionButton={
        <div className="dd-flex dd-items-center dd-gap-2">
          <span className="dd-text-muted-foreground">
            Last saved{" "}
            {dayjs(pageContent?.last_edited).format("YYYY-MM-DD HH:mm:ss A")}
          </span>
          <Button>Save Changes</Button>
        </div>
      }
      onPreviewClick={onPreviewClick}
      onBack={() => {
        router.back();
      }}
    >
      <SocialMediaFields />
    </TemplatePreview>
  );
}
