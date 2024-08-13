"use client";

import type { PageContent } from "@/actions/page.definition";
import { useRouter } from "next/navigation";
import { TemplatePreview } from "@/components/template-preview";
import { Fragment, useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import type { FuncActionState } from "@/types/result";
import { toast } from "@/components/ui/use-toast";
import { FormRenderer } from "@/components/form-renderer";
import type { PageContentComponentProps } from "@repo/components-v1/types/page-content";
import { PlusIcon, ZoomInIcon } from "@radix-ui/react-icons";
import { SideBarItem } from "@/components/side-bar-item";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { InputWithIcon } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import {
  templateContentKeys,
  templateContentOptions,
} from "@/query/template-content";
import { Scaler } from "@/components/scaler";
import { PageRendererComponent } from "@repo/components-v1/page-renderer";
import { Divider } from "@/components/divider";
import {
  TemplateContentContentSchema,
  TemplateContentSlug,
} from "@/actions/template-content.definition";
import { randomString } from "@/utils/string";

export default function PageEditForm(props: {
  pageId: string;
  pageContents: PageContent[];
  previewAction: (
    pageId: string,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
  saveAction: (
    pageId: string,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
}) {
  const { pageId, pageContents, previewAction, saveAction } = props;
  const [pageContent] = pageContents;
  const projectId = pageContent?.project_id || "";

  const router = useRouter();
  const [pageContentsState, setPageContents] =
    useState<PageContent[]>(pageContents);
  const [activeContent, setActiveContent] = useState<PageContent | null>(null);
  const [sectionSearch, onSectionSearch] = useState<string>("");

  const { data } = useQuery({
    ...templateContentOptions,
    queryKey: templateContentKeys.list(sectionSearch),
  });

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

  const onAddNewSection = (
    name: string,
    slug: TemplateContentSlug,
    template: TemplateContentContentSchema,
  ) => {
    const pageContentState = pageContentsState[pageContentsState.length - 1];

    // @ts-expect-error Here, we know more than TypeScript
    const newContent: PageContent = {
      ...pageContentState,
      content: template,
      slug: slug,
      content_name: name,
      id: randomString(),
    };

    setPageContents([...pageContentsState, newContent]);
  };

  const onSaveChangeClick = () => {
    saveAction(pageId, pageContentsState).then((result) => {
      if (!result.success) {
        toast({
          title: "Fail to save changes.",
          description: result.error,
        });
        return;
      }
      router.push(`/project/${projectId}/pages`);
    });
  };

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
          <Button onClick={onSaveChangeClick}>Save Changes</Button>
        </div>
      }
      onPreviewClick={onPreviewClick}
      onBack={() => {
        router.back();
      }}
      newSectionContent={
        <Popover>
          <PopoverTrigger className="dd-w-full">
            <SideBarItem
              role="button"
              className="dd-mb-4 dd-cursor-pointer"
              label="Add new section"
            >
              <div className="dd-flex dd-h-full dd-w-full dd-items-center dd-justify-center">
                <PlusIcon className="dd-h-7 dd-w-7" />
              </div>
            </SideBarItem>
          </PopoverTrigger>
          <PopoverContent side="right">
            <div>
              <InputWithIcon
                startIcon={<ZoomInIcon className="dd-h-4 dd-w-4" />}
                value={sectionSearch}
                onChange={(event) => {
                  onSectionSearch?.(event.currentTarget.value);
                }}
                placeholder="Search section content"
              />
              <Divider withBorder={false} />
              <div className="dd-h-[350px] dd-overflow-y-scroll">
                {data?.snippets.length !== 0 && (
                  <Fragment>
                    <span className="dd-mb-2 dd-block dd-font-semibold">
                      Snippets
                    </span>
                    <div className="dd-flex dd-gap-2 dd-overflow-x-scroll">
                      {data?.snippets.map((snippet) => {
                        return (
                          <SideBarItem
                            key={snippet.id}
                            role="button"
                            className="dd-mb-4 dd-h-[100px] dd-w-[250px] dd-cursor-pointer"
                            onClick={() => {
                              onAddNewSection(
                                snippet.name,
                                snippet.slug,
                                snippet.content,
                              );
                            }}
                          >
                            <Scaler
                              className="dd-relative dd-w-[1440px]"
                              centered
                            >
                              <PageRendererComponent
                                // @ts-expect-error Here, we know more than TypeScript
                                content={snippet.content}
                                slug={snippet.slug}
                                disableLink={true}
                                disableAnimation={true}
                              />
                            </Scaler>
                          </SideBarItem>
                        );
                      })}
                    </div>
                  </Fragment>
                )}

                {data?.templates.map((template) => {
                  return (
                    <Fragment key={template.name}>
                      <span className="dd-mb-2 dd-block dd-font-semibold">
                        {template.name}
                      </span>
                      <div className="dd-flex dd-gap-2 dd-overflow-x-scroll">
                        {template.templates.map((template) => {
                          return (
                            <SideBarItem
                              key={template.id}
                              role="button"
                              className="dd-mb-4 dd-h-[100px] dd-w-[250px] dd-cursor-pointer"
                              onClick={() => {
                                onAddNewSection(
                                  template.name,
                                  template.slug,
                                  template.content,
                                );
                              }}
                            >
                              <Scaler
                                className="dd-relative dd-w-[1440px]"
                                centered
                              >
                                <PageRendererComponent
                                  // @ts-expect-error Here, we know more than TypeScript
                                  content={template.content}
                                  slug={template.slug}
                                  disableLink={true}
                                  disableAnimation={true}
                                />
                              </Scaler>
                            </SideBarItem>
                          );
                        })}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      }
    >
      {activeContent && (
        <FormRenderer
          projectId={projectId}
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
