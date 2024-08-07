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
    <div className="pc-absolute pc-left-0 pc-top-0 pc-h-full pc-w-full">
      <ImgSpotlight
        src={src}
        alt={alt}
        spotlightAlt={spotlightAlt}
        className={className}
      />
    </div>
  );
}
