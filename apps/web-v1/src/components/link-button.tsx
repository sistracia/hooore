import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@repo/utils";
import Link from "next/link";

export function LinkButton({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn("ss-flex ss-items-center ss-text-sm", className)}
    >
      {children} <ArrowRightIcon className="ss-ml-2 ss-h-4 ss-w-4" />
    </Link>
  );
}
