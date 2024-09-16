"use client";

import type { PageContent } from "@/actions/page.definition";
import type { ProjectSchema } from "@/actions/project.definition";
import type {
  TemplateContentContentSchema,
  TemplateContentSlug,
} from "@/actions/template-content.definition";
import { Divider } from "@/components/divider";
import { FormRenderer } from "@/components/components-form/form-renderer";
import {
  type NavbarComponent,
  NavbarFormRenderer,
} from "@/components/components-form/navbar-form-renderer";
import { PageRenderer } from "@/components/components-form/page-renderer";
import { PageRendererComponent } from "@repo/components/page-renderer";
import { Scaler } from "@/components/scaler";
import { SideBarItem } from "@/components/side-bar-item";
import { TemplatePreview } from "@/components/template-preview";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useTemplateContents } from "@/query/template-content";
import type { FuncActionState } from "@/types/result";
import { randomString } from "@/utils/string";
import {
  DesktopIcon,
  MobileIcon,
  PaperPlaneIcon,
  PlusIcon,
  ZoomInIcon,
} from "@radix-ui/react-icons";
import type { PageContentComponentProps } from "@repo/components/types/page-content";
import { cn } from "@repo/utils";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { FrameContextProps } from "react-frame-component";
import { FieldGroup } from "@/components/field-group";

const Previewer = dynamic(
  async () => {
    const { Previewer } = await import("@/components/previewer");
    return Previewer;
  },
  { ssr: false },
);

type LayoutPreviewToggleProps = {
  isMobile: boolean;
  toggleMobile: (isMobile: boolean) => void;
};

function LayoutPreviewToggle({
  isMobile,
  toggleMobile,
}: LayoutPreviewToggleProps) {
  return (
    <>
      <Button
        className={cn(!isMobile && "dd-brightness-95")}
        type="button"
        size="icon"
        variant="outline"
        onClick={() => {
          toggleMobile(false);
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
          toggleMobile(true);
        }}
      >
        <MobileIcon className="dd-h-4 dd-w-4" />
      </Button>
    </>
  );
}

type NavigationModalProps = {
  form?: React.ReactNode;
  preview: React.ReactNode;
  onClose: () => void;
  onSave: () => void;
};

function NavigationModal({
  form,
  preview,
  onClose,
  onSave,
}: NavigationModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full">
      <div className="dd-h-full dd-w-full dd-bg-black/70"></div>
      <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full dd-p-4">
        <div className="dd-h-full dd-w-full dd-overflow-hidden dd-rounded-lg dd-bg-background">
          <TemplatePreview
            title="Navbar"
            description="The Setting will applies to all pages"
            className="dd-h-full"
            onBack={onClose}
            action={
              <div className="dd-flex dd-items-center">
                <Button onClick={onSave}>Save Changes</Button>
              </div>
            }
          >
            <div className="dd-flex dd-w-full dd-gap-4 dd-p-4">
              <div className="dd-flex-1 dd-overflow-y-scroll">{form}</div>
              <div className="dd-flex-1 dd-overflow-hidden dd-rounded-lg">
                <div className="dd-flex dd-items-center dd-justify-center dd-gap-2 dd-bg-slate-100 dd-p-6">
                  <LayoutPreviewToggle
                    isMobile={isMobile}
                    toggleMobile={setIsMobile}
                  />
                </div>
                <Previewer isMobile={isMobile} scrollable={false}>
                  {preview}
                </Previewer>
              </div>
            </div>
          </TemplatePreview>
        </div>
      </div>
    </div>
  );
}

function mergeNavbarWithPage(
  navbar: PageContent | null,
  pageContents: PageContent[],
) {
  return navbar ? [navbar, ...pageContents] : pageContents;
}

export default function PageEditForm(props: {
  project: ProjectSchema;
  pageId: string;
  projectNavbar: PageContent | null;
  pageContents: PageContent[];
  previewAction: (
    pageId: string,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
  saveAction: (
    projectId: string,
    pageId: string,
    editedDate: Date,
    projectNavbar: PageContent | null,
    pageContents: PageContent[],
  ) => Promise<FuncActionState>;
}) {
  const {
    project,
    pageId,
    projectNavbar: _projectNavbar,
    pageContents: _pageContents,
    previewAction,
    saveAction,
  } = props;
  const [pageContent] = _pageContents;

  const router = useRouter();

  const [projectNavbarState, setProjectNavbarState] = useState(() => {
    return _projectNavbar || null;
  });
  const [tmpProjectNavbarState, setTmpProjectNavbarState] =
    useState<PageContent | null>(null);

  const [pageContentsState, setPageContentsState] = useState(() => {
    return _pageContents;
  });
  const [tmpPageContentsState, setTmpPageContents] = useState<
    PageContent[] | null
  >(null);

  const [activeContentIndex, setActiveContentIndex] = useState<number>(-1);
  const activeContent = pageContentsState[activeContentIndex];
  const [sectionSearch, onSectionSearch] = useState<string>("");

  const [isEditNavigation, setIsEditNavigation] = useState(false);
  const [isAddingNewSection, setIsAddingNewSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [frameContext, setFrameContext] = useState<FrameContextProps | null>(
    null,
  );

  const initialPageContents = useMemo(() => {
    return mergeNavbarWithPage(_projectNavbar, _pageContents);
  }, [_projectNavbar, _pageContents]);

  const pageContents = useMemo(() => {
    return mergeNavbarWithPage(projectNavbarState, pageContentsState);
  }, [projectNavbarState, pageContentsState]);

  const isDisabledSaveChanges = useMemo(() => {
    const newPageContens = mergeNavbarWithPage(
      projectNavbarState,
      pageContentsState,
    );

    const pickContents = (pageContents: PageContent[]) => {
      return pageContents.map((pageContent) => {
        return pageContent.content;
      });
    };

    const newPageContentsString = JSON.stringify(pickContents(newPageContens));
    const initialPageContentsString = JSON.stringify(
      pickContents(initialPageContents),
    );

    return newPageContentsString === initialPageContentsString;
  }, [initialPageContents, projectNavbarState, pageContentsState]);

  const toggleAddingNewSection = (
    isAdding: boolean,
    contentIndex: number | null,
  ) => {
    setActiveContentIndex(
      isAdding || contentIndex === null ? -1 : contentIndex,
    );
    setIsAddingNewSection(isAdding);
  };

  const setActiveContent = (content: PageContent, contentIndex: number) => {
    toggleAddingNewSection(false, contentIndex);
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

  const { data } = useTemplateContents({ q: sectionSearch });

  const onPreviewClick = () => {
    previewAction(pageId, pageContents).then((result) => {
      if (!result.success) {
        toast({
          title: "Fail generate previw.",
          description: result.error,
        });
        return;
      }
      window.open(`/preview/${project.id}/${pageId}`);
    });
  };

  const replacePageContent = (
    pageContentIndex: number,
    newPageContent: PageContent,
  ) => {
    const newPageContents = [
      ...pageContentsState.slice(
        0,
        pageContentIndex < 0 ? 0 : pageContentIndex,
      ),
      newPageContent,
      ...pageContentsState.slice(
        pageContentIndex + 1,
        pageContentsState.length,
      ),
    ];

    setPageContentsState(newPageContents);
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

      replacePageContent(changedContentIndex, newContent);
    },
    [pageContentsState, activeContent],
  );

  const onAddNewSection = (
    templateId: string,
    name: string,
    slug: TemplateContentSlug,
    template: TemplateContentContentSchema,
  ) => {
    const pageContentState = pageContentsState[pageContentsState.length - 1];

    // @ts-expect-error Here, we know more than TypeScript
    const newContent: PageContent = {
      ...pageContentState,
      template_content_id: templateId,
      content: template,
      slug: slug,
      content_name: name,
      id: randomString(),
    };

    const newPageContents = [...pageContentsState, newContent];
    setPageContentsState(newPageContents);
  };

  const onSaveChangeClick = () => {
    saveAction(
      project.id,
      pageId,
      new Date(),
      projectNavbarState,
      pageContentsState,
    ).then((result) => {
      if (!result.success) {
        toast({
          title: "Fail to save changes.",
          description: result.error,
        });
        return;
      }
    });
  };

  const onNavbarChange = (navbarContent: NavbarComponent) => {
    const existingNavbarContent = pageContents[0];

    if (!existingNavbarContent) {
      return;
    }

    // @ts-expect-error Here, we know more than TypeScript
    const newNavbarContent: PageContent = {
      ...existingNavbarContent,
      ...navbarContent,
    };

    setProjectNavbarState(newNavbarContent);
  };

  const onNavbarChangeSave = () => {
    setIsEditNavigation(false);
  };

  const onOpenNavigation = () => {
    setIsEditNavigation(true);
    setTmpPageContents(pageContentsState);
    setTmpProjectNavbarState(projectNavbarState);
  };

  const onCloseNavigation = () => {
    setIsEditNavigation(false);

    if (tmpPageContentsState !== null) {
      setPageContentsState(tmpPageContentsState);
      setTmpPageContents(null);
    }

    if (tmpProjectNavbarState !== null) {
      setProjectNavbarState(tmpProjectNavbarState);
      setTmpProjectNavbarState(null);
    }
  };

  const onBack = () => {
    if (isDisabledSaveChanges) {
      router.back();
    }

    if (
      !isDisabledSaveChanges &&
      window.confirm("You have unsaved changes, do you really want to leave?")
    ) {
      router.back();
    }
  };

  const pageRendered = (
    <PageRenderer
      contents={pageContents}
      disableLink={true}
      disableAnimation={true}
      projectLogo={project.business_logo}
    />
  );

  return (
    <TemplatePreview
      className="dd-h-dvh"
      title={pageContent?.name}
      description={`https://${project.domain}${pageContent?.page_slug}`}
      onBack={onBack}
      header={
        <>
          <LayoutPreviewToggle isMobile={isMobile} toggleMobile={setIsMobile} />
          <Button type="button" variant="outline" onClick={onPreviewClick}>
            Preview
          </Button>
        </>
      }
      action={
        <div className="dd-flex dd-items-center dd-gap-2">
          <span className="dd-text-muted-foreground">
            Last saved{" "}
            {dayjs(pageContent?.last_edited).format("YYYY-MM-DD HH:mm:ss A")}
          </span>
          <Button onClick={onSaveChangeClick} disabled={isDisabledSaveChanges}>
            Save Changes
          </Button>
        </div>
      }
    >
      <aside className="dd-w-full dd-max-w-[250px] dd-overflow-y-scroll dd-border-r-2 dd-p-4">
        <Button
          variant="outline"
          className="dd-mb-4 dd-w-full"
          onClick={onOpenNavigation}
        >
          Navigation
          <PaperPlaneIcon className="dd-ml-2 dd-h-4 dd-w-4" />
        </Button>
        <PageRenderer
          contents={pageContentsState}
          setContents={setPageContentsState}
          disableLink={true}
          sidePreview={true}
          disableAnimation={true}
          onPreviewClick={setActiveContent}
          projectLogo={project.business_logo}
        />
        <SideBarItem
          role="button"
          className="dd-mb-4 dd-cursor-pointer"
          label="Add new section"
          onClick={() => {
            toggleAddingNewSection(true, null);
          }}
        >
          <div className="dd-flex dd-h-full dd-w-full dd-items-center dd-justify-center">
            <PlusIcon className="dd-h-7 dd-w-7" />
          </div>
        </SideBarItem>
      </aside>
      <div className="dd-h-full dd-w-full dd-p-4">
        <div className="dd-mx-auto dd-h-full dd-w-[860px]">
          <Previewer isMobile={isMobile} onFrameRendered={setFrameContext}>
            {pageRendered}
          </Previewer>
        </div>
      </div>

      {(isAddingNewSection || activeContent) && (
        <div className="dd-flex dd-w-full dd-max-w-[420px] dd-flex-col dd-border-l-2">
          {isAddingNewSection && (
            <div className="dd-flex dd-h-full dd-flex-col dd-p-6">
              <InputWithIcon
                startIcon={<ZoomInIcon className="dd-h-4 dd-w-4" />}
                value={sectionSearch}
                onChange={(event) => {
                  onSectionSearch?.(event.currentTarget.value);
                }}
                placeholder="Search section content"
              />
              <Divider withBorder={false} />
              <div className="dd-h-full dd-overflow-y-scroll">
                {data?.snippets.length !== 0 && (
                  <FieldGroup label="Snippets" bordered={false}>
                    <div className="dd-flex dd-gap-2 dd-overflow-x-scroll">
                      {data?.snippets.map((snippet) => {
                        return (
                          <SideBarItem
                            key={snippet.id}
                            role="button"
                            parentHeight={true}
                            className="dd-mb-4 dd-h-[250px] dd-w-5/6 dd-cursor-pointer"
                            onClick={() => {
                              onAddNewSection(
                                snippet.template_content_id,
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
                              {/* @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that */}
                              <PageRendererComponent
                                slug={snippet.slug}
                                content={snippet.content}
                                disableLink={true}
                                disableAnimation={true}
                                projectLogo={project.business_logo}
                              />
                            </Scaler>
                          </SideBarItem>
                        );
                      })}
                    </div>
                  </FieldGroup>
                )}

                {data?.templates
                  .sort((a, b) => {
                    return a.name.localeCompare(b.name);
                  })
                  .map((template) => {
                    return (
                      <FieldGroup
                        key={template.name}
                        label={template.name}
                        bordered={false}
                      >
                        <div className="dd-flex dd-gap-2 dd-overflow-x-scroll">
                          {template.templates.map((template) => {
                            return (
                              <SideBarItem
                                key={template.id}
                                role="button"
                                parentHeight={true}
                                className="dd-mb-4 dd-h-[250px] dd-w-5/6 dd-cursor-pointer"
                                onClick={() => {
                                  onAddNewSection(
                                    template.id,
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
                                  {/* @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that */}
                                  <PageRendererComponent
                                    slug={template.slug}
                                    content={template.content}
                                    disableLink={true}
                                    disableAnimation={true}
                                    projectLogo={project.business_logo}
                                  />
                                </Scaler>
                              </SideBarItem>
                            );
                          })}
                        </div>
                      </FieldGroup>
                    );
                  })}
              </div>
            </div>
          )}
          {activeContent && (
            <>
              <div className="dd-bg-slate-100 dd-p-6">
                <span className="dd-block dd-text-muted-foreground">
                  Format Option
                </span>
                <span className="dd-block dd-text-3xl dd-font-semibold">
                  {activeContent.content_name}
                </span>
              </div>
              <div className="dd-overflow-y-scroll dd-p-2">
                {/* @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that */}
                <FormRenderer
                  key={activeContent.id}
                  projectId={project.id}
                  slug={activeContent.slug}
                  content={activeContent.content}
                  onChange={onContentChange}
                />
              </div>
            </>
          )}
        </div>
      )}
      {isEditNavigation &&
        createPortal(
          <NavigationModal
            preview={pageRendered}
            onSave={onNavbarChangeSave}
            onClose={onCloseNavigation}
            form={
              projectNavbarState && (
                <NavbarFormRenderer
                  projectId={project.id}
                  onChange={onNavbarChange}
                  // @ts-expect-error Here, we know more than TypeScript
                  slug={projectNavbarState.slug}
                  // @ts-expect-error Here, we know more than TypeScript
                  content={projectNavbarState.content}
                />
              )
            }
          />,
          document.body,
        )}
    </TemplatePreview>
  );
}
