import type { CallToAction6Slug } from '../../types/template-types/call-to-action-6'
import type { ComponentRenderer } from '../types'
import {
  CallToAction6,
  type CallToAction6RendererProps,
} from './call-to-action-6'

export const CALL_TO_ACTION_6_META: ComponentRenderer<
  CallToAction6Slug,
  CallToAction6RendererProps
> = {
  slug: 'call-to-action-6',
  component: CallToAction6,
}
