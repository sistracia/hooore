import type { PageContent } from "@/actions/page.definition";
import { PageRendererComponent as PageRendererComponentV1 } from "@repo/components-v1/page-renderer";
import { Scaler } from "./scaler";
import { SideBarItem } from "./side-bar-item";
import type {
  TemplateContentSlug,
  TemplateContentContentSchema,
} from "@/actions/template-content.definition";
import type { TemplateCode } from "@/actions/template.definition";

export type PageRendererComponentProps = {
  slug: TemplateContentSlug;
  content: TemplateContentContentSchema;
  disableLink?: boolean;
  disableAnimation?: boolean;
  code: TemplateCode;
};

export function PageRendererComponent(props: PageRendererComponentProps) {
  if (props.code === "company-profile-1") {
    return (
      <PageRendererComponentV1
        disableLink={props.disableLink}
        disableAnimation={props.disableAnimation}
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
  disableAnimation?: boolean;
  sidePreview?: boolean;
  onPreviewClick?: (pageContent: PageContent) => void;
};

export function PageRenderer({
  contents,
  disableLink,
  disableAnimation,
  sidePreview,
  onPreviewClick,
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
              {...content}
              disableLink={disableLink}
              disableAnimation={disableAnimation}
            />
          </Scaler>
        </SideBarItem>
      );
    }
    return (
      <div key={content.id} id={content.id}>
        <PageRendererComponent
          {...content}
          disableLink={disableLink}
          disableAnimation={disableAnimation}
        />
      </div>
    );
  });
}
