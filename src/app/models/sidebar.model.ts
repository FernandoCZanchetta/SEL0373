export interface SidebarItemModel {
  title: string
  icon: string
  route: string
  collapsed: boolean
  subitems?: {
    title: string
    id: string
  }[]
}
