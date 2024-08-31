import type { FeaturesList2Props } from "../types/features-list-2";

import { FeatureItem } from "./feature-list-1";

export function FeaturesList2(
  props: FeaturesList2Props & {
    disableAnimation?: boolean;
    disableLink?: boolean;
  },
) {
  const { background, images, features } = props;

  return (
    <section className="pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20">
      <FeatureItem
        image={background}
        features={features}
        direction="horizontal"
        footer={
          images && (
            <div className="pc-flex pc-flex-wrap pc-justify-center pc-gap-6 sm:pc-justify-start">
              {images.map((image, imageIndex) => {
                return (
                  <img key={imageIndex} src={image?.image} loading="lazy" />
                );
              })}
            </div>
          )
        }
      />
    </section>
  );
}
