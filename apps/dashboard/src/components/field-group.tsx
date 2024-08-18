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
  const child = (
    <>
      <span className="dd-mb-2 dd-block dd-font-semibold">{label}</span>
      {children}
    </>
  );

  if (!bordered) {
    return child;
  }

  return <div className="dd-rounded-lg dd-border dd-p-2">{child}</div>;
}
