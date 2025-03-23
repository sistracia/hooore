import type { LogoList1Slug } from '../../types/template-types/logo-list-1'
import type { ComponentRenderer } from '../types'
import { type LogoList1RendererProps, LogoList1 } from './logo-list-1'

export const LOGO_LIST_1_META: ComponentRenderer<
  LogoList1Slug,
  LogoList1RendererProps
> = {
  slug: 'logo-list-1',
  component: LogoList1,
}
