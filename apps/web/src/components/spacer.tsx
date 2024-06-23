import { cn } from "@repo/utils";

export function Spacer<T extends React.ElementType = "svg">(
  props: {
    as?: T;
  } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "div", className, children, ...restProps } = props;
  return (
    <Comp
      className={cn("mx-[3vw] w-[94vw] sm:mx-[5vw] sm:w-[90vw]", className)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
