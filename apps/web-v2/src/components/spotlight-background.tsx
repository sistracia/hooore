import { ImgSpotlight } from "./img-spotlight";

export type SpotlightBackgroundProps = {
  src: string;
  className?: string;
};

export function SpotlightBackground({
  src,
  className,
}: SpotlightBackgroundProps) {
  return (
    <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full">
      <ImgSpotlight
        gradientColor="rgba(var(--page-background))"
        src={src}
        className={className}
      />
    </div>
  );
}
