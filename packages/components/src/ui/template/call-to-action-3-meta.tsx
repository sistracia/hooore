import type { CallToAction3Slug } from '../../types/template-types/call-to-action-3'
import type { ComponentRenderer } from '../types'
import {
  CallToAction3,
  type CallToAction3RendererProps,
} from './call-to-action-3'

export const CALL_TO_ACTION_3_META: ComponentRenderer<
  CallToAction3Slug,
  CallToAction3RendererProps
> = {
  slug: 'call-to-action-3',
  component: CallToAction3,
}
