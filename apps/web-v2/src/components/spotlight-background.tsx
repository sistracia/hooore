import { Spotlight } from "./spotlight";

export type SpotlightBackgroundProps = {
  children?: React.ReactNode;
};

export function SpotlightBackground({ children }: SpotlightBackgroundProps) {
  return (
    <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full">
      <Spotlight gradientColor="rgba(var(--page-background))">
        {children}
      </Spotlight>
    </div>
  );
}
