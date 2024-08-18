import { cn } from "@repo/utils";

export type SideBarItemProps = React.ComponentProps<"div"> & {
  children?: React.ReactNode;
  label?: React.ReactNode;
  parentHeight?: boolean;
  action?: React.ReactNode;
};

export function SideBarItem({
  label,
  children,
  parentHeight = false,
  action,

  ...restProps
}: SideBarItemProps) {
  return (
    <div {...restProps}>
      <div className="dd-flex dd-gap-2">
        {action}
        <div
          className={cn(
            "dd-relative dd-mb-1 dd-flex dd-flex-1 dd-select-none dd-overflow-hidden dd-bg-slate-100",
            parentHeight ? "dd-h-full" : "dd-h-[100px]",
          )}
        >
          {children}
          <div className="dd-absolute dd-left-0 dd-top-0 dd-h-full dd-w-full"></div>
        </div>
      </div>
      <span className="dd-block dd-text-center">{label}</span>
    </div>
  );
}
