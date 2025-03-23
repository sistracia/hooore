import type { Navbar1Slug } from '../../types/template-types/navbar-1'
import type { ComponentRenderer } from '../types'
import { Navbar1, type Navbar1RendererProps } from './navbar-1'

export const NAVBAR_1_META: ComponentRenderer<
  Navbar1Slug,
  Navbar1RendererProps
> = {
  slug: 'navbar-1',
  component: Navbar1,
}
