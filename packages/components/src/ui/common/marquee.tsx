import { cn } from '@hooore/utils'
import { Children } from 'react'

export type MarqueeProps = {
  className?: string
  children?: React.ReactNode
  width: string
  disabled?: boolean
}

/**
 * Ref: https://codepen.io/ramzibach-the-styleful/pen/LYoYejb
 */
export function Marquee({
  children,
  className,
  width,
  disabled = false,
}: MarqueeProps) {
  const childrenCount = Children.count(children)

  return (
    <ul
      style={
        {
          '--marquee-duration': '10s',
          '--marquee-item-quantity': childrenCount,
          '--marquee-item-width': width,
        } as React.CSSProperties
      }
      className={cn(
        'pc-relative pc-me-auto pc-ms-auto pc-h-full',
        disabled
          ? 'pc-flex pc-overflow-x-scroll'
          : 'pc-w-full pc-overflow-hidden',
        className,
      )}
    >
      {Children.map(children, (child, childIndex) => {
        return (
          <li
            key={childIndex}
            style={
              {
                '--marquee-item-position': childIndex + 1,
                animationDuration: 'var(--marquee-duration)',
                animationDelay:
                  'calc(var(--marquee-duration) / var(--marquee-item-quantity) * (var(--marquee-item-quantity) - var(--marquee-item-position)) * -1)',
              } as React.CSSProperties
            }
            className={cn(
              'pc-h-full',
              disabled
                ? 'pc-min-w-[var(--marquee-item-width)]'
                : 'pc-absolute pc-left-[max(calc(var(--marquee-item-width)*var(--marquee-item-quantity)),100%)] pc-w-[var(--marquee-item-width)] pc-animate-[scroll-left] pc-ease-linear pc-repeat-infinite',
            )}
          >
            {child}
          </li>
        )
      })}
    </ul>
  )
}
