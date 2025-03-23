import type {
  FeatureItem1Props,
  FeaturesList1Props,
} from '../../types/template-types/features-list-1'

import { cn } from '@hooore/utils'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { Button } from '../common/button'
import { Chip } from '../common/chip'
import type { AdditionalPageRendererComponentProps } from '../types'

export function FeatureItem(
  props: FeatureItem1Props & {
    className?: string
    direction?: 'vertical' | 'horizontal'
    footer?: React.ReactNode
  },
) {
  const {
    description,
    features,
    headline,
    image,
    className,
    direction,
    footer,
  } = props
  const isVertical = direction === 'vertical'
  const isHorizontal = direction === 'horizontal'

  return (
    <div
      className={cn(
        'pc-flex pc-w-full pc-rounded-lg',
        isVertical && 'pc-flex-col',
        isHorizontal && 'pc-flex-col sm:pc-flex-row',
        className,
      )}
    >
      {image && (
        <div className="pc-flex pc-justify-center pc-bg-[rgba(2,12,13,0.2)]">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            src={image}
            loading="lazy"
            className={cn(
              'pc-flex pc-aspect-square pc-h-auto pc-items-center pc-justify-center',
              isHorizontal && 'pc-h-80 pc-max-w-80 sm:pc-h-72 sm:pc-max-w-72',
            )}
          />
        </div>
      )}
      <div
        className={cn(
          'pc-flex pc-h-full pc-w-full pc-flex-col pc-gap-4',
          isVertical && 'pc-p-6',
          isHorizontal && 'sm:pc-pl-12',
        )}
      >
        <div className="pc-flex pc-flex-1 pc-flex-col pc-gap-4">
          {headline && (
            <h3 className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
              {headline}
            </h3>
          )}
          {description && (
            <p className="pc-text-balance pc-text-center pc-text-p sm:pc-text-start sm:pc-text-p-sm">
              {description}
            </p>
          )}
          {features && (
            <table
              className={cn(
                'pc-border-separate pc-border-spacing-2',
                isHorizontal && 'pc-text-h4 sm:pc-text-h2',
                isVertical && 'pc-text-h4',
              )}
            >
              <tbody>
                {features.map((item, itemIndex) => {
                  return (
                    <tr key={itemIndex}>
                      <td className="pc-w-[24px]">
                        <CheckCircledIcon width={24} height={24} />
                      </td>
                      <td>{item?.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
        {footer}
      </div>
    </div>
  )
}

export type FeaturesList1RendererProps = FeaturesList1Props &
  AdditionalPageRendererComponentProps

export function FeaturesList1(props: FeaturesList1RendererProps) {
  const { tag, headline, description, features, disableLink = false } = props

  return (
    <section className="pc-flex pc-flex-col pc-gap-10 pc-px-4 pc-py-10 sm:pc-px-20 sm:pc-py-20">
      {(tag || headline || description) && (
        <div className="pc-flex pc-flex-col pc-gap-6">
          {tag && (
            <div className="pc-flex pc-justify-center pc-gap-1 sm:pc-justify-start">
              <Chip>{tag}</Chip>
            </div>
          )}
          {headline && (
            <h2 className="pc-text-balance pc-text-center pc-text-h1 sm:pc-text-start sm:pc-text-h1-sm">
              {headline}
            </h2>
          )}
          {description && (
            <p className="pc-text-balance pc-text-center pc-text-h3 sm:pc-text-start sm:pc-text-h3-sm">
              {description}
            </p>
          )}
        </div>
      )}
      {features && (
        <div className="pc-flex pc-flex-col pc-gap-6 sm:pc-flex-row sm:pc-gap-12">
          {features.map((feature, featureIndex) => {
            return (
              <FeatureItem
                key={featureIndex}
                {...feature}
                className="pc-flex-1 pc-border"
                direction="vertical"
                footer={
                  feature?.cta_button_label && (
                    <Button
                      asChild
                      variant="outline"
                      className="pc-justify-center sm:pc-w-fit"
                    >
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={disableLink ? undefined : feature.cta_link}
                      >
                        {feature.cta_button_label}
                      </a>
                    </Button>
                  )
                }
              />
            )
          })}
        </div>
      )}
    </section>
  )
}
