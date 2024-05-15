import { ImageModel } from './image.model'

export interface RouteDataModel {
  background: ImageModel[]
  bgDarkness?: string | number
  logo?: ImageModel
  title: string
}

export interface RouteModel {
  path: string
  component: any
  data: RouteDataModel
}
