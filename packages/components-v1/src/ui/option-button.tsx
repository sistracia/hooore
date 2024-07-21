import { Label } from "./label";

export function OptionButton<T extends React.ElementType>(
  props: { as: T } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "input", children, ...restProps } = props;
  return (
    <Label className="pc-flex pc-h-14 pc-w-fit pc-cursor-pointer pc-items-center pc-justify-center pc-gap-2 pc-rounded-full pc-bg-crema-cream-500/25 pc-px-6 pc-py-2 pc-shadow-[inset_0px_0px_0px_2px] pc-shadow-crema-cream-500/25">
      {children}
      <Comp {...restProps} />
    </Label>
  );
}
