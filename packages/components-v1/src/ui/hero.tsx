export type HeroProps = {
  background?: React.ReactNode;
  header?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Hero({
  background,
  header,
  title,
  description,
  footer,
}: HeroProps) {
  return (
    <header className="ss:pc-pb-[calc(var(--navbar-height-desktop)*2)] pc-relative pc-flex pc-h-full pc-min-h-[80vh] pc-px-10 pc-pb-[calc(var(--navbar-height-mobile)*1.5)] pc-pt-[calc(var(--navbar-height-mobile)*2)] sm:pc-pb-[calc(var(--navbar-height-desktop))] sm:pc-pt-[calc(var(--navbar-height-desktop)*2)]">
      {background}
      <div className="pc-z-10 pc-flex pc-w-full pc-flex-col pc-items-center pc-justify-center pc-gap-6 sm:pc-items-start">
        {header && (
          <div className="pc-flex pc-justify-center sm:pc-justify-start">
            {header}
          </div>
        )}
        {title && (
          <h1 className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h1 pc-leading-tight sm:pc-text-left sm:pc-text-h1-sm">
            {title}
          </h1>
        )}
        {description && (
          <p className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
            {description}
          </p>
        )}
        {footer && <div>{footer}</div>}
      </div>
    </header>
  );
}
