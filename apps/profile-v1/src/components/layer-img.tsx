import { cn } from "@repo/utils";

export function LayerImg({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"img">) {
  return (
    <div
      className={cn(
        "ss-relative ss-overflow-hidden ss-grayscale after:ss-absolute after:ss-left-0 after:ss-top-0 after:ss-block after:ss-h-full after:ss-w-full after:ss-bg-crema-cream-500/20 after:ss-content-['']",
        className,
      )}
    >
      <img className="ss-h-full ss-w-full ss-object-cover" {...props} />
    </div>
  );
}
