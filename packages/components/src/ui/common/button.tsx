import { cn } from '@hooore/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'pc-inline-flex pc-items-center pc-gap-2 pc-whitespace-nowrap pc-rounded-full disabled:pc-cursor-not-allowed disabled:pc-opacity-50',
  {
    variants: {
      variant: {
        default: 'pc-p-2 hover:pc-backdrop-brightness-0',
        cta: 'pc-bg-[rgb(var(--foreground))] pc-text-[rgb(var(--background))] pc-px-16 pc-py-4 pc-text-cta pc-font-medium pc-shadow-[inset_0px_0px_0px_3px] pc-shadow-[rgb(var(--background))] sm:pc-px-16 sm:pc-py-4 sm:pc-text-2xl',
        outline:
          'pc-border-2 pc-border-[rgb(var(--foreground))] pc-px-4 pc-py-2 hover:pc-backdrop-brightness-0 ',
        link: 'pc-p-2 pc-rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
