import type { PageContent } from '../types/page-content'
import { COMPONENTS } from './page-renderer-components'
import type { PageRendererComponentProps } from './types'

export function PageRendererComponent(props: PageRendererComponentProps) {
  const componentObject = COMPONENTS.find((component) => {
    return component.slug === props.slug
  })

  if (!componentObject) {
    return null
  }

  const Component = componentObject.component

  return (
    <Component
      {...props.component}
      disableAnimation={props.disableAnimation}
      disableLink={props.disableLink}
      projectLogo={props.projectLogo}
    />
  )
}

export type PageRendererProps = {
  contents: PageContent[]
  disableLink?: boolean
  projectLogo?: string
}

export function PageRenderer({
  contents,
  disableLink = false,
  projectLogo,
}: PageRendererProps) {
  return contents.map((content) => {
    return (
      <PageRendererComponent
        {...content}
        key={content.id}
        disableLink={disableLink}
        projectLogo={projectLogo}
      />
    )
  })
}
