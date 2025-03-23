import type { CallToAction2Slug } from '../../types/template-types/call-to-action-2'
import type { ComponentRenderer } from '../types'
import {
  CallToAction2,
  type CallToAction2RendererProps,
} from './call-to-action-2'

export const CALL_TO_ACTION_2_META: ComponentRenderer<
  CallToAction2Slug,
  CallToAction2RendererProps
> = {
  slug: 'call-to-action-2',
  component: CallToAction2,
}
