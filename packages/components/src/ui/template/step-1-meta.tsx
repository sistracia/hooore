import type { Step1Slug } from '../../types/template-types/step-1'
import type { ComponentRenderer } from '../types'
import { type Step1RendererProps, Step1 } from './step-1'

export const STEP_1_META: ComponentRenderer<Step1Slug, Step1RendererProps> = {
  slug: 'step-1',
  component: Step1,
}
