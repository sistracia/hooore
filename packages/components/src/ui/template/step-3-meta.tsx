import type { Step3Slug } from '../../types/template-types/step-3'
import type { ComponentRenderer } from '../types'
import { type Step3RendererProps, Step3 } from './step-3'

export const STEP_3_META: ComponentRenderer<Step3Slug, Step3RendererProps> = {
  slug: 'step-3',
  component: Step3,
}
