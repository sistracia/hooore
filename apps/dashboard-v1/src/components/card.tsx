import { cn } from "@repo/utils";

export function Card<T extends React.ElementType = "div">(
  props: {
    as?: T;
  } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "div", children, className } = props;
  return (
    <Comp className={cn("dd-rounded-lg dd-border dd-bg-background", className)}>
      {children}
    </Comp>
  );
}

export type CardContentProps = {
  children?: React.ReactNode;
  title?: string;
  action?: React.ReactNode;
  description?: string;
};

export function CardContent({
  children,
  title,
  description,
  action,
}: CardContentProps) {
  return (
    <div className="dd-border-b dd-p-6 last:dd-border-b-0">
      {(title || description || action) && (
        <div className={cn("dd-flex dd-items-center", children && "dd-mb-4")}>
          {(title || description) && (
            <div>
              {title && (
                <h1 className="dd-text-2xl dd-font-semibold">{title}</h1>
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
