import { TextLink } from './text-link'
import { Fragment } from 'react'

export type AutoLinkSentenceProps = {
  children?: string
  className?: string
}

export function AutoLinkSentence({
  children,
  className,
}: AutoLinkSentenceProps) {
  return children?.split(' ').map((word, wordIndex) => {
    return (
      <Fragment key={wordIndex}>
        <TextLink autoConvert className={className}>
          {word}
        </TextLink>{' '}
      </Fragment>
    )
  })
}
