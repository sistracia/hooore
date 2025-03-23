export type Content2Slug = 'content-2'

export type Content2LolProps = {
  sss?: string
}

export type Content2ItemProps = {
  headline?: string
  description?: string
  lols?: (Content2LolProps | undefined)[]
}

export type Content2Props = {
  headline?: string
  contents?: (Content2ItemProps | undefined)[]
}
