import { Fragment } from 'react/jsx-runtime'
import type {
  HowItWorks1Props,
  HowItWorksStepProps,
} from '../../types/template-types/how-it-works-1'
import { Divider } from '../common/divider'

import { cn } from '@hooore/utils'
import type { AdditionalPageRendererComponentProps } from '../types'

export function HowItWorksStep(
  props: HowItWorksStepProps & { number?: number },
) {
  const { headine, number, task } = props

  return (
    <div className="pc-flex pc-flex-col pc-gap-6 pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-gap-12 sm:pc-px-20 sm:pc-py-20">
      {number && (
        <span className="pc-w-full pc-flex-1 pc-text-h1 sm:pc-w-1/4 sm:pc-text-h1-sm">
          {number}
        </span>
      )}
      {headine && (
        <h2
          className={cn(
            'pc-text-balance pc-text-h2',
            task
              ? 'pc-w-full pc-flex-1 sm:pc-w-1/4'
              : 'pc-flex-2 pc-w-full sm:pc-w-3/4',
          )}
        >
          {headine}
        </h2>
      )}
      {task && (
        <div className="pc-flex-2 pc-grid pc-w-full pc-grid-cols-1 pc-gap-6 sm:pc-w-2/4 sm:pc-grid-cols-2 sm:pc-gap-12">
          {task.map((taskItem, taskTaskItem) => {
            return (
              <div key={taskTaskItem}>
                <h3 className="pc-mb-1 pc-text-balance pc-text-h4 pc-font-semibold sm:pc-mb-2 sm:pc-text-h4-sm">
                  {taskItem?.name}
                </h3>
                <p className="pc-text-p sm:pc-text-note">
                  {taskItem?.description}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export type HowItWorks1RendererProps = HowItWorks1Props &
  AdditionalPageRendererComponentProps

export function HowItWorks1(props: HowItWorks1RendererProps) {
  const { step } = props

  return step?.map((stepItem, stepItemIndex) => {
    return (
      <Fragment key={stepItemIndex}>
        <HowItWorksStep
          number={stepItemIndex + 1}
          headine={stepItem?.headine}
          task={stepItem?.task}
        />
        <Divider />
      </Fragment>
    )
  })
}
