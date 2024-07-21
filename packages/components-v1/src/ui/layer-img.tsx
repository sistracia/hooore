import { cn } from "@repo/utils";

export function LayerImg({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"img">) {
  return (
    <div
      className={cn(
        "pc-relative pc-overflow-hidden pc-grayscale after:pc-absolute after:pc-left-0 after:pc-top-0 after:pc-block after:pc-h-full after:pc-w-full after:pc-bg-crema-cream-500/20 after:pc-content-['']",
        className,
      )}
    >
      <img className="pc-h-full pc-w-full pc-object-cover" {...props} />
    </div>
  );
}
