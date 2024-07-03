import { Label } from "./label";

export function OptionButton<T extends React.ElementType>(
  props: { as: T } & React.ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "input", children, ...restProps } = props;
  return (
    <Label className="ss-flex ss-h-14 ss-w-fit ss-cursor-pointer ss-items-center ss-justify-center ss-gap-2 ss-rounded-full ss-bg-crema-cream-500/25 ss-px-6 ss-py-2 ss-shadow-[inset_0px_0px_0px_2px] ss-shadow-crema-cream-500/25">
      {children}
      <Comp {...restProps} />
    </Label>
  );
}
