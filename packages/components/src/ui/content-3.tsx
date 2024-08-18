import { cn } from "@repo/utils";
import { Content3Props } from "../types/content-3";

export function Content3(props: Content3Props & { className?: string }) {
  const { description, className } = props;

  return (
    description && (
      <section
        className={cn("pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20", className)}
      >
        <p className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h3 sm:pc-text-h3-sm">
          {description}
        </p>
      </section>
    )
  );
}
