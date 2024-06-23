import { cn } from "@repo/utils";

export type FooterProps = {
  extra?: React.ReactNode;
  links?: React.ReactNode;
  social?: React.ReactNode;
  className?: string;
};

export function Footer({ extra, links, social, className }: FooterProps) {
  return (
    <footer
      className={cn(
        "rounded-[2.5rem] bg-ivory-gading-50 p-6 sm:rounded-[5rem] sm:p-20",

        className,
      )}
    >
      {extra}
      <div
        className={cn(
          "flex flex-col gap-4 sm:flex-row sm:justify-between",
          extra && "mt-10 border-t-2 border-t-ink-cumi-100 pt-10",
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row">{links}</div>
        <div className="flex flex-col gap-4 sm:flex-row">{social}</div>
      </div>
    </footer>
  );
}
