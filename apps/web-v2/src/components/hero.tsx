export type HeroProps = {
  background?: React.ReactNode;
  extra?: React.ReactNode;
  title?: React.ReactNode;
  descripption?: React.ReactNode;
};

export function Hero({ background, extra, title, descripption }: HeroProps) {
  return (
    <header className="ss-relative ss-flex ss-h-full ss-min-h-[650px] ss-items-center ss-p-10">
      {background}
      <div className="ss-z-10 ss-w-full">
        <div className="ss-mb-6 ss-text-center ss-text-2xl sm:ss-text-left">
          {extra}
        </div>
        <h1 className="ss-mb-6 ss-whitespace-pre-line ss-text-center ss-text-4xl ss-leading-tight sm:ss-text-left sm:ss-text-7xl">
          {title}
        </h1>
        {descripption}
      </div>
    </header>
  );
}
