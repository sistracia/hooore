import { Content3Props } from "../types/content-3";

export function Content3(
  props: Content3Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
  },
) {
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
