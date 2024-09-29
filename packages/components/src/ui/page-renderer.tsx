import type { PageContent } from "../types/page-content";
import type { PageRendererComponentProps } from "./types";
import { COMPONENTS } from "./page-renderer-components";

export function PageRendererComponent(props: PageRendererComponentProps) {
  const componentObject = COMPONENTS.find((component) => {
    return component.slug === props.slug;
  });

  if (!componentObject) {
    return null;
  }

  const Component = componentObject.component;

  return (
    <Component
      {...props.content}
      disableAnimation={props.disableAnimation}
      disableLink={props.disableLink}
      logo={props.projectLogo}
    />
  );
}

export type PageRendererProps = {
  contents: PageContent[];
  disableLink?: boolean;
  projectLogo?: string;
};

export function PageRenderer({
  contents,
  disableLink = false,
  projectLogo,
}: PageRendererProps) {
  return contents.map((content) => {
    return (
      <PageRendererComponent
        {...content}
        key={content.id}
        disableLink={disableLink}
        projectLogo={projectLogo}
      />
    );
  });
}
