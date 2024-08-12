export type SideBarItemProps = React.ComponentProps<"div"> & {
  children?: React.ReactNode;
  label?: React.ReactNode;
};

export function SideBarItem({
  label,
  children,
  ...restProps
}: SideBarItemProps) {
  return (
    <div {...restProps}>
      <div className="dd-relative dd-mb-1 dd-flex dd-h-[100px] dd-select-none dd-overflow-hidden dd-bg-slate-100">
        {children}
        <div className="dd-absolute dd-left-0 dd-top-0 dd-h-full dd-w-full"></div>
      </div>
      <span className="dd-block dd-text-center">{label}</span>
    </div>
  );
}
