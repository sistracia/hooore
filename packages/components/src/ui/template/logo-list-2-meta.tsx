import type { LogoList2Slug } from '../../types/template-types/logo-list-2'
import type { ComponentRenderer } from '../types'
import { type LogoList2RendererProps, LogoList2 } from './logo-list-2'

export const LOGO_LIST_2_META: ComponentRenderer<
  LogoList2Slug,
  LogoList2RendererProps
> = {
  slug: 'logo-list-2',
  component: LogoList2,
}
