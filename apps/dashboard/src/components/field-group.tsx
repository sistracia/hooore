export type FieldGroupProps = {
  label?: string;
  children?: React.ReactNode;
  bordered?: boolean;
};

export function FieldGroup({
  label,
  children,
  bordered = true,
}: FieldGroupProps) {
  if (!bordered) {
    return (
      <>
        <span className="dd-mb-2 dd-block dd-font-semibold">{label}</span>
        {children}
      </>
    );
  }

  return (
    <div className="dd-relative dd-rounded-lg dd-border dd-px-2 dd-pb-2 dd-pt-4">
      <span className="dd-absolute -dd-top-2 dd-left-3 dd-block dd-bg-background dd-px-1 dd-text-sm dd-font-semibold">
        {label}
      </span>
      {children}
    </div>
  );
}
