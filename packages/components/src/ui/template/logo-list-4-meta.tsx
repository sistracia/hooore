import type { LogoList4Slug } from '../../types/template-types/logo-list-4'
import type { ComponentRenderer } from '../types'
import { type LogoList4RendererProps, LogoList4 } from './logo-list-4'

export const LOGO_LIST_4_META: ComponentRenderer<
  LogoList4Slug,
  LogoList4RendererProps
> = {
  slug: 'logo-list-4',
  component: LogoList4,
}
