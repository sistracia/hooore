"use client";

import type { PageContent } from "@/actions/page.definition";
import { useRouter } from "next/navigation";
import { TemplatePreview } from "@/components/template-preview";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import type { FuncActionState } from "@/types/result";
import { toast } from "@/components/ui/use-toast";
import { FormRenderer } from "@/components/form-renderer";
import type { PageContentComponentProps } from "@repo/components-v1/types/page-content";

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
  const [pageContentsState, setPageContents] =
    useState<PageContent[]>(pageContents);
  const [activeContent, setActiveContent] = useState<PageContent | null>(null);

  const onPreviewClick = () => {
    previewAction(pageId, pageContentsState).then((result) => {
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

  const onContentChange = useCallback(
    (content: PageContentComponentProps) => {
      if (!activeContent) {
        return;
      }

      const changedContentIndex = pageContentsState.findIndex((pageContent) => {
        return pageContent.id === activeContent.id;
      });

      // @ts-expect-error Here, we know more than TypeScript
      const newContent: PageContent = {
        ...activeContent,
        ...content,
      };

      setPageContents([
        ...pageContentsState.slice(0, changedContentIndex),
        newContent,
        ...pageContentsState.slice(
          changedContentIndex + 1,
          pageContentsState.length,
        ),
      ]);
    },
    [pageContentsState, activeContent],
  );

  return (
    <TemplatePreview
      title={pageContent?.name}
      description={`https://www.hooore.com${pageContent?.page_slug}`}
      pageContents={pageContentsState}
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
      {activeContent && (
        <FormRenderer
          code={activeContent.code}
          slug={activeContent.slug}
          // @ts-expect-error Here, we know more than TypeScript
          content={activeContent.content}
          onChange={onContentChange}
        />
      )}
    </TemplatePreview>
  );
}
