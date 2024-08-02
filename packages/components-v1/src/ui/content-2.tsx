import { Content2Props } from "../types/content-2";
import { SimpleCard } from "./simple-card";

export function Content2({ headline, content }: Content2Props) {
  return (
    <section className="pc-flex pc-h-full pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20">
      {headline && (
        <div className="pc-flex pc-w-full pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit">
          <h2 className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-text-left sm:pc-text-h2-sm">
            {headline}
          </h2>
        </div>
      )}
      {content && (
        <div className="pc-flex pc-h-full pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start sm:pc-pt-40">
          <div className="pc-flex pc-flex-col pc-overflow-hidden pc-rounded-lg sm:pc-flex-row">
            {content.map((content, contentIndex) => {
              return (
                <SimpleCard
                  key={contentIndex}
                  className="pc-flex-1 pc-bg-green-nyai-500"
                  title={content.headline}
                  description={content.description}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
