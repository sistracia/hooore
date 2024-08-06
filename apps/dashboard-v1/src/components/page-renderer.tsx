import { type PageContent } from "@/actions/page.definition";
import { PageRendererComponent as PageRendererComponentV1 } from "@repo/components-v1/page-renderer";

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
  pageContents: PageContent[];
  disableLink?: boolean;
};

export function PageRenderer({ pageContents, disableLink }: PageRendererProps) {
  return pageContents.map((content) => {
    return (
      <PageRendererComponent
        {...content}
        key={content.id}
        disableLink={disableLink}
      />
    );
  });
}
