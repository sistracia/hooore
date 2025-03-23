export type Navbar1Slug = 'navbar-1'

export type NavbarSubItemProps = {
  label?: string
  link?: string
}

export type NavbarItemProps = {
  label?: string
  link?: string
  sub_link?: (NavbarSubItemProps | undefined)[]
}

export type Navbar1Props = {
  link?: (NavbarItemProps | undefined)[]
}
