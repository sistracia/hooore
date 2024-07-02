import React, { FC, InputHTMLAttributes } from "react";
import { Label } from "./label";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  children: React.ReactNode;
  ariaLabel: string;
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  value,
  children,
  ariaLabel,
  ...props
}) => {
  return (
    <Label className="ss-flex ss-h-14 ss-w-fit ss-cursor-pointer ss-items-center ss-justify-center ss-gap-2 ss-rounded-full ss-bg-crema-cream-500/25 ss-px-6 ss-py-2 ss-shadow-[inset_0px_0px_0px_2px] ss-shadow-crema-cream-500/25">
      <input
        type="checkbox"
        id={id}
        value={value}
        aria-label={ariaLabel}
        className="ss-form-checkbox"
        {...props}
      />
      <span>{children}</span>
    </Label>
  );
};

export { Checkbox };
