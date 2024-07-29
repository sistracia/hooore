import { cn } from "@repo/utils";

export function Card<T extends React.ElementType = "div">(
  props: {
    as?: T;
    children?: React.ReactNode;
    className?: string;
  } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "div", className, children } = props;
  return (
    <Comp
      className={cn(
        "dd-rounded-md dd-border dd-bg-background dd-p-4",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
