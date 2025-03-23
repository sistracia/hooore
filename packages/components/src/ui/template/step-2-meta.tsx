import type { Step2Slug } from '../../types/template-types/step-2'
import type { ComponentRenderer } from '../types'
import { type Step2RendererProps, Step2 } from './step-2'

export const STEP_2_META: ComponentRenderer<Step2Slug, Step2RendererProps> = {
  slug: 'step-2',
  component: Step2,
}
