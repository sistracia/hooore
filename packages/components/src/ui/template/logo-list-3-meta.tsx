import type { LogoList3Slug } from '../../types/template-types/logo-list-3'
import type { ComponentRenderer } from '../types'
import { type LogoList3RendererProps, LogoList3 } from './logo-list-3'

export const LOGO_LIST_3_META: ComponentRenderer<
  LogoList3Slug,
  LogoList3RendererProps
> = {
  slug: 'logo-list-3',
  component: LogoList3,
}
