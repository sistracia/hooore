import { cn } from "@repo/utils";

export function Card<T extends React.ElementType = "div">(
  props: {
    as?: T;
  } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "div", children, className, ...restProps } = props;
  return (
    <Comp
      {...restProps}
      className={cn(
        "dd-flex dd-w-full dd-flex-col dd-overflow-scroll dd-rounded-lg dd-border",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export type CardContentProps = {
  children?: React.ReactNode;
  title?: string;
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5";
  action?: React.ReactNode;
  description?: string;
  className?: string;
};

export function CardContent({
  children,
  title,
  titleLevel,
  description,
  action,
  className,
}: CardContentProps) {
  const TitleTag = titleLevel || "span";

  return (
    <div
      className={cn(
        "dd-h-full dd-w-full dd-border-b dd-bg-background dd-p-4 last:dd-border-b-0",
        className,
      )}
    >
      {(title || description || action) && (
        <div className={cn("dd-flex dd-items-center", children && "dd-mb-4")}>
          {(title || description) && (
            <div>
              {title && (
                <TitleTag
                  className={cn(
                    "dd-font-semibold",
                    titleLevel !== "h1" ? "dd-text-lg" : "dd-text-2xl",
                  )}
                >
                  {title}
                </TitleTag>
              )}
              {description && (
                <p className="dd-text-muted-foreground">{description}</p>
              )}
            </div>
          )}
          {action && <div className="dd-ml-auto">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
