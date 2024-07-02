import React, { FC, HTMLAttributes } from "react";

interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export { CheckboxGroup };
