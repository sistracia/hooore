import type { CallToAction4Slug } from '../../types/template-types/call-to-action-4'
import type { ComponentRenderer } from '../types'
import {
  CallToAction4,
  type CallToAction4RendererProps,
} from './call-to-action-4'

export const CALL_TO_ACTION_4_META: ComponentRenderer<
  CallToAction4Slug,
  CallToAction4RendererProps
> = {
  slug: 'call-to-action-4',
  component: CallToAction4,
}
