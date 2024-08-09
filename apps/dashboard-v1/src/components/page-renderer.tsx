import type { PageContent } from "@/actions/page.definition";
import { PageRendererComponent as PageRendererComponentV1 } from "@repo/components-v1/page-renderer";
import { Scaler } from "./scaler";

function PageRendererComponent(props: PageContent & { disableLink?: boolean }) {
  if (props.code === "company-profile-1") {
    return (
      <PageRendererComponentV1
        disableLink={props.disableLink}
        slug={props.slug}
        // @ts-expect-error By data, the content should be always match the slug, but TypeScipt not sure about that
        content={props.content}
      />
    );
  }

  return null;
}

export type PageRendererProps = {
  contents: PageContent[];
  disableLink?: boolean;
  sidePreview?: boolean;
  onPreviewClick?: (pageContent: PageContent) => void;
};

export function PageRenderer({
  contents,
  disableLink,
  sidePreview,
  onPreviewClick,
}: PageRendererProps) {
  return contents.map((content) => {
    if (sidePreview) {
      return (
        <div
          key={content.id}
          role="button"
          className="dd-mb-4 dd-cursor-pointer"
          onClick={() => {
            onPreviewClick?.(content);
          }}
        >
          <div className="dd-relative dd-mb-1 dd-flex dd-h-[100px] dd-overflow-hidden dd-bg-slate-100">
            <Scaler className="dd-relative dd-w-[1440px]" centered>
              <PageRendererComponent {...content} disableLink={disableLink} />
            </Scaler>
            <div className="dd-absolute dd-left-0 dd-top-0 dd-h-full dd-w-full"></div>
          </div>
          <span className="dd-block dd-text-center">
            {content.content_name}
          </span>
        </div>
      );
    }
    return (
      <div key={content.id} id={content.id}>
        <PageRendererComponent {...content} disableLink={disableLink} />
      </div>
    );
  });
}
