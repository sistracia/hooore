export type HeroProps = {
  background?: React.ReactNode;
  header?: React.ReactNode;
  title?: React.ReactNode;
  descripption?: string;
  footer?: React.ReactNode;
};

export function Hero({
  background,
  header,
  title,
  descripption,
  footer,
}: HeroProps) {
  return (
    <header className="ss-relative ss-flex ss-h-full ss-min-h-[650px] ss-border-b-2 ss-border-b-crema-cream-500 ss-px-10 ss-pb-10 ss-pt-[calc(var(--navbar-height-mobile)*2)] sm:ss-pt-[calc(var(--navbar-height-desktop)*2)]">
      {background}
      <div className="ss-z-10 ss-flex ss-w-full ss-flex-col ss-gap-6">
        {header && (
          <div className="ss-flex ss-justify-center sm:ss-justify-start">
            {header}
          </div>
        )}
        <h1 className="ss-whitespace-pre-line ss-text-center ss-text-4xl ss-leading-tight sm:ss-text-left sm:ss-text-7xl">
          {title}
        </h1>
        {descripption && (
          <p className="ss-text-center ss-text-xl sm:ss-text-start sm:ss-text-3xl">
            {descripption}
          </p>
        )}
        {footer && <div>{footer}</div>}
      </div>
    </header>
  );
}
