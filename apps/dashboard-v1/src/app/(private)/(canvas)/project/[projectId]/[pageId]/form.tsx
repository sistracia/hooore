"use client";

import { NAVIGATION_TYPE } from "@/actions/contants";
import type { PageContent } from "@/actions/page.definition";
import {
  TemplateContentContentSchema,
  TemplateContentSlug,
} from "@/actions/template-content.definition";
import { Divider } from "@/components/divider";
import { FormRenderer } from "@/components/form-renderer";
import {
  PageRenderer,
  PageRendererComponent,
} from "@/components/page-renderer";
import { Scaler } from "@/components/scaler";
import { SideBarItem } from "@/components/side-bar-item";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import {
  templateContentKeys,
  templateContentOptions,
} from "@/query/template-content";
import type { FuncActionState } from "@/types/result";
import { randomString } from "@/utils/string";
import {
  ArrowLeftIcon,
  DesktopIcon,
  MobileIcon,
  PlusIcon,
  ZoomInIcon,
} from "@radix-ui/react-icons";
import type { PageContentComponentProps } from "@repo/components-v1/types/page-content";
import { cn } from "@repo/utils";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Fragment, useCallback, useState } from "react";
import { FrameContextProps } from "react-frame-component";

const Framer = dynamic(
  async () => {
    const { Framer } = await import("@/components/framer");
    return Framer;
  },
  { ssr: false },
);

export default function PageEditForm(props: {
  projectId: string;
  pageId: string;
  pageContents: PageContent[];
  previewAction: (
    pageId: string,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
  saveAction: (
    projectId: string,
    pageId: string,
    editedDate: Date,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
}) {
  const { projectId, pageId, pageContents, previewAction, saveAction } = props;
  const [pageContent] = pageContents;

  const router = useRouter();
  const [pageContentsState, setPageContents] =
    useState<PageContent[]>(pageContents);
  const [activeContent, setActiveContentState] = useState<PageContent | null>(
    null,
  );
  const [sectionSearch, onSectionSearch] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [frameContext, setFrameContext] = useState<FrameContextProps | null>(
    null,
  );

  const setActiveContent = (content: PageContent) => {
    setActiveContentState(content);
    if (isMobile) {
      frameContext?.document
        ?.getElementById(content.id)
        ?.scrollIntoView({ block: "start", inline: "center" });
    } else {
      document
        .getElementById(content.id)
        ?.scrollIntoView({ block: "center", inline: "center" });
    }
  };

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
    saveAction(projectId, pageId, new Date(), pageContentsState).then(
      (result) => {
        if (!result.success) {
          toast({
            title: "Fail to save changes.",
            description: result.error,
          });
          return;
        }
        router.push(`/project/${projectId}/pages`);
      },
    );
  };

  const pageRendered = (
    <PageRenderer
      contents={pageContents}
      disableLink={true}
      disableAnimation={true}
    />
  );

  return (
    <div className="dd-flex dd-h-dvh dd-w-full dd-flex-col dd-bg-background">
      <nav className="dd-flex dd-flex-col dd-justify-between dd-gap-2 dd-border-b-2 dd-p-2 sm:dd-flex-row">
        <div className="dd-flex dd-flex-1 dd-items-center dd-gap-2">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeftIcon className="dd-h-4 dd-w-4" />
          </Button>

          <div className="dd-grid">
            <span className="dd-text-xl dd-font-semibold">
              {pageContent?.name}
            </span>
            <span className="dd-text-sm dd-text-muted-foreground">
              {`https://www.hooore.com${pageContent?.page_slug}`}
            </span>
          </div>
        </div>
        <div className="dd-flex dd-flex-1 dd-items-center dd-justify-center dd-gap-2">
          <Button
            className={cn(!isMobile && "dd-brightness-95")}
            type="button"
            size="icon"
            variant="outline"
            onClick={() => {
              setIsMobile(false);
            }}
          >
            <DesktopIcon className="dd-h-4 dd-w-4" />
          </Button>
          <Button
            className={cn(isMobile && "dd-brightness-95")}
            type="button"
            size="icon"
            variant="outline"
            onClick={() => {
              setIsMobile(true);
            }}
          >
            <MobileIcon className="dd-h-4 dd-w-4" />
          </Button>
          <Button type="button" variant="outline" onClick={onPreviewClick}>
            Preview
          </Button>
        </div>
        <div className="dd-flex dd-flex-1 dd-justify-end">
          <div className="dd-flex dd-items-center dd-gap-2">
            <span className="dd-text-muted-foreground">
              Last saved{" "}
              {dayjs(pageContent?.last_edited).format("YYYY-MM-DD HH:mm:ss A")}
            </span>
            <Button onClick={onSaveChangeClick}>Save Changes</Button>
          </div>
        </div>
      </nav>
      <div className="dd-flex dd-h-full dd-w-full dd-flex-1 dd-overflow-hidden">
        <aside className="dd-w-full dd-max-w-[180px] dd-overflow-y-scroll dd-border-r-2 dd-p-4">
          <PageRenderer
            contents={pageContents.filter((pageContent) => {
              return pageContent.type !== NAVIGATION_TYPE;
            })}
            disableLink={true}
            sidePreview={true}
            disableAnimation={true}
            onPreviewClick={setActiveContent}
          />
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
                                  code={snippet.code}
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
                                    code={template.code}
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
        </aside>
        <div className="dd-h-full dd-w-full dd-p-4">
          <div
            className={cn(
              "dd-mx-auto dd-h-full",
              isMobile ? "dd-w-[360px]" : "dd-w-[860px]",
            )}
          >
            <Framer
              className={cn(isMobile ? "dd-block" : "dd-hidden")}
              onRender={setFrameContext}
            >
              {pageRendered}
            </Framer>
            <ScrollArea
              className={cn("dd-h-full", !isMobile ? "dd-block" : "dd-hidden")}
            >
              <Scaler className="dd-w-[1440px]">{pageRendered}</Scaler>
            </ScrollArea>
          </div>
        </div>
        {activeContent && (
          <div className="dd-flex dd-w-full dd-max-w-[420px] dd-flex-col dd-border-l-2">
            <div className="dd-bg-slate-100 dd-p-6">
              <span className="dd-block dd-text-muted-foreground">
                Format Option
              </span>
              <span className="dd-block dd-text-3xl dd-font-semibold">
                {activeContent.content_name}
              </span>
            </div>
            <div className="dd-overflow-y-scroll dd-p-6">
              {" "}
              <FormRenderer
                projectId={projectId}
                code={activeContent.code}
                slug={activeContent.slug}
                // @ts-expect-error Here, we know more than TypeScript
                content={activeContent.content}
                onChange={onContentChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
