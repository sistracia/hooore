import { cn } from '@hooore/utils'
import { Slot } from '@radix-ui/react-slot'

export type OutlineTextProps = {
  children?: React.ReactNode
  className?: string
  asChild?: boolean
}

export function OutlineText({
  children,
  className,
  asChild,
}: OutlineTextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        'pc-bg-[linear-gradient(rgb(var(--background))_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--foreground))] hover:[--d:100%]',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
