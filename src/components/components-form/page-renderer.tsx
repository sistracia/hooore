import type { PageContent } from "@/actions/page.definition";
import { PageRendererComponent } from "@hooore/components/page-renderer";
import { Scaler } from "../scaler";
import { SideBarItem } from "../side-bar-item";
import { Sortable } from "../sortable";

export type PageRendererProps = {
  contents: PageContent[];
  setContents?: (newContents: PageContent[]) => void;
  disableLink?: boolean;
  disableAnimation?: boolean;
  sidePreview?: boolean;
  onPreviewClick?: (pageContent: PageContent, contentIndex: number) => void;
  projectLogo?: string;
  onRemove?: (index: number) => void;
};

export function PageRenderer({
  contents,
  setContents,
  disableLink,
  disableAnimation,
  sidePreview,
  onPreviewClick,
  projectLogo,
  onRemove,
}: PageRendererProps) {
  if (sidePreview) {
    return (
      <Sortable items={contents} setItems={setContents} onRemove={onRemove}>
        {({ item, itemIndex, removeButton, dragButton }) => {
          return (
            <SideBarItem
              key={item.id}
              role="button"
              className="dd-mb-4 dd-cursor-pointer"
              label={item.content_name}
              onClick={() => {
                onPreviewClick?.(item, itemIndex);
              }}
              action={
                <div className="dd-flex dd-flex-col">
                  {dragButton}
                  {removeButton}
                </div>
              }
            >
              <Scaler className="dd-relative dd-w-[1440px]" centered>
                {/* @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that */}
                <PageRendererComponent
                  slug={item.slug}
                  content={item.content}
                  disableLink={disableLink}
                  disableAnimation={disableAnimation}
                  projectLogo={projectLogo}
                />
              </Scaler>
            </SideBarItem>
          );
        }}
      </Sortable>
    );
  }

  return contents.map((content) => {
    return (
      <div key={content.id} id={content.id}>
        {/* @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that  */}
        <PageRendererComponent
          slug={content.slug}
          content={content.content}
          disableLink={disableLink}
          disableAnimation={disableAnimation}
          projectLogo={projectLogo}
        />
      </div>
    );
  });
}
