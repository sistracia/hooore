import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@hooore/utils'

const buttonVariants = cva(
  'editor-inline-flex editor-items-center editor-justify-center editor-whitespace-nowrap editor-rounded-md editor-text-sm editor-font-medium editor-ring-offset-background editor-transition-colors focus-visible:editor-outline-none focus-visible:editor-ring-2 focus-visible:editor-ring-ring focus-visible:editor-ring-offset-2 disabled:editor-pointer-events-none disabled:editor-opacity-50',
  {
    variants: {
      variant: {
        default:
          'editor-bg-primary editor-text-primary-foreground hover:editor-bg-primary/90',
        destructive:
          'editor-bg-destructive editor-text-destructive-foreground hover:editor-bg-destructive/90',
        outline:
          'editor-border editor-border-input editor-bg-background hover:editor-bg-accent hover:editor-text-accent-foreground',
        secondary:
          'editor-bg-secondary editor-text-secondary-foreground hover:editor-bg-secondary/80',
        ghost: 'hover:editor-bg-accent hover:editor-text-accent-foreground',
        link: 'editor-text-primary editor-underline-offset-4 hover:editor-underline',
      },
      size: {
        default: 'editor-h-10 editor-px-4 editor-py-2',
        sm: 'editor-h-9 editor-rounded-md editor-px-3',
        lg: 'editor-h-11 editor-rounded-md editor-px-8',
        icon: 'editor-h-10 editor-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
