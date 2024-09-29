import type {
  Content3Props,
  Content3Slug,
} from "../../types/template-types/content-3";
import type { ComponentRenderer } from "../types";

export type Content3RendererProps = Content3Props & {
  disableAnimation?: boolean;
  disableLink?: boolean;
  logo?: string;
};

export function Content3(props: Content3RendererProps) {
  const { description } = props;

  return (
    description && (
      <section className="pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20">
        <p className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h3 sm:pc-text-h3-sm">
          {description}
        </p>
      </section>
    )
  );
}

export const CONTENT_3_META: ComponentRenderer<
  Content3Slug,
  Content3RendererProps
> = {
  slug: "content-3",
  component: Content3,
};
