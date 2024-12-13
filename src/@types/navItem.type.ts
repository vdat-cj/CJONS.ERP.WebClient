import { Icons } from '@/components/icons'

type SubMenuItem = {
  key: string
  title: string
  url: string
}

type MenuItem = {
  key: string
  icon: keyof typeof Icons
  title: string
  subMenu: SubMenuItem[]
}

export type NavItem = {
  label: string
  menu: MenuItem[]
}
