import type { CallToAction1Slug } from '../../types/template-types/call-to-action-1'
import type { ComponentRenderer } from '../types'
import {
  CallToAction1,
  type CallToAction1RendererProps,
} from './call-to-action-1'

export const CALL_TO_ACTION_1_META: ComponentRenderer<
  CallToAction1Slug,
  CallToAction1RendererProps
> = {
  slug: 'call-to-action-1',
  component: CallToAction1,
}
