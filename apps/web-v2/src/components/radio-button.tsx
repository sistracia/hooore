import * as React from "react";
import { RadioGroupItem } from "./radio-group";
import { Label } from "./label";

export type RadioButtonProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupItem
>;

export function RadioButton({ children, ...props }: RadioButtonProps) {
  return (
    <Label className="ss-flex ss-h-14 ss-w-fit ss-cursor-pointer ss-items-center ss-justify-center ss-gap-2 ss-rounded-full ss-bg-crema-cream-500/25 ss-px-6 ss-py-2 ss-shadow-[inset_0px_0px_0px_2px] ss-shadow-crema-cream-500/25">
      {children}
      <RadioGroupItem {...props} />
    </Label>
  );
}
