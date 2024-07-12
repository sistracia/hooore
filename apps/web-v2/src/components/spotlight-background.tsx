import { ImgSpotlight } from "./img-spotlight";

export type SpotlightBackgroundProps = {
  src: string;
  alt?: string;
  spotlightAlt?: string;
  className?: string;
};

export function SpotlightBackground({
  src,
  alt,
  spotlightAlt,
  className,
}: SpotlightBackgroundProps) {
  return (
    <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full">
      <ImgSpotlight
        src={src}
        alt={alt}
        spotlightAlt={spotlightAlt}
        className={className}
      />
    </div>
  );
}
