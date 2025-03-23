import { cn } from '@hooore/utils'

export type ChipProps = {
  children?: React.ReactNode
}

export function Chip({ children }: ChipProps) {
  return (
    <span
      className={cn(
        'pc-w-fit pc-rounded-full pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-1 pc-text-chip',
        'pc-bg-[linear-gradient(rgb(var(--foreground))_0_0)] pc-bg-[length:100%_var(--d,0)] pc-bg-bottom pc-bg-no-repeat pc-transition-[background-size] pc-duration-300 hover:pc-text-[rgb(var(--background))] hover:[--d:100%]',
      )}
    >
      {children}
    </span>
  )
}
