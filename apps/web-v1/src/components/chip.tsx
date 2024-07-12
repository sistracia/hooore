export type ChipProps = {
  children?: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <div className="ss-w-fit ss-rounded-full ss-border-2 ss-border-crema-cream-500 ss-px-4 ss-py-1">
      {children}
    </div>
  );
}
