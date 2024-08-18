import type { PageContent } from "@/actions/page.definition";
import { PageRendererComponent } from "@repo/components/page-renderer";
import { Scaler } from "../scaler";
import { SideBarItem } from "../side-bar-item";

export type PageRendererProps = {
  contents: PageContent[];
  disableLink?: boolean;
  disableAnimation?: boolean;
  sidePreview?: boolean;
  onPreviewClick?: (pageContent: PageContent) => void;
  projectLogo?: string;
};

export function PageRenderer({
  contents,
  disableLink,
  disableAnimation,
  sidePreview,
  onPreviewClick,
  projectLogo,
}: PageRendererProps) {
  return contents.map((content) => {
    if (sidePreview) {
      return (
        <SideBarItem
          key={content.id}
          role="button"
          className="dd-mb-4 dd-cursor-pointer"
          label={content.content_name}
          onClick={() => {
            onPreviewClick?.(content);
          }}
        >
          <Scaler className="dd-relative dd-w-[1440px]" centered>
            <PageRendererComponent
              slug={content.slug}
              // @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that
              content={content.content}
              disableLink={disableLink}
              disableAnimation={disableAnimation}
              projectLogo={projectLogo}
            />
          </Scaler>
        </SideBarItem>
      );
    }
    return (
      <div key={content.id} id={content.id}>
        <PageRendererComponent
          slug={content.slug}
          // @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that
          content={content.content}
          disableLink={disableLink}
          disableAnimation={disableAnimation}
          projectLogo={projectLogo}
        />
      </div>
    );
  });
}
