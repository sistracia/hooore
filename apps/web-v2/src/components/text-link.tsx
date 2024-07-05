import { cn } from "@repo/utils";

export function TextLink<T extends React.ElementType>(
  props: { as?: T } & React.ComponentPropsWithRef<T>,
) {
  const { as: Comp = "a", className, ...restProps } = props;
  return (
    <Comp
      className={cn("ss-underline ss-underline-offset-4", className)}
      {...restProps}
    />
  );
}
