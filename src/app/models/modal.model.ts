import { ImageModel } from './image.model'

export interface ModalModel {
  image?: ImageModel
  text?: string
  title: string
  url?: string
}
