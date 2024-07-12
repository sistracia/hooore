export type OutlineTextProps = {
  children?: React.ReactNode;
  outlineColor?: string;
};

export function OutlineText({
  children,
  outlineColor = "black",
}: OutlineTextProps) {
  return (
    <span
      style={{ "--shadow-color": outlineColor } as React.CSSProperties}
      className="text-shadow-5 ease-[ease] ss-transition-[text-shadow] ss-duration-1000 [--text-shadow-color:transparent] hover:[--text-shadow-color:var(--shadow-color)]"
    >
      {children}
    </span>
  );
}
