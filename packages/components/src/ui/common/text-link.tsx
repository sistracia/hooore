import { cn } from '@hooore/utils'

function extractHref(word?: string) {
  if (word?.startsWith('[href=')) {
    const [link, textLink] = word.replace('[href=', '').split('](')
    return [link, textLink?.replace(')', '')]
  }

  return []
}

export function TextLink<T extends React.ElementType = 'a'>(
  props: { as?: T; children?: string; autoConvert?: boolean } & Omit<
    React.ComponentPropsWithoutRef<T>,
    'children'
  >,
) {
  const {
    as: Comp = 'a',
    className,
    children,
    autoConvert = false,
    href,
    ...restProps
  } = props

  const [link, textLink] = autoConvert ? extractHref(children) : []
  const hrefLink = autoConvert ? link : href

  if (!hrefLink) {
    return children
  }

  return (
    <Comp
      className={cn('pc-underline pc-underline-offset-4', className)}
      href={hrefLink}
      {...restProps}
    >
      {autoConvert ? textLink : children}
    </Comp>
  )
}
