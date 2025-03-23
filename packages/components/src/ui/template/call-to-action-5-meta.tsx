import type { CallToAction5Slug } from '../../types/template-types/call-to-action-5'
import type { ComponentRenderer } from '../types'
import {
  CallToAction5,
  type CallToAction5RendererProps,
} from './call-to-action-5'

export const CALL_TO_ACTION_5_META: ComponentRenderer<
  CallToAction5Slug,
  CallToAction5RendererProps
> = {
  slug: 'call-to-action-5',
  component: CallToAction5,
}
